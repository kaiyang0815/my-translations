import { defineConfig } from "vitepress";

export default defineConfig({
	lang: "zh-CN",
	title: "Kai yang 的翻译合集",
	description: "本站存放了本人在学习iOS开发过程中，阅读的英文技术文章和官方文档的译文，同时也作为自己学习时的笔记。",
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
				text: "文档翻译",
				items: [
					{ text: "Swift", link: "/zh/Swift" },
					{ text: "SwiftUI", link: "/zh/SwiftUI" },
					{ text: "SwiftData", link: "/zh/SwiftData" },
				],
			},
			{
				text: "文章翻译",
				items: [],
			},
		],
		sidebar: {
			"/zh/Swift/": [
				{
					text: "Swift",
					collapsed: false,
					items: [
						{ text: "关于 Swift", link: "/zh/Swift/about-swift" },
						{ text: "Swift 之旅", link: "/zh/Swift/a-swift-tour" },
						{ text: "基础知识", link: "/zh/Swift/the-basics" },
						{ text: "基础操作", link: "/zh/Swift/basic-operators" },
						{ text: "字符串与字符", link: "/zh/Swift/strings-and-characters" },
						{ text: "集合类型", link: "/zh/Swift/collection-types" },
						{ text: "控制流", link: "/zh/Swift/control-flow" },
						{ text: "函数", link: "/zh/Swift/functions" },
					],
				},
			],
			"/zh/SwiftUI/": [],
			"/zh/SwiftData": [],
			"/zh/SwiftTesting": [],
			"/zh/Xcode": [],
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
			pattern: "https://github.com/kaiyang0815/my-doc-translations/blob/main/:path",
			text: "在 GitHub 上编辑此页面",
		},
		socialLinks: [
			{ icon: "x", link: "..." },
			{ icon: "github", link: "https://github.com/kaiyang0815/my-doc-translations" },
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
