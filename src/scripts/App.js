import Background from './Background.js'

const background = new Background()

function redraw() {
  background.fullscreen()
  background.hillSide("#EEDDAA")
}

redraw()
window.addEventListener('resize', redraw)
