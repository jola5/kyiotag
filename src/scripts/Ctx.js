import Canvas from './Canvas.js'

export default class Ctx extends Canvas {
  constructor() {
    super()
    this.ctx = this.canvas.getContext('2d')
  }
}