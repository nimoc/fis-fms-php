# [FIS](http://fis.baidu.com/)-[FMS](http://fmsjs.org/)-PHP

> [FIS] 前端工程构建工具
> [FMS] 前端数据模拟服务器 Front-end Mock Server

本项目展示 FMS 如何基于 FIS 的[静态资源映射表](http://fis.baidu.com/fis3/docs/lv3.html#%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90%E6%98%A0%E5%B0%84%E8%A1%A8)与 PHP 结合，在后端模板中使用[文件指纹](http://fis.baidu.com/fis3/docs/beginning/release.html#%E6%96%87%E4%BB%B6%E6%8C%87%E7%BA%B9)

**[在线示例](http://fis-fms-php.fmsjs.org/)**

希望能借此示例让使用 FIS 的人都可以基于 Mock Server 实现 FIS 解决方案

## 下载
[点击下载本项目](https://github.com/nimojs/fis-fms-php/archive/master.zip)
```shell
# 或者通过 git 下载
git clone https://github.com/nimojs/fis-fms-php.git
```

## 安装

> 确保你已经将 fis3 安装到全局 ，使用 `fis3 -v` 检测

```
# 务必切换到项目根目录
# 安装 fms
npm install fms
```

```
# 安装 nodemon 启动 fms.js 以提高开发效率
npm install nodemon -g
```

## 启动
启动 FMS
```shell
# 检测 fms.js 代码修改重启 fms.js
nodemon -w fms.js fms.js

# 或者使用 node 直接启动（不支持检测代码修改后自动重启）
node fms.js
```
启动fis3

```shell
fis3 release  -w -d ./output
```

启动 PHP 渲染接口

> 请先确保你安装了 [PHP CLI](http://fmsjs.org/install-php-cli.html)

```shell
php -S 127.0.0.1:1236 -t mock/
```
