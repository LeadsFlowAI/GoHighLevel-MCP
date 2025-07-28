# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# ✅ Install ALL dependencies including dev (TypeScript etc.)
RUN npm install

# Copy all files
COPY . .

# Compile TypeScript → dist/
RUN npm run build

# Expose default port
EXPOSE 8443

# Set environment
ENV NODE_ENV=production

# Launch server
CMD ["npm", "start"]
