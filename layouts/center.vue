<script setup lang="ts">
defineProps<{ class?: string }>()
</script>

<template>
  <div class="slidev-layout center" :class="$props.class" style="display:flex;align-items:center;justify-content:center;text-align:center;min-height:100%;padding:3rem">
    <slot />
  </div>
</template>
