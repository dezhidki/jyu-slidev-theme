<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'
import JYUFlame from '../components/JYUFlame.vue'

const props = defineProps<{
  class?: string
  background?: string
}>()

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout cover" :style="style" :class="$props.class">
    <JYUFlame />
    <div class="accent-line" />
    <slot />
  </div>
</template>
