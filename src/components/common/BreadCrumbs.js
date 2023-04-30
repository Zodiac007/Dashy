import ArrowDropDown from "../icons/ArrowDropDown";
import HomeIcon from "../icons/HomeIcon";

export default function BreadCrumbs({ title }) {
  return (
    <div className="my-1 md:my-4">
      <ul className="flex items-start">
        <li>
          <HomeIcon />
        </li>
        <li className="rotate-[270deg]">
          <ArrowDropDown />
        </li>
        <li>Offers</li>
        <li className="rotate-[270deg]">
          <ArrowDropDown />
        </li>
        <li className="text-themeGray">{title}</li>
      </ul>
    </div>
  );
}
