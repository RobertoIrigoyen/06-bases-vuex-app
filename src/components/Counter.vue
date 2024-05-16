<template>
  <div>
    <h1>Counter - Vuex</h1>
    <h2>Access direct: {{ $store.state.counter.count }}</h2>
    <h2>Cumputes: {{ counComputed }}</h2>

    <button @click="increment">Incrementar 1</button>
    <button @click="incrementBy(5)">Incrementar 5</button>
    <button @click="incrementRandomInt" :disabled="isLoading">Incrementar Random</button>

    <h1>MapState</h1>
    <h2>mapState: {{ count }}</h2>
    <h2>mapState: {{ lastMutation }}</h2>

    <h2>Direct getter: {{ $store.getters['counter/squareCount'] }}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    counComputed() {
      return this.$store.state.counter.count
    },
    ...mapState('counter', ['count', 'lastMutation', 'isLoading'])
    //...mapState({
    //     count: state => state.count,
    //     // lastMutation: state => state.lastMutation
    //     lastMutation: 'lastMutation'
    // })
  },
  methods: {
    increment() {
      this.$store.commit('counter/increment')
    },
    incrementBy(val) {
      this.$store.commit('counter/incrementBy', val)
    },
    ...mapActions('counter', ['incrementRandomInt'])

  }



}
</script>

<style></style>