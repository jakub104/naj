<template>
	<footer class="footer-component">
		<div class="contact">
			<div>
				<fa-icon class="icon" icon="phone" />
				601 816 153
			</div>
			<div>
				<fa-icon class="icon" icon="envelope" />
				na-j@wp.pl
			</div>
		</div>
		<div class="copyright-info">NA-J 2020 &copy;</div>
	</footer>
</template>

<script>
	export default {
		name: "Footer",
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer-component {
		width: 100%;
		height: 100px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding-top: 10px;
		background-color: $logo;
		color: $bg;
		.contact {
			display: flex;
			justify-content: space-evenly;
			width: 100%;
			max-width: 1000px;
			font-size: 22px;
			.icon {
				margin-right: 5px;
			}
		}
		.copyright-info {
			color: $primary;
			font-weight: bold;
			/* letter-spacing: 1px; */
		}
	}
</style>