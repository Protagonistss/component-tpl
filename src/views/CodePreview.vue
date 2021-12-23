<template>
  <router-view></router-view>
  <pre>{{ sourceCode }}</pre>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const routeName: unknown = useRoute().name
const sourceCode = ref('')
onMounted(async () => {
  const code = (await import(/* @vite-ignore */ `../../packages/components/${routeName}/docs/example.vue?raw`)).default
  console.log('code', code)
  sourceCode.value = code
})

</script>

<style scoped></style>
