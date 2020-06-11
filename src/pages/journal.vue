<template>
  <layout>
    <div class="h-full lg:min-h-48">
      <p>
        This is my work journal, expect senseless drivel, jargon, and uncertainty ahead.
      </p>
      <preview v-for="edge in $page.posts.edges" :key="edge.node.id" :post="edge.node" />
    </div>
  </layout>
</template>

<page-query>
query {
  posts: allPost {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>

<script>
import Preview from "~/components/Preview.vue";

export default {
  components: {
    Preview,
  },
  metaInfo: {
    title: "Journal",
  },
};
</script>
