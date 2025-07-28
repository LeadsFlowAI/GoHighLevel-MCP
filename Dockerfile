# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL deps (dev + prod) pour que tsc soit dispo
RUN npm install

# Build the application
RUN npm run build

# Copy source code AFTER build
COPY . .

# Expose port 8000 (ou ce que t’utilises)
EXPOSE 8443

# Set environment to production
ENV NODE_ENV=production

# Start the HTTP server
CMD ["npm", "start"]
