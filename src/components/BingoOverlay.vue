<template>
  <div class="bingo-overlay">
    <img src="../assets/sale.png"/>
  </div>
</template>

<style scoped>
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

img {
  transform: rotate(90deg);
  position: relative;
  animation-name: peeker;
  animation-duration: 5s;
  left: -500px;
}

@keyframes peeker {
  0% { left: -250px; }
  35% { left: -200px; }
  50% { left: -200px; }
  75% { left: 0px; }
  100% { left: -250px }
}
</style>
