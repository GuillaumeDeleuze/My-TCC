import { UserExercise } from '../../../db/models';

const userExerciseMutations = {
  createUserExercise: async (_, { userExercise }) => {
    console.log('create userExercice', userExercise);
    const newUserExercise = new UserExercise(userExercise);

    console.log('newUserExercise', newUserExercise);

    return newUserExercise.save();
  },
  updateUserExercise: async (_, { id, userExercise }) => {
    const updateUserExercise = await UserExercise.findByIdAndUpdate(
      id,
      {
        $set: { ...userExercise },
      },

      { new: true },
    );

    return updateUserExercise;
  },
};

export default userExerciseMutations;
