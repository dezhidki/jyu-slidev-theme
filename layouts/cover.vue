<script setup lang="ts">
import { computed } from 'vue';
import logoSvg from '../assets/jyu-logo-cover.svg';
import { handleBackground } from '../layoutHelper';

const props = defineProps<{
  class?: string;
  background?: string;
}>();

const style = computed(() => handleBackground(props.background, true));
</script>

<template>
  <div class="slidev-layout cover" :style="style" :class="$props.class">
    <img :src="logoSvg" alt="" aria-hidden="true" class="jyu-flame" />
    <div class="accent-line" />
    <slot />
  </div>
</template>
