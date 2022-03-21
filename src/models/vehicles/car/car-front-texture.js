import { CanvasTexture } from 'three'

export default class CarFrontTexture extends CanvasTexture {
  constructor () {
    const canvas = document.createElement('canvas')
    canvas.width = 64
    canvas.height = 32

    const context = canvas.getContext('2d')

    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, 64, 32)

    context.fillStyle = '#666666'
    context.fillRect(8, 8, 48, 24)

    super(canvas)
  }
}