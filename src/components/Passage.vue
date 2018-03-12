<template>

</template>

<script>

</script>

<style>

</style>

<!--
<template>
  <div class="container">
    &lt;!&ndash;<h3 v-for="passage in passages"> {{ passage.times }}</h3>&ndash;&gt;
    <h3>{{ passages }}</h3>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  name: 'passage',
  data () {
    return {
      passages: [],
      errors:[]
    }
  },
  created() {
    axios.get('https://data.metromobilite.fr/api/routers/default/index/clusters/SEM:GENCHAVANT/stoptimes?route=SEM:A')
      .then(response => {
      this.passages = response.data
      // this.loading = false;
    })
      .catch(e => {
        // this.loading = false;
        this.errors.push(e)
      })
  }
}

</script>

<style scoped>

</style>
-->
