import { Exercise, Favorite } from '../../../db/models';

const exerciseMutations = {
  createExercise: async (_, { exercise }) => {
    const newExercise = new Exercise(exercise);

    return newExercise.save();
  },
  updateExercise: async (_, { id, exercise }) => {
    const updateExercise = await Exercise.findByIdAndUpdate(
      id,
      {
        $set: { ...exercise },
      },

      { new: true },
    );

    return updateExercise;
  },
  addExerciseToUser: async (_, { id, user }) => {
    const exercise = await Exercise.findById(id);

    if (exercise) {
      const newFavorite = new Favorite({ user, exercise: id });
      await newFavorite.save();
    }

    return exercise;
  },
};

export default exerciseMutations;
