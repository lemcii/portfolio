import "./index.css";

import { Theme } from "vitepress/types";

import Layout from "./Layout.vue";
import NotFound from "./NotFound.vue";

const theme: Theme = {
  Layout,
  NotFound,
};

export default theme;
