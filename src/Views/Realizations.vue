<template>
	<fragment>
		<Gallery
			:images="gallery.images"
			:activeIndex="gallery.index"
			@index-changed="changeIndex"
			@exit="closeGallery"
		/>
		<div class="view" :style="{animation: !$loaded ? 'bottomElation 0.5s 1s both' : 'bottomElation 0.5s both'}">
			<section>
				<OrderHistory
					title="Wznosimy"
					content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum possimus quia soluta quisquam minus voluptas iste temporibus praesentium reprehenderit ducimus. Aperiam maxime accusantium distinctio nam, eveniet modi quo non rem."
					id="terracedHouse"
					:images="photos.terracedHouse"
					:primaryIndex="4"
					@photo-selected="selectPhoto"
				/>
				<OrderHistory
					title="Budujemy"
					content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum possimus quia soluta quisquam minus voluptas iste temporibus praesentium reprehenderit ducimus. Aperiam maxime accusantium distinctio nam, eveniet modi quo non rem."
					id="buildingAHouse"
					:images="photos.buildingAHouse"
					:primaryIndex="4"
					@photo-selected="selectPhoto"
				/>
				<OrderHistory
					title="Ocieplamy"
					content='
						Latem 2018 roku podjęliśmy się ocieplenia jednorodzinnego domku w urokliwym miejscu przy lesie.
						Klientka była bardzo zadowolona, gdyż jak się okazało rachunki za ogrzewanie gazowe miała niższe, niż początkowo szacowała.
						Ta historia kolejny raz potwierdziła <span class="naj"><strong>Na-J</strong>wyższą</span> jakość naszych usług.
					'
					id="warming"
					:images="photos.warming"
					:primaryIndex="7"
					@photo-selected="selectPhoto"
				/>
				<OrderHistory
					title="Remontujemy"
					content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum possimus quia soluta quisquam minus voluptas iste temporibus praesentium reprehenderit ducimus. Aperiam maxime accusantium distinctio nam, eveniet modi quo non rem."
					id="renovation"
					:images="photos.renovation"
					:primaryIndex="4"
					@photo-selected="selectPhoto"
				/>
				<OrderHistory
					title="Pomagamy"
					content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum possimus quia soluta quisquam minus voluptas iste temporibus praesentium reprehenderit ducimus. Aperiam maxime accusantium distinctio nam, eveniet modi quo non rem."
					id="vestibules"
					:images="photos.vestibules"
					:primaryIndex="1"
					@photo-selected="selectPhoto"
				/>
				<OrderHistory
					title="Spełniamy Marzenia"
					content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum possimus quia soluta quisquam minus voluptas iste temporibus praesentium reprehenderit ducimus. Aperiam maxime accusantium distinctio nam, eveniet modi quo non rem."
					id="swimmingPool"
					:images="photos.swimmingPool"
					:primaryIndex="6"
					@photo-selected="selectPhoto"
				/>
			</section>
			<section>
				<h2 class="orders-title">Pozostałe realizacje</h2>
				<div class="orders">
					<Order
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						id="swimmingPool"
						:images="photos.swimmingPool"
						:primaryIndex="6"
						@photo-selected="selectPhoto"
					/>
					<Order
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						id="swimmingPool"
						:images="photos.swimmingPool"
						:primaryIndex="6"
						@photo-selected="selectPhoto"
					/>
					<Order
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						id="swimmingPool"
						:images="photos.swimmingPool"
						:primaryIndex="6"
						@photo-selected="selectPhoto"
					/>
					<Order
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						id="swimmingPool"
						:images="photos.swimmingPool"
						:primaryIndex="6"
						@photo-selected="selectPhoto"
					/>
					<Order
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						id="swimmingPool"
						:images="photos.swimmingPool"
						:primaryIndex="6"
						@photo-selected="selectPhoto"
					/>
					<Order
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						id="swimmingPool"
						:images="photos.swimmingPool"
						:primaryIndex="6"
						@photo-selected="selectPhoto"
					/>
					<Order
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						id="swimmingPool"
						:images="photos.swimmingPool"
						:primaryIndex="6"
						@photo-selected="selectPhoto"
					/>
					<Order
						title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
						id="swimmingPool"
						:images="photos.swimmingPool"
						:primaryIndex="6"
						@photo-selected="selectPhoto"
					/>
				</div>
			</section>
		</div>
	</fragment>
</template>

<script>
	import OrderHistory from '@/Components/Realizations/OrderHistory'
	import Order from '@/Components/Realizations/Order'
	import Gallery from '@/Components/Realizations/Gallery'
	const importAll = (r) => {
		const images = []
		r.keys().map(r).forEach((img, i) => images.push({image: img, id: i}))
		return images;
	}
	const swimmingPool = importAll(require.context('@/Assets/Images/realizations/swimming-pool', false, /\.(png|jpe?g|svg)$/));
	const buildingAHouse = importAll(require.context('@/Assets/Images/realizations/building-a-house', false, /\.(png|jpe?g|svg)$/));
	const warming = importAll(require.context('@/Assets/Images/realizations/warming', false, /\.(png|jpe?g|svg)$/));
	const renovation = importAll(require.context('@/Assets/Images/realizations/renovation', false, /\.(png|jpe?g|svg)$/));
	const vestibules = importAll(require.context('@/Assets/Images/realizations/vestibules', false, /\.(png|jpe?g|svg)$/));
	const terracedHouse = importAll(require.context('@/Assets/Images/realizations/terraced-house', false, /\.(png|jpe?g|svg)$/));

	export default {
		name: "Realizations",
		components: {
			OrderHistory,
			Order,
			Gallery
		},
		data() {
			return {
				photos: {
					swimmingPool,
					buildingAHouse,
					warming,
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
	.orders-title {
		position: relative;
		display: inline-block;
		margin: 100px 0 30px 0 ;
		font-size: 35px;
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
	.orders {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>