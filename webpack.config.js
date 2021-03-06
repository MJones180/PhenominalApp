const autoprefixer = require('autoprefixer');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssClean = require('postcss-clean');
const postcssColorFunction = require('postcss-color-function');
const postcssFunctions = require('postcss-functions');
const postcssGlobalImport = require('postcss-global-import');
const postcssMixins = require('postcss-mixins');
const postcssNested = require('postcss-nested');
const postcssSimpleVars = require('postcss-simple-vars');
const webpack = require('webpack');

module.exports = (env = {}, { mode }) => {
  const __PROD__ = mode == 'production'; // Execute in production mode
  const __DEV__ = !__PROD__; // Default - Execute in dev mode

  const paths = {
    root: (path = '') => `${__dirname}/${path}`,
    src: (path = '') => `${__dirname}/src/${path}`,
  };

  // =======================
  // Rules
  // =======================

  const rules = [
    // JS
    {
      exclude: /node_modules/,
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-syntax-dynamic-import',
            '@babel/plugin-transform-runtime',
            'babel-plugin-lodash',
          ],
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      }],
    },
    // CSS
    {
      test: /\.css$/,
      use: [
        __DEV__ ? 'style-loader' : MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            import: false,
            importLoaders: 1,
            localIdentName: '[local]--[hash:base64:5]',
            modules: true,
          },
        }, {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: [
              postcssGlobalImport(),
              postcssMixins({
                mixins: require(`${paths.src('styles/mixins')}`),
              }),
              postcssSimpleVars({
                variables: () => require(`${paths.src('styles/variables')}`),
              }),
              postcssFunctions({
                functions: require(`${paths.src('styles/functions')}`),
              }),
              postcssNested(),
              postcssColorFunction(),
              autoprefixer(),
              postcssClean(),
            ],
          },
        },
      ],
    },
    // Graphql
    {
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    },
  ];

  // =======================
  // Plugins
  // =======================

  const plugins = [
    new HtmlWebpackPlugin({
      desc: 'A platform to easily make donations of any amount to charity.',
      fbAppID: 702523006760063,
      inject: true,
      logo: 'https://picture-assets.s3.amazonaws.com/logos/meta.png',
      name: 'Phenominal',
      template: paths.src('index.html'),
      url: 'https://phenominal.fund',
    }),
    new webpack.DefinePlugin({
      __DEV__,
      __PROD__,
    }),
    new LodashModuleReplacementPlugin({
      collections: true,
      paths: true,
      shorthands: true,
    }),
    // Strip out "locale" from the moment.js library while keeping "en"
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new MiniCssExtractPlugin({
      filename: __DEV__ ? '[name].css' : 'assets/css/[name].[contenthash].css',
      chunkFilename: __DEV__ ? '[id].css' : 'assets/css/[id].[contenthash].css',
    }),
  ];

  // Development only plugins
  if (__DEV__) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }

  // Production only plugins
  if (__PROD__) {
    plugins.push(
      new FaviconsWebpackPlugin({
        background: require(`${paths.src('styles/variables')}`).darkAzure,
        emitStats: false,
        inject: true,
        logo: paths.root('favicon.png'),
        persistentCache: true,
        prefix: 'icons-[hash]/',
        statsFilename: 'iconstats-[hash].json',
        title: 'Phenominal',
      })
    );
  }

  // Open up the BundleAnalyzer in the browser
  if (env.analyzeBundle) {
    plugins.push(
      new BundleAnalyzerPlugin({
        analyzerPort: 7777,
      })
    );
  }

  // =======================
  // Generate Config
  // =======================

  const config = {
    devtool: __DEV__ ? 'eval-source-map' : false,
    entry: {
      main: [
        paths.src('main'),
      ],
    },
    module: {
      rules,
    },
    optimization: {
      moduleIds: 'hashed',
    },
    output: {
      chunkFilename: __DEV__ ? '[id].js' : 'assets/js/[id].[contenthash].js',
      filename: __DEV__ ? '[name].js' : 'assets/js/[name].[contenthash].js',
      path: paths.root('dist'),
      publicPath: '/',
    },
    plugins,
    resolve: {
      extensions: ['*', '.js', '.json'],
      modules: [
        paths.src(),
        'node_modules',
      ],
    },
  };

  // Enable the dev server
  if (__DEV__) {
    config.devServer = {
      contentBase: paths.src(),
      historyApiFallback: true,
      hot: true,
      https: true,
      lazy: false,
      port: 3000,
      publicPath: '/',
      stats: {
        assets: true,
        children: false,
        colors: true,
        errors: true,
        errorDetails: true,
        hash: false,
        modules: false,
        publicPath: false,
        timings: true,
        version: false,
        warnings: true,
      },
    };
  }

  // Return Config
  return config;
};
