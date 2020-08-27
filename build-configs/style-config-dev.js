/* eslint-disable import/no-extraneous-dependencies */
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const devStyleConfig = [
  {
    loader  : MiniCssExtractPlugin.loader,
    options : {
      hmr : true
    }
  },
  {
    loader  : 'css-loader',
    options   : {
      importLoaders  : 1,
      modules        : true,
      sourceMap      : false,
      camelCase      : true,
      localIdentName : '[path][name]--[local]--[hash:base64]'
    }
  },
  {
    loader  : 'postcss-loader'
  }
]

export default devStyleConfig

