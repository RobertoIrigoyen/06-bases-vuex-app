export const increment = (state) => {
  state.count++;
  state.lastMutation = "holitiwi";
};

export const incrementBy = (state, val) => {
  state.count += val;
  state.lastMutation = "incrementado en un valor " + val;
};

export const setLoading = (state, value) => {
  state.isLoading = value;
};
