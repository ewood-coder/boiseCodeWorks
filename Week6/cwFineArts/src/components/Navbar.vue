<script setup>
import { onMounted, ref } from 'vue';
import { loadState, saveState } from '../utils/Store.js';
import Login from './Login.vue';

const theme = ref(loadState('theme') || 'light')

onMounted(() => {
	document.documentElement.setAttribute('data-bs-theme', theme.value)
})

function toggleTheme() {
	theme.value = theme.value == 'light' ? 'dark' : 'light'
	document.documentElement.setAttribute('data-bs-theme', theme.value)
	saveState('theme', theme.value)
}


</script>

<template>
	<nav class="navbar navbar-expand-sm px-3 borderBtm">
		<router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
			<div class="d-flex flex-column align-items-center newFont fs-1 fw-bold">
				CW
			</div>
		</router-link>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
			aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
			<!-- <ul class="navbar-nav me-auto">
				<li>
					<router-link :to="{ name: 'About' }" class="btn text-success lighten-30 selectable text-uppercase">
						About
					</router-link>
				</li>
			</ul> -->
			<!-- LOGIN COMPONENT HERE -->
			<div class="ms-auto text-end">
				<button class="btn text-dark fs-3 btn-success p-1 py-0 me-4" @click="toggleTheme"
					:title="`Enable ${theme == 'light' ? 'dark' : 'light'} theme.`">
					<i class="mdi" :class="theme == 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"></i>
				</button>
			</div>
			<Login />
		</div>
	</nav>
</template>

<style scoped>
a:hover {
	text-decoration: none;
}

.nav-link {
	text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
	border-bottom: 2px solid var(--bs-success);
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
}

@media screen and (min-width: 576px) {
	nav {
		height: 64px;
	}
}

.borderBtm {
	box-shadow: 0px 0px 5px 3px rgb(105, 105, 105);
}

.newFont {
	font-family: "Playfair Display", serif;
}
</style>
