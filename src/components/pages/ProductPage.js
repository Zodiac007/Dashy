import { useContext } from "react";
import AppContext from "../../utlls/context";
import useFetch from "../../utlls/useFetch";
import BannerText from "../banner/BannerText";
import BreadCrumbs from "../common/BreadCrumbs";
import CustomButton from "../common/CustomButton";
import OfferSection from "../offer/OfferSection";
import VideoSection from "../video/VideoSection";

export default function ProductPage() {
  const { response, loading } = useFetch("/product/6781/", {}, "dep2");

  const { config } = useContext(AppContext);

  return (
    <>
      <div className="max-w-screen-xl mx-auto py-4">
        <div className="block md:flex justify-between items-center">
          <BreadCrumbs title={response?.trl?.name} />
          <CustomButton link="/edit" text="edit" bgColor={config?.mainColor} />
        </div>
        <div className="grid grid-cols-5 gap-6">
          <div className="bg-white border col-span-5 md:col-span-5 row-span-2">
            <BannerText
              picture={response?.picture}
              name={response?.trl?.name}
              description={response?.description}
              company={response?.company}
              loading={loading}
            />
          </div>

          <div className="border rounded-md bg-white col-span-5 md:col-span-5 p-2 md:p-6">
            <VideoSection video={response?.video} />
          </div>
          <div className="border rounded-md bg-white col-span-5 md:col-span-5 row-span-2">
            <OfferSection
              businessModels={response?.businessModels}
              trl={response?.trl}
            />
          </div>
        </div>
      </div>
    </>
  );
}
