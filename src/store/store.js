import { configureStore } from "@reduxjs/toolkit";
import AuthStore from "./auth/AuthStore";
import PlaylistStore from "./playlist/PlaylistStore"
import CategoryStore from "./category/CategoryStore"
import NewReleaseStore from "./new_release/NewReleaseStore"
import LoadingScreenStore from "./ui/LoadingScreenStore"
const store = configureStore({
  reducer: {
    auth: AuthStore,
    playlist: PlaylistStore,
    category: CategoryStore,
    newrelease: NewReleaseStore,
    loading: LoadingScreenStore
  }
})

export default store;