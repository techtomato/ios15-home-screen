import newsIcon from "./assets/apps/news.png";
export default function Notification( { isDismissed }) {

    return(
          <div
            class={`absolute top-0 p-5 mt-[3.5rem] ml-[9px] backdrop-filter z-[-1]
       backdrop-blur-[42px] backdrop-brightness-[1.3] rounded-[1.35rem] text-black font-medium
       max-w-[452px] shadow-md  transition-transform duration-300 ${
         isDismissed() ? "translate-y-[-200px] " : "translate-y-[0]"
       }`}
          >
            <span class="flex space-x-2 items-center mb-1.5 -ml-2.5 -mt-2.5">
              <span class="flex justify-between items-center w-full">
                <div class="flex space-x-1.5 items-center">
                  <img class="w-5 drop-shadow-sm rounded-md" src={newsIcon} />{" "}
                  <span class="font-medium text-black opacity-50">News</span>
                </div>
                <span class="-mt-1 -mr-0.5 text-black opacity-50">now</span>
              </span>
            </span>
            <h1 class="font-bold">
              iPhone 13 Home screen by @
              <a href="https://instagram.com/tectomato" class="font-extrabold">
                techtomato
              </a>
            </h1>
            <p class="font-normal text-sm mt-0.5 text-gray-900 leading-4">
              iOS 15 Home screen recreation using TailwindCSS and SolidJS, watch
              the process on{" "}
              <a href="https://instagram.com/tectomato" class="font-semibold">
                instagram
              </a>
            </p>
          </div>
    )
}