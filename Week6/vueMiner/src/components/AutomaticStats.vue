<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { gameService } from '../services/GameService.js';


//TODO: ADD JS SCRIPTS
</script>


<template>

	<h5>AUTOMATIC STATS</h5>
	<div id="automaticUpgradeCount">
		<span class="d-flex align-items-center mb-4">
			<h3 class="borderBox text-center">0</h3>
			<h5 class="ms-3 newFont me-5">Mouse-<br />tronauts</h5>
			<h1><i class="mdi mdi-timer-outline"></i></h1>
			<h3 class="borderBox ms-3 text-center">0</h3>
		</span>

		<span class="d-flex align-items-center">
			<h3 class="borderBox text-center">0</h3>
			<h5 class="ms-3 newFont me-5">Space<br />Stations</h5>
			<h1><i class="mdi mdi-timer-outline"></i></h1>
			<h3 class="borderBox ms-3 text-center">0</h3>
		</span>
	</div>

</template>


<style lang="scss">
@import "../src/assets/scss/main.scss";

.newFont {
	font-family: "Overpass", sans-serif;
	text-transform: capitalize;
}

.borderBox {
	border: solid;
	border-color: white;
	padding: 5px 10px;
	border-radius: 5px;
	width: auto;
}
</style>