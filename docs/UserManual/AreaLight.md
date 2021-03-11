---
id: AreaLight
title: Area light
sidebar_label: Area light
slug: /UserManual/AreaLight
---

Area light defines rectangular ligth source. Area light can define its width, height, diffuse and specular colour. (How to define position and color you can find it in [common](/docs/UserManual/Common)).

Area light implementation used in engine is based on Eric Heitz [paper](https://dl.acm.org/doi/10.1145/2897824.2925895) and only shape supported right now is rectangle.

```xml
<AreaLight width="1" height="10">
    <translate sid="location">0 1 0</translate>
    <rotate>1 0 0 45</rotate>
    <diffuseColor>1 0 0</diffuseColor>
    <specularColor>1 1 1</specularColor>
</AreaLight>
```


![Area light](/img/areaLight.png)