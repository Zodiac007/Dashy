import useFetch from "../utlls/useFetch";

export default function UserData({ textColor }) {
  const { response } = useFetch("/product/6781/", {}, "dep3");

  return (
    <div className="flex items-center mt-4">
      <div className="h-14 w-14">
        <img
          src={response?.user?.profilePicture}
          alt="UserPic"
          className="border rounded-full"
        />
      </div>
      <div className="ml-4">
        <h3
          className={`${textColor || "text-themeGray"} text-sm font-semibold`}
        >
          {response?.user?.firstName} {response?.user?.lastName}
        </h3>
        <p className="text-themeGray text-sm font-normal">
          {response?.company?.name}
        </p>
      </div>
    </div>
  );
}
