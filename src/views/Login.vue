<template>

    <div>
       
                <input v-model="data.email"  type="email" >

                <br>
                <input v-model="data.password"  type="password" >
                <button  @click="login()">login</button>
    </div>


</template>

<script >
import { defineComponent,ref } from 'vue';
import { useRouter } from 'vue-router';
import  ApiService from '../service/backend'
export default defineComponent({
    name: '',
    data() {
      
     
        /* const submit = async (e) =>{
            await fetch('http://localhost:3000/signin',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(data)
            });
            await router.push('/chat')
            
            console.log(data)
        }    */
        

       

      
    },
    props: {},

    components: {},

    setup() {

        const router = useRouter();
        const data = ref({
            email:'julio1@gmail.com',
            password:'obelisco1820'
        })

        return {data,
        router
        };
    },

    mounted() {},

    methods: {

        async login(){
           /*  e.preventDefault(); */
            
          const state =  await ApiService.postLogin(this.data.email,this.data.password)
            console.log(state)
          if(state.status){
              this.router.replace("/dashboard");
          }else{
              console.log(state)
          }

        }

    },

    computed: {},

    watch: {},

    directives: {},

    filters: {}
});
</script>

<style lang="scss" scoped>

</style>