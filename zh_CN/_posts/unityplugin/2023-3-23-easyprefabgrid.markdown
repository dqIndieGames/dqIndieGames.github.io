---
layout: post
title:  "Easy Prefab Grid"
date:   2023-3-23 16:55:24 +0800
categories: unityplugin
image: ""
lang: zh_CN

titleImg: "assets/myPic/unityplugin/easyprefabgrid/Image_ps_web_512.png"

contentType: unityplugin

---


# 用户手册

## 概述
EasyPrefabGrid 是一款方便易用的 2D 预制生成工具集，提供了在 Sceneview 中进行视觉网格绘制、预制生成和光标辅助定位的功能。工具集支持批量预制生成以提高效率，且具有出色的自定义性和灵活性。

## 描述
* 2D 预制生成工具  
根据配置的网格尺寸和自定义尺寸，在 Sceneview 中可视化放置或批量生成任何预制。高度可定制和灵活。  
![SinglePrefabCreate]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/singleprefabcreate.gif)  
![BatchPrefabCreate]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/batchprefabcreate.gif)  

* Sceneview 视觉网格绘制  
轻松配置和绘制基线和网格尺寸。精确规划预制件的放置，避免盲目拖拽预制件。  
![griddrawing]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/griddrawing.png)  

* 光标辅助功能  
光标辅助定位功能，清晰地显示基于网格的世界坐标位置，并自动移动视图中心。快速找到关键点，提高 2D 视图操作的便捷性。
![cursorshow]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/cursorshow.png)  

## 如何使用
* 将 PrefabGridBehaviour 添加到要使用的 GameObject 上。
![step1]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step1.jpg)  
* Size Type
    * Custom: 输入 Vector2Int，网格的宽度和高度。  
    * BoxCollider2D: 使用 GameObject 上的 BoxCollider2D 组件的尺寸。  
    * Custom By Tool: 在创建模式下输入尺寸。  
    ![step2]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step2.png)  
* Tool Path
![step3]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step3.png)
* 创建预制件
    * 创建预制件
    ![step4]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step4.png)
    * 批量创建  
    按住 A 键进行批量创建
    ![step5]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step5.png)
* 通用设置  
    * 按 Shift + Alt + D 打开设置窗口，或点击 Tools/EasyPrefabGrid/Settings
    * 通用视图
    ![step6]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step6.png)
    ![step7]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step7.png)

