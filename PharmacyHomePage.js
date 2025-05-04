import React, { useState } from "react";

function PharmacyHomePage() {
  const [trackingId, setTrackingId] = useState("");
  const [prescription, setPrescription] = useState(null);

  const handlePrescriptionUpload = (e) => {
    setPrescription(e.target.files[0]);
  };

  const handleTrackOrder = () => {
    alert(`Tracking Order ID: ${trackingId}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>MediShop - Online Pharmacy</h1>
      <input type="file" onChange={handlePrescriptionUpload} />
      {prescription && <p>Uploaded: {prescription.name}</p>}
      <br /><br />
      <input
        type="text"
        placeholder="Enter Tracking ID"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
      />
      <button onClick={handleTrackOrder}>Track Order</button>
    </div>
  );
}

export default PharmacyHomePage;