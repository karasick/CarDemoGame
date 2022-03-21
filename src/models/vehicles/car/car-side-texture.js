import { CanvasTexture } from 'three'

export default class CarSideTexture extends CanvasTexture {
  constructor () {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 32

    const context = canvas.getContext('2d')

    context.fillStyle = '#ffffff'
    context.fillRect(0, 0, 128, 32)

    context.fillStyle = '#666666'
    context.fillRect(10, 8, 38, 24)
    context.fillRect(58, 8, 60, 24)

    super(canvas)
  }
}