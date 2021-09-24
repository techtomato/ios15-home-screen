import batteryStatIcon from "./assets/ios15-battery-status-icon.png";
import wifiIcon from "./assets/ios15-wifi-icon.png";
import cellularIcon from "./assets/ios15-cellular-signal-icon.png";

export default function StatusIcons() {
  return (
    <div
      class="flex justify-between items-end
      text-white w-full h-9 absolute"
    >
      <span class="pl-6 font-medium drop-shadow-sm
      text-lg w-1/4 flex justify-center leading-4">
          9:41</span>
      <span class="flex items-end gap-x-1.5 pr-8">
      <img
          class="filter brightness-0 
            invert w-5 drop-shadow-sm"
          src={cellularIcon}
          alt=""
        />
      <img
          class="filter brightness-0 
            invert w-5 drop-shadow-sm "
          src={wifiIcon}
          alt=""
        />
        <img
          class="filter brightness-0 
            invert w-7 drop-shadow-sm"
          src={batteryStatIcon}
          alt=""
        />
      </span>
    </div>
  );
}
