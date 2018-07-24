requirejs.config({
	baseUrl: "./js",
	waitSeconds: 10,
	paths: {
		'jquery': "./lib/jquery", // 可以是数据，多个源
		'bootstrap': "./lib/bootstrap",
		'modernizr': "./lib/modernizr",
		'backbone': "./lib/backbone",
		'underscore': './lib/underscore'
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'bootstrap': {
			deps: ['jquery']
		}
	},
	// map: {
	// 	'*': {
	// 		'jquery': './lib/jquery'
	// 	},
	// 	'app/api1': {
	// 		'jquery': './lib/jquery1'
	// 	}
	// }
})

require(['./app/api', 'backbone'], function(api) {
	$('#user').click(function() {
		// api.getUsers().then(function(user) {
		// 	console.log(user)
		// }).catch(function(err) {
		// 	console.error(err)
		// })
		api.getUserByJsonp()
	})
})