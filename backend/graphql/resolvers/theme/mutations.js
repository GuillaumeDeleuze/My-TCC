import { Theme } from '../../../db/models';

const themeMutations = {
  createTheme: async (_, { theme }) => {
    const newTheme = new Theme(theme);

    return newTheme.save();
  },
  updateTheme: async (_, { id, theme }) => {
    const updateTheme = await Theme.findByIdAndUpdate(
      id,
      {
        $set: { ...theme },
      },

      { new: true },
    );

    return updateTheme;
  },
};

export default themeMutations;
