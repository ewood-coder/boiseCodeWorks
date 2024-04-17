<script setup>
import { AppState } from '../AppState.js';
import Navbar from '../components/Navbar.vue';
import { Art } from '../models/Art.js';
import { artService } from '../services/ArtService.js';
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';

const props = defineProps(['art'])
console.log(props.art)

</script>

<template>

	<div class="card">
		<img :src=props.art.imgUrls.regular alt="Card image cap">
	</div>

</template>

<style lang="scss" scoped>
@import "../src/assets/scss/main.scss";

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
</style>
