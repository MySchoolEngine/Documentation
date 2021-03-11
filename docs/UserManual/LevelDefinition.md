---
id: LevelDefinition
title: Level definition
sidebar_label: Level definition
slug: /UserManual/LevelDefinition
---

Level is defined as XML file inside data\Levels folder. The xml root elements is world and right now consits only from the list of entities.

``` xml
<?xml version="1.0" encoding="UTF-8"?>
<World>
    <Entities>
        <Entity name="Player" />
        <Entity name="SkyBox">
            <Components>
                <SkyBox>
                    <Top        image="SkyBoxes/mp_crimelem/criminal-element_up.tga" />
                    <Bottom     image="SkyBoxes/mp_crimelem/criminal-element_dn.tga" />
                    <Left       image="SkyBoxes/mp_crimelem/criminal-element_rt.tga" />
                    <Right      image="SkyBoxes/mp_crimelem/criminal-element_lf.tga" />
                    <Back       image="SkyBoxes/mp_crimelem/criminal-element_ft.tga" />
                    <Forward    image="SkyBoxes/mp_crimelem/criminal-element_bk.tga" />
                </SkyBox>
            </Components>
        </Entity>
        <Entity name="halfBox">
            <translate sid="location">0 0 0</translate>
            <rotate>0 1 0 180</rotate>
            <Components>
                <staticMesh filePath="halfBox.obj" material="basic" />
                <PointLight intensity="3.0">
                    <translate sid="location">0 0.1 0</translate>
                </PointLight>
            </Components>
        </Entity>
    </Entities>
</World>
```

## Entity

Entity represents independend unit in the game world. In the code entity is currently represented by [Entity::C_BasicEntity](https://github.com/MySchoolEngine/GLEngine/blob/master/Entity/Entity/BasicEntity.h). Each entity can own list of [components](/docs/CodeManual/Component).