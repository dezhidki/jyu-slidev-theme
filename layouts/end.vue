<script setup lang="ts">
defineProps<{ class?: string }>();
</script>

<template>
  <div class="slidev-layout end" :class="$props.class">
    <slot />
  </div>
</template>
