import logo from "./logo.svg";
import "./App.css";
import "@mux/mux-video";
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import * as React from "react";
import {PlayerWithMuxData as Player} from "./Player";

const livepeerClient = createReactClient({
  provider: studioProvider({
    apiKey: process.env.STUDIO_API_KEY,
  }),
});

function App() {
  return (
    <LivepeerConfig client={livepeerClient}>
      <div className="App" style={{ width: "90%" }}>
        <div className="mux">
          <h1>Mux</h1>
          <div
            className="players"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div className="vod">
              <h2>VOD</h2>
              <Player
                experiment_name="mux"
                src="https://stream.mux.com/cWMZOKPKyTG7US3iRQmwyD00OH65c16IJ9Qsl02OpE01Og.m3u8"
              />
            </div>
            <div className="live">
              <h2>Live</h2>
              <Player experiment_name="mux" src="https://stream.mux.com/H02tZm29ZfcKKi498UmZwuWYQpqZKk01KL1x602Tx5ds00E.m3u8" />
            </div>
          </div>
        </div>

        <div className="Cloudflare" display="flex">
          <h1>Cloudflare</h1>
          <div
            className="players"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div className="vod">
              <h2>VOD</h2>
              <Player
                experiment_name="cloudflare"
                src="https://customer-mkpy5tx81x2wp0kg.cloudflarestream.com/13e70c54a9c45f64148e20b2a3ea3b5a/manifest/video.m3u8"
              />
            </div>
            <div className="live">
              <h2>Live</h2>
              <Player experiment_name="cloudflare" src="" />
            </div>
          </div>
        </div>

        <div className="Livepeer" display="flex">
          <h1>Livepeer</h1>
          <div
            className="players"
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <div className="vod">
              <h2>VOD</h2>
              <Player
                experiment_name="livepeer"
                src="https://lp-playback.com/hls/30e4ugexbeuetvqq/index.m3u8"
              />
            </div>
            <div className="live">
              <h2>Live</h2>
              <Player
                experiment_name="livepeer"
                src="https://livepeercdn.studio/hls/a4b0sru3bupiy536/index.m3u8"
              />
            </div>
          </div>
        </div>
      </div>
    </LivepeerConfig>
  );
}

export default App;
