export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/index1/index',

  ],
  subpackages: [
    {
      "root": "subpackages/sub",
      "name": "subPackagesSub",
      "pages": ["index"]
    },
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
