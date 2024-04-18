<script setup>
import { logger } from '../utils/Logger.js';
import { ref } from 'vue'
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js';
import { Modal } from 'bootstrap';

const editableBlogData = ref({
	title: '',
	body: '',
	imgUrl: '',
})

async function createBlog() {
	try {
		logger.log('Creating blog! ✈️', editableBlogData)
		// NOTE .value pulls out the data stored inside of the ref object (whatever is inside the parentheses)

		await blogsService.createBlog(editableBlogData.value)

		// NOTE form.reset()
		editableBlogData.value = {
			title: '',
			body: '',
			imgUrl: '',
		}

		// NOTE closes Modal after submit
		Modal.getOrCreateInstance('#blogFormModal').hide()
	}
	catch (error) {
		Pop.error(error);
	}
}
</script>


<template>
	<div class="modal fade" id="blogFormModal" tabindex="-1" aria-labelledby="blogFormModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="blogFormModalLabel">Create a new Blog!</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">

					<!-- NOTE .prevent is the equivalent of event.preventDefault() -->
					<form @submit.prevent="createBlog()">

						<div class="form-floating mb-3">
							<!-- NOTE sets up 2-way-data-binding with a property inside of the ref object -->
							<input v-model="editableBlogData.title" type="String" class="form-control" id="blogTitle"
								placeholder="Blog Title" required maxlength="100">
							<label for="blogTitle">Blog Title</label>
						</div>

						<div class="form-floating mb-3">

							<textarea v-model="editableBlogData.body" type="String" class="form-control rows" id="blogBody"
								placeholder="Blog Body/Text" required maxlength="10000">
							</textarea>

							<!-- <input v-model="editableBlogData.body" type="String" class="form-control" id="blogBody"
								placeholder="Blog Body/Text" required maxlength="10000"> -->
							<label for="blogBody">Blog Body/Text</label>
						</div>

						<div class="form-floating mb-3">
							<input v-model="editableBlogData.imgUrl" type="url" class="form-control" id="blogUrl"
								placeholder="Blog Thumbnail" maxlength="500">
							<label for="blogUrl">Insert Blog Image Address...</label>
						</div>

						<div class="text-end">
							<button class="btn btn-success" type="submit">Submit</button>
						</div>
					</form>


				</div>
			</div>
		</div>
	</div>

</template>


<style scoped>
.rows {
	min-height: 50vh;
}
</style>