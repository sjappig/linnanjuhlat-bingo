<template>
  <div class="container">
    <div class="row" v-for="(items, rowIdx) in board" :key="'row' + rowIdx">
      <bingo-item
        @toggle="toggle(rowIdx, colIdx)"
        :description="description"
        :selected="isSelected(rowIdx, colIdx)"
        v-for="(description, colIdx) in items"
        :key="'col' + colIdx"/>
    </div>
  </div>
</template>

<script>
import BingoItem from '@/components/BingoItem'

export default {
  components: {
    BingoItem
  },
  data () {
    return {
      board: [
        ['Kekkonen nähty', 'Joku kompastuu'],
        ['Haastateltava on humalassa', 'Kättelijä jää jaarittelemaan presidentin kanssa']
      ],
      selected: []
    }
  },
  methods: {
    isSelected (rowIdx, colIdx) {
      const itemId = this.toItemId(rowIdx, colIdx)

      return this.selected.includes(itemId)
    },
    toggle (rowIdx, colIdx) {
      const itemId = this.toItemId(rowIdx, colIdx)
      const selectedIdx = this.selected.indexOf(itemId)

      if (selectedIdx >= 0) {
        this.selected.splice(selectedIdx, 1)
      } else {
        this.selected.push(itemId)
      }
    },
    toItemId (rowIdx, colIdx) {
      return 100 * rowIdx + colIdx
    }
  }
}
</script>

<style scoped>
</style>
