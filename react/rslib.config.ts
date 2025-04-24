import { pluginReact } from "@rsbuild/plugin-react";
import { defineConfig } from "@rslib/core";

export default defineConfig({
  lib: [
    {
      format: "esm",
      bundle: false,
      syntax: "es6",
      dts: true,
    },
  ],
  source: {
    entry: {
      index: ["./src/**"],
    },
  },
  output: {
    target: "web",
  },
  plugins: [pluginReact()],
});
