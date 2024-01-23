/* eslint-disable no-unused-vars */
import { User } from '../../../db/models';

const userQueries = {
  users: async (_, { params = { page: 1, pageSize: 20 } }, { loaders }) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const users = await User.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.user.many(users.map(({ id }) => id));
      },
      info: async () => {
        const count = await User.countDocuments();

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
  user: async (_, { id }, { loaders }) => {
    console.log('Fetching user with exercises for ID:', id);
    const userWithExercises = await User.findById(id).populate('userExercises');
    console.log('Fetched user with exercises:', userWithExercises);
    return userWithExercises;
  },

//  userMail: async (_, { email }) => {
//    const userMail = await User.findOne({ email });
//
//    return userMail;
//  },
};

export default userQueries;
