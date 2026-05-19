<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <div class="slidev-layout intro" :class="$props.class">
    <div class="accent-line" />
    <slot />
  </div>
</template>

<style scoped>
.intro {
  padding: 2.5rem 3.5rem;
  position: relative;
  min-height: 100%;
}
.intro :deep(h1) {
  font-size: 2.2em;
}
</style>
