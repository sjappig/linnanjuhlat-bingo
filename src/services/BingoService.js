import shuffle from 'shuffle-array'
import { bingoItems } from '@/assets/board'

const EDGE_LENGTH = 4

class BingoService {
  getBoard () {
    const oldBoard = localStorage.getItem('board')
    const oldTimestamp = localStorage.getItem('startedTimestamp')

    if (oldBoard && oldTimestamp) {
      return {
        board: JSON.parse(oldBoard),
        timestamp: oldTimestamp
      }
    }

    const board = this.createNewBoard()
    const timestamp = new Date().toLocaleString('fi-FI')

    localStorage.setItem('board', JSON.stringify(board))
    localStorage.setItem('startedTimestamp', timestamp)

    return {
      board,
      timestamp
    }
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
    localStorage.setItem('selected', JSON.stringify(selected))
  }

  getBingos (selected, itemMatcher) {
    let bingos = 0
    for (let row = 0; row < EDGE_LENGTH; ++row) {
      let matches = 0
      for (let col = 0; col < EDGE_LENGTH; ++col) {
        if (selected.some(itemMatcher(row, col))) {
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
        if (selected.some(itemMatcher(row, col))) {
          matches++
        }
      }
      if (matches === EDGE_LENGTH) {
        bingos++
      }
    }
    return bingos
  }

  reset () {
    localStorage.removeItem('board')
    localStorage.removeItem('selected')
    localStorage.removeItem('startedTimestamp')
  }
}

export default new BingoService()
