<template>
  <div :class="itemClass" @click="$emit('toggle')">
    <p class="mt-2 text-center">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['description', 'selected'],
  computed: {
    itemClass () {
      const base = 'col border rounded bingo-item'

      if (!this.selected) {
        return base
      }

      return base + ' border-primary bg-primary bingo-item--selected'
    }
  }
}
</script>

<style scoped>
p {
  cursor: default;
}

.bingo-item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.bingo-item--selected {
  text-decoration: line-through;
}
</style>
