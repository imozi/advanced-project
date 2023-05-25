export type BuildOptions = "production" | "development";

export type BuildPaths = {
  entry: string;
  output: string;
  html: string;
  src: string;
};

export type BuildEnv = {
  mode: BuildOptions;
  port: number;
};

export interface IBuildOptions {
  mode: BuildOptions;
  paths: BuildPaths;
  port: number;
  isDev: boolean;
}
