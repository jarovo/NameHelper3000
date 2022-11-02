import { reactive } from "vue";


export class Person {
    name: string;
    image_name: string;
    addressing?: string;
  
    constructor(name: string, image_name: string, addressing?: string) {
      this.name = name;
      this.image_name = image_name;
      this.addressing = addressing;
    }
  }

export interface Store {
  people: Person[];
  total: number;
  correct: number;
  wrong: number;
  current_person?: Person
}

export const store = reactive<Store>({
    people: [
        new Person("Bezos", "bezos.png", "Pan"),
        new Person("Jobs", "jobs.png", "Pan"),
        new Person("Zuckerberg", "zuckerberg.png", "Pan"),
        new Person("elon", "elon.png", "Pan")
    ],
    total: 0,
    correct: 0,
    wrong: 0,
})

export function increase_correct() {
  store.correct++;
}

export function increase_wrong() {
  store.wrong++;
}