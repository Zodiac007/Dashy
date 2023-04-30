// import Footer from "./Footer";
import { useEffect, useMemo, useState } from "react";
import AppContext from "../utlls/context";
import useFetch from "../utlls/useFetch";
import Navbar from "./Navbar";
import SideList from "./SideList";

export default function Layout({ children }) {
  const APP_ID = 1;
  const { response } = useFetch(
    `/configuration/${process.env.REACT_APP_PRODUCT_ID || APP_ID}/`
  );
  const [config, setConfig] = useState(null);
  useEffect(() => {
    setConfig(response);
  }, [response]);

  const contextValue = useMemo(
    () => ({
      config,
    }),
    [config]
  );

  return (
    <AppContext.Provider value={contextValue}>
      <div className="w-full">
        <Navbar logo={config?.logo} mainColor={config?.mainColor} />
        <div className="max-w-screen-xl mx-2 md:mx-auto py-4">
          <div className="grid grid-cols-5">
            <div className="hidden md:row-span-5 md:block">
              <SideList hasUserSection={config?.hasUserSection} />
            </div>
            <div className="col-span-5 md:col-span-4 row-span-2">
              {children}
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}
