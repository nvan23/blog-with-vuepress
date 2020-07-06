module.exports  =  {
  title: 'HeeYee Gaming',
  dest: 'docs',
  themeConfig: {
    sidebar: 'auto', // Luôn hiển thị sidebar trong bài viết
    // Thiết lập các liên kế trên navbar
    nav: [
      { text: 'Trang Chủ', link: '/' },
      { text: 'Giới Thiệu', link: '/about/' },
      { text: 'Ehkoo', link: 'https://ehkoo.com' },
    ],
  },
  description: 'Kẻ yếu không có quyền được lựa chọn cái chết Laws',
  locales:  {
    '/vi':  {
      lang:  'vi-VN',
      title:  'Tên blog tiếng việt',
      description:  'Mô tả tiếng việt'
    },
    '/en':  {
      lang:  'en-VN',
      title:  'Tên blog tiếng anh',
      description:  'Mô tả tiếng anh'
    }
  },
}