<script setup>
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'
import { Art } from './models/Art.js';
import HomePage from './pages/HomePage.vue';
import { artService } from './services/ArtService.js';


</script>

<template class="bgColor">
	<header>
		<Navbar />
	</header>
	<main>
		<HomePage />
	</main>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
	--main-height: calc(100vh - 32px - 64px);
}

.bgColor {
	background-color: #D9D9D9;
}
</style>
