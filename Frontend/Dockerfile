# Step 1: Gunakan base image
FROM node:16-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json dan package-lock.json
COPY ./package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy semua file proyek
COPY . .

# Step 6: Expose port untuk development
EXPOSE 5173

# Step 7: Jalankan aplikasi
CMD ["npm", "run", "dev"]
