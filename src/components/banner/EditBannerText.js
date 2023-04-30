import { useContext } from "react";
import AppContext from "../../utlls/context";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import EditMapSection from "../map/EditMapSection";
import WYSIWYMEditor from "./WYSIWYMEditor";

export default function EditBannerText({
  titleValue,
  titleChangeHandler,
  descValue,
  titleName,
  descName,
  submitHandler,
  descHandler,
}) {
  const { config } = useContext(AppContext);
  return (
    <div className="block md:flex md:flex-row">
      <div className="border basis-2/3">
        <div className="w-full">
          <img
            src="https://img.innoloft.com/products/product_783016a3.png"
            alt="bannerImage"
            loading="lazy"
            className="w-full h-[180px] md:h-[300px]"
          />
          <div className="p-4 ">
            <CustomInput
              value={titleValue}
              onChange={titleChangeHandler}
              type="text"
              name={titleName}
              placeholder="Write your title.."
            />

            <WYSIWYMEditor
              value={descValue}
              name={descName}
              onChange={descHandler}
              placeholder="Please enter your description"
            />

            <div className="py-4 float-right">
              <CustomButton
                text="save"
                bgColor={config?.mainColor}
                submitHandler={submitHandler}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full basis-1/3">
        <EditMapSection />
      </div>
    </div>
  );
}
