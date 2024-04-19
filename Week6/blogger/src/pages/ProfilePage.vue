<script setup>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop.js';
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import BlogCard from '../components/BlogCard.vue';
import { blogsService } from '../services/BlogsService.js';
import { profilesService } from '../services/ProfilesService.js';



const profile = computed(() => AppState.activeProfile)
const blogs = computed(() => AppState.profileBlogs)

const route = useRoute()

async function getProfile() {
	try {
		await profilesService.getProfile(route.params.profileId)
	} catch (error) {
		Pop.toast("could not get profile", 'error'),
			console.error(error)
	}
}

async function getProfileBlogs() {
	try {
		await blogsService.getProfileBlogs(route.params.profileId)
	} catch (error) {
		Pop.toast("Could not get profile blogs", 'error')
		console.error(error)
	}
}

onMounted(() => {
	getProfile()
	getProfileBlogs()
})

</script>


<template>
	<div class="container mt-2">
		<!-- NOTE v-if keeps the profile from trying to draw, before the network response is back -->
		<section class="row" v-if="profile">
			<img class="cover-img" :src="profile.coverImg" alt="">
			<div class="col-12 text-center">
				<img class="profile-img mt-3" :src="profile.picture" alt="">
				<h2 class="mt-2">{{ profile.name }}</h2>
			</div>
			<div class="col-12">
				<p class="mt-2 text-center">{{ profile.bio }}</p>
			</div>
			<!-- <div class="col-12 text-end mb-3">
				<a v-if="profile.linkedin" :href="profile.linkedin" target="_blank"><i
						class="mdi mdi-linkedin fs-4"></i></a>
			</div> -->
		</section>

		<section class="row justify-content-center">
			<div v-for="blog in blogs" :key="blog.id" class="col-10 mb-2">
				<BlogCard :blog="blog" />
			</div>
		</section>
	</div>
</template>


<style lang="scss" scoped>
.cover-img {
	width: 100%;
	height: 20vh;
	margin-bottom: -10vh;
	object-fit: cover;
	object-position: center;
}

.profile-img {
	height: 100px;
	width: 100px;
	object-fit: cover;
	object-position: center;
}
</style>
