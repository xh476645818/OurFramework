#需要分类
###模式划分
开发模式  
npm run dev  
生产模式  
npm run build 进行打包  
npm run server 启动node服务进行浏览  

####别名路径引入  
1、路径引入使用别名的方式，在webpack.common.js文件中配置别名路径  
```
例：
resolve: {
           alias: {
               //图片别名
               'img': path.resolve(__dirname, '../src/public/images'),
               //图片别名
               'media': path.resolve(__dirname, '../src/public/media'),
               //字体别名
               'font': path.resolve(__dirname, '../src/public/font')
               ......
           }
       } 
       
 ```  
2、使用别名（引入导出）  
```
图片引入方式：
import A from 'img/A.jpg'  

单个.js文件引入方式：
import A frome "./A" 
import C frome "./C"
多个文件引入方式：
import {B1,B2,B3} frome "./B" 
```  
```
导出(使用export)：
export {
A,
B1,B2,
C
}
```
####组件群模块群使用统一单独文件(index.js)引入导出  
######component、containers、redux/Action、redux/Reducer、redux/Sage、redux/Store
等文件中定义各自的index.js  
######说明：使用这种方法：当项目文件庞大时可以清晰方便的使用路径文件，优化代码
```
使用 import * as ...方式引入和使用:
//导入Con中的所有
import * as Con from "con/index";
使用:
Con.A;

```  
```
部分导入
import {A,B1,B2} from "com/index"
import {A,B1,B2} from "con/index"
import {A,B1} from "action/index"
```


