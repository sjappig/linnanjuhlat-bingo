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

    return newBoard
  }

  createNewBoard () {
    const items = shuffle(bingoItems, { copy: true })
    const result = []
    const edgeLength = 4

    for (let idx = 0; idx < items.length; idx += edgeLength) {
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

  reset () {
    localStorage.removeItem('board')
    localStorage.removeItem('selected')
  }
}

export default new BingoService()
