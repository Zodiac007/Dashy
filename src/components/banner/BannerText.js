import MapSection from "../map/MapSection";

export default function BannerText({
  picture,
  name,
  description,
  company = {},
}) {
  return (
    <div className="block md:flex md:flex-row">
      <div className="border basis-2/3">
        <div className="w-full">
          <img
            src={picture}
            alt="bannerImage"
            loading="lazy"
            className="w-full h-[180px] md:h-[300px]"
          />
          <div className="p-4 ">
            <h2 className="text-themeBlack font-bold py-2">{name}</h2>
            <p className="text-themeGray text-sm leading-6 capitalize">
              {description?.split("</script>")[1]}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full basis-1/3">
        <MapSection companyData={company} />
      </div>
    </div>
  );
}
