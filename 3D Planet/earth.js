let scene = new THREE.Scene();
			let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

			let renderer = new THREE.WebGLRenderer({
                preserveDrawingBuffer: true
			});
			

            renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
			
			// let loader = new THREE.MaterialLoader();

			let geometry = new THREE.SphereGeometry( 5, 32, 32 );
			let pointLight = new THREE.PointLight(0xFFFFFF);
			// let material = new THREE.MaterialLoader();
			// loader.load('../Assets/earthmap1k.jpg',
			// function ( material ) {
			// 	Object.material = material;
			// }
			
			// );
			// let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
			// let material = new THREE.TextureLoader().load('../Assets/earthmap1k.');
			let texture = THREE.TextureLoader('earthmap1k.jpg');
			let material = new THREE.MeshPhongMaterial({ color: 0xfffffe
			});
			let sphere = new THREE.Mesh( geometry, material );
			sphere.overdraw= true;
			sphere.castShadow= true;
			pointLight.position.x = 50;
			pointLight.position.y = 50;
			pointLight.position.z = 25;
			scene.add( sphere );
			scene.add(pointLight);

			camera.position.z = 25;

			let animate = function () {
				requestAnimationFrame( animate );


				sphere.rotation.x += 0.09;
				sphere.rotation.y += 0.09;


				renderer.render( scene, camera );
			};


			let starsGeometry = new THREE.Geometry();

for ( let i = 0; i < 10000; i ++ ) {

	let star = new THREE.Vector3();
	star.x = THREE.Math.randFloatSpread( 2000 );
	star.y = THREE.Math.randFloatSpread( 2000 );
	star.z = THREE.Math.randFloatSpread( 2000 );

	starsGeometry.vertices.push( star );

}

let starsMaterial = new THREE.PointsMaterial( { color: 0x888888 } );

let starField = new THREE.Points( starsGeometry, starsMaterial );

scene.add( starField );




animate();



var controls = new THREE.TrackballControls(camera);

render();

function render() {
  controls.update();
  sphere.rotation.y += 0.0005;
  clouds.rotation.y += 0.0005;  
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
