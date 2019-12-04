<template>
  <div>
    <h3>Linnanjuhlat-bingo</h3>
    <bingo-board/>
  </div>
</template>

<script>
import BingoBoard from '@/components/BingoBoard'

export default {
  components: {
    BingoBoard
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
h3 {
  color: blue;
  text-shadow: 2px 2px 4px navy;
}
</style>
