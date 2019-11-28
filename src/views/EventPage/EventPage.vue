<template>
  <v-app>
    <v-content fluid>
      <v-container class="fill-height" fluid>
        <v-dialog v-model="NewEventDialog" persistent width="30%">
          <NewEvent @clicked="onClickChild" />
        </v-dialog>
        <v-row>
          <v-col cols="3">
            <v-navigation-drawer absolute dark width="25%" permanent>
              <v-card>
                <v-text-field
                  single-line
                  dense
                  style="margin: 5%"
                  outlined
                  clearable
                  label="Search By Event Name"
                  v-model="EventName"
                ></v-text-field>
              </v-card>
              <v-form>
                <v-select
                  multiple
                  clearable
                  dense
                  outlined
                  dark
                  style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
                  class="my-2"
                  :items="Categories"
                  v-model="SelectedCategories"
                  label="Category"
                >
                  <template v-slot:prepend-item>
                    <v-list-item ripple @click="toggleCategories">
                      <v-list-item-action>
                        <v-icon
                          :color="
                            SelectedCategories.length > 0
                              ? 'indigo darken-4'
                              : ''
                          "
                          >{{ iconCategory }}</v-icon
                        >
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>Select All</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider class="mt-2"></v-divider>
                  </template>
                  <template v-slot:selection="{ item, index }">
                    <span
                      v-if="SelectedCategories.length === Categories.length"
                    >
                      <span v-if="index === 0">All Categories</span>
                    </span>
                    <span v-else>
                      <span v-if="index === 0">{{ item }}</span>
                      <span v-if="index === 1">, {{ item }}</span>
                      <span v-if="index === 2">, {{ item }}</span>
                      <span v-if="index === 3" class="grey--text caption"
                        >(+{{ SelectedCategories.length - 3 }} others)</span
                      >
                    </span>
                  </template>
                </v-select>
                <v-select
                  multiple
                  clearable
                  dense
                  outlined
                  style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
                  class="my-2"
                  :items="Organizations"
                  v-model="SelectedOrganizations"
                  label="Organization"
                  item-value="text"
                >
                  <template v-slot:prepend-item>
                    <v-list-item ripple @click="toggleOrganizations">
                      <v-list-item-action>
                        <v-icon
                          :color="
                            SelectedOrganizations.length > 0
                              ? 'indigo darken-4'
                              : ''
                          "
                          >{{ iconOrganization }}</v-icon
                        >
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>Select All</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider class="mt-2"></v-divider>
                  </template>
                  <template v-slot:selection="{ item, index }">
                    <span
                      v-if="
                        SelectedOrganizations.length === Organizations.length
                      "
                    >
                      <span v-if="index === 0">All Organizations</span>
                    </span>
                    <span v-else>
                      <span v-if="index === 0">{{ item }}</span>
                      <span v-if="index === 1">, {{ item }}</span>
                      <span v-if="index === 2">, {{ item }}</span>
                      <span v-if="index === 3" class="grey--text caption"
                        >(+{{ SelectedOrganizations.length - 3 }} others)</span
                      >
                    </span>
                  </template>
                </v-select>
                <v-select
                  multiple
                  clearable
                  dense
                  outlined
                  style="margin-top: 0px; margin-bottom: 0px; margin-left: 5%; margin-right: 5%"
                  class="my-2"
                  :items="Locations"
                  v-model="SelectedLocations"
                  label="Location"
                  item-value="text"
                >
                  <template v-slot:prepend-item>
                    <v-list-item ripple @click="toggleLocations">
                      <v-list-item-action>
                        <v-icon
                          :color="
                            SelectedLocations.length > 0
                              ? 'indigo darken-4'
                              : ''
                          "
                          >{{ iconLocation }}</v-icon
                        >
                      </v-list-item-action>
                      <v-list-item-content>
                        <v-list-item-title>Select All</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-divider class="mt-2"></v-divider>
                  </template>
                  <template v-slot:selection="{ item, index }">
                    <span v-if="SelectedLocations.length === Locations.length">
                      <span v-if="index === 0">All Locations</span>
                    </span>
                    <span v-else>
                      <span v-if="index === 0">{{ item }}</span>
                      <span v-if="index === 1">, {{ item }}</span>
                      <span v-if="index === 2">, {{ item }}</span>
                      <span v-if="index === 3" class="grey--text caption"
                        >(+{{ SelectedLocations.length - 3 }} others)</span
                      >
                    </span>
                  </template>
                </v-select>
                <v-row style="margin-left: 2.6%; margin-right: 2.5%">
                  <v-col style="padding-top: 0px; padding-bottom: 0px; ">
                    <v-text-field
                      outlined
                      dense
                      :value="startTime"
                      v-model="startTime"
                      label="Start Time"
                      type="time"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row style="margin-left: 2.6%; margin-right: 2.5%">
                  <v-col style="padding-top: 0px; padding-bottom: 0px; ">
                    <v-text-field
                      outlined
                      dense
                      :value="endTime"
                      v-model="endTime"
                      label="End Time"
                      type="time"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-date-picker
                  :allowed-dates="allowedDates"
                  color="rgb(231,75,74)"
                  full-width
                  style="margin-left: 5%; margin-right: 5%"
                  v-model="datePicker"
                  no-title
                ></v-date-picker>
                <v-checkbox
                  style="padding-top 5%; !important; margin: 0%; justify-content: center; align-content: center"
                  v-model="fullEvents"
                  label="Show Full Events"
                ></v-checkbox>
              </v-form>
              <v-card
                style="margin-top: 0%"
                flat
                align="center"
                justify="center"
              >
                <v-btn
                  @click="search()"
                  style="margin-right:5px"
                  large
                  dark
                  color="rgb(231,75,74)"
                  >Search</v-btn
                >
                <v-btn
                  @click="reset()"
                  outlined
                  style="margin-left:5px"
                  large
                  dark
                  color="rgb(231,75,74)"
                  >Reset</v-btn
                >
                <v-icon
                  style="padding-left: 2.5%"
                  @click="newEvent()"
                  size="400%"
                  color="rgb(231,75,74)"
                  >add_circle</v-icon
                >
              </v-card>
            </v-navigation-drawer>
          </v-col>
          <v-col cols="9">
            <v-container v-if="!ShowList">
              <Map />
            </v-container>
            <v-container v-if="ShowList">
              <v-row>
                <v-col>
                  <Table />
                </v-col>
                <v-col style="margin-top: 1.5%"> 
                  <ViewEvent />
                </v-col>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script src="./EventPage.js"></script>
<style src="./EventPage.css"></style>
