import React from "react";
import { QRCode } from "qrcode.react";

const QRComponent = () => {
  const qrValue = window.location.origin + "/mobile";

  return (
    <div>
      <h1>Scan to Join</h1>
      <QRCode value={qrValue} />
    </div>
  );
};

export default QRComponent;
