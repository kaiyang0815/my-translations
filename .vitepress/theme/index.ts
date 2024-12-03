import DefaultTheme from "vitepress/theme";
import "./style/index.css"; //引入自定义的样式
import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";
import vImageViewer from "vitepress-plugin-image-viewer/lib/vImageViewer.vue";
import { useData, useRoute } from "vitepress";
import { toRefs } from "vue";
import giscusTalk from "vitepress-plugin-comment-with-giscus";

export default {
  // extends: DefaultTheme,
  ...DefaultTheme, //或者这样写也可
  setup() {
    const { frontmatter } = toRefs(useData());
    // Get route
    const route = useRoute();
    // Using
    imageViewer(route);

    giscusTalk(
      {
        repo: "kaiyang0815/my-translations",
        repoId: "R_kgDONKjs_Q",
        category: "Announcements", // default: `General`
        categoryId: "DIC_kwDONKjs_c4CkzkH",
        mapping: "pathname", // default: `pathname`
        inputPosition: "top", // default: `top`
        lang: "en", // default: `zh-CN`
        // i18n setting (Note: This configuration will override the default language set by lang)
        // Configured as an object with key-value pairs inside:
        // [your i18n configuration name]: [corresponds to the language pack name in Giscus]
        locales: {
          "zh-Hans": "zh-CN",
          "en-US": "en",
        },
        homePageShowComment: false, // Whether to display the comment area on the homepage, the default is false
        lightTheme: "light", // default: `light`
        darkTheme: "transparent_dark", // default: `transparent_dark`
        // ...
      },
      {
        frontmatter,
        route,
      },
      // Whether to activate the comment area on all pages.
      // The default is true, which means enabled, this parameter can be ignored;
      // If it is false, it means it is not enabled.
      // You can use `comment: true` preface to enable it separately on the page.
      true
    );
  },
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx);
    // Register global components, if you don't want to use it, you don't need to add it
    ctx.app.component("vImageViewer", vImageViewer);
    // ...
  },
};
