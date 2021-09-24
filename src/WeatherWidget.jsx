import locationIcon from './assets/ios15-location-status-icon.png'
import iosClearIcon from './assets/ios-clear-icon.svg'
export default function WeatherWidget() {
    return (
        <div 
        class="flex flex-col justify-between
         p-5 w-full h-full
       from-gray-700
       bg-blend-multiply
       bg-blue-300 
        bg-gradient-to-t
        to-gray-900 space-y-3.5 text-white">
            <div>
            <div class="flex items-center space-x-1.5">
                <span class="text-lg">
                Bizerte
                </span>
                <img 
                src={locationIcon}
                alt="location icon"
                class="w-3.5 mt-0.5 brightness-0 invert"/>
            </div>
            <span class="flex items-start">
               <span class="text-5xl -mt-0.5 font-extralight">
                28°</span>
            </span>
            </div>
            <div class="leading-4 text-md flex flex-col space-y-1 text-sm">
                <img src={iosClearIcon} 
                class="w-4"
                alt="clear weather icon" />
                <span>Mostly Clear</span>
                <span>H:36° L:24°</span>
            </div>
            </div>
    )
} 