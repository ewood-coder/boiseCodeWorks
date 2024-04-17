<script setup>
import { AppState } from '../AppState.js';
import Navbar from '../components/Navbar.vue';
import { Art } from '../models/Art.js';
import { artService } from '../services/ArtService.js';
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';


onMounted(() => {
	getArt()
})

async function getArt() {
	try {
		await artService.getArt()
	}
	catch (error) {
		Pop.toast("Could not discover Art", 'error');
		console.error(error)
	}
}
</script>

<template>
	<main>

		<div class="container-fluid newFont2">

			<section class="row text-center">

				<div class="col-4 col-md-2 vl align-content-end">
					<div class="sticky-bottom">
						<div>
							<i class="mdi mdi-book-open-blank-variant-outline fs-1"></i>
							<p class="fs-4">1 of 27</p>
						</div>
						<div class="flex-wrap">
							<button class="custom-btn btn-3 my-2 w-100"><span>Next</span></button>
							<button class="custom-btn btn-3 my-2 w-100"><span>Previous</span></button>
						</div>
					</div>
				</div>


				<div class="col-8 col-md-10">
					<div class="mt-4 fw-bold fs-3">Codeworks Institute Of Art</div>

					<hr />

					<div class="row p-1 p-md-2 justify-content-center">
						<div class="card">
							<img class="" src="/src/assets/img/testImg.png" alt="Card image cap">
						</div>
						<div class="card">
							<img class="" src="/src/assets/img/testImg.png" alt="Card image cap">
						</div>
						<div class="card">
							<img class="" src="/src/assets/img/testImg.png" alt="Card image cap">
						</div>
						<div class="card">
							<img class="" src="/src/assets/img/testImg.png" alt="Card image cap">
						</div>
						<div class="card">
							<img class="" src="/src/assets/img/testImg.png" alt="Card image cap">
						</div>
						<div class="card">
							<img class="" src="/src/assets/img/testImg.png" alt="Card image cap">
						</div>
					</div>
				</div>
			</section>

		</div>

	</main>
</template>

<style lang="scss">
@import "../src/assets/scss/main.scss";

:root {
	--main-height: calc(100vh - 32px - 64px);
}

.newFont {
	font-family: "Playfair Display", serif;
}

.newFont2 {
	font-family: "Libre Baskerville", serif;
}

.bgColor {
	background-color: #D9D9D9;
}

.vl {
	border-right: 3px solid #9c9c9c;
	height: auto;
	margin: 1em 0 1em 0;
}

.card {
	box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	max-width: 23em;
	width: 100%;
	height: auto;
	object-fit: contain;
	margin: 5px;
	padding: 0;
}

@media only screen and (min-width: 767) {
	.card {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
		max-width: 18em;
		width: 100%;
		height: auto;
		object-fit: contain;
		margin: 5px;
		padding: 0;
	}
}

@media only screen and (max-width: 1023px) {
	.card {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
		max-width: 18em;
		width: 100%;
		height: auto;
		object-fit: contain;
		margin: 5px;
		padding: 0;
	}
}

.sticky {
	overflow: hidden;
}



// -----------------------------------------
.custom-btn {
	width: 130px;
	height: 40px;
	padding: 10px 25px;
	border: 2px solid;
	// font-family: 'Lato', sans-serif;
	font-family: "Libre Baskerville", serif;
	font-weight: 500;
	background: transparent;
	cursor: pointer;
	transition: all 0.3s ease;
	position: relative;
	display: inline-block;
}

.btn-3 {
	line-height: 39px;
	padding: 0;
}

.btn-3:hover {
	background: transparent;
	color: #818181;
}

.btn-3 span {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
}

.btn-3:before,
.btn-3:after {
	position: absolute;
	content: "";
	left: 0;
	top: 0;
	background: #888888;
	transition: all 0.3s ease;
}

.btn-3:before {
	height: 0%;
	width: 2px;
}

.btn-3:after {
	width: 0%;
	height: 2px;
}

.btn-3:hover:before {
	height: 100%;
}

.btn-3:hover:after {
	width: 100%;
}

.btn-3 span:before,
.btn-3 span:after {
	position: absolute;
	content: "";
	right: 0;
	bottom: 0;
	background: #888888;
	transition: all 0.3s ease;
}

.btn-3 span:before {
	width: 2px;
	height: 0%;
}

.btn-3 span:after {
	width: 0%;
	height: 2px;
}

.btn-3 span:hover:before {
	height: 100%;
}

.btn-3 span:hover:after {
	width: 100%;
}
</style>
