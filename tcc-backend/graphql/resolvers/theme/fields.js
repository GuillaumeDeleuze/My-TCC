/* eslint-disable no-underscore-dangle */
import { Exercise } from '../../../db/models';

const themeFields = {
  Theme: {
    exercises: async (theme) => {
      try {
        const exercises = await Exercise.find({ theme: theme._id });
        return exercises;
      } catch (error) {
        throw new Error('Erreur lors de la récupération des exercices associés au thème', error);
      }
    },
  },
};

export default themeFields;
