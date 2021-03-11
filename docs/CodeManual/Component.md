---
id: Component
title: Component
sidebar_label: Component
slug: /CodeManual/Component
---

Component is base building block of entity in ECS system. GLEngine right now supports four types of components.

* Graphical
* Light
* Camera
* DebugGUI

## Graphical
Graphical components are renderable parts of entity. During render phase they are being collected from [Entity::C_EntityManager::GetEntities](https://github.com/MySchoolEngine/GLEngine/blob/master/Entity/Entity/EntityManager.h) based on their AABB box in the world and position of camera.

## Light
Light components are representing lights.

## Camera
Camera components represents cameras. Their base class is Renderer::I_CameraComponent. Engine supports multiple switchable cameras through [GLRenderer::C_CameraManager](https://github.com/MySchoolEngine/GLEngine/blob/master/Renderer/Renderer/ICameraComponent.h). Note it is [feature in progress](https://github.com/MySchoolEngine/GLEngine/issues/92).

## DebugGUI
This type of component is created automagically for each entity and serves as base for debug draw you can see on the picture.

![Debug GUI](/img/debugGUI.PNG)