<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { gameService } from '../services/GameService.js';


const clickUpgrades = computed(() => AppState.clickUpgrades)

function buyClickUpgrade(name) {
	gameService.buyClickUpgrade(name)
}

</script>


<template>

	<h5>CLICK UPGRADES</h5>
	<span>
		<span class="d-flex align-items-center" v-for="upgrade in clickUpgrades" :key="upgrade.name">
			<button id="pickaxe-btn" type="button" class="btn btn-primary btn3d fs-4 d-flex my-3 px-5 text-center"
				@click="buyClickUpgrade(upgrade.name)">
				&nbsp;&nbsp;{{ upgrade.price }}&nbsp;
				<i class="mdi mdi-triforce"></i>
			</button>
			<h5 class="ms-3 newFont txtTransform">{{ upgrade.name }}
				+{{ upgrade.multiplier }}</h5>
		</span>
	</span>

</template>


<style lang="scss" scoped>
.newFont {
	font-family: "Overpass", sans-serif;
	text-transform: capitalize;
}


.btn3d {
	position: relative;
	top: -6px;
	border: 0;
	transition: all 40ms linear;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-left: 2px;
	margin-right: 2px;
}

.btn3d:active:focus,
.btn3d:focus:hover,
.btn3d:focus {
	-moz-outline-style: none;
	outline: medium none;
}

.btn3d:active,
.btn3d.active {
	top: 2px;
}

.btn3d.btn-primary {
	box-shadow: 0 0 0 1px #417fbd inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #4D5BBE, 0 8px 8px 1px rgba(0, 0, 0, 0.5);
	background-color: #4274D7;
}

.btn3d.btn-primary:active,
.btn3d.btn-primary.active {
	box-shadow: 0 0 0 1px #417fbd inset, 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 1px 3px 1px rgba(0, 0, 0, 0.3);
	background-color: #4274D7;
}

.btn3d.btn-danger {
	box-shadow: 0 0 0 1px #b93802 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #AA0000, 0 8px 8px 1px rgba(0, 0, 0, 0.5);
	background-color: #D73814;
}

.btn3d.btn-danger:active,
.btn3d.btn-danger.active {
	box-shadow: 0 0 0 1px #b93802 inset, 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 1px 3px 1px rgba(0, 0, 0, 0.3);
	background-color: #D73814;
}
</style>