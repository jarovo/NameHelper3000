<!-- TS -->
<script setup lang="ts">
import Face from './components/Face.vue'
import Play from './components/Play.vue'
import { store } from './components/store'
</script>


<!-- HTML -->
<template>
  <Face v-if="store.current_person"
  :addressing="store.current_person.addressing"
  :name="store.current_person.name"
  :image_name="store.current_person.image_name" />


  <Play />

  <div class="item-container">  
    <a href="https://mypage.longvu10.repl.co/">
      <p class="made">Made by K-DEVELOPMENT</p>
    </a>
  </div>

  <link href='https://fonts.googleapis.com/css?family=Bangers' rel='stylesheet'>
</template>

<!-- CSS -->
<style>
</style>