import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

interface MyState {
  language: string;
}

const vuexPersist = new VuexPersistence<MyState>({
  key: 'myfreelancer',
  storage: sessionStorage,
  reducer: (state: MyState) => ({ language: state.language }),
});

export default createStore({
  state: {
    host_url: "http://127.0.0.1:8000/api/",
    is_login: false,
    remember_boolean: false,
    remember_password: "",
    remember_username: "",
    language: "en",
    user_id: "",
    username: "",
  },
  getters: {
  },
  mutations: {
    HostUrl(state,host_url) {
      state.host_url = host_url
    },
    IsLogin(state, is_login) {
      state.is_login = is_login
    },
    Language(state,data){
      state.language = data
    },
    Username(state, data) {
      state.username = data
    },
    UserID(state, data) {
      state.user_id = data
    },
    RememberBoolean(state,data){
      state.remember_boolean = data
    },
    RememberUsername(state, data){
      state.remember_username = data
    },
    RememberPassword(state,data){
      state.remember_password = data
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('Language', language);
    },
  },
  modules: {
  },
  plugins: [new VuexPersistence().plugin]
})
