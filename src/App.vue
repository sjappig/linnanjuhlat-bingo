<template>
  <div>
    <bingo-overlay v-show="isBingo"/>
    <bingo-board @bingo="showBingo"/>
  </div>
</template>

<script>
import BingoBoard from '@/components/BingoBoard'
import BingoOverlay from '@/components/BingoOverlay'

export default {
  components: {
    BingoBoard,
    BingoOverlay
  },
  data () {
    return {
      isBingo: false
    }
  },
  methods: {
    showBingo () {
      this.isBingo = true
      setTimeout(() => {
        this.isBingo = false
      }, 5000)
    }
  }
}
</script>

<style scoped>
</style>
