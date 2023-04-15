import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { AddressInfo } from 'node:net'

import express from 'express'
import sharp from 'sharp'

const _dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

app.get('/mo-architecture-en.webp', async (req, res) => {
  const imageBuffer = await readFile(join(_dirname, './public/mo-architecture-en.png'))

  const outputWebp = await sharp(imageBuffer).webp().toBuffer()

  res
    .type('webp')
    .send(outputWebp)
})

const server = app.listen(8082, () => {
  const { address, port } = server.address() as AddressInfo
  console.log(`Server is running at ${address === '::' ? 'http://127.0.0.1' : address}:${port}`)
})
