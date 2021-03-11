---
id: Shaders
title: Shaders
sidebar_label: Shaders
slug: /CodeManual/Shaders
---

Shaders are represented in code by ```GLEngine::GLRenderer::Shaders::C_ShaderProgram``` class and can be loaded by ```GLEngine::GLRenderer::Shaders::C_ShaderManager```. You can also load them by yourself, but then you lose most of the functions.

## Shader definition
To define shader you have to define its a structure in XML format. Here is an example of how to define simple shader.
```xml
<?xml version="1.0" encoding="UTF-8"?>
<pipeline>
  <shader stage="vertex">basic/vertex.glsl</shader>
  <shader stage="fragment">basic/fragment.glsl</shader>
</pipeline>
```

## Preprocess
Actual shader preprocessor supports two main features. Include file and macro definitions. It works pretty similarly to the C++ preprocessor. RegExes used to detect preprocessor directives are listed below. Include file looks for the file relative to the parsed \*.glsl file, so you can easily find what is going on. Also, it doesn't work recursively right now (this means no #include inside of included file).

## RegExes
* Includes: ^(#include )"([^"]*)"$
* Defines: ^(#define )([^\s]*)\s([^\s]+)$

## Live reload
If you load shader program via ```C_ShaderManager``` and you are running in Debug configuration, you can live-edit your shader programmes. The shader program will be reloaded every one second. You can change its code and even its structure in XML.

## Binding
Default binding is ascending from 0 - least often changed descriptor set down to most often changed descriptor sets. 0 - Frame constants 1 - Reserved 2 - Per draw call changes (effectively modelData) 3 - Materials (temp) 4 - Lights (temp)

