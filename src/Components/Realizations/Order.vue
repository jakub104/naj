<template>
	<div class="order-component">
		<GalleryPreview
			:images="images"
			:primaryIndex="primaryIndex"
			:id="id"
			:big="false"
			@photo-selected="(id, index) => $emit('photo-selected', id, index)"
		/>
		<h4 class="order-title">{{title}}</h4>
	</div>
</template>

<script>
	import GalleryPreview from '@/Components/Realizations/GalleryPreview'
	export default {
		name: "Order",
		props: {
			title: String,
			id: String,
			images: Array,
			primaryIndex: Number,
		},
		components: {
			GalleryPreview
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.order-component {
		width: 350px;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: $bg;
		padding: 20px;
		margin: 20px;
		border-radius: 20px;
		box-shadow: 0 0 20px $secondary;
		transition: all 0.3s ease;
		&:hover {
			transform: scale(1.03);
		}
		.order-title {
			margin: 20px 0 0 0;
		}
	}
</style>