const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const path = require('path')

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	}
}

module.exports = withPlugins([
	withPWA({
		dest: 'public',
		runtimeCaching,
	})
], nextConfig)