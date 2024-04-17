<script setup>
import { AppState } from '../AppState.js';
import Navbar from '../components/Navbar.vue';
import { Art } from '../models/Art.js';
import { artService } from '../services/ArtService.js';
import { computed, onMounted, ref } from 'vue';
import Pop from '../utils/Pop.js';
import axios from 'axios';


const props = defineProps(['art'])
console.log(props.art)

const isLiked = computed(() => {
	return props.art.admirers.find(a => a.id == AppState.account?.id)
})

function likeArt() {
	try {
		artService.likeArt(props.art)
	}
	catch (error) {
		Pop.toast('Could not admire art', 'error');
	}
}

const dialog = ref()

function showModal() {
	dialog.value.showModal()
}

</script>

<template>

	<div class="card">
		<img :src=props.art.imgUrls.regular alt="Card image cap" @click="showModal()" class="pointer">
		<button class="btn btn-success imgCorners" @click="likeArt()" v-if="!isLiked">
			<i class="mdi mdi-thumb-up"></i>
		</button>
		<div v-else class="d-flex justify-content-center align-items-center">
			<i class="mdi mdi-heart"></i>
			<p class="m-0">&nbsp;&nbsp;Already Liked&nbsp;&nbsp;</p>
			<i class="mdi mdi-heart"></i>
		</div>
	</div>

	<dialog ref="dialog">
		<img :src=props.art.imgUrls.regular alt="Card image cap" class="responsive">
		<h3 class="mt-4"><u>Description:</u></h3>
		<p class="p-3 fs-5">{{ props.art.description }}</p>

		<div class="pfpBG">
			<p class="fw-bold fs-3 mt-4 text-light">Admirers:</p>
			<img v-for="profile in props.art.admirers" :key="profile.id" :src="profile.picture" class="pfp"
				:title="profile.name">

			<form method="dialog">
				<button class="btn btn-danger m-2">Close</button>
			</form>
		</div>
	</dialog>

</template>

<style lang="scss" scoped>
@import "../src/assets/scss/main.scss";

.pointer {
	cursor: pointer;
}

.responsive {
	width: 100%;
	height: auto;
}

.pfp {
	width: 5rem;
	height: 5rem;
	border-radius: 9999px;
	margin: 5px;
}

.pfpBG {
	background-color: #0a966c;
	border-radius: 20px;
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

.imgCorners {
	border-radius: 0px;
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

	.imgCorners {
		border-radius: 0px;
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

	.imgCorners {
		border-radius: 0px;
	}
}
</style>
