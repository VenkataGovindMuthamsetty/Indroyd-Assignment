import React from "react";
import { QRCodeCanvas as QRCode } from "qrcode.react";
import "./index.css"; // Import the CSS file

const QRCodeDisplay = ({ url }) => {
  return (
    <div className="qr-container">
      <h3>Scan the QR Code to join the game</h3>
      <QRCode value={url} />
    </div>
  );
};

export default QRCodeDisplay;
