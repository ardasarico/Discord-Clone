import BrowserWinHandler from './BrowserWinHandler'

const winHandler = new BrowserWinHandler({
  minHeight: 500,
  minWidth: 940,
})

winHandler.onCreated(_browserWindow => {
  winHandler.loadPage('/')
  // Or load custom url
  // _browserWindow.loadURL('https://google.com')
})

export default winHandler
