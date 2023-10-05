<script >
/* import { useClientStore } from '../stores/chat';
const clientStore = useClientStore();

 */

</script>

<script setup>
defineProps({

  client:{
      type:Object,
      required:true,
  },
  textButton:{
      type:String,
      default:"Crear",
  },

})

defineEmits(['submit']);
</script>

<style lang="scss"></style>

<template>

        <form @submit.prevent="$emit('submit')">

        <div class="form-group">
        <label for="title">Título</label>
        <input
            id="title"
            v-model="client.title"
        />
        </div>

        <label for="description">Descripción</label>
        <textarea
            id="description"
            v-model="client.description"
        ></textarea>


        <button type="submit">{{ textButton }}</button>

        </form>
    <!-- <q-list>
      <q-item-label header> Client list </q-item-label>
      <q-item
        v-for="client in clientStore.clients"
        :key="client.id"
        v-ripple
        class="q-my-sm"
        clickable
        @click="clientStore.setClientSelected(client)"
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white"
            >{{ client.name.charAt(0) }}
          </q-avatar>
        </q-item-section>
  
        <q-item-section>
          <q-item-label>{{ client.name }}</q-item-label>
          <q-item-label caption lines="1">{{ client.id }}</q-item-label>
        </q-item-section>
  
        <q-item-section side>
          <q-badge rounded :color="client.connected ? 'green' : 'red'" />
        </q-item-section>
      </q-item>
    </q-list> -->
  </template>