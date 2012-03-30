BrowserQuest bootstrap
============

1 将项目克隆到本地

2 在项目目录下运行npm install

3 cp client/config/config_build.json-dist client/config/config_build.json

4 新建一个 client/config/config_local.json

5 cp server/config_local.json-dist server/config_local.json

6 配置上面3个文件里的host, port

7 调试代码:node debug.js

8 以daemon 方式运行代码: 1)mkdir tmp  2)node server.js

9 关闭daemon: kill -9 $(cat tmp/stop.pid)

10 浏览器如何访问游戏: http://localhost:8888

BrowserQuest
============

Documentation is located in client and server directories.