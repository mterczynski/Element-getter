# Element-getter
[THREE.js] Utility for finding 3d objects nested in other 3d objects

Usage example:

    const eGetter = new ElementGetter();

    const materials = [
        new THREE.MeshBasicMaterial( { color: 'rgb(255,0,0)' } ),
        new THREE.MeshBasicMaterial( { color: 'rgb(0,255,0)' } ),
        new THREE.MeshBasicMaterial( { color: 'rgb(0,0,255)' } ),
    ]
    const geometries = [
        new THREE.BoxGeometry(100,100,100),
        new THREE.BoxGeometry(50,50,50),
        new THREE.BoxGeometry(25,25,25),
    ]

    let scene = new THREE.Scene();

    let testMesh = new THREE.Mesh(geometries[0], materials[0]);
    let testMesh2 = new THREE.Mesh(geometries[1], materials[1]);
    let testMesh3 = new THREE.Mesh(geometries[2], materials[2]);

    testMesh.name = "testMesh";
    testMesh2.name = "testMesh2";
    testMesh3.name = "testMesh3";

    scene.add(testMesh);
    testMesh.add(testMesh2);
    testMesh2.add(testMesh3);

    console.log(eGetter.getObjectsByName(scene,"testMesh3")); // [testMesh3]
