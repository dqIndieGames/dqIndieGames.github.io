---
layout: post
title:  "Easy Prefab Grid"
date:   2023-3-23 16:55:24 +0800
categories: unityplugin
image: ""
lang: en

titleImg: "assets/myPic/unityplugin/easyprefabgrid/Image_ps_web_512.png"

contentType: unityplugin

---


# User Manual

## Summary
EasyPrefabGrid is a user-friendly 2D prefab generation toolset that features visual grid drawing in Sceneview, prefab generation, and cursor-assisted positioning. The toolset is designed to support batch prefab generation for improved efficiency and offers exceptional customization and flexibility.  
<!-- [PluginAddress](https://assetstore.unity.com/packages/slug/250262)   -->

## Describe
* 2D Prefab Generation Tool  
Visually place or batch generate any prefab in Sceneview based on the configured grid size and custom dimensions. Highly customizable and flexible.  
![SinglePrefabCreate]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/singleprefabcreate.gif)  
![BatchPrefabCreate]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/batchprefabcreate1.gif)  

* Sceneview Visual Grid Drawing  
Easily configure and draw baselines and grid sizes. Accurately plan prefab placement, preventing the need for blind dragging of prefabs.  
![griddrawing]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/griddrawing.png)  

* Cursor Assistance Function  
Enjoy cursor-assisted positioning, which clearly indicates grid-based world coordinate positions and automatically moves the view center. Quickly find key points, enhancing convenience in 2D view operations.
![cursorshow]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/cursorshow.png)  

## How to use
* Add PrefabGridBehaviour to the GameObject you want to use.
![step1]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step1.jpg)  
* Size Type
    * Custom: Enter Vector2Int, the width, and height of the grid.  
    * BoxCollider2D: Use the size of the BoxCollider2D component on the GameObject.  
    * Custom By Tool: Enter the size when in create mode.  
    ![step2]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step2.png)  
* Tool Path
![step3]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step3.png)
* Create Prefab
    * Normal Create
    ![step4]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step4.png)
    * Batch Create  
    Hold A To Batch Create
    ![step5]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step5.png)
* GeneralSetting  
    * Press Shift + Alt + D to open the Settings window or click Tools/EasyPrefabGrid/Settings
    * General View
    ![step6]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step6.png)
    ![step7]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step7.png)

