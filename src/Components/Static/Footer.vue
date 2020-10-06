<template>
	<footer class="footer-component">
		<div class="contact">
			<div class="contact-element" @click="call">
				<fa-icon class="icon" icon="phone" />
				601 816 153
			</div>
			<div class="contact-element" @click="writeMail">
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
		},
		methods: {
			call() {
				window.open('tel:601816153')
			},
			writeMail() {
				const hours = new Date().getHours()
				if (hours < 18) {
					window.open('mailto:na-j@wp.pl?subject=Oferta&body=Dzień%20dobry,%0AZainteresowała%20mnie%20państwa%20oferta.%20Piszę%20w%20sprawie...');
				}
				else {
					window.open('mailto:na-j@wp.pl?subject=Oferta&body=Dobry%20wieczór,%0AZainteresowała%20mnie%20państwa%20oferta.%20Piszę%20w%20sprawie...');
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.footer-component {
		width: 100%;
		height: 70px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 7px;
		background-color: rgb($secondary, 0.5);
		color: $primary;
		.contact {
			display: flex;
			justify-content: space-evenly;
			width: 100%;
			max-width: 1000px;
			font-size: 18px;
			font-weight: bold;
			letter-spacing: 1px;
			cursor: pointer;
			.contact-element {
				width: 150px;
				text-align: center;
				transition: all 0.2s ease;
				@media (hover: hover) {
					&:hover {
						letter-spacing: 2px;
						.icon {
							transform: scale(1.2) rotate(-5deg);
						}
					}
				}
				.icon {
					transition: all 0.2s ease;
					margin-right: 5px;
				}
			}
		}
		.copyright-info {
			font-size: 16px;
			color: $primary;
			font-weight: bold;
			opacity: 0.4;
		}
	}
</style>