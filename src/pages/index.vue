<template>
  <layout>
    <div v-html="$static.about.content" />
  </layout>
</template>

<static-query>
query {
  about(path: "/content/about/me/") {
    content
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: "Hi",
    };
  },
};
</script>

<style>
.content h2 {
  @apply mb-4 mt-8;
}

.content h3,
.content h4 {
  @apply mt-0 mb-4;
}

.content a {
  @apply border-b border-current;
}

.content a:hover {
  @apply text-white border-b-0;
}

.content p {
  @apply mb-4;
}
</style>
