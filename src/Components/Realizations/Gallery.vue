<template>
	<div class="gallery-wrapper" :style="{animation: closed ? 'opacityReverse 0.3s both' : 'opacity 0.3s both'}" v-if="images">
		<div class="image" :style="{backgroundImage: `url(${images[activeIndex].image})`}" />
		<div>
			<div class="part" @click="changeImage('-')" />
			<div class="part" @click="changeImage('+')" />
		</div>
		<div>
			<fa-icon class="arrow" icon="angle-left" @click="changeImage('-')" />
			<fa-icon class="arrow" icon="angle-right" @click="changeImage('+')" />
		</div>
		<fa-icon class="exit" icon="times" @click="close" />
	</div>
</template>

<script>
	export default {
		name: "Gallery",
		props: {
			images: Array,
			activeIndex: Number
		},
		data() {
			return {
				closed: false
			}
		},
		methods: {
			changeImage(sign) {
				if (sign === '-') {
					this.activeIndex === 0 ? this.$emit('index-changed', this.images.length - 1) : this.$emit('index-changed', -1)
				}
				else if (sign === '+') {
					this.activeIndex === this.images.length - 1 ? this.$emit('index-changed', -(this.images.length - 1)) : this.$emit('index-changed', 1)
				}
			},
			close() {
				this.closed = true
				setTimeout(() => {
					this.$emit('exit')
					this.closed = false
				}, 300)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gallery-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgb($black, 0.9);
		z-index: 2;
		@mixin animated {
			cursor: pointer;
			transition: all 0.2s ease;
			@media (hover: hover) {
				&:hover {
					opacity: 0.7;
				}
			}
		}
		.image {
			position: absolute;
			top: 50%;
			left: 50%;
			width: calc(100% - 80px);
			height: calc(100% - 40px);
			transform: translate(-50%, -50%);
			background: center center no-repeat;
			background-size: contain;
			transition: all 0.3s ease;
		}
		.part {
			position: absolute;
			top: 0;
			width: 50%;
			height: 100%;
			cursor: pointer;
			&:nth-child(1) {
				left: 0;
			}
			&:nth-child(2) {
				right: 0;
			}
		}
		.arrow {
			position: absolute;
			top: 50%;
			font-size: 30px;
			transform: translateY(-50%);
			color: $secondary;
			&:nth-child(1) {
				left: 10px;
			}
			&:nth-child(2) {
				right: 10px;
			}
			&:active {
				transform: scale(0.9) translateY(-55%);
			}
			@include animated();
		}
		.exit {
			position: absolute;
			top: 20px;
			right: 20px;
			font-size: 20px;
			color: $secondary;
			&:active {
				transform: scale(0.9);
			}
			@include animated();
		}
	}
</style>