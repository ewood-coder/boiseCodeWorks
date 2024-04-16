<script setup>
import "./assets/scss/main.scss";
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'


</script>

<template class="bgColor">
	<header>
		<Navbar />
	</header>
	<main>

		<div class="container-fluid">

			<section class="row flex-column">
				<div>
					<i class="mdi mdi-book-open-blank-variant-outline"></i>
					<p>1 of 27</p>
				</div>
				<div>
					<button class="my-2">Next</button>
					<button class="my-2">Previous</button>
				</div>

			</section>

			<section class="row flex-column">
				<div>i have content</div>
			</section>

		</div>

	</main>
</template>

<style lang="scss">
@import "./assets/scss/main.scss";

:root {
	--main-height: calc(100vh - 32px - 64px);
}

.newFont {
	font-family: "Playfair Display", serif;
}

.bgColor {
	background-color: #D9D9D9;
}
</style>
