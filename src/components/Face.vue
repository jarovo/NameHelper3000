<script setup lang="ts">

export interface Props {
  image_name: string,
}

const props = defineProps<Props>()
</script>

<template>
  <div class="person">
    <img class="rounded img-thumbnail" alt='Person&apos;s face'
     :src="`src/assets/Example-quiz/${image_name}`" />
  </div>
</template>

<style scoped>
.person {
  width: 300px;
  height: 300px;
}
</style>
