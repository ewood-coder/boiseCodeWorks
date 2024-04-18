<script setup>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js';
import { AppState } from '../AppState.js';
import BlogCard from '../components/BlogCard.vue';
import BlogFormModal from '../components/BlogFormModal.vue';


const blogs = computed(() => AppState.blogs)
const account = computed(() => AppState.account)

async function getBlogs() {
	try {
		await blogsService.getBlogs()
	}
	catch (error) {
		Pop.error(error);
	}
}

onMounted(() => {
	getBlogs()
})

</script>

<template>

	<div class="container">
		<section class="row">
			<div class="col-12 mt-3 d-flex align-items-center gap-4">
				<h1>Blogs</h1>
				<!-- NOTE v-if="account != null" if the user is logged in, show the button -->
				<button v-if="account" class="btn btn-outline-dark" title="Create a new blog!" data-bs-toggle="modal"
					data-bs-target="#blogFormModal">
					<i class="mdi mdi-plus"></i>
				</button>
			</div>
		</section>

		<hr />

		<section class="row">
			<div v-for="blog in blogs" :key="blog.id" class="col-12 mb-5">
				<BlogCard :blog="blog" />
			</div>
			<BlogFormModal />
		</section>
	</div>
</template>

<style scoped lang="scss"></style>
