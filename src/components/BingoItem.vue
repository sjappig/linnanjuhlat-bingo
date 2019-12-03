<template>
  <div :class="itemClass" @click="$emit('toggle')">
    <p class="text-center">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['description', 'selected'],
  computed: {
    itemClass () {
      const base = 'col border rounded'

      if (!this.selected) {
        return base
      }

      return base + ' border-success bingo-item--selected'
    }
  }
}
</script>

<style scoped>
p {
  cursor: default;
}

.bingo-item--selected {
  text-decoration: line-through;
}
</style>
