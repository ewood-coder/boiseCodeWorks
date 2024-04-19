<script setup>
import { computed } from 'vue';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';
import { blogsService } from '../services/BlogsService.js';
import { Blog } from '../models/Blog.js';


// defineProps({
// 	blog: Blog
// })

defineProps({ blog: { type: Blog, required: true } })

const account = computed(() => AppState.account)
const blogs = computed(() => AppState.blogs)

async function destroyBlog(blogId) {
	try {
		const wantsToDestroy = await Pop.confirm("Are you sure you want to delete that blog?")

		if (!wantsToDestroy) return

		logger.log('DESTROYING BLOG ✈️🗑️', blogId)

		await blogsService.destroyBlog(blogId)
	} catch (error) {
		Pop.error(error)
	}
}
</script>

<template>

	<div class="bg-light rounded shadow d-flex flex-wrap justify-content-between brdr">

		<div class="col-12 col-md-6 col-lg-8">
			<div class="p-3 w-100">
				<div class="d-flex gap-3">
					<img :src=blog.creator.picture alt="picture of creator" class="pfp">
					<RouterLink :to="{ name: 'Profile', params: { profileId: blog.creatorId } }"
						class="align-content-center">

						<h4> {{ blog.creator.name }}</h4>

					</RouterLink>
				</div>

				<hr />

				<h4 class="fw-bold text-decoration-underline mb-4">{{ blog.title }}</h4>

				<!-- NOTE: This is the css version of the line below it -->
				<!-- <p class="preview">{{ blog.body }}</p> -->

				<!-- NOTE: This is if you want to shorten the words displayed in the whole text body -->
				<!-- <p>{{ blog.body.split(' ').slice(0, 30).join(' ') + "..." }}</p> -->
				<p>{{ blog.body }}</p>


				<h5 class="mt-5"><u><b>Posted</b></u>: {{ blog.createdAt.toLocaleDateString() }}</h5>

				<button v-if="blog.creatorId == account?.id" @click="destroyBlog(blog.id)"
					class="btn btn-outline-danger mt-3" :title="`Delete Blog`">
					<i class="mdi mdi-trash-can-outline"></i>
				</button>
			</div>
		</div>

		<div class="col-12 col-md-6 col-lg-4 p-2 d-flex">
			<img :src="blog.imgUrl" :alt="blog.title" class="img-fluid blog-img">
		</div>

	</div>

</template>

<style scoped lang="scss">
// NOTE: The problem with using the css version to limit how many words appear on the body, is that the styling is relative to font size. If you change it in the html, you have to change it in here too.
// .preview {
// 	max-height: 3.3rem;
// 	overflow: hidden;
// }


.brdr {
	border: solid black 2px;
	overflow: hidden;
}

.blog-img {
	width: 100%;
	height: auto;
	// max-height: 20em;
	object-fit: cover;
	border-radius: 15px;
}

.responsive {
	width: 100%;
	height: auto;
}

.pfp {
	width: 5rem;
	height: 5rem;
	border-radius: 9999px;
	margin: 5px;
}
</style>
