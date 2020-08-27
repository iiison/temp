import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const prodStyleConfig = [
  {
    loader  : MiniCssExtractPlugin.loader
  },
  {
    loader  : 'css-loader',
    options : {
      importLoaders    : 1,
      modules          : true,
      sourceMap        : false,
      camelCase        : true,
      localIdentName   : '[path][name]--[local]--[hash:base64]'
    }
  },
  {
    loader  : 'postcss-loader',
  }
]

export default prodStyleConfig

