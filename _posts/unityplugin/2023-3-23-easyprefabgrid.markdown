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
EasyPrefabGrid offers a convenient 2D prefab generation toolset, featuring sceneview visual grid drawing, prefab generation, and cursor-assisted positioning. It supports batch prefab generation for increased efficiency, with outstanding customization and flexibility.

## Describe
* 2D Prefab Generation Tool  
Visually place or batch generate any prefab in Sceneview according to the configured grid size and custom dimensions. Highly customizable and flexible.  
![SinglePrefabCreate]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/singleprefabcreate.gif)  
![BatchPrefabCreate]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/batchprefabcreate.gif)  

* Sceneview Visual Grid Drawing  
Flexibly configure and draw baselines and grid sizes. Clearly plan prefab placement, avoiding blind dragging of prefabs.
![griddrawing]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/griddrawing.png)  

* Cursor Assistance Function  
Cursor-assisted positioning, clearly indicating grid-based world coordinate positions and automatically moving the view center. Quickly find key points, improving convenience in 2D view operations.
![cursorshow]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/cursorshow.png)  

## How to use
* Add PrefabGirdBehaviour To Gameobject what you want to use.  
![step1]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step1.jpg)  
* Size Type
    * Custom: Enter Vector2Int, the width and height of the grid.  
    * BoxCollider2D: Use the size of the BoxCollider2D component on the gameobject.  
    * Custom By Tool: Enter size when in create mode.  
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
    * Press Shift + Alt + D To Open Setting Window Or Clcck Tools/EasyPrefabGrid/Settings
    * General View
    ![step6]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step6.png)
    ![step7]({{site.baseurl}}/assets/myPic/unityplugin/easyprefabgrid/howtouse/step7.png)

