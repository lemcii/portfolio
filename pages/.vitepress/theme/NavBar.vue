<template>
  <nav
    class="flex -mx-6 divide-x divide-gray-300 dark:divide-gray-800 text-gray-500 font-medium"
    v-if="navData"
  >
    <a
      class="outline-none hover:text-blue-600 hover:underline focus:text-blue-600 focus:underline px-6"
      v-for="{ text, link, target, rel, ariaLabel } of navData"
      :class="{ 'text-blue-600': isActiveLink(link) }"
      :href="withBase(link)"
      :target="target"
      :rel="rel"
      :aria-label="ariaLabel"
    >
      {{ text }}
    </a>
  </nav>
</template>

<script>
import { computed } from "vue";
import { useSiteData, useRoute } from "vitepress";

function withBase(path) {
  return (useSiteData().value.base + path).replace(/\/+/g, "/");
}

const normalizePath = (path) => {
  path = path
    .replace(/#.*$/, "")
    .replace(/\?.*$/, "")
    .replace(/\.html$/, "");
  if (path.endsWith("/")) {
    path += "index";
  }
  return path;
};

export default {
  setup() {
    const route = useRoute();

    const isActiveLink = (link) => {
      return normalizePath(withBase(link)) === normalizePath(route.path);
    };

    return {
      withBase,
      isActiveLink,
      navData:
        process.env.NODE_ENV === "production"
          ? // navbar items do not change in production
            useSiteData().value.themeConfig.nav
          : // use computed in dev for hot reload
            computed(() => useSiteData().value.themeConfig.nav),
    };
  },
};
</script>
