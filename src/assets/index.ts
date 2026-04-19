// Asset exports for Moirai project

// Logo
const logoReq = require('./Moirai_Logo_pages-to-jpg-0001-removebg-preview.png')
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const logo = (logoReq as any).default?.src || (logoReq as any).src || logoReq

// Videos
export const video1 = '/videos/38377480.mp4'
export const video2 = '/videos/45531620.mp4'
export const video3 = '/videos/72364221.mp4'
export const video4 = '/videos/91888760.mp4'

// Product photos - exported as array for easy mapping
const _productPhotos = [
  require('./photo_5386459318351238519_y.jpg'),
  require('./photo_5386459318351238520_y.jpg'),
  require('./photo_5386459318351238521_y.jpg'),
  require('./photo_5386459318351238522_y.jpg'),
  require('./photo_5386459318351238523_y.jpg'),
  require('./photo_5386459318351238537_y.jpg'),
  require('./photo_5386459318351238538_y.jpg'),
  require('./photo_5386459318351238539_y.jpg'),
  require('./photo_5386459318351238544_y.jpg'),
  require('./photo_5386459318351238545_y.jpg'),
  require('./photo_5386459318351238546_y.jpg'),
  require('./photo_5386459318351238547_y.jpg'),
  require('./photo_5386459318351238548_y.jpg'),
  require('./photo_5386459318351238549_y.jpg'),
  require('./photo_5386459318351238550_y.jpg'),
  require('./photo_5386459318351238551_y.jpg'),
  require('./photo_5386459318351238552_y.jpg'),
  require('./photo_5386459318351238553_y.jpg'),
  require('./photo_5386459318351238554_y.jpg'),
  require('./photo_5386459318351238555_y.jpg'),
  require('./photo_5386459318351238556_y.jpg'),
  require('./photo_5386459318351238557_y.jpg'),
  require('./photo_5386459318351238557_y (1).jpg'),
  require('./photo_5386459318351238561_y.jpg'),
  require('./photo_5386459318351238564_y.jpg'),
  require('./photo_5386459318351238564_y (1).jpg'),
  require('./photo_5386459318351238566_y.jpg'),
  require('./photo_5386459318351238568_y.jpg'),
  require('./photo_5386459318351238569_y.jpg'),
  require('./photo_5386459318351238570_y.jpg'),
  require('./photo_5386459318351238574_y.jpg'),
  require('./photo_5386459318351238581_y.jpg'),
  require('./photo_5386459318351238582_y.jpg'),
  require('./photo_5386459318351238582_y (1).jpg'),
  require('./photo_5386459318351238583_y.jpg'),
  require('./photo_5386465898241134943_y.jpg'),
]
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const productPhotos = _productPhotos.map((p: any) => p.default?.src || p.src || p)