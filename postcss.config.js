/* eslint-disable import/no-extraneous-dependencies,global-require */
/* global module :true */
module.exports = {
  sourceMap : true,
  ident     : 'postcss',
  plugins   : [
    require('colorguard'),
    require('postcss-import'),
    require('postcss-extend'),
    require('postcss-mixins'),
    require('precss'),
    require('postcss-simple-vars'),
    require('autoprefixer')({
      remove : true
    }),
    require('postcss-color-rgba-fallback')({
      oldie : true
    }),
    require('cssnano')(require('./build-configs/cssNanoConfigs')),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      stage: 3
    })
  ]
}

