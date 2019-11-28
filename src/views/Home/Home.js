import About from "../../components/About/About.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  props: {
    source: String
  },
  components: {
    About
  },
  computed: {
    ...mapGetters(["LogInStatus", "UserInfo"])
  },
  methods: {
    ...mapActions(["changeLoginState", "login", "logout", "fetchSample"]),

    Login() {
      this.changeLoginState();
      //this.updateUserInfo(this.username, this.password);
    }
  },
  data: () => ({
    drawer: null,
  })
};
