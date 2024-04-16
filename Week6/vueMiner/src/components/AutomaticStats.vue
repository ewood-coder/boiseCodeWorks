<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { gameService } from '../services/GameService.js';


const automaticUpgrades = computed(() => AppState.automaticUpgrades)

</script>


<template>

	<h5>AUTOMATIC STATS</h5>
	<div id="automaticUpgradeCount" v-for="upgrade in automaticUpgrades" :key="upgrade.name">
		<span class="d-flex align-items-center mb-4">
			<h3 class="borderBox text-center">{{ upgrade.quantity ?? 0 }}</h3>
			<h5 class="ms-3 newFont me-5 txtTransform">{{ upgrade.name }}s</h5>
			<h1><i class="mdi mdi-timer-outline"></i></h1>
			<h3 class="borderBox ms-3 text-center">{{ upgrade.multiplier * upgrade.quantity }}</h3>
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