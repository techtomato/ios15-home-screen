import { createSignal, createEffect } from "solid-js";
import BookWidget from "./BookWidget";
import HomeGrid from "./HomeGrid";
import HomeScreenDock from "./HomeScreenDock";
import PhoneFrame from "./phone-frame";
import WeatherWidget from "./WeatherWidget";
import ios15bg from './assets/ios15bg.jpg'
function App() {
  const [widgets] = createSignal(
    [
      {
        label: 'books',
        component: BookWidget 
      },
      {
        label: 'weather',
        component: WeatherWidget
      }
    ]
  )
  const [dockIcons, setDockIcons] = createSignal([])
  const [homeIcons, setHomeIcons] = createSignal([])
 
  createEffect(() => {
    const appIconModules = 
    import.meta.glob("./assets/apps/*.png");
    let i = 0
    let j = 0
    for (const path in appIconModules) {
      appIconModules[path]().then((mod) => {
        if (i<4) {
        setDockIcons([...dockIcons(),
          {type: "icon", uri: mod.default}]);
        }
        else {
          if (i === 12 || i === 18) {
            setHomeIcons([
              ...homeIcons(),
           {
              type: "widget", 
              component: widgets()[j]?.component,
              label: widgets()[j]?.label }
          ])
          j++
          }
          setHomeIcons([
            ...homeIcons(),
         {type: "icon", uri: mod.default}
        ])}
        i++
      });
    
    }
  }, []);


  return (
    <div class="min-w-screen min-h-screen flex 
    items-center justify-center relative 
    overflows-y-hidden py-56">
      <img src={ios15bg} 
      class="absolute blur-2xl inset-0 
      min-w-[120%] min-h-[120%] -left-20" />
     <PhoneFrame>
       <div class="h-full grid grid-rows-6">
       <div class="row-span-5">
        <HomeGrid homeIcons={homeIcons} />
        </div>
        <div class="flex justify-center 
        items-end">
          <HomeScreenDock dockIcons={dockIcons} />
          </div>
      
        </div>
      </PhoneFrame>
    </div>
  );
}

export default App;
