<template>
  <v-card style="padding: 2%;">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="8">
            <v-text-field
              readonly
              dense
              :value="Event.Name"
              label="Event Name"
            ></v-text-field>
          </v-col>
          <v-col cols="4">
            <v-text-field
              readonly
              dense
              :value="Event.User"
              label="User Name"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field readonly dense label="Category" :value="Event.Category"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              readonly
              dense
              :value="Event.Location"
              label="Location"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              readonly
              dense
              :value="Event.Organization"
              label="Organization"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field
              readonly
              dense
              :value="Event.StartTime"
              label="Start Time"
              type="time"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              readonly
              dense
              :value="Event.EndTime"
              label="End Time"
              type="time"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              readonly
              dense
              :value="Event.Attending + '/' + Event.Capacity"
              label="Event Capacity"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-date-picker
          readonly
          color="rgb(231,75,74)"
          full-width
          v-model="Event.Date"
          no-title
        ></v-date-picker>
        <v-textarea
          readonly
          style="margin-top: 5%"
          outlined
          label="Comment"
          :value="Event.Comment"
        ></v-textarea>
      </v-container>
    </v-form>
  </v-card>
</template>

<script src="./ViewEvent.js"></script>
<style src="./ViewEvent.css"></style>
