<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <div class="slidev-layout quote" :class="$props.class">
    <slot />
  </div>
</template>
