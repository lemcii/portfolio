<template>
    <div class="h-full flex flex-col justify-between">
        <div class="max-w-5xl">
            <banner />
        </div>
        <keywords class="order-first mb-8" />
        <!-- Written with Nuxt.js/Vue & Tailwind CSS -->
    </div>
</template>

<script>
import Keywords from "~/components/Keywords.vue";
import Banner from "~/components/Banner.vue";

export default {
    components: {
        Keywords,
        Banner,
    },
};
</script>
