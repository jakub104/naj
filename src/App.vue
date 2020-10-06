<template>
	<div id="app">
		<!-- <div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link>
		</div> -->
		<Navigation />
		<div class="content">
			<router-view/>
		</div>
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
<style lang="scss" scoped>
	.content {
		width: 100%;
		max-width: 1400px;
		height: calc(100% - 160px);
		margin: 0 auto;
		padding: 20px;
		text-align: center;
		animation: bottomElation 0.5s 1s both;
		overflow-y: scroll;
		@media (min-width: 700px) {
			height: calc(100% - 180px);
		}
		&::-webkit-scrollbar {
			width: 5px;
		}
		&::-webkit-scrollbar-thumb {
			background: $secondary;
			transition: all 0.3s ease;
			border-bottom: 20px solid $bg;
			&:hover {
				background: $secondary;
			}
		}
		&::-webkit-scrollbar-track {
			background: transparent;
		}
	}
</style>