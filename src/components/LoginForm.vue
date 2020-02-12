<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
        flat
    >
      <v-toolbar-title>Login</v-toolbar-title>
     
    </v-app-bar>
      <v-progress-linear
        indeterminate
        color="pink"
      ></v-progress-linear> 
    <v-card-text>
      <v-form>
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="12"
            >
          <v-text-field
            v-model="email"
            :rules="[rules.required, rules.emailMatch]"
            label="email"
          ></v-text-field>            
          <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="input-10-1"
              label="password"
              @click:append="show1 = !show1"
            ></v-text-field>
            </v-col>
          </v-row>
          <v-btn small>login</v-btn>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
data () {
      return {
        show1: false,
        password: '',
        email: '',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => ('The email and password you entered don\'t match'),
        },
      }
    },
  }
</script>