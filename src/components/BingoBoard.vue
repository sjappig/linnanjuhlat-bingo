<template>
  <div class="bingo-board mt-2 container">
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
      board: bingoService.getBoard(),
      selected: bingoService.getSelected(),
      timestamp: bingoService.getTimestamp()
    }
  },
  methods: {
    isSelected (rowIdx, colIdx) {
      const itemId = this.toItemId(rowIdx, colIdx)

      return this.selected.includes(itemId)
    },

    reset () {
      bingoService.reset()

      this.board = bingoService.getBoard()
      this.selected = bingoService.getSelected()
      this.timestamp = bingoService.getTimestamp()
    },

    toggle (rowIdx, colIdx) {
      const itemId = this.toItemId(rowIdx, colIdx)
      const selectedIdx = this.selected.indexOf(itemId)

      if (selectedIdx >= 0) {
        this.selected.splice(selectedIdx, 1)
      } else {
        this.selected.push(itemId)
      }

      bingoService.setSelected(this.selected)
    },

    toItemId (rowIdx, colIdx) {
      return 100 * rowIdx + colIdx
    }
  }
}
</script>

<style scoped>
.bingo-board {
  color: blue;
}
</style>
