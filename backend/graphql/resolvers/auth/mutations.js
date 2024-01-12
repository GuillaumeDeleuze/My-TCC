import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from '../../../db/models';

const JWTKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxLS9tSjVsVTNYc09QWCt2VitpaGZRMWlCUDVjUTROQm1hNDluOE9rS1FFSnEzTDFNOTl2VW9iQ1ZLUHVYMmdlWWhYaHJQM0t3bHY4SE1RaHNGdnFjbllIeGxGSHM9IiwiaXNzIjoicGxheS1zaWxob3VldHRlIiwiZXhwIjoxNTI2MjgxMDU1LCJpYXQiOjE1MjYyMzc4NTUsImp0aSI6IjhmOGM3YTVmYWRkNTE5MjUxNzQ5NGE4N2Q1ODcxZjJjZGUxZDkzMDdkOTY1MThjNjg2NzExOTc1YjU3M2I5NDBlZWU2NGY0NDUwYzcxODI3NGZmNzU1MmE2Y2JlNTVmZmZhMWI1ZjA3ZWZlOWVkNTE0Y2Y4YTViOTZlM2ExYjI0ODRmYTI5NjZiYjA0ODlmODIwZjMyMzM5YWVhNjM3NWRkZmU4ZDE4N2E2NzBjMzg0ODgwZGIyMzQ1ZTFkMzRkYWNjZmY2MTdkMDY1NzU3YmEwZTQzNDg4YWFhZmZmNDNjYWZlZGY0OTFlODU1YTA0NWM0NmJjNDY4NGYzODlmY2YifQ.GwN6TSNd426xpc3Y02eRXHbrmSr_61MMBqrmx66Ofqs';

const generateToken = (user) => jwt.sign({ userId: user.id }, JWTKey, { expiresIn: '1000h' });

const authMutations = {
  signup: async (_, { user: { email, password, name } }) => {
    console.log('Début de la fonction signup');
    try {
      console.log('password', password);
      console.log('email', email);
      // Votre logique pour créer un nouvel utilisateur
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, password: hashedPassword, name });
      const savedUser = await newUser.save();

      // Générez le token JWT pour l'utilisateur nouvellement créé
      const token = generateToken(savedUser);
      console.log('Fin de la fonction signup, utilisateur inscrit avec succès');
      return { token, user: savedUser };
    } catch (error) {
      // Gérer les erreurs, par exemple, si l'utilisateur existe déjà
      console.error('Erreur lors de l\'inscription :', error);
      throw new Error('Erreur lors de l\'inscription');
    }
  },

  login: async (_, { email, password }) => {
    // Votre logique pour vérifier l'authentification de l'utilisateur
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('User not found');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error('Invalid password');
    }

    // Générez le token JWT pour l'utilisateur authentifié
    const token = generateToken(user);

    return { token, user };
  },
};

export default authMutations;
