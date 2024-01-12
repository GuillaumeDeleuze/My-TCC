import { Exercise, Favorite } from '../../../db/models';

const userFields = {
  User: {
    exercises: async (user) => {
      const favorites = await Favorite.find({ user: user.id });

      const exercises = await Exercise.find({
        _id: { $in: favorites.map(({ exercise }) => exercise) },
      });

      return exercises;
    },
  },
};

export default userFields;
