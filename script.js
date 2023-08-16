function volume_sphere() {
    //Write your code here
	const radius = document.getElementById("radius").value;
	const volume = document.getElementById("volume");

	let r = radius*radius*radius;

	let v = (4/3) * Math.PI * r;
	v = v.toFixed(4)
	volume.value = v;
	return false;
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
