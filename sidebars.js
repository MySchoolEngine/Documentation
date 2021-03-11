module.exports = {
	CodeManual: {
		Architecture: [
			'CodeManual/Architecture',
			{
				Render: ["CodeManual/Shaders"]
			}
			
		],
		ECS: [
			'CodeManual/ECS', 'CodeManual/Component'
		]
	},
	UserManual: {
		UserManual: [
			'UserManual/UserManual',
			{
				LevelDefinition: [
					"UserManual/LevelDefinition",
					"UserManual/Common",
					"UserManual/PointLight",
					"UserManual/AreaLight",
					"UserManual/StaticMesh",
				]
			}
		]
	}
};
