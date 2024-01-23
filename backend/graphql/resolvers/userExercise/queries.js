/* eslint-disable no-unused-vars */
import { UserExercise } from '../../../db/models';

const userExerciseQueries = {
  userExercises: async (_, { params = { page: 1, pageSize: 20 } }, { loaders }) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        console.log('Fetching user exercises');
        const userExercises = await UserExercise.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize)
          .populate('entries');

        console.log('Fetched user exercises:', userExercises);
        return loaders.userExercise.many(userExercises.map(({ id }) => id));
      },
      info: async () => {
        const count = await UserExercise.countDocuments();

        const pages = Math.ceil(count / pageSize);
        const prev = page > 1 ? page - 1 : null;
        const next = page < pages ? page + 1 : null;

        return {
          count,
          pages,
          prev,
          next,
        };
      },
    };
  },
  userExercise: async (_, { id }, { loaders }) => loaders.userExercise.one(id),
};

export default userExerciseQueries;
