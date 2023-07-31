import mux from 'mux-embed';
import React, { useEffect, useRef, forwardRef } from 'react';
import {
    Player
  } from '@livepeer/react';

export const PlayerWithMuxData = forwardRef(function VideoPlayer (props) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const initTime = mux.utils.now();

      mux.monitor(videoRef.current, {
        debug: false,
        data: {
          env_key: 'jama51f8fo0defu8ruvoe3vk9', // required
          experiment_name: props.experimentName,
          player_init_time: initTime,
        }
      });
    }
  }, [videoRef, props.experimentName]);

  console.warn(props.src)
  return (
    <Player
      controls
      ref={videoRef}
      src={props.src}
      style={{ width: '100%', maxWidth: '500px' }}
    />
  );
})