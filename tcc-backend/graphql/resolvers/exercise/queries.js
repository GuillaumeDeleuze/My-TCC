/* eslint-disable no-unused-vars */
import { Exercise } from '../../../db/models';

const exerciseQueries = {
  exercises: async (_, { params = { page: 1, pageSize: 20 } }, { loaders }) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const exercises = await Exercise.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.exercise.many(exercises.map(({ id }) => id));
      },
      info: async () => {
        const count = await Exercise.countDocuments();

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
  exercise: async (_, { id }, { loaders }) => loaders.exercise.one(id),
};

export default exerciseQueries;
