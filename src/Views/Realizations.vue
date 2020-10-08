<template>
	<fragment>
		<Gallery
			:images="gallery.images"
			:activeIndex="gallery.index"
			@index-changed="changeIndex"
			@exit="closeGallery"
		/>
		<div class="view" :style="{animation: !$loaded ? 'bottomElation 0.5s 1s both' : 'bottomElation 0.5s both'}">
			<Order
				title="Wznosimy"
				content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum possimus quia soluta quisquam minus voluptas iste temporibus praesentium reprehenderit ducimus. Aperiam maxime accusantium distinctio nam, eveniet modi quo non rem."
				id="terracedHouse"
				:images="photos.terracedHouse"
				:primaryIndex="4"
				@photo-selected="selectPhoto"
			/>
			<Order
				title="Budujemy"
				content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum possimus quia soluta quisquam minus voluptas iste temporibus praesentium reprehenderit ducimus. Aperiam maxime accusantium distinctio nam, eveniet modi quo non rem."
				id="buildingAHouse"
				:images="photos.buildingAHouse"
				:primaryIndex="4"
				@photo-selected="selectPhoto"
			/>
			<Order
				title="Remontujemy"
				content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum possimus quia soluta quisquam minus voluptas iste temporibus praesentium reprehenderit ducimus. Aperiam maxime accusantium distinctio nam, eveniet modi quo non rem."
				id="renovation"
				:images="photos.renovation"
				:primaryIndex="4"
				@photo-selected="selectPhoto"
			/>
			<Order
				title="Pomagamy"
				content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum possimus quia soluta quisquam minus voluptas iste temporibus praesentium reprehenderit ducimus. Aperiam maxime accusantium distinctio nam, eveniet modi quo non rem."
				id="vestibules"
				:images="photos.vestibules"
				:primaryIndex="1"
				@photo-selected="selectPhoto"
			/>
			<Order
				title="Spełniamy Marzenia"
				content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum possimus quia soluta quisquam minus voluptas iste temporibus praesentium reprehenderit ducimus. Aperiam maxime accusantium distinctio nam, eveniet modi quo non rem."
				id="swimmingPool"
				:images="photos.swimmingPool"
				:primaryIndex="6"
				@photo-selected="selectPhoto"
			/>
		</div>
	</fragment>
</template>

<script>
	import Order from '@/Components/Realizations/Order'
	import Gallery from '@/Components/Realizations/Gallery'
	const importAll = (r) => {
		const images = []
		r.keys().map(r).forEach((img, i) => images.push({image: img, id: i}))
		return images;
	}
	const swimmingPool = importAll(require.context('@/Assets/Images/realizations/swimming-pool', false, /\.(png|jpe?g|svg)$/));
	const buildingAHouse = importAll(require.context('@/Assets/Images/realizations/building-a-house', false, /\.(png|jpe?g|svg)$/));
	const renovation = importAll(require.context('@/Assets/Images/realizations/renovation', false, /\.(png|jpe?g|svg)$/));
	const vestibules = importAll(require.context('@/Assets/Images/realizations/vestibules', false, /\.(png|jpe?g|svg)$/));
	const terracedHouse = importAll(require.context('@/Assets/Images/realizations/terraced-house', false, /\.(png|jpe?g|svg)$/));

	export default {
		name: "Realizations",
		components: {
			Order,
			Gallery
		},
		data() {
			return {
				photos: {
					swimmingPool,
					buildingAHouse,
					renovation,
					vestibules,
					terracedHouse
				},
				gallery: {}
			}
		},
		methods: {
			changeIndex(number) {
				this.gallery.index += number
			},
			closeGallery() {
				this.gallery = {}
			},
			selectPhoto(id, index) {
				this.gallery = {
					images: this.photos[id],
					index
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>