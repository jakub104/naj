<template>
	<div id="app">
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		<Navigation />
		<router-view/>
		<Footer />
	</div>
</template>

<script>
	import Footer from '@/Components/Static/Footer'
	import Navigation from '@/Components/Static/Navigation'

	export default {
		components: {
			Footer,
			Navigation
		}
	}
</script>