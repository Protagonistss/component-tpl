<template>
  <div class="v-home__wrapper">
    <aside class="v-home__aside">
      <p @click="handleClick(route)" v-for="route in routes" :key="route.enName">{{ route.zhName }}</p>
    </aside>
    <section class="v-home__right">
      <CodePreview></CodePreview>
    </section>
  </div>
</template>

<script setup lang="ts">
import CodePreview from './CodePreview.vue'
import { cmpDescription } from '@/previewDescription'
import { IPreviewProps } from 'typings'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = ref(cmpDescription)


const handleClick = (props: IPreviewProps) => {
  router.push({ name: props.dirName })
}

onMounted(() => {
  router.push({ name: routes.value[0].dirName })
})
</script>

<style lang="scss" scoped>
.v-home__wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  .v-home__aside {
    width: 300px;
    & > p {
      cursor: pointer;
    }
  }
  .v-home__right {
    flex: 1;
  }
}
</style>
