import { AuthenticationError } from 'apollo-server-express';

const authQueries = {
  me: async (_, __, { user }) => {
    // Vérifiez si l'utilisateur est authentifié
    if (!user) {
      throw new AuthenticationError('User not authenticated');
    }

    // Renvoie les informations sur l'utilisateur actuellement authentifié
    return user;
  },
};

export default authQueries;
