import { useContext } from "react";
import AppContext from "../../utlls/context";
import MapIcon from "../icons/MapIcon";
import UserData from "../UserData";

export default function EditMapSection() {
  const { config } = useContext(AppContext);
  return (
    <div>
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
              Jülicher Straße 72a, 52070 Aachen, Germany
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
