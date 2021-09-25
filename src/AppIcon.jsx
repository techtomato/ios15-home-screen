import { createEffect } from "solid-js";

export default function AppIcon({ src }) {

  const getAppNameFromURI = (uri) => {
    const initialPos = uri.lastIndexOf("/") + 1;
    let letterCount = uri.lastIndexOf(".") - uri.lastIndexOf("/") - 1;
    if(import.meta.env.PROD) {
      letterCount -= 9
    }
    const noHyphens = uri.substr(initialPos, letterCount).split("-").join(" ");
    return noHyphens
  };

  return (
    <div
      class="flex flex-col gap-y-1.5 
      justify-center items-center w-full"
    >
      <span
        class="overflow-hidden
            rounded-[1.17rem] w-[4.3rem]
            cursor-pointer"
      >
        <img src={src} class="w-full drop-shadow-sm" alt="label" />
      </span>
      <span
        class="text-white
      font-normal text-sm flex
      justify-center capitalize
      drop-shadow-sm"
      >
        {getAppNameFromURI(src)}

      </span>
    </div>
  );
}
