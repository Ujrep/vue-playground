const ExtractTextPlugin = require('extract-text-webpack-plugin');

const BASE_DIR = __dirname + '/app';
const EXCLUDE = /node_modules/;

function isProduction() {
  if (process.env.NODE_ENV === 'production') {
    return true;
  }
  return false;
}

const fileNamesMap = {
  development: {
    js: '[name].js',
    css: 'css/[name].css',
    other: '[path][name].[ext]'
  },

  production: {
    js: '[name]-[hash].js',
    css: 'css/[name]-[hash].css',
    other: '[path][name]-[sha512:hash:base64:10].[ext]'
  }
};

const fileNames = isProduction() ? fileNamesMap.production : fileNamesMap.development;

const extractCSS = new ExtractTextPlugin(fileNames.css);

module.exports = {
  context: BASE_DIR,

  resolve: { root: BASE_DIR },

  entry: 'main.js',

  output: {
    path: __dirname + '/dist/',
    filename: fileNames.js,
    publicPath: '/dist/'
  },

  module: {
    loaders: (() => {
      const list = [];

      list.push([
        { test: /\.js$/, loader: 'babel', exclude: EXCLUDE },
        { test: /\.vue$/, loader: 'vue' },
        { test: /\.(otf|woff(2))$/,
          loader: 'url-loader?limit=1024',
          exlude: EXCLUDE
        }
      ]);
      if (isProduction()) {
        list.push([
          { test: /\.(png|jpg)$/,
            loader: 'url-loader?name=images/[name].[ext]&limit=1024',
            exlude: EXCLUDE
          },
          { test: /\.scss$/, loader: extractCSS.extract(['css', 'sass']) }
        ]);
      } else {
        list.push([
          { test: /\.(png|jpg)$/, loader: 'url?limit=8192' },
          { test: /\.scss$/, loader: 'style!css!autoprefixer?{browsers:["last 2 version"]}!sass', exclude: EXCLUDE }
        ]);
      }
      return list;
    })()
  },

  plugins: (() => {
    const list = [];

    if (isProduction()) {
      list.push(extractCSS);
    }

    return list;
  })(),

  devtool: isProduction() ? '' : '#source-map',

  babel: {
    presets: ['es2015', 'stage-1'],
    plugins: ['transform-runtime']
  },

  vue: {
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    loaders: {
      scss: isProduction() ? extractCSS.extract(['css', 'sass']) : 'style!css!sass'
    }
  },

  devServer: {
    port: 3000,
    colors: true,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};
