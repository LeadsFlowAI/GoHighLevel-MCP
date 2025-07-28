# Use Node.js 18 LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (dev + prod)
RUN npm install

# Copy all files
COPY . .

# Build TypeScript
RUN npx tsc

# Expose default port
EXPOSE 8000

# Set environment
ENV NODE_ENV=production

# Start the server
CMD ["npm", "start"]
