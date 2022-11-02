<script setup lang="ts">
import { defineComponent, withDefaults, defineProps, onBeforeMount } from 'vue';
import { store, Person, increase_correct, increase_wrong } from './store';

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

onBeforeMount(() => {
  store.current_person = choose(store.people)
})


function check_person(checked_image_name: string) {
  if (!store.current_person) { return }
  
  if (store.current_person.image_name == checked_image_name) {
    increase_correct()
    store.current_person = choose(store.people);
  } else {
    increase_wrong()
  }
}
</script>

<template>
  <div class="QuestionLabel">
    <h2 class="h2_1">
      Who is this?
    </h2>
  </div>
  <div>
    <div class="Answ">
      <button type="button" class="btn btn-primary"
        v-for="person in store.people"
        :key="person.image_name"
        @click="check_person(person.image_name)">
        {{ person.addressing }} {{ person.name }}
      </button>
    </div>
    <div class="progress">
      <div class="progress-bar progress-bar-striped" role="progressbar" aria-label="Good"
        :style="`width: ${ 100*store.correct / (store.correct+store.wrong) }%`"
        :aria-valuenow="`${ store.correct }`" aria-valuemin="0" aria-valuemax="100"></div>
      <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-label="Bad"
        :style="`width: ${ 100*store.wrong / (store.correct+store.wrong)}%`"
        :aria-valuenow="`${ store.wrong }`" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p id="correct" class=cw>Correct: {{ store.correct }}</p>
      <p id="wrong" class=cw>Wrong: {{ store.wrong }}</p>
  </div>

  <!-- HTML code for next and previous button -->
  
  <div class="item-container">  
    <a href="https://mypage.longvu10.repl.co/">
      <p class="made">Made by K-DEVELOPMENT</p>
    </a>
  </div>
</template>

<style>
</style>
