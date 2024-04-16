<script setup>
import { computed } from 'vue'
import { gameService } from '../services/GameService.js';
import { AppState } from '../AppState.js';

const triforce = computed(() => AppState.triforce)

function mine() {
	gameService.mine()
}

</script>


<template>

	<div class="container-fluid mb-5">
		<div class="row py-4">
			<h1 class="col text-center title">MOON MINER</h1>
		</div>
		<div class="row justify-content-center">
			<div class="col-2 d-flex" id="evilMoon">
				<img src="/src/assets/img/moon.png" alt="image of moon" class="h-100 w-100" @click="mine()">
			</div>
		</div>
	</div>

</template>


<style lang="scss" scoped>
.title {
	font-size: 6em !important;
	font-family: "Honk", system-ui;
}

/* ONCLICK FOR IMAGE ANIMATION */
#evilMoon {
	border: 0;
	/* outline: @ border; */
	padding: 1.5rem 2rem;
	font-size: 4rem;
	font-family: monospace;
	box-shadow: 0px 5px 10px RGBA(darken(dodgerblue, 40%));
	transition: all .3s;
	cursor: pointer;
	border-radius: 5px;
	// border-bottom: 4px solid lighten(gray, 70%);
}

#evilMoon:hover {
	box-shadow: 0px 15px 25px -5px RGBA(darken(dodgerblue, 40%));
	transform: scale(1.03);
}

#evilMoon:active {
	box-shadow: 0px 4px 8px RGBA(darken(dodgerblue, 30%));
	transform: scale(.98);
}
</style>