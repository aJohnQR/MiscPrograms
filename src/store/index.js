import Vue from "vue";
import Vuex from "vuex";
import LogInStatus from "./modules/LogInStatus";
import UserInfo from "./modules/UserInfo";
import Categories from "./modules/Categories";
import Locations from "./modules/Locations";
import Organizations from "./modules/Organizations";
import Date from "./modules/Date";
import Event from "./modules/Event";
import EventList from "./modules/EventList";
import FilteredEventList from "./modules/FilteredEventList";
import ShowList from "./modules/ShowList";
import Todos from "./modules/Todos";
import NewEventDialog from "./modules/NewEventDialog";
import auth from './modules/auth';
import mapData from './modules/mapData';

Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
  modules: {
    LogInStatus,
    UserInfo,
    Categories,
    Locations,
    Organizations,
    Date,
    Event,
    EventList,
    FilteredEventList,
    ShowList,
    Todos,
    NewEventDialog,
    auth,
    mapData
  }
});
