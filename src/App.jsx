import { createSignal, onCleanup, onMount } from "solid-js";
import BookWidget from "./BookWidget";
import HomeGrid from "./HomeGrid";
import HomeScreenDock from "./HomeScreenDock";
import PhoneFrame from "./phone-frame";
import WeatherWidget from "./WeatherWidget";
import ios15bg from "./assets/ios15bg.jpg";

function App() {
  const [widgets] = createSignal([
    {
      label: "books",
      component: BookWidget,
    },
    {
      label: "weather",
      component: WeatherWidget,
    },
  ]);
  const [dockIcons, setDockIcons] = createSignal([]);
  const [homeIcons, setHomeIcons] = createSignal([]);
  const [isDismissed, setIsDismissed] = createSignal(false);
  let timeoutCup
  onMount(() => {
    const appIconModules = import.meta.glob("./assets/apps/*.png");
    let i = 0;
    let j = 0;
    for (const path in appIconModules) {
      appIconModules[path]().then((mod) => {
        if (mod.default.lastIndexOf("__") > mod.default.lastIndexOf("/")) {
          setDockIcons([...dockIcons(), { type: "icon", uri: mod.default }]);
        } else {
          if (i === 12 || i === 18) {
            setHomeIcons([
              ...homeIcons(),
              {
                type: "widget",
                component: widgets()[j]?.component,
                label: widgets()[j]?.label,
              },
            ]);
            j++;
          }
          setHomeIcons([...homeIcons(), { type: "icon", uri: mod.default }]);
        }
        i++;
      });
    }

    setTimeout(() => setIsDismissed(true), 13000)

   
  });

  onCleanup(() => clearTimeout(timeoutCup))

  return (
    <div
      class="min-w-[640px] min-h-screen flex 
    items-center justify-center relative 
     py-56"
    >
      <div class="absolute z-40 top-4 flex space-x-1">
      <div class="px-3 py-0.5 rounded-lg backdrop-brightness-[1.13] backdrop-blur-lg
     text-gray-700 font-bold  shadow-sm">
        <a href="https://www.instagram.com/tectomato">📷 techtomato @ ig</a>
     </div>
      </div>
     

      <img
        src={ios15bg}
        class="absolute blur-2xl brightness-75 inset-0 
      min-w-[120%] min-h-[120%] -left-20 z-0"
      />
      <PhoneFrame isDismissed={isDismissed}>

       
        <div class="h-full grid grid-rows-6">
          <div class="row-span-5">
            <HomeGrid homeIcons={homeIcons} />
          </div>
          <div
            class="flex justify-center 
        items-end"
          >
            <HomeScreenDock dockIcons={dockIcons} />
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

export default App;
