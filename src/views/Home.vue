<template>
	<div class="view" :style="{animation: !$loaded ? 'bottomElation 0.5s 1s both' : 'bottomElation 0.5s both'}">
		<img class="preview-image" :src="home" alt="home">
		<div class="description">
			Jesteśmy firmą remontowo-budowlaną, działamy na terenie województwa pomorskiego.
			Od ponad 13 lat pomagamy spełniać <b>Na-J</b>większe marzenia o własnym domu.
			Dostosowujemy nasze usługi do potrzeb każdego inwestora.
			Realizujemy budowy domów jednorodzinnych i wielorodzinnych od organizacji nadzoru budowlanego i placu budowy poprzez wznoszenie fundamentów, murów, stropów, aż po dach.
			Wykonujemy też docieplenia, elewacje, remonty; budujemy ogrodzenia i mury oporowe.
			W całym procesie doradzamy i wspieramy swoją wiedzą i doświadczeniem.
			Każdą inwestycję wykonujemy z <b>Na-J</b>wyższą starannością oraz pełnym zaangażowaniem.
			Działamy zgodnie z zasadami sztuki budowlanej, korzystając ze sprawdzonych metod i materiałów, dzięki czemu mamy pewność, że jakość naszych usług sprosta <b>Na-J</b>wyższym oczekiwaniom nawet <b>Na-J</b>bardziej wymagającego klienta.
		</div>
		<div class="site-preview">
			<div class="site-image" :style="{backgroundImage: `url(${offer})`}" />
			<div class="site-ad">
				<h3 class="site-title">Oferta</h3>
				<p class="site-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officia ullam libero ad nisi nulla. Nemo, doloribus! Aperiam assumenda vitae culpa dicta magnam! Nulla numquam unde excepturi nesciunt magnam a?</p>
				<router-link to="/oferta" class="site-link">Sprawdź</router-link>
			</div>
		</div>
		<div class="site-preview">
			<div class="site-image" :style="{backgroundImage: `url(${realizations})`}" />
			<div class="site-ad">
				<h3 class="site-title">Realizacje</h3>
				<p class="site-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officia ullam libero ad nisi nulla. Nemo, doloribus! Aperiam assumenda vitae culpa dicta magnam! Nulla numquam unde excepturi nesciunt magnam a?</p>
				<router-link to="/realizacje" class="site-link">Sprawdź</router-link>
			</div>
		</div>
		<div class="site-preview">
			<div class="site-image" :style="{backgroundImage: `url(${contact})`}" />
			<div class="site-ad">
				<h3 class="site-title">Kontakt</h3>
				<p class="site-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officia ullam libero ad nisi nulla. Nemo, doloribus! Aperiam assumenda vitae culpa dicta magnam! Nulla numquam unde excepturi nesciunt magnam a?</p>
				<router-link to="/kontakt" class="site-link">Sprawdź</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import logo from '@/Assets/Images/logo/logo.svg'
import home from '@/Assets/Images/home/home.jpeg'
import offer from '@/Assets/Images/home/offer.jpg'
import realizations from '@/Assets/Images/home/realizations.jpg'
import contact from '@/Assets/Images/home/contact.jpg'
export default {
	name: 'Home',
	data() {
		return {
			logo,
			home,
			offer,
			realizations,
			contact
		}
	}
}
</script>

<style lang="scss" scoped>
	.preview-image {
		width: 700px;
		max-width: 100%;
	}
	.description {
		font-size: 20px;
		margin-bottom: 100px;
	}
	.site-preview {
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
		&:last-child {
			margin-bottom: 0;
		}
		.site-image {
			width: 550px;
			max-width: 100%;
			height: 350px;
			background: no-repeat center center;
			background-size: cover;
			border-radius: 20px;
		}
		.site-ad {
			margin: 50px 30px;
			width: 450px;
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
</style>
