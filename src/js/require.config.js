var language = document.cookie.match(/language=([^;]+)/)
var locale = 'zh-cn'
if (language) {
	locale = language[1].split('_')[0]
}

requirejs.config({
	baseUrl: "./js",
	waitSeconds: 10,
	paths: {
		'jquery': "./lib/jquery", 
		'bootstrap': "./lib/bootstrap",
		'modernizr': "./lib/modernizr",
		'backbone': "./lib/backbone",
		'underscore': './lib/underscore',
		'text': './lib/require/text',
		'i18n': './lib/require/i18n'
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'bootstrap': {
			deps: ['jquery']
		}
	},
	map: {
		'*': {
			'jquery': './lib/jquery'
		},
		'app/api1': {
			'jquery': './lib/jquery1'
		}
	},
	config: {
		text: {
			onXhr: function(xhr, url) {
				xhr.setRequestHeader('X-Request-With', 'XMLHttpRequest')
			}
		},
		i18n: {
			locale: typeof locale !== 'undefined' ? locale : 'zh'
		}
	},
	map: {
		'*': {
			'css': './lib/require/css'
		}
	}
})