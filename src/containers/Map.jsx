import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase.config";

const Map = () => {
  const mapRef = useRef(null);
  const [thummiLocation, setThummiLocation] = useState(null);
  const [vaibhiLocation, setVaibhiLocation] = useState(null);

  useEffect(() => {
    const fetchLocations = async () => {
      const thummiDoc = await getDoc(doc(collection(db, "locations"), "Thummi"));
      const vaibhiDoc = await getDoc(doc(collection(db, "locations"), "Vaibhi"));

      if (thummiDoc.exists()) {
        setThummiLocation(thummiDoc.data());
      }

      if (vaibhiDoc.exists()) {
        setVaibhiLocation(vaibhiDoc.data());
      }
    };

    fetchLocations();
  }, []);

  const updateLocation = async (user) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        await setDoc(doc(collection(db, "locations"), user), {
          latitude,
          longitude,
          timestamp: new Date(),
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="map-container">
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "400px", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {thummiLocation && (
          <Marker position={[thummiLocation.latitude, thummiLocation.longitude]}>
            <Popup>
              Thummi's Location<br />
              Latitude: {thummiLocation.latitude}<br />
              Longitude: {thummiLocation.longitude}
            </Popup>
          </Marker>
        )}
        {vaibhiLocation && (
          <Marker position={[vaibhiLocation.latitude, vaibhiLocation.longitude]}>
            <Popup>
              Vaibhi's Location<br />
              Latitude: {vaibhiLocation.latitude}<br />
              Longitude: {vaibhiLocation.longitude}
            </Popup>
          </Marker>
        )}
      </MapContainer>
      <div className="flex gap-4 mt-4">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-md"
          onClick={() => updateLocation("Thummi")}
        >
          Update as Thummi
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={() => updateLocation("Vaibhi")}
        >
          Update as Vaibhi
        </button>
      </div>
    </div>
  );
};

export default Map;
