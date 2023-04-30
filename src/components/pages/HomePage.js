import { useContext } from "react";
import AppContext from "../../utlls/context";
import CustomButton from "../common/CustomButton";

export default function HomePage() {
  const { config } = useContext(AppContext);
  return (
    <div className="p-6 flex justify-center items-center">
      <div className="">
        <h1
          className="my-6 font-bold text-5xl"
          style={{ color: `${config?.mainColor}` }}
        >
          HOME PAGE
        </h1>
        <div className="ml-20">
          <CustomButton
            link="/product"
            text="Product Page"
            bgColor={config?.mainColor}
          />
        </div>
      </div>
    </div>
  );
}
