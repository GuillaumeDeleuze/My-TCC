/* eslint-disable no-unused-vars */
import { Theme } from '../../../db/models';

const themeQueries = {
  themes: async (_, { params = { page: 1, pageSize: 20 } }, { loaders }) => {
    const { pageSize, page } = params;

    return {
      results: async () => {
        const themes = await Theme.find()
          .skip(pageSize * (page - 1))
          .limit(pageSize);

        return loaders.theme.many(themes.map(({ id }) => id));
      },
      info: async () => {
        const count = await Theme.countDocuments();

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
  theme: async (_, { id }, { loaders }) => loaders.theme.one(id),
};

export default themeQueries;
