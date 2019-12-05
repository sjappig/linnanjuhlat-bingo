<template>
  <div class="bingo-board mt-2 container">
    <div class="row mb-1">
      <h3 class="col-10">Linnanjuhlat-bingo</h3>
      <div class="col-2 p-0" v-if="bingos">
        <img src="@/assets/sale.png" width="25" height="auto"/>
        <span class="small" v-show="bingos > 1">&times;{{ bingos }}</span>
      </div>
    </div>
    <div class="row flex-nowrap" v-for="(items, rowIdx) in board" :key="'row' + rowIdx">
      <bingo-item
        @toggle="toggle(rowIdx, colIdx)"
        :description="description"
        :selected="isSelected(rowIdx, colIdx)"
        v-for="(description, colIdx) in items"
        :key="'col' + colIdx"/>
    </div>
    <div class="row mt-2 justify-content-end">
      <div><i class="small mr-2">Peli aloitettu {{ timestamp }}</i></div>
      <button @click="reset" type="button" class="btn btn-primary btn-sm mr-1">Uusi peli</button>
    </div>
  </div>
</template>

<script>
import BingoItem from '@/components/BingoItem'
import bingoService from '@/services/BingoService'

export default {
  components: {
    BingoItem
  },
  data () {
    return {
      board: [],
      bingos: 0,
      timestamp: 'joskus',
      selected: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const { board, timestamp } = bingoService.getBoard()
      this.board = board
      this.timestamp = timestamp
      this.selected = bingoService.getSelected()
      this.bingos = bingoService.getBingos(this.selected, this.itemMatcher)
    },

    isSelected (rowIdx, colIdx) {
      return this.selected.some(this.itemMatcher(rowIdx, colIdx))
    },

    itemMatcher (rowIdx, colIdx) {
      return ({row, col}) => row === rowIdx && col === colIdx
    },

    reset () {
      bingoService.reset()
      this.init()
    },

    toggle (rowIdx, colIdx) {
      const selectedIdx = this.selected.findIndex(
        this.itemMatcher(rowIdx, colIdx)
      )

      if (selectedIdx >= 0) {
        this.selected.splice(selectedIdx, 1)
      } else {
        this.selected.push({row: rowIdx, col: colIdx})
      }

      bingoService.setSelected(this.selected)

      const newBingos = bingoService.getBingos(this.selected, this.itemMatcher)

      if (newBingos > this.bingos) {
        this.$emit('bingo')
        setTimeout(() => {
          this.bingos = newBingos
        }, 5000)
      } else {
        this.bingos = newBingos
      }
    }
  }
}
</script>

<style scoped>
h3 {
  color: blue;
  text-shadow: 2px 2px 4px navy;
}

.bingo-board {
  color: blue;
}
</style>
