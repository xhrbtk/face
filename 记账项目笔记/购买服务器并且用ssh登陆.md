
### 在bash里面登陆购买的云服务器
```
 39.105.35.27 //云服务器的公有ip地址
 ssh root@39.105.35.27
```
### ssh 登陆过程中如果报错Host key verification failed
```
删除 ～/.ssh/known_hosts 文件夹 之后重新执行  ssh root@39.105.35.27
```

### 开启防火墙 阿里云是安全组 腾讯云是防火墙
```
开启 端口：3000 3001 8000 8080 
其中 443 和 80 端口开启需要备案
```
### 推荐使用unbantu的次新版

### 配置服务器
- 用户权限
1. 推荐只在root用户里安装docker即可
2. 每个应用创建一个独立用户，并加入docker用户组
3. 切忌用root管理所有应用

### ssh自动中断问题 
- https://docs.jdcloud.com/cn/virtual-machines/ssh-connection-disconnect-timeout-setting

### unbantu add user 
- https://linuxize.com/post/how-to-add-and-delete-users-on-ubuntu-20-04/
- secret: mangosteen123456

### unbantu 安装docker
```
搜索 docker unbantu install 使用官方文档安装 因为是root用户 不需要sudo
查看docker 安装是否成功：docker --version

```
### 把山竹加入docker用户组
- 只有把山竹加入docker组 山竹才能操作docker
```
搜索 unbantu add user to group
https://www.howtogeek.com/50787/add-a-user-to-a-group-or-second-group-on-linux/

1. usermod -a -G docker mangosteen

```

### 退出root用户 登陆mangosteen用户
```
ssh mangosteen@39.105.35.27
- 登陆不了解决方案
1. 登陆root用户：ssh root@39.105.35.27
2. cd ~/.ssh/  //文件夹下有authorized_keys
3. mkdir /home/mangosteen/.ssh //在山竹用户下创建.ssh文件夹
4. cp ~/.ssh/authorized_keys /home/mangosteen/.ssh //将root用户下的authorized_keys 拷贝到 山竹用户的.ssh文件夹里面
5. chown -R mangosteen:mangosteen .ssh  // 由于authorized_keys 是从root复制过来的 需要让山竹拥有此文件的权限 
6. ssh mangosteen@39.105.35.27 登陆成功------ mangosteen@server1
```