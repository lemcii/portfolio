<template>
    <div class="bg-gray-100 p-3 pb-20 shadow-md">
        <div class="filter-custom hover:filter-none shadow-inner">
            <g-image :width="width" :height="height" :src="src" :alt="alt" />
        </div>
    </div>
</template>

<script>
export default {
    name: "Polariod",
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
        width: {
            type: Number,
        },
        height: {
            type: Number,
        },
    },
};
</script>
