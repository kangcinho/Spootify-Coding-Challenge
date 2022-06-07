import { AuthAction } from "./AuthStore"
import axios from "axios";
import config from "../../config";

export const authLogin = () => {
  return  async(dispatch) => {
    let credentials = config.api.clientId + ':' + config.api.clientSecret;
    credentials = Buffer.from(credentials, 'utf8').toString('base64');

    const response = await axios(config.api.authUrl, {
      headers: {
        "Content-Type" : "application/x-www-form-urlencoded",
        "Authorization" : `Basic ${credentials}`
      },
      data: "grant_type=client_credentials",
      method: "POST"
    })
    // &scope=ugc-image-upload user-modify-playback-state user-follow-modify user-read-recently-played user-read-playback-position playlist-read-collaborative app-remote-control user-read-playback-state user-read-email streaming user-top-read playlist-modify-public user-library-modify user-follow-read user-read-currently-playing user-library-read playlist-read-private user-read-private playlist-modify-private
    dispatch(AuthAction.login(response.data));
  }
}