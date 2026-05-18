<script setup lang="ts">
import { computed } from 'vue'
import { handleBackground } from '../layoutHelper'

const props = defineProps<{
  class?: string
  background?: string
}>()

const style = computed(() => handleBackground(props.background, true))
</script>

<template>
  <div class="slidev-layout cover" :style="style" :class="$props.class">
    <div class="accent-line" />
    <h1>
      <slot />
    </h1>
  </div>
</template>
