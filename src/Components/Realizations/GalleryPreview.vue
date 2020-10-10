<template>
	<div :class="['gallery-preview-component', {'big': big}]">
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
</template>

<script>
	export default {
		name: "GalleryPreview",
		props: {
			images: Array,
			primaryIndex: Number,
			id: String,
			big: Boolean
		},
		data() {
			return {
				filteredImages: this.images.filter((image, index) => index !== this.primaryIndex)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.gallery-preview-component {
		width: 100%;
		max-width: 300px;
		height: 300px;
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
				@media (hover: hover) {
					&:hover {
						transform: scale(1.1);
						opacity: 0.8;
					}
				}
			}
		}
	}
	.big {
		max-width: 500px;
		height: 500px;
	}
</style>