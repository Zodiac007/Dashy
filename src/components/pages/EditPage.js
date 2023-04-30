import { useState } from "react";
import useFetch from "../../utlls/useFetch";
import EditBannerText from "../banner/EditBannerText";
import BreadCrumbs from "../common/BreadCrumbs";
import CustomButton from "../common/CustomButton";
import EditOfferSection from "../offer/EditOfferSection";
import EditVideoSection from "../video/EditVideoSection";

export default function EditPage() {
  const { response } = useFetch("/product/6781/");
  const [newdata, setnewData] = useState({ title: "", desc: "", video: "" });

  function changeHandler(e) {
    setnewData({
      ...newdata,
      [e.target.name]: e.target.value,
    });
  }

  function RichHandler(data) {
    setnewData({
      ...newdata,
      desc: data,
    });
  }

  async function submitHandler(e) {
    e.preventDefault();
    try {
      const data = {
        title: newdata?.title,
        desc: newdata?.desc,
        video: newdata?.video,
      };

      const requestOptions = {
        method: "PUT",
        body: JSON.stringify(data),
      };

      const response = await fetch(
        "https://api-test.innoloft.com/product/6781/",
        requestOptions
      );
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="max-w-screen-xl mx-auto py-4">
      <div className="block md:flex justify-between items-center">
        <BreadCrumbs title="offer deatil" />
        <CustomButton link="/" text="View Offer" bgColor="bg-themeColor" />
      </div>
      <div className="grid grid-cols-5 gap-6">
        <div className="bg-white border col-span-5 md:col-span-5 row-span-2">
          <EditBannerText
            titleName="title"
            titleValue={response?.trl?.name}
            titleChangeHandler={changeHandler}
            descName="desc"
            submitHandler={submitHandler}
            descHandler={RichHandler}
            descValue={response?.description.split("</script>")[1]}
          />
        </div>
        <div className="bg-white border col-span-5 md:col-span-5 row-span-2">
          <EditVideoSection
            value={response?.video}
            name="video"
            onChange={changeHandler}
          />
        </div>
        <div className="bg-white border col-span-5 md:col-span-5 row-span-2">
          <EditOfferSection />
        </div>
      </div>
    </div>
  );
}
