const {build} = require('esbuild');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const {lessLoader} = require('esbuild-plugin-less');

const outDirectory = 'public';

const isProduction = process.env.NODE_ENV === 'production';

build({
  watch: isProduction
    ? false
    : {
        onRebuild(error) {
          if (!error) {
            console.log(chalk.greenBright('Build амжилттай хийгдлээ...'));
          }
        },
      },
  sourcemap: !isProduction,
  minify: isProduction,
  entryPoints: [path.resolve(__dirname, 'src/index.js')],
  bundle: true,
  // inject: ['./react-shim.js'],
  define: {'process.env.NODE_ENV': isProduction ? '"production"' : '"development"'},
  outdir: path.resolve(__dirname, outDirectory),
  loader: {
    '.js': 'jsx',
    '.png': 'file',
  },
  plugins: [
    lessLoader({
      globalVars: {
        'my-color': '#000',
        'primary-color': '#0049A0',
      },
    }),
  ],
}).catch((e) => console.error(e.message));

async function serve() {
  console.log(chalk.blue('Сервер http://localhost:5000/ хаяг дээр ажиллаж байна...'));
  const servor = require('servor');
  await servor({
    browser: true,
    root: outDirectory,
    port: 5000,
  });
}
serve();
