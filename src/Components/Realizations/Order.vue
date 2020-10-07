<template>
	<div class="order-component">
		<div class="gallery-preview">
			<div class="primary-image-wrapper" @click="$emit('photo-selected', id, primaryIndex)">
				<div class="primary-image" :style="{backgroundImage: `url(${images[primaryIndex].image})`}" />
			</div>
			<div
				class="secondary-image-wrapper"
				v-for="(image, index) in filteredImages.slice(0, 3)"
				:key="index + 1"
				@click="$emit('photo-selected', id, image.id)"
			>
				<div class="secondary-image" :style="{backgroundImage: `url(${image.image})`}" />
			</div>
		</div>
		<div class="order-specification">
			<h3 class="order-title">{{title}}</h3>
			<p class="order-description">{{content}}</p>
			<button @click="$emit('photo-selected', id, 0)">Zobacz galerię</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Order",
		props: {
			title: String,
			content: String,
			id: String,
			images: Array,
			primaryIndex: Number,
		},
		data() {
			return {
				filteredImages: this.images.filter((image, index) => index !== this.primaryIndex),
				galleryWidth: 0
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-component {
		width: 100%;
		max-width: 1300px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 50px auto;
		flex-wrap: wrap;
		&:nth-child(even) {
			flex-direction: row-reverse;
		}
		.gallery-preview {
			width: 100%;
			max-width: 500px;
			height: 500px;
			max-height: calc(100vw - 40px);
			display: grid;
			grid-template: repeat(3, 1fr) / repeat(3, 1fr);
			grid-gap: 10px;
			.primary-image-wrapper {
				overflow: hidden;
				border-radius: 30px 30px 10px 10px;
				grid-column: 1 / 4;
				grid-row: 1 / 3;
				.primary-image {
					width: 100%;
					height: 100%;
					background: $secondary center center no-repeat;
					background-size: cover;
					transition: all 0.3s ease;
					cursor: pointer;
					&:hover {
						transform: scale(1.1);
						opacity: 0.8;
					}
				}
			}
			.secondary-image-wrapper {
				overflow: hidden;
				border-radius: 10px;
				.secondary-image {
					width: 100%;
					height: 100%;
					background: $secondary center center no-repeat;
					background-size: cover;
					transition: all 0.3s ease;
					cursor: pointer;
					&:hover {
						transform: scale(1.1);
						opacity: 0.8;
					}
				}
			}
		}
		.order-specification {
			width: 450px;
			margin: 30px 0;
			.order-title {
				margin: 0;
				font-size: 30px;
			}
			.order-desctiption {
				margin: 20px 0;
			}
			.order-button {

			}
		}
	}
</style>