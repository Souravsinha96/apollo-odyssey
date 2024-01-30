import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/schema.ts',
  generates: {
    './src/types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: './src/context#DataSourceContext',
        mappers: {
          Track: './src/models#TrackModel',
          Author: './models#AuthorModel',
        },
      },
    },
  },
};

export default config;
