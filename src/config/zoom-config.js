import { ZoomMtg } from '@zoomus/websdk';
ZoomMtg.setZoomJSLib('https://dmogdx0jrul3u.cloudfront.net/1.7.2/lib', '/av');
ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

const API_KEY = process.env.VUE_APP_ZOOM_API_KEY;
const API_SECRET = process.env.VUE_APP_ZOOM_SECRET_KEY;

const MeetingCfg = (meetingId, nickname, meetingPassword, username) => ({
    apiKey: API_KEY,
    nickname: nickname,
    apiSecret: API_SECRET,
    meetingNumber: meetingId,
    userName: username,
    passWord:  meetingPassword,
    leaveUrl: "https://zoom.us",
    role: 0
});

export default {MeetingCfg, ZoomMtg};