module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/naj/' : '/',
		pwa: {
			name: 'Na-J',
			themeColor: '#ffffff',
			msTileColor: '#ffffff',
			appleMobileWebAppCapable: 'yes',
			appleMobileWebAppStatusBarStyle: '#ffffff'
		},
		css: {
			loaderOptions: {
				sass: {
					prependData: `
						@import "@/Styles/Variables.scss";
						@import "@/Styles/Keyframes.scss";
					`
				}
			}
		}
};
