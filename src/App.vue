<!-- TS -->
<script setup lang="ts">
import Face from './components/Face.vue'
import Play from './components/Play.vue'
import { store } from './components/store'
</script>


<!-- HTML -->
<template>
  <div class="container text-center">
    <Face v-if="store.current_person"
    :addressing="store.current_person.addressing"
    :name="store.current_person.name"
    :image_name="store.current_person.image_name" />

    <Play />

    <footer>
      <a href="https://mypage.longvu10.repl.co/">
        <p class="made">Made by K-DEVELOPMENT</p>
      </a>
    </footer>

    <link href='https://fonts.googleapis.com/css?family=Bangers' rel='stylesheet'>
  </div>
</template>

<!-- CSS -->
<style>
</style>