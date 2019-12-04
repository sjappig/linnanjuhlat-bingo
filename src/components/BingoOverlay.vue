<template>
  <div class="bingo-overlay">
    <span class="stamp is-bingo">Bingo</span>
  </div>
</template>

<script>
</script>

<style scoped>
@import '../styles/rubberstamp.css';

.bingo-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 10;
}

.is-bingo {
  position: absolute;
  color: red;
  border: 0.5rem solid red;
  font-size: 6rem;
  top: 20%;
  left: 50%;
  transform: rotate(12deg) translate(-50%, -20%);
}
</style>
