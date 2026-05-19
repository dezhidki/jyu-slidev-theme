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
.intro::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 6px;
  background: var(--jyu-navy);
}
.intro :deep(h1) {
  font-size: 2.2em;
}
</style>
