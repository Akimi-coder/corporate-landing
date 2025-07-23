// context/VideoContext.js
import { createContext, useReducer, useRef } from 'react';

export const VideoContext = createContext();

const initialState = {
  videoUrl: '',
  allVideosReady: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_VIDEO_URL':
      return { ...state, videoUrl: action.payload };
    case 'SET_ALL_VIDEOS_READY':
      return { ...state, allVideosReady: action.payload };
    default:
      return state;
  }
}

export const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const videoRef = useRef(null); 

  return (
    <VideoContext.Provider value={{ state, dispatch, videoRef }}>
      {children}
    </VideoContext.Provider>
  );
};

