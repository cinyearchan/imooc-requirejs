require(['./app/api', 'backbone', 'i18n!./nls/messages'], function(api, Backbone, i18n) {
	$('#user').after('<button class="btn btn-default">' + i18n.edit + '</button>')

	$('#user').click(function() {
		// api.getUsers().then(function(user) {
		// 	console.log(user)
		// }).catch(function(err) {
		// 	console.error(err)
		// })
		// api.getUserByJsonp()
		api.loadUser()
	})
})