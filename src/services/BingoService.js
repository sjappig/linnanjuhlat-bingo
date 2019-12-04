import shuffle from 'shuffle-array'
import { bingoItems } from '@/assets/board'

const EDGE_LENGTH = 4

class BingoService {
  getBoard () {
    const oldBoard = localStorage.getItem('board')

    if (oldBoard) {
      return JSON.parse(oldBoard)
    }

    const newBoard = this.createNewBoard()

    localStorage.setItem('board', JSON.stringify(newBoard))
    localStorage.setItem('startedTimestamp', new Date().toLocaleString('fi-FI'))

    return newBoard
  }

  createNewBoard () {
    const items = shuffle(bingoItems, { copy: true })
    const result = []

    for (let idx = 0; idx < items.length && idx < EDGE_LENGTH * EDGE_LENGTH; idx += EDGE_LENGTH) {
      const slice = items.slice(idx, idx + EDGE_LENGTH)
      if (slice.length !== EDGE_LENGTH) {
        continue
      }
      result.push(slice)
    }

    return result
  }

  getSelected () {
    const selected = localStorage.getItem('selected')

    return selected ? JSON.parse(selected) : []
  }

  setSelected (selected) {
    const oldBingos = this.getBingos(this.getSelected())

    localStorage.setItem('selected', JSON.stringify(selected))

    const newBingos = this.getBingos(selected)

    return (newBingos - oldBingos) > 0
  }

  getBingos (selected) {
    let bingos = 0
    for (let row = 0; row < EDGE_LENGTH; ++row) {
      let matches = 0
      for (let col = 0; col < EDGE_LENGTH; ++col) {
        if (selected.includes(100 * row + col)) {
          matches++
        }
      }
      if (matches === EDGE_LENGTH) {
        bingos++
      }
    }
    for (let col = 0; col < EDGE_LENGTH; ++col) {
      let matches = 0
      for (let row = 0; row < EDGE_LENGTH; ++row) {
        if (selected.includes(100 * row + col)) {
          matches++
        }
      }
      if (matches === EDGE_LENGTH) {
        bingos++
      }
    }
    return bingos
  }

  getTimestamp () {
    return localStorage.getItem('startedTimestamp')
  }

  reset () {
    localStorage.removeItem('board')
    localStorage.removeItem('selected')
    localStorage.removeItem('startedTimestamp')
  }
}

export default new BingoService()
