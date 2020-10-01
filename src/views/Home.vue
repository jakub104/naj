<template>
	<div class="home-view">
		<img class="logo" alt="NA-J logo" :src="logo">
		<div class="description">
			Strona w budowie...
			<hr class="line" />
		</div>
	</div>
</template>

<script>
import logo from '@/Assets/Images/logo/logo.svg'

export default {
	name: 'Home',
	data() {
		return {
			logo
		}
	}
}
</script>

<style lang="scss" scoped>
	.home-view {
		width: 100%;
		height: calc(100% - 100px);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-weight: normal;
		.logo {
			width: 450px;
			max-width: 100%;
			animation: bounce 0.5s both;
		}
		.description {
			font-size: 30px;
			margin: 30px 0 0 0;
			animation: elation 0.3s 0.5s both;
		}
		.line {
			width: 100px;
			height: 3px;
			background-color: $decorative;
			border: none;
			margin: 0 auto;
			border-radius: 3px;
		}
	}
</style>
