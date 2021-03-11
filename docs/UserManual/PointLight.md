---
id: PointLight
title: Point light
sidebar_label: Point light
slug: /UserManual/PointLight
---

Point light will define point light source. Light is defined by its offset from the entity position and color. Both properties are being set as described in [common](/docs/UserManual/Common) part of level definition docuemntaion. Also its intensity can be set as component attribute.

```xml
<PointLight intensity="30.0">
    <translate sid="location">0 1 0</translate>
    <color>0.4 0.3 0.1</color>
</PointLight>
```

![Point light](/img/pointLights.png)
