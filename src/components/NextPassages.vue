<template>
  <div>
    <h1> Liste des passages à l'arrêt </h1>
    <ul v-for="passage in passages" :key="passage.id"><b> Direction : {{ passage.pattern.desc }} </b>
      <li v-for="time in passage.times" :key="time.stopID">Heure de passage: {{ tryDate(time.scheduledDeparture) }}</li>
      <br/>
    </ul>
  </div>
</template>

<script>import axios from 'axios'

export default {
  name: 'next-passages',
  data () {
    return {
      passages: [],
      dateFormated: ''
    }
  },
  created () {
    axios.get('https://data.metromobilite.fr/api/routers/default/index/clusters/SEM:GENCHAVANT/stoptimes?route=SEM:A')
      .then(response => {
        this.passages = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },
  methods: {
    tryDate: function (totalSeconds) {
      var hours = Math.floor(totalSeconds / 3600)
      var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60)
      var result = (hours < 10 ? '0' + hours : hours)
      result += ':' + (minutes < 10 ? '0' + minutes : minutes)
      return result
    }
  }
}
</script>

<style scoped>
  li {
    list-style: none;
  }
</style>
