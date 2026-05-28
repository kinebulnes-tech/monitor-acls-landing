import sharp from 'sharp'
import { readFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dir = dirname(fileURLToPath(import.meta.url))
const pub = join(__dir, '../public')

// ── WebP conversion ──────────────────────────────────────────────────────────
const jpgs = ['1', '2', '3', '4']
await Promise.all(
  jpgs.map((n) =>
    sharp(join(pub, `monitor-real-${n}.jpg`))
      .webp({ quality: 82 })
      .toFile(join(pub, `monitor-real-${n}.webp`))
      .then(({ size }) => console.log(`✓ monitor-real-${n}.webp — ${(size / 1024).toFixed(0)} KB`))
  )
)

// ── apple-touch-icon.png from favicon.svg ────────────────────────────────────
const faviconSvg = readFileSync(join(pub, 'favicon.svg'))
await sharp(faviconSvg)
  .resize(180, 180)
  .png()
  .toFile(join(pub, 'apple-touch-icon.png'))
  .then(() => console.log('✓ apple-touch-icon.png (180×180)'))

// ── og-cover.png — 1200×630 ──────────────────────────────────────────────────
// Build with SVG → render via sharp
const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#06090f"/>
      <stop offset="100%" stop-color="#08111d"/>
    </linearGradient>
    <radialGradient id="glow1" cx="20%" cy="25%" r="40%">
      <stop offset="0%" stop-color="#3ea0ff" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#3ea0ff" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="80%" cy="70%" r="35%">
      <stop offset="0%" stop-color="#2cff88" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#2cff88" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow1)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- Top border accent -->
  <rect x="0" y="0" width="1200" height="2" fill="#2cff88" opacity="0.6"/>

  <!-- Brand dot + name -->
  <circle cx="80" cy="80" r="10" fill="#2cff88" opacity="0.9"/>
  <text x="102" y="88" font-family="system-ui, -apple-system, sans-serif"
    font-weight="800" font-size="22" fill="#e8f2ff" letter-spacing="1">Monitor ACLS</text>

  <!-- Main headline -->
  <text x="80" y="260" font-family="system-ui, -apple-system, sans-serif"
    font-weight="900" font-size="72" fill="#e8f2ff" letter-spacing="-2">
    Entrena ACLS/BLS.
  </text>
  <text x="80" y="356" font-family="system-ui, -apple-system, sans-serif"
    font-weight="900" font-size="72" fill="url(#ecg)" letter-spacing="-2">
    Sin hardware.
  </text>
  <defs>
    <linearGradient id="ecg" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#2cff88"/>
      <stop offset="60%" stop-color="#56d6ff"/>
      <stop offset="100%" stop-color="#3ea0ff"/>
    </linearGradient>
  </defs>

  <!-- Subtitle -->
  <text x="80" y="432" font-family="system-ui, -apple-system, sans-serif"
    font-weight="400" font-size="28" fill="#8ea7c4">
    Simulación clínica profesional desde el navegador.
  </text>

  <!-- ECG decorative line -->
  <polyline
    points="680,340 720,340 745,260 770,420 795,300 820,340 860,340 890,240 920,380 950,340 980,340"
    fill="none" stroke="#2cff88" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.55"/>

  <!-- Price badge -->
  <rect x="80" y="490" width="240" height="52" rx="12"
    fill="#2cff88" fill-opacity="0.12" stroke="#2cff88" stroke-opacity="0.35" stroke-width="1.5"/>
  <text x="200" y="522" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif"
    font-weight="700" font-size="20" fill="#2cff88">Desde USD $24.90/mes</text>

  <!-- Domain -->
  <text x="1120" y="598" text-anchor="end" font-family="system-ui, -apple-system, sans-serif"
    font-weight="600" font-size="18" fill="#8ea7c4" opacity="0.7">monitoracls.com</text>
</svg>`

await sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .png({ compressionLevel: 9 })
  .toFile(join(pub, 'og-cover.png'))
  .then(({ size }) => console.log(`✓ og-cover.png — ${(size / 1024).toFixed(0)} KB`))

console.log('\nAll assets generated.')
