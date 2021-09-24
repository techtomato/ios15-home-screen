import { For } from "solid-js";

export default function HomeScreenDock({ dockIcons }) {
  return (
    <div
      class="m-[1.1rem] w-full 
        backdrop-blur-2xl
        rounded-[49px]
        backdrop-brightness-[1.15] grid
        grid-cols-4 gap-x-8 shadow-sm
        py-[1.40rem] px-[1.35rem]"
    >
        
      <For each={dockIcons()}>
        {(appIcon) => 
        <span class="flex justify-center items-center">
        <span
        class="overflow-hidden
            rounded-[1.18rem] w-[4.3rem]"
      >
        <img src={appIcon.uri} class="w-[4.3rem] drop-shadow-sm" />
        </span>
        </span>}
      </For>
    </div>
  );
}
