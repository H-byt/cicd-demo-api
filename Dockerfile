# Use official Node.js lightweight image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy dependency files first (layer caching optimization)
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the source code
COPY src/ ./src/

# Expose the port the app runs on
EXPOSE 3000

# Start the server
CMD ["node", "src/server.js"]
