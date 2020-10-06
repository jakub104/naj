<template>
	<nav class="nav-component">
		<router-link to="/">
			<img class="logo" :src="logo" alt="NA-J logo">
		</router-link>
		<ul class="nav-list">
			<li id="/" class="nav-item">
				<router-link class="nav-link" to="/" exact>O nas</router-link>
			</li>
			<li id="/oferta" class="nav-item">
				<router-link class="nav-link" to="/oferta">Oferta</router-link>
			</li>
			<li id="/realizacje" class="nav-item">
				<router-link class="nav-link" to="/realizacje">Realizacje</router-link>
			</li>
			<li id="/kontakt" class="nav-item">
				<router-link class="nav-link" to="/kontakt">Kontakt</router-link>
			</li>
		</ul>
		<div class="nav-list-mobile">x</div>
		<div class="line" :style="{left: `${lineMoved}px`, width: `${lineWidth}px`}"/>
	</nav>
</template>

<script>
	import logo from '@/Assets/Images/logo/logo.svg'
	export default {
		name: "Navigation",
		data() {
			return {
				logo,
				lineMoved: 0,
				lineWidth: 0
			}
		},
		watch:{
			$route (to){
				const element = document.getElementById(to.path)
				const {left, width} = element.getBoundingClientRect()
				if (window.getComputedStyle(element).getPropertyValue('opacity') === '1') {
					this.lineMoved = left
				}
				else {
					this.lineMoved = left + 20
				}
				this.lineWidth = width
			}
		},
		mounted() {
			this.lineMoved = document.getElementById('/').getBoundingClientRect().left + 20
			this.lineWidth = document.getElementById('/').getBoundingClientRect().width
		}
	}
</script>

<style lang="scss" scoped>
	.nav-component {
		position: relative;
		width: 100%;
		height: 110px;
		max-width: 1000px;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 0 auto;
		padding: 0 20px;
		.logo {
			position: absolute;
			animation: preloader 1.3s both;
			width: 100px;
			@media (min-width: 700px) {
				width: 150px;
			}
		}
		.nav-list {
			height: 100%;
			display: none;
			align-items: flex-end;
			list-style: none;
			padding-bottom: 10px;
			.nav-item {
				text-transform: uppercase;
				margin: 0 10px;
				font-size: 22px;
				letter-spacing: 2px;
				cursor: pointer;
				&:nth-child(1) {
					animation: leftElation 0.3s 1s both;
				}
				&:nth-child(2) {
					animation: leftElation 0.3s 1.1s both;
				}
				&:nth-child(3) {
					animation: leftElation 0.3s 1.2s both;
				}
				&:nth-child(4) {
					animation: leftElation 0.3s 1.3s both;
				}
				.nav-link {
					color: rgb($primary, 0.6);
					text-decoration: none;
					transition: all 0.2s ease;
					&:hover {
						color: $primary;
					}
				}
				.router-link-active {
					color: $primary;
				}
			}
			@media (min-width: 700px) {
				display: flex;
			}
		}
		.nav-list-mobile {
			height: 100%;
			display: flex;
			align-items: flex-end;
			padding-bottom: 10px;
			font-size: 22px;
			@media (min-width: 700px) {
				display: none;
			}
		}
		.line {
			position: fixed;
			top: 95px;
			width: 100px;
			height: 2px;
			display: none;
			background-color: $primary;
			transition: 0.5s ease;
			animation: opacity 0.3s 1.5s both;
			@media (min-width: 700px) {
				display: flex;
			}
		}
	}
</style>