<template>
  <div>
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
</style>
