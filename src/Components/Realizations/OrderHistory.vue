<template>
	<div class="order-component">
		<GalleryPreview
			:images="images"
			:primaryIndex="primaryIndex"
			:id="id"
			:big="true"
			@photo-selected="(id, index) => $emit('photo-selected', id, index)"
		/>
		<div class="order-specification">
			<h3 class="order-title">{{title}}</h3>
			<p class="order-description" v-html="content" />
			<button class="order-button" @click="$emit('photo-selected', id, 0)">Zobacz galerię</button>
		</div>
	</div>
</template>

<script>
	import GalleryPreview from '@/Components/Realizations/GalleryPreview'
	export default {
		name: "OrderHistory",
		props: {
			title: String,
			content: String,
			id: String,
			images: Array,
			primaryIndex: Number,
		},
		components: {
			GalleryPreview
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
		.order-specification {
			width: 450px;
			margin: 30px 0;
			.order-title {
				position: relative;
				display: inline-block;
				margin: 0;
				font-size: 30px;
				&::before {
					content: '';
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
					width: 30%;
					height: 3px;
					background-color: $secondary;
					border-radius: 3px;
				}
			}
			.order-desctiption {
				margin: 20px 0;
			}
			.order-button {
				position: relative;
				width: 200px;
				display: block;
				margin: 0 auto;
				padding: 5px;
				border: 3px solid $primary;
				background-color: $bg;
				color: $primary;
				border-radius: 30px;
				text-transform: uppercase;
				text-decoration: none;
				font-size: 18px;
				font-weight: bold;
				letter-spacing: 1px;
				transition: 0.3s ease;
				cursor: pointer;
				&:hover {
					background-color: $primary;
					color: $bg;
				}
			}
		}
	}
</style>