import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { IBuildOptions } from './types';
import { buildCssLoader } from './loaders';

export const buildLoaders = ({
  isDev,
}: IBuildOptions): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const scssloader = buildCssLoader(isDev)

  const svgLoader = {
    test: /\.svg$/i,
    use: ['@svgr/webpack'],
  };

  const imagesLoader = {
    test: /\.(png|jpg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'images/[name].[hash][ext]',
    },
  };

  const fontsLoader = {
    test: /\.(eot|woff|woff2|ttf)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'fonts/[name].[hash][ext]',
    },
  };

  return [fontsLoader, imagesLoader, svgLoader, typescriptLoader, scssloader];
};
