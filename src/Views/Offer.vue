<template>
	<div class="view" :style="{animation: !$loaded ? 'bottomElation 0.5s 1s both' : 'bottomElation 0.5s both', alignItems: 'space-between'}">
		<h3 class="view-title">W naszej ofercie znajduje się między innymi:</h3>
		<div class="offers">
			<div class="offer">
				<img class="offer-icon" :src="houses" alt="Icons made by Freepik from www.flaticon.com" />
				<div class="offer-content">Budowa domów</div>
			</div>
			<div class="offer">
				<img class="offer-icon" :src="renovation" alt="Icons made by Freepik from www.flaticon.com" />
				<div class="offer-content">Remonty</div>
			</div>
			<div class="offer">
				<img class="offer-icon" :src="wall" alt="Icons made by Freepik from www.flaticon.com" />
				<div class="offer-content">Mury oporowe</div>
			</div>
			<div class="offer">
				<img class="offer-icon" :src="facade" alt="Icons made by Freepik from www.flaticon.com" />
				<div class="offer-content">Elewacje</div>
			</div>
			<div class="offer">
				<img class="offer-icon" :src="temperature" alt="Icons made by Freepik from www.flaticon.com" />
				<div class="offer-content">Docieplenia</div>
			</div>
			<div class="offer">
				<img class="offer-icon" :src="excavator" alt="Icons made by Pixel perfect from www.flaticon.com" />
				<div class="offer-content">Prace ziemne</div>
			</div>
		</div>
	</div>
</template>

<script>
	import houses from '@/Assets/Images/offer/houses.svg'
	import renovation from '@/Assets/Images/offer/renovation.svg'
	import wall from '@/Assets/Images/offer/wall.svg'
	import facade from '@/Assets/Images/offer/facade.svg'
	import temperature from '@/Assets/Images/offer/temperature.svg'
	import excavator from '@/Assets/Images/offer/excavator.svg'
	export default {
		name: "Offer",
		data() {
			return {
				houses,
				renovation,
				wall,
				facade,
				temperature,
				excavator
			}
		}
	}
</script>

<style lang="scss" scoped>
	.view-title {
		font-size: 25px;
		margin: 20px 0;
	}
	.offers {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		.offer {
			.offer-icon {
				width: 100px;
				height: 100px;
				margin: 10px 30px;
			}
			.offer-content {
				font-size: 18px;
				text-transform: uppercase;
			}
		}
	}
</style>