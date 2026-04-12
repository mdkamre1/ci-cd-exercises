import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

// 1. Manually define __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// 2. Use the port provided by Render (or 10000 as fallback)
const PORT = process.env.PORT || 10000

// 3. Add the /version and /health endpoints for Exercises 10 & 12
app.get('/version', (req, res) => {
  res.send('1') // Increment this to confirm a new deployment worked
})

app.get('/health', (req, res) => {
  res.send('ok')
})

// 4. Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, 'dist')))

// 5. Catch-all route to serve index.html for Single Page Apps (React/Vue)
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})