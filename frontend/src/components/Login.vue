<template>
  <div class="Login">
    <div class="loginBox">User Name: <input type="text" v-model="user.username"></div>
    <div>Password: <input type="text" v-model="user.password"></div>
    <div><button v-on:click="loginClick"> Login</button> </div>
  </div>
</template>

<script>
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
      this.$router.push({ name: 'authenticated', query: { redirect: '/authenticated' } })
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
