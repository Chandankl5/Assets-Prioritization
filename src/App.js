import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import Dynamic from "./Dynamic.js";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <a href="/next-page">
        <img src="https://www.practostatic.com/consumer-home/practo-care/1631634827/banner-img.png" />
      </a>
      <h3 className="header">Experts in end to end surgical care</h3>
      <p>
        We bring expertise, care and technology together to give you end-to-end
        surgical solutions for 50+ ailments
      </p>

      <h3 className="header">Why to get piles treated early?</h3>
      <p>Avoid prolonged bleeding</p>
      <p>Avoid severe pain</p>
      <p>Avoid prolonged bleeding</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>
      <p>Avoid severe pain</p>

      <VisibilitySensor
        onChange={(visible) => {
          if (visible) {
            console.log("-----------Visible", visible);
            setVisible(visible);
          }
        }}
      >
        <img src="https://www.practo.com/sapphire-assets/images/practo_care/practo_care_banner_with_celebrity.dc1aadfd844b.png" />
      </VisibilitySensor>

      {visible && (
        <Dynamic
          callback={() =>
            import(/* webpackChunkName: 'lazy' */ "./LazyComponent")
          }
          fallback="Loading Lazy Component..."
        />
      )}
    </>
  );
}

export default App;
