---
id: Common
title: Common
sidebar_label: Common
slug: /UserManual/Common
---

To simplify serialization of scene, some parts common to multiple components/entity types have been moved into common base. Code side speaking they are in Utils module inside parsing [folder](https://github.com/MySchoolEngine/GLEngine/tree/master/Utils/Utils/Parsing).

## Transofrmations

Transformation format is mostly equivalent to Collada [format](https://www.khronos.org/files/collada_spec_1_4.pdf).

## Translation

Translation is triple of floats representing offstes along x y and z axis.
```xml
<translate sid="location">0 0.1 0</translate>
```
## Rotation
Rotation can be set as triple of floats representing axis along which should be related object rotated fourth float is representing angle in degrees. In following example object is being rotated along Y axis by 180°.
```xml
<rotate>0 1 0 180</rotate>
```
## Scaling
Scaling is set by ```<scale>``` tag and it is simple triple of floats representing scale factor along x y z axis.
```xml
<scale>3 3 3</scale>
```
## Material

Material parsing is basic way how to get information about common maps and attributes of material. Parsing code can be found [here](https://github.com/MySchoolEngine/GLEngine/blob/master/Utils/Utils/Parsing/MaterialParser.h).

Material is defined as the attribute on the component and it is defined as string. The format and usage of such string is described [here](/docs/CodeManual/Shaders). Default material used is basic.
```xml
<staticMesh material="basic" />
```

## Color
Color is defined as child element in form of RGB triplet of three flaots. Example below is defining blue color.
```xml
<color>0.0 0.0 1.0</color>
```

## Rouhness
Roughness is defining uniform roughness accross whole component. It is defined as follows.
```xml
<roughness>0.83</roughness>
```

## Maps
Three maps are supported right now. Roughness, normal and colorMap.
```xml
<colorMap>Models\Bricks01\REGULAR\1K\Bricks01_COL_VAR2_1K.bmp</colorMap>
<roughnessMap>Models\Bricks01\REGULAR\1K\Bricks01_ROUGHNESS_1K.bmp</roughnessMap>
<normalMap>Models\Bricks01\REGULAR\1K\Bricks01_NRM_1K.bmp</normalMap>
```

The whole element can be defined like this:
```xml
<staticMesh filePath="plane.obj" material="basicTracing">
    <colorMap>Models\Bricks01\REGULAR\1K\Bricks01_COL_VAR2_1K.bmp</colorMap>
    <roughnessMap>Models\Bricks01\REGULAR\1K\Bricks01_ROUGHNESS_1K.bmp</roughnessMap>
    <normalMap>Models\Bricks01\REGULAR\1K\Bricks01_NRM_1K.bmp</normalMap>
</staticMesh>
```