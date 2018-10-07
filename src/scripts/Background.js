import Ctx from './Ctx.js'
import Color from 'color'

export default class Background extends Ctx {
  constructor() {
    super()
  }
  hillSide(color) {
    function hill(that, maxHeight, color) {
      function curve(that, heights, color) {
        that.ctx.fillStyle = color

        const xdelta = (that.canvas.width / (heights.length - 1))

        for (var i = 0; i < heights.length - 1; i++) {

          console.log(i)
          const x0 = i * xdelta
          const y0 = that.canvas.height - heights[i]
          const x3 = (i + 1) * xdelta
          const y3 = that.canvas.height - heights[i + 1]

          const x1 = (i + 0.5) * xdelta
          const y1 = y0 /** (0.5 + Math.random())*/

          const x2 = x1
          const y2 = y3 /** (0.5 + Math.random())*/

          that.ctx.beginPath()
          that.ctx.moveTo(x0, that.canvas.height)
          that.ctx.lineTo(x0, y0)
          that.ctx.bezierCurveTo(x1, y1, x2, y2, x3, y3)
          that.ctx.lineTo(x3, that.canvas.height)
          that.ctx.lineTo(x0, that.canvas.height)
          that.ctx.closePath()
          that.ctx.fill()
        }
      }

      let heights = new Array(0)

      let numberOfHills = Math.floor(2 + Math.random() * 4)
      while (numberOfHills--) {
        let height = 3 * maxHeight / Math.log(heights.length + 10)
        height *= 0.8 + Math.random() * 0.4
        heights.push(height)
      }

      heights = (Math.random() < 0.5) ? heights : heights.reverse()

      curve(that, heights, color)
    }

    function heaven(that, color) {
      const gradient = that.ctx.createLinearGradient(0, 0, 0, that.canvas.height);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.7, "white");
      that.ctx.fillStyle = gradient;
      that.ctx.fillRect(0, 0, that.canvas.width, that.canvas.height);
    }

    const colorShades = Color(color)
    heaven(this, colorShades)
    hill(this, 5 * this.canvas.height / 10, colorShades.darken(0.07))
    hill(this, 4 * this.canvas.height / 10, colorShades.darken(0.14))
    hill(this, 2 * this.canvas.height / 10, colorShades.darken(0.21))
    hill(this, 1 * this.canvas.height / 10, colorShades.darken(0.28))
  }
}