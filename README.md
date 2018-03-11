### 来源于慕课网移动音乐webApp教程

对原程序进行了精简，少了个人中心和排行版的模块功能，避免重复劳动，适合学习。

代码纯手打，仅供学习，参考学习自慕课网，请支持正版，谢谢！

---

主要使用的技术：
- vue全家桶（包括vue\vuex\vue-router）  
注：vuex主要用于播放器组件状态的管理
- jsonp（jsonp技术的封装）  
注：解决跨域的问题
- axios（发送http请求）  
注：结合express来进行转发请求绕过后台的限制
- fastclick（移动端）  
注：解决手机端300ms的点击延迟
- better-scroll（滚动组件）  
注：实现移动端的平滑滚动以及轮播图的制作
- 其他（如歌词解析库、localStorage的封装库等）

---

### 修正源代码中的bug

在获取歌单列表的时候，会报```jp1 is not definde```。  
经过测试，发现是```jsonp```封装库在自己默认给回调函数取了一个名字，和后台约定的名字```playlistinfoCallback```不一致。  
如图：  

<img src="http://note.youdao.com/yws/public/resource/6e15c67cb09c8b7d6e2ce8cad9ee5c32/xmlnote/1D06DE97218F4FFBA88263FC8A3F88AC/20521" width="50%">  

解决方法：  
发jsonp请求的的时候，添加```name:playlistinfoCallback```到```options```中即可。
如图：  
<img src="http://note.youdao.com/yws/public/resource/6e15c67cb09c8b7d6e2ce8cad9ee5c32/xmlnote/1297ADD47FC145BE98FAC3ED405C892F/20523" width="80%">

---
### 使用

- npm install --- 加载依赖
- npm run dev --- 开发环境下运行服务器
- npm run build --- 打包构建
- node prod.server.js --- 构建完毕后可启动Node服务器模拟生产环境


以上。




