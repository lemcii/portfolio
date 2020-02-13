import "~/assets/css/main.css";

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
    head.htmlAttrs = { lang: "en", class: "h-full min-h-full bg-gray-900" };
    head.bodyAttrs = { class: "h-full min-h-full bg-gray-900" };

    Vue.component("Layout", DefaultLayout);
}
