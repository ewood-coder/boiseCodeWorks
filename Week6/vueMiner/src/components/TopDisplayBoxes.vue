<script setup>
import { computed } from 'vue'
import { gameService } from '../services/GameService.js';
import { AppState } from '../AppState.js';


const triforce = computed(() => AppState.triforce)

const clickWorth = computed(() => {
	return AppState.clickUpgrades.reduce(
		(accumulator, upgrade) => accumulator + (upgrade.multiplier * upgrade.quantity),
		1
	);
})

const autoUpgradeWorth = computed(() => {
	return AppState.automaticUpgrades.reduce(
		(accumulator, upgrade) => accumulator + (upgrade.multiplier * upgrade.quantity),
		0
	);
})
</script>


<template>

	<div id="topBoxes" class="row justify-content-center">
		<div class="accentYellow rcLeft col-2 d-flex justify-content-between">
			<p id="clickCollectorCount" class="fs-3 pt-3">+{{ clickWorth }}</p>
			<i class="mdi mdi-gesture-tap fs-1"></i>
		</div>
		<div class="brightYellow rcCenter col-3 d-flex justify-content-between">
			<i class="mdi mdi-triforce fs-7 ms-2"></i>
			<span id="triforce" class="fs-6 pt-3 me-2">{{ triforce }}</span>
		</div>
		<div class="accentYellow rcRight col-2 d-flex justify-content-between">
			<!-- NOTE: PROGRESS BAR THAT MOVES WITH THE TIMER FUNCTION -->
			<!-- <div class="round-time-bar pt-2" style="--duration: 5;">
						<div class="fs-3"></div>
					</div> -->
			<i class="mdi mdi-timer-outline fs-1"></i>
			<p id="autoCollectorCount" class="fs-3 pt-3">+{{ autoUpgradeWorth }}</p>
		</div>
	</div>

</template>


<style lang="scss" scoped>
.rcLeft {
	border-radius: 25px 0 0 0;
}

.rcCenter {
	border-radius: 25px 25px 0 0 !important;
}

.rcRight {
	border-radius: 0 25px 0 0;
}

.brightYellow {
	background-color: var(--brightYellow);
	/* border: solid; */
	border-radius: 25px;
}

.accentYellow {
	background-color: var(--accentYellow);
	/* border: solid; */
	height: 61px;
	margin-top: 41px !important;
}




.round-time-bar div {
	height: 5px;
	animation: roundtime calc(var(--duration) * 1s) steps(var(--duration)) forwards;
	transform-origin: left center;
	background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(255, 255, 255));
	background-color: rgb(200, 200, 200);
}

@keyframes roundtime {
	to {
		/* More performant than animating `width` */
		transform: scaleX(0);
	}
}

.round-time-bar[data-style="smooth"] div {
	animation: roundtime calc(var(--duration) * 1s) linear forwards;
}
</style>