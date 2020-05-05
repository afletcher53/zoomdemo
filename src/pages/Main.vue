
<template>
<div>
<form @submit.prevent="checkForm()">
      <p v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in errors">{{ error }}</li>
    </ul>
  </p>
    <label> WebSDK Version</label> <br>
    <label>
      MeetingID:
      <input type="text" v-model="meetingID"/>
    </label>
    <label>
      Password:
      <input type="password" v-model="meetingPassword"/>
    </label>
    <button type="submit">Submit</button>
</form>
<br>
<br>

<form @submit.prevent="checkIFrameForm()">
      <p v-if="iframeerrors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="error in iframeerrors">{{ error }}</li>
    </ul>
  </p>
    <label> IFrame Version</label> <br>
    <label>
      MeetingID:
      <input type="text" v-model="meetingID"/>
    </label>
    <label>
      Password:
      <input type="password" v-model="meetingPassword"/>
    </label>
    <button type="submit">Submit</button>
</form>
</div>
</template>

<script>

export default {
 name: 'Main',
 data:  function() {
return {
     errors: [],
     iframeerrors: [],
     meetingID: null,
     meetingPassword: null
 };
},
 methods:{
    checkForm: function () {
    this.errors = [];
      if (this.meetingID && this.meetingPassword) {
             this.$router.push({ name: 'websdk', params: { 'meetingID': this.meetingID, 'meetingPassword': this.meetingPassword } })
      }


      if (!this.meetingID) {
        this.errors.push('Meeting ID required.');
      } 
      if (!this.meetingPassword) {
        this.errors.push('Meeting Password required.');
      }
    },

  checkIFrameForm: function () {
    this.iframeerrors = [];
      if (this.meetingID && this.meetingPassword) {
         this.$router.push({ name: 'iframe', params: { userId: '123' } })
      }


      if (!this.meetingID) {
        this.iframeerrors.push('Meeting ID required.');
      } 
      if (!this.meetingPassword) {
        this.iframeerrors.push('Meeting Password required.');
      }
    },

  }   
}
</script>


<style>

</style>