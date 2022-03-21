export default class CanvasFactory {
  canvasTag = 'canvas'

  createNewCanvas (canvasName = 'game-canvas') {
    const canvas = document.createElement(this.canvasTag)
    canvas.id = canvasName
    document.body.prepend(canvas)

    return canvas
  }
}