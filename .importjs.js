function checkPath(pathName, alias) {
  return function (path) {
    if (new RegExp(pathName).test(path)) {
      const newPath = path.slice(path.indexOf(pathName) + pathName.length)

      return `${alias}/${newPath}`
    }
  }
}

module.exports = {
  aliases : {
    $REDUX      : './app/redux/',
    $CONFIGS    : './app/configs/',
    $RMODULES   : './app/redux/modules/',
    $COMPONENTS : './app/components/',
    $CONTAINERS : './app/containers/'
  },
  environments : [ 'browser', 'node' ],
  stripFileExtensions : ['.js', '.jsx', '.css'],
  declarationKeyword: 'import',
  excludes: [ './build/**', ],
  emptyLineBetweenGroups : true,
  importDevDependencies : true,
  useRelativePaths : false,
  importStatementFormatter : function ({ importStatement }) {
    return importStatement.replace(/;$/, '')
  },
  moduleNameFormatter : function({ pathToCurrentFile, moduleName, pathToImportedModule }) {
    if (/components/.test(pathToImportedModule)) {
      // var val = pathToImportedModule.slice(pathToImportedModule.indexOf('components') + 'components'.length + 1).replace(/\.(js|jsx)$/, '')

      return `$COMPONENTS`
    }

    return moduleName
  }
}
