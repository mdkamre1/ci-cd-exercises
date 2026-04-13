import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const PORT = process.env.PORT || 10000

app.get('/version', (req, res) => {
  res.send('8')
})

app.get('/health', (req, res) => {
    res.send('OK')
})

app.use(express.static(path.join(__dirname, 'dist')))

// The NEW fix for Express 5 compatibility
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})