<template>
<div></div>
</template>

<script>
    import zoomConfig from '../config/zoom-config';

    export default {
        props: {
            nickname: {type:String, default: 'user123'},
            meetingID: {type:String, default: '83665013951'},
            username: {type:String, default: 'afletcher53@gmail.com'},
            meetingPassword: {type: String, default: '124943'}
        },

        beforeDestroy () {
            document.getElementById('zmmtg-root').style.display = "none";
        },
        beforeCreate () {
            document.getElementById('zmmtg-root').style.display = "";
        },
        mounted () {
            const meetConfig = zoomConfig.MeetingCfg(this.meetingID, this.nickname, this.meetingPassword, this.username);
            const ZoomMtg = zoomConfig.ZoomMtg;
            // Generate Signature function
            const signature = ZoomMtg.generateSignature({
                meetingNumber: meetConfig.meetingNumber,
                apiKey: meetConfig.apiKey,
                apiSecret: meetConfig.apiSecret,
                role: meetConfig.role,
                success: (res) => {
                    // eslint-disable-next-line
                    console.log("success signature: " + res.result);
                }
            });
            // join function
            ZoomMtg.init({
                leaveUrl: "http://www.zoom.us",
                isSupportAV: true,
                success: (success) => {
                    console.log('trying to join ' + JSON.stringify(success));
                    
                    ZoomMtg.join({
                        signature: signature,
                        meetingNumber: meetConfig.meetingNumber,
                        userName: meetConfig.userName,
                        apiKey: meetConfig.apiKey,
                        userEmail: 'mymail@gmail.com',
                        passWord: meetConfig.passWord,
                        success: (res) => {
                            // eslint-disable-next-line
                            console.log("join meeting success");
                        },
                        error: (res) => {
                            // eslint-disable-next-line
                            console.log(res);
                        }
                    });
                },
                error: (res) => {
                    // eslint-disable-next-line
                    console.log(res);
                }
            });
           
        }
    };
</script>

<style>

.meeting-app {
    width: auto;
    height: auto;
}

.meeting-tip{
    display: none;
}

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


#dialog-invite {
  display: none;
}

</style>