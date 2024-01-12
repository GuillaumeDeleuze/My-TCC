import { exerciseQueries, exerciseMutations, exerciseFields } from './exercise';
import { themeQueries, themeMutations, themeFields } from './theme';
import { userQueries, userMutations, userFields } from './user';
import { authQueries, authMutations } from './auth';

const resolvers = {
  Query: {
    ...exerciseQueries,
    ...themeQueries,
    ...userQueries,
    ...authQueries,
  },
  Mutation: {
    ...exerciseMutations,
    ...themeMutations,
    ...userMutations,
    ...authMutations,
  },
  ...exerciseFields,
  ...themeFields,
  ...userFields,
};

export default resolvers;
