import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [
    {
      format: 'esm',
      syntax: 'es2021',
      output: {
        distPath: {
          root: './dist/es',
        },
      },
      dts: {
        distPath: './dist/types',
      },
    },
    {
      format: 'cjs',
      syntax: 'es2021',
      output: {
        distPath: {
          root: './dist/lib',
        }
      },
    },
  ],
});
