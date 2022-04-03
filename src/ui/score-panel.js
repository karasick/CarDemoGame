import './score-panel.css'

export default class ScorePanel {
  constructor () {
    this.panel = null
    this.panelNumber = null
  }

  init () {
    this._addPanel()
    this._addListeners()
  }

  _addPanel (panelName = 'score') {
    const panelTag = 'div'

    this.panel = document.createElement(panelTag)
    this.panel.id = panelName
    this.panel.innerText = 'Score: '

    this.panelNumber = document.createElement(panelTag)
    this.panelNumber.id = panelName + 'Number'
    this.panelNumber.innerText = '0'

    document.body.append(this.panel)
    this.panel.append(this.panelNumber)
  }

  _addListeners () {
    document.addEventListener('score-updated', e => {
      this.panelNumber.innerText = `${e.detail.score}`
    })
  }
}