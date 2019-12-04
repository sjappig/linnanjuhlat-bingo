import shuffle from 'shuffle-array'
import { board } from '@/assets/board'

class BingoService {
  getBoard () {
    const oldBoard = localStorage.getItem('board')

    if (oldBoard) {
      return JSON.parse(oldBoard)
    }

    const newBoard = this.shuffle(board)

    localStorage.setItem('board', JSON.stringify(newBoard))

    return newBoard
  }

  shuffle (board) {
    board.forEach(shuffle)

    return shuffle(board)
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
