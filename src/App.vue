<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <Footer />
  </div>
</template>

<script>
	import Footer from '@/Components/Static/Footer.vue'

	export default {
		components: {
			Footer
		}
	}
</script>