/* eslint-disable no-underscore-dangle */
import { UserExercise } from '../../../db/models';

const userFields = {
  User: {
    userExercises: async (user) => {
      try {
        const userExercises = await UserExercise.find({ userId: user._id });
        return userExercises;
      } catch (error) {
        throw new Error('Erreur lors de la récupération des exercices associés à user', error);
      }
    },
  },
};

export default userFields;
