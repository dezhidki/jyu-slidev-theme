<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <div class="slidev-layout fact" :class="$props.class">
    <slot />
  </div>
</template>
