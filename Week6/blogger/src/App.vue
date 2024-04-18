<script setup>
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'


</script>

<template>
	<header class="newFont">
		<Navbar />
	</header>
	<main class="newFont">
		<router-view />
	</main>
	<!-- <footer class="bg-dark text-light">
    Made with 💖 by CodeWorks
  </footer> -->
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
	--main-height: calc(100vh - 32px - 64px);
	--mainColor: #ffc21a;
}

.newFont {
	font-family: "Roboto Mono", monospace;
}

.mainColor {
	background-color: var(--mainColor);
}


// footer {
// 	display: grid;
// 	place-content: center;
// 	height: 32px;
// }</style>
