import { Scene, WebGLRenderer, OrthographicCamera, AmbientLight, DirectionalLight } from 'three'
import Car from './models/Vehicles/Car/Car'
import './style.css'

const rendererCanvasName = 'game-canvas'
const rendererCanvas = document.createElement('canvas')
rendererCanvas.id = rendererCanvasName
document.body.prepend(rendererCanvas)

const scene = new Scene()

const renderer = new WebGLRenderer({
  canvas: rendererCanvas,
  antialias: true
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)

const aspectRatio = window.innerWidth / window.innerHeight
const cameraWidth = 150
const cameraHeight = cameraWidth / aspectRatio

const camera = new OrthographicCamera(
  cameraWidth / -2,
  cameraWidth / 2,
  cameraHeight / 2,
  cameraHeight / -2,
  0,
  1000
)

camera.position.set(200, -200, 300)
camera.up.set(0, 0, 1)
camera.lookAt(0, 0, 0)

const ambientLight = new AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

const directionalLight = new DirectionalLight(0xffffff, 0.6)
directionalLight.position.set(100, -300, 400)
scene.add(directionalLight)

const car = new Car()
// car.rotateZ(115) // Rotate to see back of car
scene.add(car)

renderer.render(scene, camera)
