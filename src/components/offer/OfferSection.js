import BusinessIcon from "../icons/BusinessIcon";
import ClockIcon from "../icons/ClockIcon";
import CostIcon from "../icons/CostIcon";
import SettingsIcon from "../icons/SettingsIcon";

const defaultLabels = [
  { id: 1, label: "Label1" },
  { id: 2, label: "Label2" },
  { id: 3, label: "Label3" },
  { id: 4, label: "Label4" },
];

export default function OfferSection({ businessModels, trl }) {
  return (
    <div className="p-6">
      <h2 className="pt-2 text-themeBlack font-semibold">Offer Details</h2>
      <ul className="offerlist">
        <li className="py-6 w-full md:w-1/2 block md:inline-block">
          <div className="flex items-center mb-4">
            <SettingsIcon />
            <h3 className="text-themeGray ml-2">Technology</h3>
          </div>

          <ul className="flex w-full md:w-10/12">
            {defaultLabels.map((item, idx) => (
              <li key={idx}>
                <span
                  id="badge-dismiss-default"
                  className="inline-flex items-center px-3 py-1 mr-2 text-sm font-medium text-themeBlack bg-gray-200 rounded-full"
                >
                  {item?.label}
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li className="w-full md:w-1/2 block md:inline-block">
          <div className="flex items-center mb-4">
            <BusinessIcon />
            <h3 className="text-themeGray ml-2">Business Model</h3>
          </div>

          <ul className="flex w-full md:w-10/12 flex-wrap">
            {businessModels?.map((item, idx) => (
              <li key={idx}>
                <span
                  id="badge-dismiss-default"
                  className="inline-flex my-2 items-center px-3 py-1 mr-2 text-sm font-medium text-themeBlack bg-gray-200 rounded-full"
                >
                  {item?.name}
                </span>
              </li>
            ))}
          </ul>
        </li>
        <li className="w-full md:w-1/2 block md:inline-block">
          <div className="flex items-center mb-4">
            <ClockIcon />
            <h3 className="text-themeGray ml-2">TRL</h3>
          </div>
          <ul className="flex w-full md:w-10/12">
            <li>
              <span
                id="badge-dismiss-default"
                className="inline-flex items-center px-3 py-1 mr-2 text-sm font-medium text-themeBlack bg-gray-200 rounded-full"
              >
                {trl?.name}
              </span>
            </li>
          </ul>
        </li>
        <li className="w-full md:w-1/2 block md:inline-block">
          <div className="flex items-center mb-4">
            <CostIcon />
            <h3 className="text-themeGray ml-2">Costs</h3>
          </div>

          <ul className="flex w-full md:w-10/12">
            {defaultLabels.map((item, idx) => (
              <li key={idx}>
                <span
                  id="badge-dismiss-default"
                  className="inline-flex items-center px-3 py-1 mr-2 text-sm font-medium text-themeBlack bg-gray-200 rounded-full"
                >
                  {item?.label}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
