define(['jquery'], function($) {
	return {
		getUser: function() {
			var def = $.Deferred()
			require(['./app/user'], function(user) {
				def.resolve(user)
			})
			return def
		},
		getUsers: function() {
			return new Promise(function(resolve, reject) {
				require(['./app/user'], function(user) {
					resolve(user)
				})
			})
		},
		getUserByJsonp: function() {
			// $.ajax({
			// 	url: 'http://localhost:8080/src/main/resource/static/src/js/jsonp/user.js',
			// 	dataType: 'jsonp',
			// 	jsonpCallback: 'onloaded'
			// })

			// require 实现 jsonp
			require(['http://localhost:8080/src/main/resource/static/src/js/jsonp/user-amd.js'], function(user) {
				console.log(user)
			})
		}
	}
})

// function onloaded(user) {
// 	console.log(user)
// }