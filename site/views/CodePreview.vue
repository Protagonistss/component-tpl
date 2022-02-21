<template>
  <router-view></router-view>
  <pre class="language-html">
    <code class="language-html">
      {{ sourceCode }}
    </code>
  </pre>
</template>

<script setup lang="ts">
import { ref, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import Prism from 'prismjs'
import '@/assets/styles/prism.css'

const route = useRoute()
const sourceCode = ref('')
watch(() => route.name, async(cur) => {
  if (!cur) return
  const code = (
    await import(
      /* @vite-ignore */ `../../packages/components/${cur as string}/docs/ExampleCmp.vue?raw`
    )
  ).default
  sourceCode.value = code
  await nextTick()
  Prism.highlightAll()
}, { immediate: true } )
</script>

<style lang="scss" scoped>
.language-html {
  margin: 0;
  padding: 0 15px;
}
</style>
