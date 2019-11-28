const state = {
  EventList: [
    {
      Id: 1,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Location: "GC",
      Attending: 5,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-25",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 2,
      Name: "adfsd",
      User: "gagos007",
      Organization: "dsfa",
      Category: "af",
      Location: "GdsfC",
      Attending: 49,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-25",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 3,
      Name: "sdfasdtion",
      User: "gagos007",
      Organization: "UPE",
      Category: "Club",
      Location: "GC",
      Attending: 0,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-25",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 4,
      Name: "Ssdfsion",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Location: "GC",
      Attending: 50,
      Capacity: 50,
      StartTime: "12:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-25",
      Comment: "COME TO THE ORIENTATION"
    }/*,
    
    {
      Id: 5,
      Name: "Ssdfasn",
      User: "gagos007",
      Organization: "SPC",
      Category: "Study Group",
      Location: "GC",
      Attending: 0,
      Capacity: 50,
      StartTime: "09:00",
      EndTime: "13:30",
      Date: "2019-11-16",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 6,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Location: "GC",
      Attending: 5,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-16",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 7,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "UPE",
      Category: "Club",
      Location: "GC",
      Attending: 49,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-16",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 8,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "UPE",
      Category: "Club",
      Location: "GC",
      Attending: 0,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-16",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 9,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Location: "GC",
      Capacity: 50,
      StartTime: "12:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-16",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 10,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Study Group",
      Location: "GC",
      Capacity: 50,
      StartTime: "09:00",
      EndTime: "13:30",
      Date: "2019-11-16",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 11,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Location: "GC",
      Attending: 5,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-16",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 12,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "UPE",
      Category: "Club",
      Location: "GC",
      Attending: 49,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-16",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 13,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "UPE",
      Category: "Club",
      Location: "GC",
      Attending: 0,
      Capacity: 50,
      StartTime: "09:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-16",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 14,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Club",
      Location: "GC",
      Capacity: 50,
      StartTime: "12:00:00",
      EndTime: "13:30:00",
      Date: "2019-11-17",
      Comment: "COME TO THE ORIENTATION"
    },
    {
      Id: 15,
      Name: "SPC Orientation",
      User: "gagos007",
      Organization: "SPC",
      Category: "Study Group",
      Location: "GC",
      Capacity: 50,
      StartTime: "09:00",
      EndTime: "13:30",
      Date: "2019-11-16",
      Comment: "COME TO THE ORIENTATION"
    }*/
  ]
};

const getters = {
  EventList: state => state.EventList
};

const actions = {
  updateEventList({ commit }) {
    commit("updateEventList");
  }
};

const mutations = {
  updateEventList: (state, EventList) => (state.EventList = EventList)
};

export default {
  state,
  getters,
  actions,
  mutations
};
