<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import ClickUpgrades from './components/ClickUpgrades.vue';
import ClickStats from './components/ClickStats.vue';
import AutomaticUpgrades from './components/AutomaticUpgrades.vue';
import AutomaticStats from './components/AutomaticStats.vue';
import TitlewithMoon from './components/TitlewithMoon.vue';
import TopDisplayBoxes from './components/TopDisplayBoxes.vue';


// const AppState = computed(()=> AppState)
// TODO: ADD JS SCRIPTS
</script>


<template>

	<body>
		<main>

			<!-- SECTION: Title w/ clickable moon -->
			<TitlewithMoon />


			<div class="container-fluid text-light mb-3">
				<!-- SECTION: TOP 3 DISPLAY BOXES -->
				<TopDisplayBoxes />

				<!-- SECTION: BOTTOM DISPLAY BOX -->
				<div id="bottomBoxes" class="row justify-content-around brightYellow py-3 mx-5">

					<!-- SECTION: UPGRADE BUTTONS BOX -->
					<div class="darkYellow col-5 sunkenBox box2">
						<div class="row p-2">

							<div class="col">
								<ClickUpgrades />
							</div>

							<div class="col">
								<AutomaticUpgrades />
							</div>

						</div>
					</div>

					<!-- SECTION: STATS BOX -->
					<div class="darkYellow col-5 sunkenBox box2">
						<div class="row p-2">

							<div class="col">
								<ClickStats />
							</div>

							<div class="col">
								<AutomaticStats />
							</div>

						</div>
					</div>
				</div>
			</div>

		</main>
	</body>

</template>


<style lang="scss">
@import "../src/assets/scss/main.scss";

:root {
	--brightYellow: #fec940;
	--darkYellow: #f5b308;
	--accentYellow: #fe9814;
	--duration: 5;
}

body {
	background-image: url(../src/assets/img/space2.png);
	background-size: cover;
	font-family: "Black Han Sans", sans-serif;

	height: 100dvh;
	overscroll-behavior: none;
}

.brightYellow {
	background-color: var(--brightYellow);
	/* border: solid; */
	border-radius: 25px;
}

.darkYellow {
	background-color: var(--darkYellow);
	/* border: solid; */
	border-radius: 25px;
}

.fs-6 {
	font-size: 1.8em !important;
}

.fs-7 {
	font-size: 4em !important;
}

.sunkenBox {
	border-radius: 25px;
	transition: all ease 0.2s;
}

.box {
	box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
}

.box2 {
	box-shadow: inset 0px 1px 10px 0px rgba(0, 0, 0, 0.5);
}

.txtTransform {
	text-transform: capitalize;
}
</style>