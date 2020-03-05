if (navigator.serviceWorker) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function(registration) {
			// console.log(
			// 	'ServiceWorker registration successful with scope:',
			// 	registration.scope
			// );
		})
		.catch(function(error) {
			console.log('ServiceWorker registration failed:', error);
		});
}

// var leftBtn = document.getElementsByClassName('left-btn'); //Keeping it unobstrusive
// function doDemo () {

//   sliding-system.style.transform = "translate3d(-40%, 0, 0)";
// }

// leftBtn.onclick = doDemo; //Onclick call. Pass no arguments.​​​​​

