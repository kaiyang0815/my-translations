import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "zh-CN",
  title: "Kaiyang 的翻译合集",
  description:
    "本站存放了本人在学习iOS开发过程中，阅读的英文技术文章和官方文档的译文，同时也作为自己学习时的笔记。",
  sitemap: {
    hostname: "https://docs.kaiyang.xyz",
  },
  markdown: {
    lineNumbers: true,
    image: {
      // 默认禁用图片懒加载
      lazyLoading: true,
    },
  },
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "文档",
        items: [
          // {
          //   text: "Typescript",
          //   link: "/zh/docs/Typescript"
          // },
          { text: "Swift", link: "/zh/docs/Swift" },
          { text: "SwiftUI", link: "/zh/docs/SwiftUI" },
          { text: "SwiftData", link: "/zh/docs/SwiftData" },
          { text: "UIKit", link: "/zh/docs/UIKit" },
        ],
      },
      {
        text: "书本",
        items: [
          {
            text: "Refactoring UI",
            link: "/zh/books/refactoring-ui",
          },
        ],
      },
      {
        text: "文章",
        items: [{ text: "iOS相关", link: "/zh/articles/ios" }],
      },
    ],
    sidebar: {
      "/zh/docs/Swift/": [
        {
          text: "Swift",
          collapsed: false,
          items: [
            { text: "关于 Swift", link: "/zh/docs/Swift/about-swift" },
            { text: "Swift 之旅", link: "/zh/docs/Swift/a-swift-tour" },
            { text: "基础知识", link: "/zh/docs/Swift/the-basics" },
            { text: "基础操作", link: "/zh/docs/Swift/basic-operators" },
            {
              text: "字符串与字符",
              link: "/zh/docs/Swift/strings-and-characters",
            },
            { text: "集合类型", link: "/zh/docs/Swift/collection-types" },
            { text: "控制流", link: "/zh/docs/Swift/control-flow" },
            { text: "函数", link: "/zh/docs/Swift/functions" },
            { text: "闭包", link: "/zh/docs/Swift/closures" },
            { text: "枚举", link: "/zh/docs/Swift/enumerations" },
            {
              text: "结构体和类",
              link: "/zh/docs/Swift/structures-and-classes",
            },
          ],
        },
      ],
      "/zh/docs/SwiftUI/": [
        {
          text: "SwiftUI",
          collapsed: false,
          items: [
            {
              text: "View fundamentals",
              link: "/zh/docs/SwiftUI/views/view-fundamentals",
            },
            {
              text: "View styles",
              link: "/zh/docs/SwiftUI/views/view-styles",
            },
          ],
        },
      ],
      "/zh/docs/SwiftData": [],
      "/zh/docs/SwiftTesting": [],
      "/zh/docs/Xcode": [],
      "/zh/books/refactoring-ui": [
        {
          text: "Refactoring UI",
          collapsed: false,
          items: [
            {
              text: "从零开始",
              link: "/zh/books/refactoring-ui/starting-from-scratch",
            },
          ],
        },
      ],
    },
    search: {
      provider: "local",
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: "搜索文档",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "无法找到相关结果",
                resetButtonTitle: "清除查询条件",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                },
              },
            },
          },
        },
      },
    },
    outline: "deep",
    editLink: {
      pattern:
        "https://github.com/kaiyang0815/my-doc-translations/blob/main/:path",
      text: "在 GitHub 上编辑此页面",
    },
    socialLinks: [
      { icon: "x", link: "..." },
      {
        icon: "github",
        link: "https://github.com/kaiyang0815/my-doc-translations",
      },
    ],
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "medium",
        forceLocale: true,
      },
    },
    footer: {
      message: "基于 MIT 许可发布",
      copyright: "版权所有 © 2024 Kaiyang",
    },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    // 移动端 - 外观
    darkModeSwitchLabel: "外观",

    // 移动端 - 返回顶部
    returnToTopLabel: "返回顶部",

    // 移动端 - menu
    sidebarMenuLabel: "菜单",
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh",
    },
  },
});
