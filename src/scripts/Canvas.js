export default class Canvas {
  constructor() {
    this.canvas = document.getElementById('canvas')
  }
  fullscreen() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
}