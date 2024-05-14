import { createStore } from "vuex";

export default createStore({
  state: {
    count: 1,
    lastMutation: "holiwi",
  },
  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = "holitiwi";
    },
    incrementBy(state, val){
        state.count += val
        state.lastMutation = 'incrementado en un valor ' + val
    }
  },
});
