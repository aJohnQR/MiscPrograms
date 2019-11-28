<template>
  <div id="#app">
    <MglMap id="map-container" 
        :accessToken="scene.accessToken" 
        :mapStyle.sync="scene.mapStyle"
        @load="onMapLoaded"
        :zoom="scene.zoom"
        :pitch="scene.pitch"
        :center="scene.coordinates"
        @zoomTo="scene.zoom"
    >
     <div id="markd">
      <MglMarker 
        id="marker"
        v-for="p in mData" 
        v-bind:coordinates="p.coordinates"
        v-bind:key="p.id"
        v-bind:color="p.color"
      >
        <MglPopup>
            <VCard>
              <span 
                
                v-for="s in session.description"
                v-bind:key="s.id"
              >
                <p v-if="p.location===s.location">
                  Session info: {{ s.info }} my pin color is {{ p.color }}.
                </p>
                
              </span>
            </VCard>
        </MglPopup>
      </MglMarker>
      </div>
      <MglNavigationControl position="bottom-right" />
      <MglGeolocateControl position="bottom-right" />
    </MglMap>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import Mapbox from "mapbox-gl";
import { 
    MglMap, 
    MglNavigationControl, 
    MglGeolocateControl, 
    MglPopup,
    MglMarker
} from "vue-mapbox";

const PARTITION_1 = 1
const PARTITION_2 = 3
const PARTITION_3 = 6

export default {
    name: 'MapComponent',
    components: {
        MglMap,
        MglNavigationControl,
        MglGeolocateControl,
        MglPopup,
        MglMarker
    },
    data () {
        return {
            scene: {
              accessToken: 'pk.eyJ1Ijoic3ctMjAxOSIsImEiOiJjazB1Mm1iNnQwanZ0M2NwZGdsNnpocmZkIn0.JODibKZFgAKA3cDqfbPraw',
              mapStyle: 'mapbox://styles/mapbox/streets-v11',
              zoom: 15,
              pitch: 10,
              navigationControl: true,
              coordinates: [-80.37635, 25.756],
              bounds: [[-80.368179, 25.761100], [-80.383778, 25.752543]],
              coordinatesList: [
                {point: [-80.3761, 25.754], id: 1, color: '#CC0000', size: 'small', count: 3},
                {point: [-80.3763, 25.755], id: 2, color: '#11abcd', size: 'large', count: 3},
                {point: [-80.3765, 25.756], id: 3, color: '#cc9090', size: 'large', count: 3},
                {point: [-80.3765, 25.757], id: 4, color: '#234afd', size: 'large', count: 3},
                {point: [-80.3763, 25.758], id: 5, color: '#ee02d3', size: 'large', count: 3},
                {point: [-80.3761, 25.759], id: 6, color: '#f9f9f9', size: 'large', count: 3}
              ]
            },
            session: {
                description: [
                  {info: 'This is class 1', location: 'AHC1'},
                  {info: 'This is class 2', location: 'AHC1'},
                  {info: 'This is class 3', location: 'AHC1'},
                  {info: 'This is class 1', location: 'GC'},
                  {info: 'This is class 1', location: 'ECS'},
                  {info: 'This is class 1', location: 'PG6'},
                  {info: 'This is class 2', location: 'PG6'}
                ]
            }
        }
    },
    computed: {
      ...mapState([
        "coordinates"
        ]),
      ...mapGetters([
        "getCoordinates",
        "getMyDataList"
      ]),
      sessionCheck(r, s) {
        return this.mData[r].location === this.session.description[s].location
      }, 
      cData() {
        return this.$store.getters.getCoordinates;
      },
      mData() {
        return this.$store.getters.getMyDataList;
      }
    },
    const: {
      coordinatesList2: [
        {point: [-80.37615, 25.756], id: 1, color: '#009900'},
        {point: [-80.38, 25.76], id: 2, color: '#009900'},
        {point: [-80.6, 25.8], id: 3, color: '#009900'}
      ]
    },
    props: {
      accessToken: {
        type: String,
        required: false,
        default: ''
      },
      mapStyle: {
        type: [String, Object],
        default: 'mapbox://styles/mapbox/streets-v11'
      },
      attributionControl: {
        type: Boolean,
        default: true
      },
      navigationControl: {
        type: Boolean,
        default: true
      },
      zoom: {
        type: [Number, String],
        default: 3
      },
      pitch: {
        type: [Number, String],
        default: 50
      },
      maxBounds: {
        type: Array,
        default() {
          return undefined;
        }
      }
    },
    created() {
      this.mapbox = Mapbox;
      this.colors();
    },
    methods: {
      onMapLoaded(event) {
        this.map = event.map;
      },
      handleClick: function(value) {
        alert(value)
      },
      ...mapActions(["printData"]),
      printDataMeth: () => {
        console.log('data from method');
      },
      colors() {
        for (var data = 0; data < this.mData.length; data++) {
          if (this.mData[data].count === PARTITION_1 ) {
            this.mData[data].color = '#009900'; //green
          } else if (PARTITION_1 < this.mData[data].count && this.mData[data].count <= PARTITION_2) {
            this.mData[data].color = '#FFFF00'; //yellow
          } else if (PARTITION_2 < this.mData[data].count && this.mData[data].count <= PARTITION_3) {
            this.mData[data].color = '#FF8000'; //orange
          } else {
            data.scene.coordinatesList[data].color = '#CC0000'; //red
          }
        }
      }
    }
};
</script>

<style>
@import url("https://api.mapbox.com/mapbox-gl-js/v1.5.0/mapbox-gl.css");
#map-container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 0px 0px;
    
}
#marker:hover {
    background-color: #000eee;
    color: #000eee;
}
#markd {
    width: 20px;
    border-radius: 100%;
}
</style>
