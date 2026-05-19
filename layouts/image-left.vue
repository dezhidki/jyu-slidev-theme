<script setup lang="ts">
defineProps<{ class?: string }>();
</script>

<template>
  <div class="slidev-layout image-left" :class="$props.class">
    <div>
      <slot name="image" />
    </div>
    <div>
      <slot />
    </div>
  </div>
</template>
