const express = require('express')
const dotenv = require('dotenv')

// Load env vars
// this are that you add your secrets
dotenv.config({ path: './config/config.env' })

const PORT = process.env.PORT || 5002
const MODE = process.env.NODE_ENV
const app = express()

app.listen(PORT, () => {
  console.log(`Server running in ${MODE} mode on port ${PORT}`)
})
