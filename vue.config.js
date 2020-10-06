module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? '/naj/' : '/',
		pwa: {
			name: 'NA-J',
			themeColor: '#202020',
			msTileColor: '#000000',
			appleMobileWebAppCapable: 'yes',
			appleMobileWebAppStatusBarStyle: '#202020'
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
