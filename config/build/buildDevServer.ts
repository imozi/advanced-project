import { IBuildOptions } from "./types";
import { Configuration } from "webpack-dev-server";

export const buildDevServer = ({ port }: IBuildOptions): Configuration => {
  return {
    port,
    open: true,
    historyApiFallback: true,
  };
};
