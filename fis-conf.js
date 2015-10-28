fis.set('project.ignore', [
  'fis-conf.js',
  'output/**',
  'node_modules/**',
  '/fms.js',
  '/mock',
  '.git/**',
  '.svn/**',
  'npm-debug.log'
]);


// 文件指纹
fis.match('**/*.{js,css}', {
  useHash: true
})

// https://github.com/fex-team/fis3/issues/177
/*
@fis官方：
  图片不再可动态编码行列，而且图片文件特别多，都加到表里面会导致表特别大。
  如果有部分图片想入表，请分配给这些图片 useMap 属性；
*/
fis.match('::image',{
  useMap: true,
  useHash: true
})