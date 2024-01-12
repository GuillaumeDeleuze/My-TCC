import { exerciseQueries, exerciseMutations, exerciseFields } from './exercise';
import { themeQueries, themeMutations, themeFields } from './theme';
import { userQueries, userMutations, userFields } from './user';

const resolvers = {
  Query: {
    ...exerciseQueries,
    ...themeQueries,
    ...userQueries,
  },
  Mutation: {
    ...exerciseMutations,
    ...themeMutations,
    ...userMutations,
  },
  ...exerciseFields,
  ...themeFields,
  ...userFields,
};

export default resolvers;
