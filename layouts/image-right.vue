<script setup lang="ts">
defineProps<{ class?: string }>();
</script>

<template>
  <div class="slidev-layout image-right" :class="$props.class">
    <div>
      <slot />
    </div>
    <div>
      <slot name="image" />
    </div>
  </div>
</template>
