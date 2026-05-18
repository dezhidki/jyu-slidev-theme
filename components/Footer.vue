<script setup lang="ts">
import { computed } from 'vue'
import { navigateTo, clicks, currentSlide } from '@slidev/logic'
import { injectionSlideTitle } from '@slidev/types'
import { inject } from 'vue'

const title = inject(injectionSlideTitle, computed(() => ''))
</script>

<template>
  <footer class="jyu-footer">
    <div class="jyu-footer-left">
      <span class="jyu-footer-title">{{ title }}</span>
    </div>
    <div class="jyu-footer-right">
      <span class="jyu-footer-brand">JYU</span>
    </div>
  </footer>
</template>

<style scoped>
.jyu-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 6px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Lato', sans-serif;
  font-size: 0.65rem;
  color: var(--slidev-theme-text-secondary);
  opacity: 0.5;
  pointer-events: none;
}

.jyu-footer-brand {
  font-family: 'Aleo', serif;
  font-weight: 700;
  color: var(--slidev-theme-accent);
}
</style>
