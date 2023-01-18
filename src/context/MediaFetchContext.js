import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

const MediaFetchContext = React.createContext({});

const MEDIA_ENDPOINT = 'https://sfe-2022-data.netlify.app/static/media.json';

const MediaFetchProvider = ({ children }) => {
  const [mediaData, setMedia] = useState([]);

  const {
    isLoading: mediaIsLoading,
    error: mediaError,
    sendRequest,
  } = useFetch();

  useEffect(() => {
    const fetchedMediaHandler = (fetchedMediaArray) => {
      setMedia(fetchedMediaArray);
    };

    sendRequest(
      {
        url: MEDIA_ENDPOINT,
      },
      fetchedMediaHandler
    );
  }, []);

  return (
    <MediaFetchContext.Provider
      value={{ mediaData, mediaIsLoading, mediaError }}
    >
      {children}
    </MediaFetchContext.Provider>
  );
};

const useMediaData = () => {
  return useContext(MediaFetchContext);
};

MediaFetchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { MediaFetchProvider, useMediaData };
