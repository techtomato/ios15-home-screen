import { For } from "solid-js";
import AppIcon from "./AppIcon";
import AppWidget from "./AppWidget";

export default function HomeGrid({ homeIcons }) {
  return (
    <div className="flex flex-col h-full">
      <div
        class="w-full mt-6 p-[2.35rem] grid 
        grid-cols-4 grid-rows-6 gap-x-8 gap-y-5 my-auto"
      >
        <For each={homeIcons()}>
          {(el) =>
            el.type === "icon" ? (
              <AppIcon src={el.uri} />
            ) : (
              <AppWidget label={el.label}>{el.component}</AppWidget>
            )
          }
        </For>
      </div>
      <div
        class="flex justify-center items-start h-[1.2rem]
    gap-x-2"
      >
        <div
          className="rounded-full bg-white
        w-[0.5rem] h-[0.5rem]"
        ></div>
        <div
          className="rounded-full bg-white
         w-[0.5rem] h-[0.5rem] bg-opacity-50"
        ></div>
        <div
          className="rounded-full bg-white
         w-[0.5rem] h-[0.5rem] bg-opacity-50"
        ></div>
        <div
          className="rounded-full bg-white
         w-[0.5rem] h-[0.5rem] bg-opacity-50"
        ></div>
      </div>
    </div>
  );
}
