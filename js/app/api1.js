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
		}
	}
})