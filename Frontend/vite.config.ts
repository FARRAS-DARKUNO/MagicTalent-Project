import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default {
  server: {
    host: '0.0.0.0',  // Agar bisa diakses dari luar container
    port: 5173,       // Port default Vite
  },
}
