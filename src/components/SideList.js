import { Link } from "react-router-dom";
import ArrowDropDown from "./icons/ArrowDropDown";
import HomeIcon from "./icons/HomeIcon";
import MemberIcon from "./icons/MemberIcon";
import OrgIcon from "./icons/OrgIcon";
import UserData from "./UserData";

export default function SideList({ hasUserSection }) {
  return (
    <div>
      <div>{hasUserSection && <UserData textColor="text-themeBlack" />}</div>
      <ul className="py-6">
        <li>
          <Link to="/">
            <div className="flex items-center">
              <HomeIcon />
              <p className="ml-4">Home</p>
            </div>
          </Link>
        </li>
        <li className="py-6">
          <div className="flex items-center">
            <MemberIcon />
            <p className="ml-4">Members</p>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <OrgIcon />
            <p className="mx-4">Organizations</p>
            <div>
              <ArrowDropDown />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
