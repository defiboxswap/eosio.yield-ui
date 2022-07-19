var webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
let proxyEnv = {
  "/v1/": {
    target: `http://${process.env.VUE_APP_BASEURL}:${process.env.VUE_APP_PORT29}`,
    // target: 'https://defibox.io',
    ws: false,
    changeOrigin: true,
  },
};


module.exports = {
  // config
  devServer: {
    open: true,
    // port: process.env.SERVER_PORT,
    port: 7002,
    hot: true,
    proxy: proxyEnv
  },
  css: {
    extract: false,
    sourceMap: false,
    requireModuleExtension: true, // modules for all css / pre-processor files.
    loaderOptions: {
      sass: {}
    }
  },

  chainWebpack(config) {
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugin('VuetifyLoaderPlugin').tap(() => [
      {
        match(originalTag, { kebabTag, camelTag }) {
          if (kebabTag.startsWith('base-')) {
            return [camelTag, `import ${camelTag} from '@/components/base/${camelTag}.vue'`];
          } else if (kebabTag.startsWith('a-')) {
            return [camelTag, `import ${camelTag} from './components/${camelTag}.vue'`];
          } else if (kebabTag.startsWith('b-')) {
            return [camelTag, `import ${camelTag} from './${camelTag}.vue'`];
          } else if (kebabTag.startsWith('c-')) {
            return [camelTag, `import ${camelTag} from './${camelTag}.vue'`];
          }
        }
      }
    ]);
    if (process.env.use_analyzer) {
      config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }

  },
  configureWebpack: (config) => {


    if (isProduction) {
      // config.plugins.push(new VuetifyLoaderPlugin())
      config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/, /en/));

      config.performance = {
        hints: 'warning',
        maxEntrypointSize: 50000000,
        maxAssetSize: 30000000,
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js');
        }
      };
    }
  },
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  productionSourceMap: false,

  pluginOptions: {
    // ...
  }
};
