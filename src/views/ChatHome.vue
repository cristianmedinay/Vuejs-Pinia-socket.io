<script>
/* export default {
    name:"CursosCrearView"
} */

</script>

<script setup>

import {reactive} from 'vue';
import { useRouter } from 'vue-router';
/* import { storeToRefs } from 'pinia';
 */import {   useCounterStore } from '../../src/stores/counter';
import ClientList from '../../src/components/ClientList.vue'
/* import CourseForm from '../../components/Courses/Form.vue';
 */
const route = useRouter();
const store = useCounterStore();

const {increment,count} = useCounterStore();
/* const {loading, error} = storeToRefs(store); */

const form = reactive({
  title: "",
  description: "",
});

/* const submit = async () => {
  await createCourse(form);
  if (!error.value) {
    await route.push({
      name: "courses",
    })
  }
} */
</script>

<template>

    <div>
        <h1>Crear un nuevo curso</h1>
        <p>{{ count }}</p>
        <button @click="increment()">click</button>
     <!--    <p v-if="loading">Procesando curso</p>
        <p v-if="error">{{ error.message }}</p> -->
        <ClientList  :client="form" @submit="increment"/>
    </div>

</template>