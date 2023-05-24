import { IBuildOptions } from "./types";
import { Configuration } from "webpack-dev-server";

export function buildDevServer({ port }: IBuildOptions): Configuration {
  return {
    port,
    open: true,
  };
}
