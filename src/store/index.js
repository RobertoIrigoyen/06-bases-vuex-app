import { createStore } from "vuex";
import getRandomInt from "../helpers/getRandomInt";

export default createStore({
  state: {
    count: 1,
    lastMutation: "holiwi",
    isLoading: false,
  },
  mutations: {
    increment(state) {
      state.count++;
      state.lastMutation = "holitiwi";
    },
    incrementBy(state, val) {
      state.count += val;
      state.lastMutation = "incrementado en un valor " + val;
    },
  },
  actions: {
    async incrementRandomInt(context) {
      const randomInt = await getRandomInt();

      context.commit("incrementBy", randomInt);
    },
  },
});
