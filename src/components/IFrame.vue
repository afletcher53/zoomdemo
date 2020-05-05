<template>
    <div>
        <iframe src="https://zoom.us/wc/83665013951/join?prefer=1&un=YWFyb24gZmxldGNoZXI=&pwd=124943&track_id=&jmf_code=&meeting_result=" allow="microphone;camera" sandbox="allow-same-origin allow-pointer-lock allow-scripts allow-popups allow-forms" allowFullScreen height="500" width="500"></iframe>
    </div>
</template>

<script>

export default {
  name: 'IFrame',

}
</script>

<style>
#dialog-invite {
  display: none;
}

.meeting-info-icon__icon {
    display: none;
}
.e2e-encryption-indicator__encrypt-indicator--1 {
    display: none;
}

button.undefined.footer-button__button.ax-outline{
    display: none;
}

button.footer-button__button.ax-outline {
    display: none;
}

footer#wc-footer{
    display: none;
}

.suspension-img-wrapper{
    display: none;
}

.hidden.suspension-no-drag.suspension-window.react-draggable{
    display: none;
}

span.hidden.cancel-spotlight{
    display: none;
}
</style>