<script setup lang="ts">
defineProps<{ class?: string }>();
</script>

<template>
  <div class="slidev-layout two-cols" :class="$props.class">
    <div class="col-left">
      <slot />
    </div>
    <div class="col-right">
      <slot name="right" />
    </div>
  </div>
</template>
