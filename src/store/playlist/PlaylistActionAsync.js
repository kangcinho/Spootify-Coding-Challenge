import axios from "axios";
import config from "../../config"
import { PlaylistAction } from "./PlaylistStore";
import { loadingScreenAction } from "../ui/LoadingScreenStore";

export const playlistGet = (_token) => {
  return async(dispatch) => {
    dispatch(loadingScreenAction.isLoading(true));
    const response = await axios(config.api.baseUrl+"/browse/featured-playlists", {
      method: "GET",
      headers: {
        "Authorization" : `Bearer ${_token}`
      }
    })
    dispatch(PlaylistAction.get(response.data.playlists.items));
    dispatch(loadingScreenAction.isLoading(false));
  }
}