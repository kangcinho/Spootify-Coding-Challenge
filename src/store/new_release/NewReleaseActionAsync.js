import axios from "axios";
import config from "../../config"
import { NewReleaseAction } from "./NewReleaseStore"
import { loadingScreenAction } from "../ui/LoadingScreenStore";

export const newReleaseGet = (_token) => {
  return async(dispatch) => {
    dispatch(loadingScreenAction.isLoading(true));
    const response = await axios(config.api.baseUrl+"/browse/new-releases", {
      method: "GET",
      headers: {
        "Authorization" : `Bearer ${_token}`
      }
    })   
    // console.log("NewRelease", response.data.albums.items)
    dispatch(NewReleaseAction.get(response.data.albums.items));
    dispatch(loadingScreenAction.isLoading(false));
  }
}