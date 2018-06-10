<template>
  <div class="Login">
    <div class="loginBox">User Name: <input type="text" v-model="user.username"></div>
    <div>Password: <input type="text" v-model="user.password"></div>
    <div><button v-on:click="loginClick"> Login</button> </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: 'Place Holder',
        password: 'hunter2'
      }
    }
  },
  methods: {
    loginClick: function () {
	  alert('Wassup ' + this.user.username + '!!')
	  this.saveUser();
      this.$router.push({ name: 'authenticated', query: { redirect: '/authenticated' } })
	},
	saveUser: function () {
		axios.post('http://localhost:3000/users', {
			body: {
				username: this.user.username,
				password: this.user.password
			}
		})
		.then(response => {})
		.catch(e => {
			this.errors.push(e)
		})
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: white;
  color:black;
}
</style>
