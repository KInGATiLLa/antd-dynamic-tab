import {build, serve} from 'esbuild';
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import {lessLoader} from 'esbuild-plugin-less';
import servor from 'servor';

const isProd = process.env.NODE_ENV === 'production';

const outDirectory = isProd ? 'dist' : 'static';
const publicDir = 'public';

const __dirname = path.resolve();

const staticAssetResolverPlugin = {
  name: 'staticAssetResolver',
  setup(build) {
    // Redirect all paths starting with "images/" to "./public/images/"
    build.onResolve({filter: /^static\//}, (args) => {
      return {path: path.join(args.resolveDir, publicDir, args.path)};
    });
    // Mark all paths starting with "http://" or "https://" as external
    build.onResolve({filter: /^https?:\/\//}, (args) => {
      return {path: args.path, external: true};
    });
  },
};

build({
  charset: 'utf8',
  watch: isProd
    ? false
    : {
        onRebuild(error) {
          if (!error) {
            console.log(chalk.greenBright('Build амжилттай хийгдлээ...'));
          }
        },
      },
  format: 'esm',
  target: 'esnext',
  sourcemap: false,
  treeShaking: true,
  assetNames: '[name]_[hash]',
  chunkNames: '[name]-[hash]',
  inject: [path.resolve(__dirname, 'react-shim.js')],
  minify: isProd,
  entryPoints: [path.resolve(__dirname, 'src/index.js')],
  bundle: true,
  define: {
    NODE_ENV: isProd ? '"production"' : '"development"',
    API_URL: '"my-api"',
  },
  outdir: path.resolve(__dirname, publicDir, outDirectory),
  loader: {
    '.js': 'jsx',
    '.png': 'file',
    '.html': 'file',
  },
  plugins: [
    lessLoader({
      javascriptEnabled: true,
      globalVars: {
        'my-color': '#000',
        'primary-color': '#0049A0',
      },
    }),
    staticAssetResolverPlugin,
  ],
}).catch((e) => console.error(e.message));

async function startServer() {
  console.log(chalk.blue('Сервер http://localhost:5000/ хаяг дээр ажиллаж байна...'));
  await servor({
    browser: true,
    root: publicDir,
    port: 5000,
  });
}
startServer();
