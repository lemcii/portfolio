<template>
    <div>
        <span v-if="error.statusCode === 404">
            Page not found.
        </span>
        <span v-else>
            An error occurred.
        </span>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    head() {
        return {
            title: this.message,
        };
    },
    computed: {
        statusCode() {
            return (this.error && this.error.statusCode) || 500;
        },
        message() {
            return this.error.message || `<%= messages.client_error %>`;
        },
    },
};
</script>
