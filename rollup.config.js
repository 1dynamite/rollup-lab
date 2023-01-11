import html from "@rollup/plugin-html";
import scss from "rollup-plugin-scss";
import image from "@rollup/plugin-image";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
    plugins: [terser()],
  },
  plugins: [
    typescript(),
    scss({
      fileName: "bundle.css",
      sourceMap: true,
      outputStyle: "compressed",
    }),
    html(),
    image(),
  ],
};
