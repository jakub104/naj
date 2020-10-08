<template>
	<div class="gallery-wrapper" :style="{animation: closed ? 'opacityReverse 0.3s both' : 'opacity 0.3s both'}" v-if="images">
		<div class="image-wrapper">
			<div
				id="image"
				class="image"
				:style="{backgroundImage: `url(${images[activeIndex].image})`}"
			/>
			<div class="inner-images">
				<img
					:class="['inner-image', {scale: index === activeIndex}]"
					v-for="(image, index) in images.slice(0, 10)"
					:key="index+1"
					:src="image.image"
					alt=""
					@click="$emit('index-changed', -activeIndex + index)"
				/>
			</div>
		</div>
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
		mounted() {

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
		.image-wrapper {
			position: absolute;
			top: 50%;
			left: 50%;
			width: calc(100% - 40px);
			height: calc(100% - 40px);
			transform: translate(-50%, -50%);
			.image {
				width: 100%;
				height:	100%;
				margin-bottom: 20px;
				background: transparent center center no-repeat;
				background-size: contain;
				transition: background-image 0.3s ease;
				@media (min-width: 800px) {
					height: calc(100% - 80px);
				}
			}
			.inner-images {
				display: none;
				@media (min-width: 800px) {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 60px;
					.inner-image {
						transition: 0.2s ease;
						width: 50px;
						height: 50px;
						margin: 10px;
						border-radius: 10px;
						opacity: 0.5;
						cursor: pointer;
						&:hover {
							opacity: 1;
						}
					}
					.scale {
						width: 60px;
						height: 60px;
						opacity: 1;
					}
				}
			}
		}
		.part {
			position: absolute;
			top: 0;
			width: 40%;
			height: 100%;
			cursor: pointer;
			background-color: transparent;
			opacity: 0;
			transition: all 0.3s ease;
			-webkit-tap-highlight-color: transparent;
			&:nth-child(1) {
				left: 0;
				background: linear-gradient(90deg, rgb($primary, 0.5) 0%, transparent 50%);
				@media (hover: hover) {
					&:hover {
						opacity: 1;
					}
				}
			}
			&:nth-child(2) {
				right: 0;
				background: linear-gradient(-90deg, rgb($primary, 0.5) 0%, transparent 50%);
				@media (hover: hover) {
					&:hover {
						opacity: 1;
					}
				}
			}
			&:hover {
				color: red;
			}
		}
		.arrow {
			position: absolute;
			top: 50%;
			font-size: 80px;
			padding: 10px;
			background-color: rgb($bg, 0.3);
			border-radius: 10px;
			transform: translateY(-50%);
			color: rgb($black, 0.7);
			-webkit-tap-highlight-color: transparent;
			&:nth-child(1) {
				left: 10px;
			}
			&:nth-child(2) {
				right: 10px;
			}
			&:active {
				transform: scale(0.99) translateY(-50%);
			}
			cursor: pointer;
				transition: all 0.1s ease;
		}
		.exit {
			position: absolute;
			top: 10px;
			right: 10px;
			font-size: 50px;
			padding: 10px;
			color: $secondary;
			&:active {
				transform: scale(0.9);
			}
			cursor: pointer;
			@media (hover: hover) {
				transition: all 0.2s ease;
				&:hover {
					transform: scale(1.1);
				}
			}
		}
		.magnifier {
			position: absolute;
			top: 0;
			left: 0;
			width: 100px;
			height: 100px;
			background-color: gray;
		}
	}
</style>