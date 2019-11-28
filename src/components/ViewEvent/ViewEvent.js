import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "ViewEvent",
  methods: {
    ...mapActions(["fetchEvent"])
  },
  computed: {
    ...mapGetters(["Event"])
  }
};
