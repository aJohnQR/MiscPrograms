<template>
  <v-card style="padding: 2%;">
    <v-snackbar top color="success" v-model="snackbar" :timeout="timeout">
      Succesfully Added New Event
      <v-btn color="white" text @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-text-field
              dense
              v-model="eventName"
              :rules="eventNameRules"
              :counter="30"
              label="Event Name"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              dense
              v-model="UserInfo.username"
              readonly
              label="User Name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-select
              dense
              v-model="SelectedCategory"
              :rules="[v => !!v || 'You must select a category']"
              :items="Categories"
              label="Category"
              required
            ></v-select>
          </v-col>
          <v-col>
            <v-select
              dense
              v-model="SelectedLocation"
              :rules="[v => !!v || 'You must select a location']"
              :items="Locations"
              label="Location"
              required
            ></v-select>
          </v-col>
          <v-col>
            <v-text-field
              dense
              v-model="UserInfo.organization"
              readonly
              label="Organization"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              dense
              :value="startTime"
              :rules="[v => !!v || 'You must have a start time']"
              v-model="startTime"
              label="Start Time"
              type="time"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              dense
              :value="endTime"
              :rules="[v => !!v || 'You must have an end time']"
              v-model="endTime"
              label="End Time"
              type="time"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              dense
              v-model="capacity"
              :rules="capacityRules"
              label="Event Capacity"
              type="number"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-date-picker
          :allowed-dates="allowedDates"
          color="rgb(231,75,74)"
          full-width
          v-model="datePicker"
          no-title
        ></v-date-picker>
        <v-textarea
          style="margin-top: 5%"
          outlined
          label="Comment"
          :value="comment"
          v-model="comment"
          :rules="textAreaRules"
          :counter="150"
        ></v-textarea>
      </v-container>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="rgb(231,75,74)" @click="close()" text>Close</v-btn>
        <v-btn color="rgb(231,75,74)" @click="reset()" text>Reset</v-btn>
        <v-btn color="rgb(231,75,74)" @click="validate()">Add Event</v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script src="./NewEvent.js"></script>
<style src="./NewEvent.css"></style>
