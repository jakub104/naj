<template>
	<nav class="nav-component">
		<router-link to="/">
			<img class="logo" :src="logo" alt="NA-J logo">
		</router-link>
		<ul v-if="activeMenu" class="nav-list">
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
		<div class="line" :style="{left: `${lineMoved}px`, width: `${lineWidth}px`, opacity: lineMoved ? '1': '0'}"/>
		<div :class="['hamburger-menu', {'hamburger-active': activeMenu}]" @click="activeMenu = !activeMenu">
			<div class="hamburger-line" />
			<div class="hamburger-line" />
			<div class="hamburger-line" />
		</div>
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
				lineWidth: 0,
				activeMenu: true
			}
		},
		watch:{
			$route (to){
				if (window.innerWidth < 700) {
					this.activeMenu = false
				}
				else {
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
			}
		},
		mounted() {
			if (window.innerWidth < 700) {
				this.activeMenu = false
			}
			else {
				setTimeout(() => {
					this.lineMoved = document.getElementById('/').getBoundingClientRect().left
					this.lineWidth = document.getElementById('/').getBoundingClientRect().width
				}, 1500)
			}
			window.addEventListener("resize", () => {
				if (window.innerWidth < 700 && this.activeMenu) {
					this.activeMenu = false
				}
				else if (window.innerWidth >= 700) {
					if (!this.activeMenu) {
						this.activeMenu = true
					}
					const element = document.getElementById(this.$route.path)
					if (element) {
						const {left, width} = element.getBoundingClientRect()
						this.lineMoved = left
						this.lineWidth = width
					}
				}
			});
		}
	}
</script>

<style lang="scss" scoped>
	.nav-component {
		position: relative;
		width: 100%;
		height: 90px;
		max-width: 1000px;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		margin: 0 auto;
		padding: 10px 20px;
		@media (min-width: 700px) {
			height: 110px;
		}
		.logo {
			position: absolute;
			animation: preloader 1.3s both;
			width: 100px;
			@media (min-width: 700px) {
				width: 150px;
			}
		}
		.nav-list {
			position: fixed;
			top: 90px;
			left: 0;
			width: 100%;
			height: 300px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			background-color: rgb($bg, 0.9);
			list-style: none;
			z-index: 2;
			transform-origin: top;
			animation: mobileMenu 0.5s both;
			border-bottom: 2px solid $primary;
			&::after {
				content: '';
				position: absolute;
				bottom: 7px;
				width: 30px;
				height: 4px;
				background-color: $secondary;
				border-radius: 4px;
			}
			.nav-item {
				margin: 10px 0;
				text-transform: uppercase;
				font-size: 22px;
				letter-spacing: 2px;
				cursor: pointer;
				&:nth-child(1) {
					animation: bottomElation 0.3s 0.5s both;
				}
				&:nth-child(2) {
					animation: bottomElation 0.3s 0.6s both;
				}
				&:nth-child(3) {
					animation: bottomElation 0.3s 0.7s both;
				}
				&:nth-child(4) {
					animation: bottomElation 0.3s 0.8s both;
				}
				.nav-link {
					color: rgb($primary, 0.6);
					text-decoration: none;
					@media (hover: hover) {
						transition: all 0.2s ease;
						&:hover {
							color: $primary;
						}
					}
				}
				.router-link-active {
					color: $primary;
					font-weight: bold;
				}
			}
			@media (min-width: 700px) {
				position: relative;
				top: 0;
				width: auto;
				height: auto;
				flex-direction: row;
				align-items: flex-end;
				background-color: transparent;
				border-bottom: none;
				&::after {
					content: '';
					display: none;
				}
				.nav-item {
					margin: 0 10px;
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
						&:hover {
							color: $primary;
						}
					}
					.router-link-active {
						font-weight: normal;
					}
				}
			}
		}
		.hamburger-menu {
			position: relative;
			height: 21px;
			width: 30px;
			margin-bottom: 10px;
			animation: leftElation 0.3s 1s both;
			cursor: pointer;
			@media (min-width: 700px) {
				display: none;
			}
			.hamburger-line {
				position: absolute;
				width: 100%;
				height: 2px;
				background-color: $primary;
				transition: all 0.4s ease-in-out, transform 0.2s ease-in-out;
				&:nth-child(1) {
					top: 0;
				}
				&:nth-child(2) {
					top: calc(50% - 1px);
					width: 70%;
				}
				&:nth-child(3) {
					top: calc(100% - 1px);
				}
			}
		}
		.hamburger-active .hamburger-line {
			transition: all 0.3s ease-in-out, transform 0.2s 0.25s ease-in-out;
				&:nth-child(1) {
				top: calc(50% - 1px);
				transform: rotate(45deg);
			}
			&:nth-child(2) {
				top: calc(50% - 1px);
				width: 0;
				opacity: 0;
			}
			&:nth-child(3) {
				top: calc(50% - 1px);
				transform: rotate(-45deg);
			}
		}
		.line {
			position: fixed;
			top: 95px;
			width: 100px;
			height: 2px;
			display: none;
			background-color: $primary;
			transition: all 0.5s ease;
			@media (min-width: 700px) {
				display: flex;
			}
		}
	}
</style>