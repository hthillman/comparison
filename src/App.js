import logo from "./logo.svg";
import "./App.css";
import "@mux/mux-video";

function App() {
  return (
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
            <mux-video
              playback-id="cWMZOKPKyTG7US3iRQmwyD00OH65c16IJ9Qsl02OpE01Og"
              controls
              env-key="jama51f8fo0defu8ruvoe3vk9"
              experiment_name="mux"
            ></mux-video>
          </div>
          <div className="live">
            <h2>Live</h2>
            <mux-video
              src="https://stream.mux.com/cWMZOKPKyTG7US3iRQmwyD00OH65c16IJ9Qsl02OpE01Og.m3u8"
              env-key="jama51f8fo0defu8ruvoe3vk9"
              experiment_name="mux"
            />
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
            <mux-video
              src="https://customer-mkpy5tx81x2wp0kg.cloudflarestream.com/13e70c54a9c45f64148e20b2a3ea3b5a/manifest/video.m3u8"
              controls
              env-key="jama51f8fo0defu8ruvoe3vk9"
              experiment_name="cloudflare"
            ></mux-video>
          </div>
          <div className="live">
            <h2>Live</h2>
            <mux-video
              env-key="jama51f8fo0defu8ruvoe3vk9"
              experiment_name="cloudflare"
            />
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
            <mux-video
              stream-type="on-demand"
              src="https://lp-playback.com/hls/30e4ugexbeuetvqq/index.m3u8"
              env-key="jama51f8fo0defu8ruvoe3vk9"
              experiment_name="livepeer"
              prefer-playback="mse"

            />
          </div>
          <div className="live">
            <h2>Live</h2>
            <mux-video
              stream-type="live"
              src="https://livepeercdn.studio/hls/a4b0sru3bupiy536/index.m3u8"
              env-key="jama51f8fo0defu8ruvoe3vk9"
              experiment_name="livepeer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
