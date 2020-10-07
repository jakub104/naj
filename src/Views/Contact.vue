<template>
	<div class="view" :style="{animation: !$loaded ? 'bottomElation 0.5s 1s both' : 'bottomElation 0.5s both'}">
		<iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5510.186421819084!2d18.147285790437735!3d54.50266855901661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdbe7437cab131%3A0x907a4c3a4415fda5!2sKr%C3%B3tka%204%2C%2084-217%20Cz%C4%99stkowo!5e0!3m2!1spl!2spl!4v1602012476405!5m2!1spl!2spl" width="1000" height="500" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
		<div class="info">
			<a href="https://www.google.com/maps/dir//54.50281,18.1505209/@54.5028099,18.1461435,16z/data=!3m1!4b1?hl=pl" target="_blank">
				<div class="address">
					<fa-icon class="home-icon" icon="home" />
					<fa-icon class="car-icon" icon="car-side" />
					<div class="company-name">Na-J</div>
					<div>ul. Krótka 4</div>
					<div>84-217 Częstkowo</div>
				</div>
			</a>
			<form class="form" @submit.prevent="sendEmail">
				<div class="input-div">
					<input
						id="name"
						class="input"
						type="text"
						placeholder=" "
						pattern="^.{3,}$"
						required
						v-model="name"
					/>
					<label for="name" class="label">Imię</label>
				</div>
				<div class="input-div">
					<input
						id="email"
						class="input"
						type="email"
						placeholder=" "
						pattern="^\S+@\S+\.\S+$"
						required
						v-model="email"
					/>
					<label for="email" class="label">Email</label>
				</div>
				<textarea
					class="content"
					required
					placeholder="Co chcesz nam przekazać?"
					v-model="content"
				/>
				<button class="submit" type="submit">
					Wyślij
					<fa-icon class="submit-icon" icon="envelope" />
				</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Contact",
		data() {
			return {
				name: '',
				email: '',
				content: ''
			}
		},
		methods: {
			sendEmail() {
				this.$db.collection('emails').add({
					name: this.name,
					email: this.email,
					content: this.content
				})
				window.open(`mailto:na-j@wp.pl?subject=${this.name}%20${this.email}&body=${this.content.replace(/\n/g, '%0A')}`);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.map {
		max-width: 100%;
		max-height: 60vh;
		border-radius: 10px;
		margin-bottom: 50px;
		background-color: $secondary;
	}
	.info {
		width: 100%;
		max-width: 1000px;
		margin: 0 auto;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		@media (min-width: 950px) {
			justify-content: space-between;
			flex-direction: row;
		}
		.address {
			position: relative;
			width: 250px;
			font-size: 20px;
			font-weight: bold;
			text-align: left;
			background-color: rgb($secondary, 0.5);
			padding: 20px;
			margin: 30px;
			border-radius: 20px 10px 20px 20px;
			@media (hover: hover) {
				&:hover .car-icon {
					opacity: 1;
					right: 30px;
					transition: all 0.3s ease;
				}
			}
			.company-name {
				font-size: 28px;
				letter-spacing: 2px;
			}
			.home-icon {
				position: absolute;
				top: -15px;
				right: -15px;
				font-family: 'FontAwesome';
				font-size: 40px;
			}
			.car-icon {
				position: absolute;
				top: 20px;
				right: 40px;
				font-family: 'FontAwesome';
				font-size: 13px;
				opacity: 0;
				@media (hover: none) {
					opacity: 1;
					right: 30px;
				}
			}
		}
		@mixin formItem {
			padding: 5px 10px;
			border: 2px solid $secondary;
			border-radius: 7px;
			outline: none;
			transition: all 0.2s ease;
			&:focus {
				border: 2px solid $primary;
			}
		}
		.form {
			width: 600px;
			max-width: 100%;
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 10px;
			.input-div {
				position: relative;
				width: 100%;
				.input {
					width: 100%;
					background-color: transparent;
					&:focus,
					&:not(:placeholder-shown) {
						~ .label {
							top: -17px;
							left: 0px;
							transform: scale(0.8);
							z-index: 2;
						}
					}
					&:valid {
						~ .label::after {
							content: '\f00c';
							font-family: FontAwesome;
							color: var(--decorative);
							margin-left: 5px;
						}
					}
					@include formItem();
				}
				.label {
					position: absolute;
					top: 50%;
					left: 15px;
					transform: translateY(-50%);
					color: var(--primary);
					z-index: -1;
					background-color: $bg;
					border-radius: 7px;
					padding: 0 5px;
					transition: all 0.2s ease;
					.icon {
						margin-right: 3px;
					}
				}
			}
			.content {
				@include formItem();
				grid-column: 1 / 3;
				height: 250px;
				resize: none;
				&:focus {
					&::placeholder {
						transition: all 0.3s ease;
						letter-spacing: 3px;
						opacity: 0;
					}
				}
			}
			.submit {
				@include formItem();
				grid-column: 1 / 3;
				text-transform: uppercase;
				letter-spacing: 1px;
				color: $logo;
				background-color: rgb($secondary, 0.5);
				font-weight: bold;
				font-size: 18px;
				cursor: pointer;
				.submit-icon {
					margin-left: 3px;
				}
			}
		}
	}
</style>