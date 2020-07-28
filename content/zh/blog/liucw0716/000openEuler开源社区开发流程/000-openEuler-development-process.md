+++
title = "openEuler开源社区开发流程"
date = "2020-07-28"
tags = ["git","社区开发"]
archives = "2020-07"
author = "罗振宇"
summary = "如何使用gitee提交pr"
+++

### 使用git提交PR

一、环境准备

1. 注册码云账号，地址：<https://gitee.com>
2. 加入openEuler社区，地址：https://openeuler.org/zh/
3. 安装git

> 3.1 windows安装：https://git-scm.com/download/win

> 3.2 linux安装：

```
openEuler: dnf install git

centOS: yum install git

ubuntu: apt-get install git
```

4. git配置

> 4.1 全局配置用户名和邮箱

```
git config --global user.name "Your Name"

git config --global user.email <email@example.com>
```

> 4.2 链接远程仓库

> 1）生成SSH密匙

```
ssh-keygen -t rsa -C "youremail\@example.com"

cat \~/.ssh/id_rsa.pub
```

> 2）登录远程仓库网站Gitee账户并添加密匙

<https://gitee.com/profile/sshkeys>

< img src="https://images.gitee.com/uploads/images/2020/0726/172626_5a236084_114870.png "eeda4f7dd006db0b71b635b795d93f87.png"/>


二、提交PR

1. 进入要修改的仓库，点击右上角的Forked，将其fork到自己的仓库，如下图所示。

< img src="https://images.gitee.com/uploads/images/2020/0726/172104_229a9e7e_114870.png "44e5461b0d6078a1269740c08eb39266.png" />

2. Fork成功之后会自动进入Fork的仓库目录，点击克隆/下载-\>选择复制任一链接。见下图。

< img src="https://images.gitee.com/uploads/images/2020/0726/172723_7cfa195c_114870.png "8a32593245efadce278ab60dbd615777.png"/>

3. 将仓库clone到本地，并进入仓库目录。以上图perl-Text-ParseWords仓库为例。

```
git clone <https://gitee.com/dogsheng/perl-Text-ParseWords>.git

cd perl-Text-ParseWords
```

4. 可以通过git remote –v查看所有远程库的url，见下图。

< img src="https://images.gitee.com/uploads/images/2020/0726/172830_26adb534_114870.png "9416d1d4485819ac1c4d6ccc16c2fcb9.png"/>

> 发现没有原作者的项目地址，使用git remote add upstream
> https://gitee.com/openeuler/perl-Text-ParseWords.git添加，再次执行git remote
> –v。如下图所示。

< img src="https://images.gitee.com/uploads/images/2020/0726/192424_7e12b75d_114870.png "d89f0e1172a76e07eae1d862865ce3bb.png"/>

> 使用git remote set-url --push upstream
> no_push，设置不直接将改变推送到上游openEuler里面的仓库，而是只推送到自己Fork的gitee仓库下。见下图。

< img src="https://images.gitee.com/uploads/images/2020/0726/192517_7894f665_114870.png "0faf9c5d25a15fbfb6dc97bbef9c8699.png"/>

> 4.1  git fetch
>     upstream与上游openEuler社区保持同步；如果是已提交过一次代码以后再做代码修改操作，可以跳过2.3/2.4两个步骤。

> 4.2  切换到master分支，并且把最新的代码同步下来。

```
git checkout master

git rebase upstream/master
```

5. 建立并进入分支进行代码开发、改动。

> git checkout –b \*\*\* // \*\*\*为自己定义的分支名，这里取名test_ci

> 5.1  cd指令进入软件包路径，修改代码; 如果是对已提交过的代码再进行修改，则追加git
>     pull(从初次操作的clone变为pull)。

> 5.2  git add .

> git commit –m “modify” //其中modify为进行改变的标题，自行定义

6. 将代码提交到远端，\*\*\*为步骤2.6建立的分支名称。git push -f origin
   \*\*\*。结果见下图。

注：

git config --global credential.helper store

> 输入上述命令以后用户名密码就会被git记住，之后在这个目录下都不需要再输入用户名密码了

< img src="https://images.gitee.com/uploads/images/2020/0726/192605_d79286ab_114870.png "b43111a9e342334908f38e2b813dfda5.png"/>

7. 进入改动过代码的自己的仓库，选择下图小标1，或者点击小标2后接着进入新建Pull Requests。

< img src="https://images.gitee.com/uploads/images/2020/0726/192703_51531528_114870.png "5304b9719d7fb09c1bd7096c64dd66ad.png"/>

8. 例子中2.6步建立的分支为test_ci，在新建Pull Requests之后，如下图所示

< img src="https://images.gitee.com/uploads/images/2020/0726/192750_7568d396_114870.png "747e2b8884b6ee40b108a080c6615c00.png"/>

> 填写标题和说明即可创建Pull Request。