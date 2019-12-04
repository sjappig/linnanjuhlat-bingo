import shuffle from 'shuffle-array'
import { bingoItems } from '@/assets/board'

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
    const edgeLength = 4

    for (let idx = 0; idx < items.length && idx < edgeLength * edgeLength; idx += edgeLength) {
      const slice = items.slice(idx, idx + edgeLength)
      if (slice.length !== edgeLength) {
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
