<script setup lang="ts">
import { computed } from 'vue';
import { handleBackground } from '../layoutHelper';

const props = defineProps<{
  class?: string;
  background?: string;
}>();

const style = computed(() => handleBackground(props.background, true));
</script>

<template>
  <div class="slidev-layout section" :style="style" :class="$props.class">
    <slot />
    <div class="divider" />
  </div>
</template>
