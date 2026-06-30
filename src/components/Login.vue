<script setup>
import {ref} from'vue'
import {useAuth} from '../services/auth'
import { useRouter } from "vue-router";

const router = useRouter();
const { checkCredentials } = useAuth()

const rules = {
    required: value => !!value || 'Required.',      // more advabced form of an 'if statement'
    min: v => v.length >= 8 || 'Min 8 characters',    // more advanced form of an 'if statement'
  }

  //data models
  const email= ref(null)
  const password = ref(null)
  const showPassword = ref(false)             
 
  function login()
  {
    const data = {
        email: email.value,
        password: password.value,
    }
    checkCredentials(data)
    router.push('/').then(()=>{
        router.go(0)
    });
  }

</script>

<template>
    <v-container align="center" class="mt-16 bg-secondary">

        <v-row>
            <v-col >
                <v-card max-width="80%" class="bg-primary">
                    <v-img src="/logo.png" height="200" width="200" class="mt-4"></v-img>
                    <v-card-title class="ma-5"> Login</v-card-title>
                    <v-divider></v-divider>
                    <v-form class="ma-12">
                        <v-row>
                            <v-col md="4">
                                <div> Email</div>
                            </v-col>
                            <v-col md="4">
                                <v-text-field v-model="email"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="4">
                                <div> Password</div>
                            </v-col>
                            <v-col md="4">
                                <v-text-field v-model="password"
                                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.required, rules.min]"
                                :type="showPassword ? 'text' : 'password'"
                                variant="outlined"
                                @click:append="showPassword = !showPassword">
                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col md="6">
                                <v-btn class='bg-secondary' @click="login()" block> Login</v-btn>
                            </v-col>
                            <v-col md="6">
                                <div>
                                    New here?
                                    <router-link to ="/sign_up"> Create an account.</router-link>

                                </div>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>    
</template>



