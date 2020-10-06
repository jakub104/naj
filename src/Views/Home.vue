<template>
	<div class="home-view">
		<img class="preview-image" :src="home" alt="home">
		<div class="description">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, quod incidunt ullam repudiandae tempora nulla nam quaerat dolore blanditiis est, a odio explicabo consequuntur tenetur? Dolores optio corrupti ipsa delectus.
			Doloremque harum pariatur eveniet velit, eius molestiae rerum minima voluptates alias! Non corporis mollitia eum tempore asperiores alias aliquam ipsa nam culpa cupiditate, sit obcaecati omnis reiciendis, corrupti quibusdam iste!
			Aliquid quisquam culpa, consequuntur molestias dolorum quia illo veritatis voluptatum tempore itaque consectetur numquam nam explicabo. Iure, culpa. Cumque, optio ad harum aspernatur ex maiores rem accusantium unde quos reprehenderit.
		</div>
		<div class="site-preview">
			<img class="site-image" src="https://picsum.photos/500/300" alt="">
			<div class="site-ad">
				<h3 class="site-title">Oferta</h3>
				<p class="site-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officia ullam libero ad nisi nulla. Nemo, doloribus! Aperiam assumenda vitae culpa dicta magnam! Nulla numquam unde excepturi nesciunt magnam a?</p>
				<router-link to="/oferta" class="site-link">Sprawdź</router-link>
			</div>
		</div>
		<div class="site-preview">
			<img class="site-image" src="https://picsum.photos/500/300" alt="">
			<div class="site-ad">
				<h3 class="site-title">Realizacje</h3>
				<p class="site-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officia ullam libero ad nisi nulla. Nemo, doloribus! Aperiam assumenda vitae culpa dicta magnam! Nulla numquam unde excepturi nesciunt magnam a?</p>
				<router-link to="/realizacje" class="site-link">Sprawdź</router-link>
			</div>
		</div>
		<div class="site-preview">
			<img class="site-image" src="https://picsum.photos/500/300" alt="">
			<div class="site-ad">
				<h3 class="site-title">Kontakt</h3>
				<p class="site-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officia ullam libero ad nisi nulla. Nemo, doloribus! Aperiam assumenda vitae culpa dicta magnam! Nulla numquam unde excepturi nesciunt magnam a?</p>
				<router-link to="/kontakt" class="site-link">Sprawdź</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import home from '@/Assets/Images/home.jpeg'
export default {
	name: 'Home',
	data() {
		return {
			home
		}
	}
}
</script>

<style lang="scss" scoped>
	.home-view {
		animation: bottomElation 0.5s both;
		.preview-image {
			width: 700px;
			max-width: 100%;
		}
		.description {
			font-size: 18px;
			margin-bottom: 100px;
		}
		.site-preview {
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin: 50px 0;
			flex-wrap: wrap;
			&:nth-child(even) {
				flex-direction: row-reverse;
			}
			.site-image {
				border-radius: 20px;
			}
			.site-ad {
				margin: 50px;
				width: 500px;
				.site-title {
					position: relative;
					font-size: 25px;
					margin: 0;
					&::before {
						content: '';
						position: absolute;
						bottom: 0;
						left: 50%;
						transform: translateX(-50%);
						width: 30px;
						height: 3px;
						background-color: $secondary;
						border-radius: 3px;
					}
				}
				.site-description {
					margin: 20px 0;
				}
				.site-link {
					position: relative;
					width: 130px;
					display: block;
					margin: 0 auto;
					padding: 5px;
					border: 3px solid $primary;
					color: $primary;
					border-radius: 30px;
					text-transform: uppercase;
					text-decoration: none;
					font-weight: bold;
					letter-spacing: 1px;
					transition: 0.3s ease;
					&:hover {
						background-color: $primary;
						color: $bg;
					}
				}
			}
		}
	}
</style>
