<template>
	<div class="view" :style="{animation: !$loaded ? 'bottomElation 0.5s 1s both' : 'bottomElation 0.5s both'}">
		<h3>W naszej ofercie znajduje się między innymi:</h3>
		<ul>
			<li>Budowa domów</li>
			<li>Remonty</li>
			<li>Mury oporowe</li>
			<li>Elewacje</li>
			<li>Docieplenia</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Offer",
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>