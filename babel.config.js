//项目发布的时候用到的babel
const prodPlugins=[];
if(process.env.NODE_ENV==='production')
{
  prodPlugins.push('transform-remove-console');
}
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:[
    //发布产品的插件数组
    ...prodPlugins,
    '@babel/plugin-syntax-dynamic-import'
  ]
}
