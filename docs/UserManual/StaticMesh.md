---
id: StaticMesh
title: Static mesh
sidebar_label: Static mesh
slug: /UserManual/StaticMesh
---

[Static mesh](https://github.com/MySchoolEngine/GLEngine/blob/master/GLRenderer/GLRenderer/Components/StaticMesh.h) is representing renderable static mesh. Static mesh is defined by filename inside the filePath attribute. Right not only supported fileformats are [Wavefront .obj](https://en.wikipedia.org/wiki/Wavefront_.obj_file) and [COLLADA](https://cs.wikipedia.org/wiki/COLLADA). The root from where are models being loaded is **Data/Models**. Only first mesh will be loadedd and rendered.

Additional optional attributes are **material** and **shadowPassShader**. Both are defining shader which should be used during rendering in format as described [here](/docs/CodeManual/Shaders). First one is being used during normal render pass and second one during shadow map pass which is usually simpler (e.g. no shadig). If no material is defined than basic will be used as default.

```xml
<staticMesh filePath="sphere.obj" material="basicTracing" shadowPassShader="shadowPass" />
```

Beside of those attributes you can define transformations and material as described in [common part](/docs/UserManual/Common).

```xml
<staticMesh filePath="plane.obj" material="basicTracing">
    <colorMap>Models\Bricks01\REGULAR\1K\Bricks01_COL_VAR2_1K.bmp</colorMap>
    <roughnessMap>Models\Bricks01\REGULAR\1K\Bricks01_ROUGHNESS_1K.bmp</roughnessMap>
    <normalMap>Models\Bricks01\REGULAR\1K\Bricks01_NRM_1K.bmp</normalMap>
</staticMesh>
```

![Static mesh](/img/staticMesh.png)

## Supported .obj features
From geometry point of view supported features are:

* Vertices
* Normals
* Texture coordinates

From material point fo view supported featurs are:

* Diffuse color (Kd)
* Diffuse color map (map_Kd)

For all maps engine is searching from where where .obj is located.