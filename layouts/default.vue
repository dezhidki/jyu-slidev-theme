<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <div class="slidev-layout default" :class="$props.class">
    <slot />
  </div>
</template>
