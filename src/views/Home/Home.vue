<template>
  <v-app>
    <v-content fluid>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-flex style="padding: 10%">
              <!--<v-img src="..\..\assets\PavementLogoFinal.png"></v-img>-->
            </v-flex>
          </v-col>
          <v-col class="fill-height">
            <v-card shaped style="margin: 5%" align="center" justify="center">
              <h1 style="font-size: 65px; padding-top:5%">Log In</h1>
              <v-card-text>
                <v-form>
                  <v-text-field   v-model="UserInfo.username" label="Username" name="Username" filled type="text"></v-text-field>
                  <v-text-field
                    v-model="UserInfo.password"
                    id="password"
                    label="Password"
                    name="password"
                    filled
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions style="padding-bottom: 5%">
                <div class="flex-grow-1"></div>
                <v-btn text>Forgot Password</v-btn>
                <v-btn @click="fetchSample" style="margin-right:1.5%" large dark color="rgb(231,75,74)" to="/EventPage">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script src="./Home.js"></script>
<style src="./Home.css"></style>