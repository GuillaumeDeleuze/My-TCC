import { Theme } from '../../../db/models';

const exerciseFields = {
  Exercise: {
    theme: async (exercise) => {
      const theme = await Theme.findById(exercise.theme);

      return theme;
    },
  },
};

export default exerciseFields;
