import shuffle from 'shuffle-array'

class BingoService {
  getBoard () {
    const board = localStorage.getItem('board')

    if (board) {
      return JSON.parse(board)
    }

    const newBoard = this.shuffle([
      ['Kekkonen nähty', 'Joku kompastuu'],
      ['Haastateltava on humalassa', 'Kättelijä jää jaarittelemaan presidentin kanssa']
    ])

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
