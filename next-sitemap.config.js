/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://yourdomain.com', // Thay thế bằng domain thực tế của bạn
    generateRobotsTxt: true, // Tạo file robots.txt cùng với sitemap
    exclude: ['/admin'], // Nếu bạn muốn loại trừ thư mục admin
    changefreq: 'daily', // Tần suất thay đổi nội dung
    priority: 0.7, // Mức độ ưu tiên cho các trang,
    
  };
  