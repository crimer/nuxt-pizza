// плагины для сжатия картинок для webpack
const imageminMozjpeg = require("imagemin-mozjpeg");
const ImageminPlugin = require("imagemin-webpack-plugin").default;

const isDev = process.env.NODE_ENV !== "production";

export default {
  mode: isDev ? "spa" : "universal",
  ...(!isDev && {
    modern: "client"
  }),
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "ru"
    },
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "Интернет-магазин пиццы"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  // что считаем корнем проекта при использовании абсолютных путей импорта
  rootDir: __dirname,
  // отключаем подгрузку страницы когда ссылка на нее появляется в зоне видимости пользователя
  router: {
    prefetchLinks: false
  },
  /*
   ** Customize the progress-bar color
   */
  loading: '~/components/PageLoader.vue',
  /*
   ** Global CSS
   */
  css: ["normalize.css/normalize.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  // auto import global styles in all components
  styleResources: {
    scss: ["./assets/scss/global-vars.scss","./assets/scss/root.scss"]
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/dotenv",
    "@nuxtjs/style-resources",
    "nuxt-webfontloader"
  ],
  webfontloader: {
    events: false,
    google: {
      families: ["Montserrat:400,500,600:cyrillic&display=swap"]
    },
    timeout: 5000
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => (isDev ? "[name].js" : "js/[contenthash].js"),
      chunk: ({ isDev }) => (isDev ? "[name].js" : "js/[contenthash].js"),
      css: ({ isDev }) => (isDev ? "[name].css" : "css/[contenthash].css"),
      img: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "img/[contenthash:7].[ext]",
      font: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "fonts/[contenthash:7].[ext]",
      video: ({ isDev }) =>
        isDev ? "[path][name].[ext]" : "videos/[contenthash:7].[ext]"
    },
    // disable all minification for development
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    // Разбиваем на независимые чанки всё приложение
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    // Отключаем минификацию js для development.
    optimization: {
      minimize: !isDev
    },
    // для development мы включаем inline styles, а в production разбиваем их на чанки для каждого компонента и создаем отдельные файлы
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true
      }
    }),
    // настройка postcss из коробки
    postcss: {
      plugins: {
        ...(!isDev && {
          cssnano: {
            preset: [
              "advanced",
              {
                autoprefixer: false,
                cssDeclarationSorter: false,
                zindex: false,
                discardComments: {
                  removeAll: true
                }
              }
            ]
          }
        })
      },
      ...(!isDev && {
        preset: {
          browsers: "cover 99.5%",
          autoprefixer: true
        }
      }),

      order: "cssnanoLast"
    },
    extend(config, ctx) {
      const ORIGINAL_TEST = "/\\.(png|jpe?g|gif|svg|webp)$/i";
      const vueSvgLoader = [
        {
          loader: "vue-svg-loader",
          options: {
            svgo: false
          }
        }
      ];
      const imageMinPlugin = new ImageminPlugin({
        pngquant: {
          quality: "5-30",
          speed: 7,
          strip: true
        },
        jpegtran: {
          progressive: true
        },
        gifsicle: {
          interlaced: true
        },
        plugins: [
          imageminMozjpeg({
            quality: 70,
            progressive: true
          })
        ]
      });
      if (!ctx.isDev) config.plugins.push(imageMinPlugin);

      config.module.rules.forEach(rule => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i;
          rule.use = [
            {
              loader: "url-loader",
              options: {
                limit: 1000,
                name: ctx.isDev
                  ? "[path][name].[ext]"
                  : "img/[contenthash:7].[ext]"
              }
            }
          ];
        }
      });
      //  Create the custom SVG rule
      const svgRule = {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: vueSvgLoader
          },
          {
            resourceQuery: /data/,
            loader: "url-loader"
          },
          {
            resourceQuery: /raw/,
            loader: "raw-loader"
          },
          {
            loader: "file-loader" // By default, always use file-loader
          }
        ]
      };

      config.module.rules.push(svgRule); // Actually add the rule
    }
  }
};
