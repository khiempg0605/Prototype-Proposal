/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tamca: {
          navy: '#16324F',       // Xanh navy (Màu chủ đạo)
          white: '#FFFFFF',      // Trắng
          amber: '#F2A900',      // Vàng hổ phách (Thu hút mắt vào €80k, mốc quyết định, logo)
          lightBlue: '#9CC3E4',  // Xanh nhạt (Đan Mạch, Na Uy, text phụ nền tối)
          iceBlue: '#EEF3F9',    // Xanh rất nhạt (Nền ô Sweden, highlight)
          darkNavy: '#0F1B2D',   // Xanh đen (Tiêu đề lớn, nội dung cần đọc rõ)
          slateGray: '#56657A',  // Xám xanh (Nội dung diễn giải, phụ đề, chú thích)
          borderGray: '#C9D3DE', // Xám nhạt (Đường phân cách, viền phụ)
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
