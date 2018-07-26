({
	appDir: './src',
	baseUrl: './js',
	dir: './build',
	optimize: 'uglify',
	mainConfigFile: './src/js/require.config.js',
	inlineText: false,
	modules: [{
		name: 'app',
		// excludeShallow: ['backbone'],
		// include: ['moderizr'],
		insertRequire: ['moderizr']
	}, {
		name: 'user'
	}]
})