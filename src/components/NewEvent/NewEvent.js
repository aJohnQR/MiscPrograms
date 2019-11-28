import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "NewEvent",
  data: () => ({
    snackbar: false,
    SelectedCategory: null,
    SelectedLocation: null,
    startTime: "08:00:00",
    endTime: "22:00:00",
    capacity: 0,
    datePicker: new Date().toISOString().substr(0, 10),
    today: new Date(),
    comment: "",
    valid: false,
    eventName: "",
    timeout: 4000,
    eventNameRules: [
      v => !!v || "Name is required",
      v => v.length <= 30 || "Name must be less than 30 characters"
    ],
    capacityRules: [
      v => !!v || "Capacity is required",
      v => v <= 500 || "Capacity must be less than 500",
      v => v > 0 || "Capacity must be greater than 0"
    ],
    textAreaRules: [
      v => v.length <= 150 || "Comment must be less than 150 characters"
    ],
    categoryRules: [[v => !!v || "You must select a category"]],
    locationRules: [[v => !!v || "You must select a location"]]
  }),
  methods: {
    ...mapActions(["fetchEvent", "changeNewEventDialog"]),
    onClickButton(event) {
      this.$emit("clicked", "false");
    },
    allowedDates(val) {
      var threeMonthsLater = new Date();
      threeMonthsLater.setMonth(this.today.getMonth() + 3);

      if (
        val >= this.today.toISOString().substr(0, 10) &&
        val <= threeMonthsLater.toISOString().substr(0, 10)
      )
        return true;
      else return false;
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        var newEvent = {
          Name: this.eventName,
          User: "gagos007",
          Organization: "AA",
          Category: this.SelectedCategory,
          Location: this.SelectedLocation,
          Capacity: parseInt(this.capacity),
          StartTime: this.startTime,
          EndTime: this.endTime,
          Date: this.datePicker,
          Comment: this.comment
        };
        this.fetchEvent(newEvent);
        this.reset();
        this.changeNewEventDialog();
      }
    },
    reset() {
      this.$refs.form.resetValidation()
      this.SelectedCategory = null;
      this.SelectedLocation = null;
      this.startTime = "08:00:00";
      this.endTime = "22:00:00";
      this.capacity = 0;
      this.datePicker = new Date().toISOString().substr(0, 10);
      this.comment = "";
      this.valid = false;
      this.eventName = "";
    },
    close(){
      this.reset();
      this.changeNewEventDialog();
    }
  },
  computed: {
    ...mapGetters(["Event", "UserInfo", "Categories", "Locations"])
  }
};
