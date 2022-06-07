import axios from "axios";
import config from "../../config"
import { CategoryAction } from "./CategoryStore";
import { loadingScreenAction } from "../ui/LoadingScreenStore";

export const categoryGet = (_token) => {
  return async(dispatch) => {
    dispatch(loadingScreenAction.isLoading(true));
    const response = await axios(config.api.baseUrl+"/browse/categories", {
      method: "GET",
      headers: {
        "Authorization" : `Bearer ${_token}`
      }
    })   
    dispatch(CategoryAction.get(response.data.categories.items));
    dispatch(loadingScreenAction.isLoading(false));
  }
}