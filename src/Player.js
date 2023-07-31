import mux from "mux-embed";
import React, { useCallback, forwardRef } from "react";
import { Player } from "@livepeer/react";

export const PlayerWithMuxData = forwardRef((props, ref) => {
  const mediaElementRef = useCallback((element) => {
    const initTime = mux.utils.now();

    mux.monitor(element, {
      debug: false,
      data: {
        env_key: "jama51f8fo0defu8ruvoe3vk9", // required
        experiment_name: props.experimentName,
        player_name: "Livepeer Player",
        player_init_time: initTime,
      },
    });
  }, [props.experimentName]);

  return (
    <Player
      controls
      mediaElementRef={mediaElementRef}
      src={props.src}
      lowLatency={true}
      style={{ width: "100%", maxWidth: "500px" }}
    />
  );
});
