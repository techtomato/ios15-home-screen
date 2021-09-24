import { children } from "solid-js";

export default function AppWidget({ label, children}) {
    return (
        <div class="col-span-2 
        row-span-2 flex flex-col justify-center
        space-y-1.5 items-center">
        <div class="w-[192px] 
        h-[192px]
        rounded-[1.7rem] overflow-hidden shadow-sm">
            {children}
        </div>
        <span class="
        text-white text-sm font-normal
        capitalize">
         { label }
        </span>
        </div>
    )
}