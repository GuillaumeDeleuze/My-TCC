import { exerciseQueries, exerciseMutations, exerciseFields } from './exercise';
import { themeQueries, themeMutations, themeFields } from './theme';
import { userQueries, userMutations, userFields } from './user';
import { authQueries, authMutations } from './auth';
import { userExerciseQueries, userExerciseMutations } from './userExercise';

const resolvers = {
  Query: {
    ...exerciseQueries,
    ...themeQueries,
    ...userQueries,
    ...authQueries,
    ...userExerciseQueries,
  },
  Mutation: {
    ...exerciseMutations,
    ...themeMutations,
    ...userMutations,
    ...authMutations,
    ...userExerciseMutations,
  },
  ...exerciseFields,
  ...themeFields,
  ...userFields,
};

export default resolvers;
