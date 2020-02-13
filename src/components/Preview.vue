<template>
    <div>
        <!-- <div v-if="post.cover_image">
            <g-image alt="Cover image" :src="post.cover_image" />
        </div> -->
        <div class="mt-8">
            <g-link :to="post.path">
                <h2 v-html="post.title" class="font-semibold" />
            </g-link>
            <p v-html="post.description" class="text-gray-700 mt-2" />
        </div>
    </div>
</template>

<script>
export default {
    props: ["post"],
};
</script>
