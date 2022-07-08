var webpack = require('webpack'); // 引入webpack库
const isProduction = process.env.NODE_ENV === 'production';
// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
let proxyEnv = {
  "/api/v1/": {
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
    extract: false, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps
    requireModuleExtension: true, // 启用 CSS modules for all css / pre-processor files.
    loaderOptions: {
      sass: {}
    }
  },

  chainWebpack(config) {
    // 移除 preload 插件
    config.plugins.delete('preload');
    // 移除 prefetch 插件
    config.plugins.delete('prefetch');
    //config.plugins.delete('preload-${name}')//可配置移除预加载的页面。eg:login.html则添加config.plugins.delete('preload-login'),
    config.plugin('VuetifyLoaderPlugin').tap(() => [
      {
        /**
         * 将为每个vue组件中使用的每个标记调用此函数
         * 它应该返回一个数组，第一个元素将被插入到组件数组中，第二个元素应该是相应的导入
         *
         * originalTag - 最初在模板中使用的标记
         * kebabTag    - 标签序列化为kebab-case
         * camelTag    - 标签序列化为PascalCase
         * path        - 指向到当前 .vue 文件的相对路径
         * component   - 表示解析后的当前组件
         */
        match(originalTag, { kebabTag, camelTag }) {
          if (kebabTag.startsWith('base-')) {
            // 公共组件
            return [camelTag, `import ${camelTag} from '@/components/base/${camelTag}.vue'`];
          } else if (kebabTag.startsWith('a-')) {
            // 页面组件
            return [camelTag, `import ${camelTag} from './components/${camelTag}.vue'`];
          } else if (kebabTag.startsWith('b-')) {
            // 子组件
            return [camelTag, `import ${camelTag} from './${camelTag}.vue'`];
          } else if (kebabTag.startsWith('c-')) {
            // 子组件
            return [camelTag, `import ${camelTag} from './${camelTag}.vue'`];
          }
        }
      }
    ]);
    if (process.env.use_analyzer) { // 分析
      config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }

  },
  configureWebpack: (config) => {
    
    
    if (isProduction) {
      // config.plugins.push(new VuetifyLoaderPlugin())
      config.plugins.push(new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/, /en/));

      // 取消webpack警告的性能提示
      config.performance = {
        hints: 'warning',
        //入口起点的最大体积
        maxEntrypointSize: 50000000,
        //生成文件的最大体积
        maxAssetSize: 30000000,
        //只给出 js 文件的性能提示
        assetFilter: function (assetFilename) {
          return assetFilename.endsWith('.js');
        }
      };
    }
  },
  // 资源文件目录
  publicPath: '/',
  // 将构建好的文件输出到位置
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  indexPath: 'index.html',
  // 是否为生产环境构建生成 source map？
  productionSourceMap: false,

  // 三方插件的选项
  pluginOptions: {
    // ...
  }
};
