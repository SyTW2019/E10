// The vuex alert module is in charge of the alert section of the centralised state store,
// it contains actions and mutations for setting a success or error alert message, and for clearing the alert.

// In this module each alert action just commits a single mutation so it would be possible to commit
// the mutations directly from your vue components and get rid of the actions.

const state = {
  type: null,
  message: null,
};

const actions = {
  success({ commit }, message) {
    commit("success", message);
  },
  error({ commit }, message) {
    commit("error", message);
  },
  clear({ commit }, message) {
    commit("success", message);
  },
};

const mutations = {
  success(state, message) {
    state.type = "alert-success";
    state.message = message;
  },
  error(state, message) {
    state.type = "alert-danger";
    state.message = message;
  },
  clear(state) {
    state.type = null;
    state.message = null;
  },
};

export const alert = {
  namespaced: true,
  state,
  actions,
  mutations,
};
