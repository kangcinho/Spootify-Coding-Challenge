import React, { useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';

import { useDispatch, useSelector } from 'react-redux';
import { newReleaseGet } from '../../../store/new_release/NewReleaseActionAsync';
import { categoryGet } from '../../../store/category/CategoryActionAsync';
import { playlistGet } from '../../../store/playlist/PlaylistActionAsync';

import LoadingScreen from '../../../common/components/LoadingScreen/LoadingScreen';

const Discover  = () => {
    const newReleases = useSelector((state) => state.newrelease);
    const playlists = useSelector((state) => state.playlist);
    const categories = useSelector((state) => state.category);
    const token = useSelector((state) => state.auth.token);
    const isLoading = useSelector((state) => state.loading);

    const dispatch = useDispatch();

    useEffect(() => {
      if(token){
        dispatch(newReleaseGet(token));
        dispatch(categoryGet(token));
        dispatch(playlistGet(token));
      }
    }, [dispatch, token])

    return (
      <div className="discover">
        { isLoading && <LoadingScreen/>}
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
}

export default Discover;