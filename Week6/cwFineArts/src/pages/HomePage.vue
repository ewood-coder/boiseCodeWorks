<script setup>
import { AppState } from '../AppState.js';
import Navbar from '../components/Navbar.vue';
import { Art } from '../models/Art.js';
import { artService } from '../services/ArtService.js';
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import ArtCard from '../components/ArtCard.vue';


onMounted(() => {
	getArt()
})

const artworks = computed(() => AppState.artworks)

async function getArt() {
	try {
		await artService.getArt()
	}
	catch (error) {
		Pop.toast("Could not discover Art", 'error');
		console.error(error)
	}
}

async function nextPage() {
	try {
		await artService.nextPage()
	}
	catch (error) {
		Pop.toast("Could not change page", 'error')
	}
}

async function previousPage() {
	try {
		await artService.previousPage()
	}
	catch (error) {
		Pop.toast("Could not change page", 'error')
	}
}

</script>




<template>
	<div class="container-fluid newFont2">

		<section class="row text-center">

			<!-- SECTION: Pagination info & buttons -->
			<div class="col-4 col-md-2 vl align-content-start">
				<div class="sticky-top">
					<div>
						<i class="mdi mdi-book-open-blank-variant-outline fs-1"></i>
						<p class="fs-4">{{ AppState.currentPage }} of {{ AppState.totalPages }}</p>
					</div>
					<div class="flex-wrap">
						<button :hidden="AppState.currentPage == 35" class="custom-btn btn-3 my-2 w-100" @click="nextPage()">
							<span>Next</span>
						</button>
						<button :hidden="AppState.currentPage == 1" class="custom-btn btn-3 my-2 w-100"
							@click="previousPage()">
							<span>Previous</span>
						</button>
					</div>
				</div>
			</div>


			<!-- SECTION: Art images -->
			<div class="col-8 col-md-10">
				<div class="mt-4 fw-bold fs-3">Codeworks Institute Of Art</div>
				<hr />
				<div class="p-1 p-md-2 justify-content-center d-flex flex-wrap align-items-center">

					<ArtCard v-for="art in artworks" :key="art.id" :art="art" />

				</div>
			</div>
		</section>

	</div>
</template>




<style lang="scss" scoped>
@import "../src/assets/scss/main.scss";

.newFont2 {
	font-family: "Libre Baskerville", serif;
}

.vl {
	border-right: 3px solid #9c9c9c;
	height: auto;
	margin: 1em 0 1em 0;
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
	color: #0a966c;
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
	background: #0a966c;
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
	background: #0a966c;
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
