<template>
  <div :class="itemClass" @click="$emit('toggle')">
    <p class="mt-2 text-center small">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ['description', 'selected'],
  computed: {
    itemClass () {
      const base = 'col border rounded bingo-item'

      if (!this.selected) {
        return base + ' border-primary'
      }

      return base + ' border-white text-white bingo-item--selected'
    }
  }
}
</script>

<style scoped>
p {
  cursor: default;
  hyphens: manual;
}

.bingo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1px;
  padding-right: 1px;
}

.bingo-item--selected {
  text-decoration: line-through;
  background-color: blue;
}
</style>
