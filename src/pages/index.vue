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
  @apply py-5;
}

.content h2,
.content h3,
.content h4 {
  @apply pb-5;
}

.content a {
  @apply border-b border-current;
}

.content a:hover {
  @apply text-white border-b-0;
}

.content p,
.content ul {
  @apply mb-5;
}
</style>
