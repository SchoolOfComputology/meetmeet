<template>
  <div class="Calendar">
  <div>Month</div>
  Today is: {{ todayString }}
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  data () {
    return {
      todayString: new Date() + ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  background-color: gray;
  color:black;
}
</style>
