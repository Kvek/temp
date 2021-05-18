const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const analyze = require('rollup-plugin-analyzer');
const url = require('@rollup/plugin-url');
const copy = require('rollup-plugin-copy-assets');
const images = require('rollup-plugin-img');
const svgr = require('@svgr/rollup').default;

const nodeResolve = require('rollup-plugin-node-resolve');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      nodeResolve(),
      copy({
        assets: ['src/assets'],
      }),
      images({
        exclude: 'node_modules/**',
        extensions: /\.(png|jpg|jpeg|gif|svg)$/,
        limit: 8192,
        output: 'dist/assets',
      }),
      url(),
      svgr(),
      postcss({
        extract: !!options.writeMeta,
        inject: false,
        modules: true,
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ], // only write out CSS for the first bundle (avoids pointless extra files)
        sass: true,
      }),

      analyze()
    );

    return config;
  },
};
