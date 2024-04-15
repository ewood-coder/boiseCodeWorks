<script setup>
import { computed } from 'vue'
import { AppState } from '../AppState.js'
import { gameService } from '../services/GameService.js';


//TODO: ADD JS SCRIPTS
</script>


<template>

	<h5>CLICK UPGRADES</h5>
	<span>
		<span class="d-flex align-items-center">
			<button id="pickaxe-btn" type="button" class="btn btn-primary btn3d fs-4 d-flex my-3 px-5 text-center"
				onclick="buyClickUpgrade('pickaxe')">
				&nbsp;&nbsp;50&nbsp;
				<i class="mdi mdi-triforce"></i>
			</button>
			<h5 class="ms-3 newFont">Pickaxe +1</h5>
		</span>
	</span>

	<span class="d-flex align-items-center">
		<button id="drill-btn" type="button" class="btn btn-primary btn3d fs-4 d-flex my-3 px-5 text-center"
			onclick="buyClickUpgrade('drill')">
			250&nbsp;
			<i class="mdi mdi-triforce"></i>
		</button>
		<h5 class="ms-3 newFont">Drill +5</h5>
	</span>

</template>


<style lang="scss">
@import "../src/assets/scss/main.scss";

.newFont {
	font-family: "Overpass", sans-serif !important;
	text-transform: capitalize !important;
}


.btn3d {
	position: relative !important;
	top: -6px !important;
	border: 0 !important;
	transition: all 40ms linear !important;
	margin-top: 10px !important;
	margin-bottom: 10px !important;
	margin-left: 2px !important;
	margin-right: 2px !important;
}

.btn3d:active:focus,
.btn3d:focus:hover,
.btn3d:focus {
	-moz-outline-style: none !important;
	outline: medium none !important;
}

.btn3d:active,
.btn3d.active {
	top: 2px !important;
}

.btn3d.btn-primary {
	box-shadow: 0 0 0 1px #417fbd inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #4D5BBE, 0 8px 8px 1px rgba(0, 0, 0, 0.5) !important;
	background-color: #4274D7 !important;
}

.btn3d.btn-primary:active,
.btn3d.btn-primary.active {
	box-shadow: 0 0 0 1px #417fbd inset, 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 1px 3px 1px rgba(0, 0, 0, 0.3) !important;
	background-color: #4274D7 !important;
}

.btn3d.btn-danger {
	box-shadow: 0 0 0 1px #b93802 inset, 0 0 0 2px rgba(255, 255, 255, 0.15) inset, 0 8px 0 0 #AA0000, 0 8px 8px 1px rgba(0, 0, 0, 0.5) !important;
	background-color: #D73814 !important;
}

.btn3d.btn-danger:active,
.btn3d.btn-danger.active {
	box-shadow: 0 0 0 1px #b93802 inset, 0 0 0 1px rgba(255, 255, 255, 0.15) inset, 0 1px 3px 1px rgba(0, 0, 0, 0.3) !important;
	background-color: #D73814 !important;
}
</style>