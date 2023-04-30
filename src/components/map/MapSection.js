import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import "leaflet/dist/leaflet.css";
import MapIcon from "../icons/MapIcon";
import UserData from "../UserData";
import { useContext } from "react";
import AppContext from "../../utlls/context";

export default function MapSection({ companyData }) {
  const icon = L.icon({
    iconUrl: iconMarker,
  });
  const { config } = useContext(AppContext);

  const street = companyData?.address?.street;
  const house = companyData?.address?.house;
  const zipCode = companyData?.address?.zipCode;
  const city = companyData?.address?.city;
  const country = companyData?.address?.country;
  const position = [50.779729, 6.100367];

  return (
    <div className="p-6">
      <h2 className="text-themeBlack font-semibold">Offered by</h2>
      <div className="my-4">
        <img
          src={config?.logo}
          alt="logo"
          width={config?.hasUserSection ? 180 : 80}
        />
      </div>
      {config?.hasUserSection && <UserData />}

      <div className="flex items-start mt-6 mb-2">
        <div>
          <MapIcon />
        </div>
        <div>
          <p className="text-sm ml-2 w-3/4 text-themeGray">
            {street} {house}, {zipCode} {city?.name}, {country?.name}
          </p>
        </div>
      </div>
      <div className="w-full">
        <MapContainer
          center={position}
          zoom={10}
          scrollWheelZoom={false}
          style={{ width: "100%", height: "250px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={icon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
