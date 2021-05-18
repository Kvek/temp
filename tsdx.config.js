const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const image = require('@rollup/plugin-image');
const analyze = require('rollup-plugin-analyzer');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      postcss({
        extract: !!options.writeMeta,
        inject: false,
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

    config.plugins.unshift(image());

    return config;
  },
};
