---
layout: post
title:  "Simple Sprite Select"
date:   2023-11-5 16:00:00 +0800
categories: unityplugin
image: ""
lang: zh_CN

titleImg: "assets/myPic/unityplugin/simplespriteselect/simplespriteselect_final.png"

contentType: unityplugin

---


# SimpleSpriteSelect

SimpleSpriteSelect 是一个扩展的精灵编辑器，用于从精灵中查找引用，并实现快速拖放功能。

## 如何打开
![image](https://github.com/dqIndieGames/SimpleSpriteSelect/assets/17854132/c1b36ad0-9cb6-4e44-b0c8-8112bc7967a6)



## 查找引用
![2023-11-04 18-38-56_3](https://github.com/dqIndieGames/SimpleSpriteSelect/assets/17854132/24c0106b-35fe-48bd-a935-c5b9ec7062b4)
选择预制件或 ScriptableObject 或材质等，会高亮显示使用的精灵。

## 拖放
![2023-11-04 18-39-55](https://github.com/dqIndieGames/SimpleSpriteSelect/assets/17854132/0b231678-3ed9-45c9-bcec-dbf482ec7d97)
快速将精灵拖放到其他精灵的 SerializedProperty 或精灵列表的 SerializedProperty 上。

* 单一拖放模式
![2023-11-04 18-39-55_1](https://github.com/dqIndieGames/SimpleSpriteSelect/assets/17854132/500268d2-991f-4305-91c0-01809741056c)


# 其他事项


## Odin 扩展
详细请看 SpriteEditorSelectModuleOdin.cs

## DrawListSimpleHelperGUI
帮助你简单地绘制列表。

## SerializedObjectHelperUtils
* 帮助你找到详细的依赖项。

* Unity Assets 的 AssetDatabase.GetDependencies() 只能获取到基础资产（例如纹理，但不包括精灵）。

* 使用 SerializedObjectHelperUtils 可以找到详细的对象依赖项


