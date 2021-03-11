---
id: Architecture
title: Architecture
sidebar_label: Architecture
slug: /CodeManual/
---

Page about the architecture of the engine. This engine is being built on architecture form two GDC talks given by bungee ([Video 1](https://www.youtube.com/watch?v=0nTDFLMLX9k), [Video 2](https://www.youtube.com/watch?v=v2Q_zHG3vqg))

## Project structure
The whole project is split into separate projects (e.g. Physics, GLRenderer, Entity, etc.). Then the game itself should be implemented in a separate project and only use interface from those projects. Example of such a game is in a project called Sandbox.

Every functionality should be implemented in the corresponding project. E.g. primitive intersections in Physics. All entity related things in the Entity module etc. Note that there is a project called Renderer which doesn't render anything. This project is a kind of "interface" for other renderers. One already functional but still in development is called "GLRenderer". Another one "DX12Renderer" is being developed at this time on its branch. If you want to write anything render related you should put this code to as general module as possible. E.g. if you are writing class for OpenGL texture put it to the GLRenderer. But to write animations I decided to put it into Renderer as it is API agnostic.

Also as soon as DX12 renderer will be functional, I will generalise as much of rendering code into Renderer project for easier interchangeability of API as possible.

## Game
All API calls should be implemented as classes derived from

![Architecture](https://raw.githubusercontent.com/MySchoolEngine/GLEngine/949d8d9f7314cf48774ab2094500e53b9d985476/wikidata/Architecture.svg)