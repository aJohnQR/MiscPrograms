import { mapGetters, mapActions, mapMutations } from "vuex";
import NewEvent from "../../components/NewEvent/NewEvent.vue";
import Table from "../../components/Table/Table.vue";
import Map from "../../components/Map/Map.vue";
import ViewEvent from "../../components/ViewEvent/ViewEvent.vue";

export default {
  name: "EventPage",
  props: {
    source: String
  },
  components: {
    NewEvent,
    Table,
    Map,
    ViewEvent
  },
  computed: {
    ...mapGetters([
      "Categories",
      "Locations",
      "Organizations",
      "EventList",
      "ShowList",
      "FilteredEventList",
      "Todos",
      "NewEventDialog"
    ]),
    iconCategory() {
      if (
        this.SelectedCategories.length == this.$store.getters.Categories.length
      )
        return "mdi-close-box";
      return "mdi-checkbox-blank-outline";
    },
    iconOrganization() {
      if (
        this.SelectedOrganizations.length ==
        this.$store.getters.Organizations.length
      )
        return "mdi-close-box";
      return "mdi-checkbox-blank-outline";
    },
    iconLocation() {
      if (this.SelectedLocations.length == this.$store.getters.Locations.length)
        return "mdi-close-box";
      return "mdi-checkbox-blank-outline";
    }
  },
  methods: {
    ...mapActions([
      "updateCategories",
      "updateLocations",
      "updateOrganizations",
      "updateFilteredEventList",
      "fetchTodos",
      "changeNewEventDialog"
    ]),
    ...mapMutations([
      "updateCategories",
      "updateLocations",
      "updateOrganizations",
      "updateDate",
      "updateFilteredEventList"
    ]),
    allowedHours: v => v >= 8 && v <= 22,
    allowedMinutes: v => !(v % 15),
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
    search() {
      this.SelectedEventList = this.$store.getters.EventList;
      if (this.eventName != "")
        this.SelectedEventList = this.SelectedEventList.filter(this.eventName);
      if (this.SelectedCategories.length != 0)
        this.SelectedEventList = this.SelectedEventList.filter(this.category);
      if (this.SelectedOrganizations.length != 0)
        this.SelectedEventList = this.SelectedEventList.filter(
          this.organization
        );
      if (this.SelectedLocations.length != 0)
        this.SelectedEventList = this.SelectedEventList.filter(this.location);
      if (this.startTime != null)
        this.SelectedEventList = this.SelectedEventList.filter(this.sTime);
      if (this.endTime != null)
        this.SelectedEventList = this.SelectedEventList.filter(this.eTime);
      this.SelectedEventList = this.SelectedEventList.filter(this.date);
      if (!this.fullEvents)
        this.SelectedEventList = this.SelectedEventList.filter(this.capacity);

      this.updateFilteredEventList(this.SelectedEventList);
    },
    eventName(value) {
      return value.Name.includes(this.EventName);
    },
    category(value) {
      return this.SelectedCategories.includes(value.Category);
    },
    organization(value) {
      return this.SelectedOrganizations.includes(value.Organization);
    },
    location(value) {
      return this.SelectedLocations.includes(value.Location);
    },
    sTime(value) {
      return value.StartTime >= this.startTime;
    },
    eTime(value) {
      return value.EndTime <= this.endTime;
    },
    date(value) {
      return this.datePicker == value.Date;
    },
    capacity(value) {
      return value.Attending != value.Capacity;
    },
    toggleCategories() {
      if (
        this.SelectedCategories.length != this.$store.getters.Categories.length
      ) {
        this.SelectedCategories = this.$store.getters.Categories;
      } else this.SelectedCategories = [];
    },
    toggleOrganizations() {
      if (
        this.SelectedOrganizations.length !=
        this.$store.getters.Organizations.length
      )
        this.SelectedOrganizations = this.$store.getters.Organizations;
      else this.SelectedOrganizations = [];
    },
    toggleLocations() {
      if (this.SelectedLocations.length != this.$store.getters.Locations.length)
        this.SelectedLocations = this.$store.getters.Locations;
      else this.SelectedLocations = [];
    },
    reset() {
      this.EventName = "";
      this.SelectedCategories = [];
      this.SelectedLocations = [];
      this.SelectedOrganizations = [];
      this.startTime = "08:00:00";
      this.endTime = "22:00:00";
      this.datePicker = new Date().toISOString().substr(0, 10);
      this.fullEvents = false;
      this.SelectedEventList = this.$store.getters.EventList;
      this.SelectedEventList = this.SelectedEventList.filter(this.date);
      this.SelectedEventList = this.SelectedEventList.filter(this.capacity);
      this.updateFilteredEventList(this.SelectedEventList);
    },
    newEvent() {
      this.changeNewEventDialog();
    },
    onClickChild(value) {
      this.changeView();
    }
  },
  created() {
    this.fetchTodos();
    this.SelectedEventList = this.$store.getters.EventList;
    this.SelectedEventList = this.SelectedEventList.filter(this.date);
    this.SelectedEventList = this.SelectedEventList.filter(this.capacity);
    this.updateFilteredEventList(this.SelectedEventList);
  },
  data: () => ({
    SelectedCategories: [],
    SelectedLocations: [],
    SelectedOrganizations: [],
    datePicker: new Date().toISOString().substr(0, 10),
    dialog: true,
    SelectedEventList: [],
    startTime: "08:00:00",
    endTime: "22:00:00",
    startMenu: false,
    endMenu: false,
    fullEvents: false,
    today: new Date(),
    EventName: ""
  })
};
