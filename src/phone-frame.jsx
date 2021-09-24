import ios15bg from "./assets/ios15bg.png";
import StatusIcons from "./StatusIcons";
import insetCorner from './assets/inset-corner.svg'
export default function PhoneFrame({ children }) {
  return (
    <div
      class="bg-black w-[513px]
    h-[1110px] rounded-[90px]
    flex items-center justify-center relative
    border-[0.04rem] border-gray-200 border-opacity-70
     shadow-xl box-border"
    >
        <div className="w-[0.28rem] h-8 
        bg-gray-900 border-t-[0.5px]
        rounded-l-[0.09rem]
         border-opacity-40
        absolute left-[-0.335rem] top-[21%]
        shadow box-border">   
        </div>
        <div className="w-[0.28rem] h-[4.3rem] 
        bg-gray-900 border-t-[0.5px]
        rounded-l-[0.09rem]
         border-opacity-40
        absolute left-[-0.335rem] top-[26.3%]
        shadow box-border">    
        </div>
        <div className="w-[0.28rem] h-[4.3rem] 
        bg-gray-900 border-t-[0.5px]
        rounded-l-[0.09rem]
         border-opacity-40
        absolute left-[-0.335rem] top-[34%]
        shadow box-border">   
        </div>
        <div className="w-[0.28rem] h-[6.2rem] 
        bg-gray-900 border-t-[0.5px]
        rounded-r-[0.09rem]
         border-opacity-40
        absolute right-[-0.335rem] top-[28%]
        shadow box-border">   
        </div>

        <div class="absolute inset-0
        border-[4.5px] border-gray-800
        rounded-[90px] box-border z-0">
        </div>
        <div class="absolute inset-0
        border-[2px] border-gray-700
        rounded-[90px] box-border z-[1] pointer-events-none">
        </div>
        
      <div
        class="w-[470px]
    h-[1067px] rounded-[70px] flex flex-col
    relative overflow-hidden brightness-105"
      >
        <img
          src={ios15bg}
          alt=""
          class="block absolute z-0
         min-w-[260%] -top-24 left-[-80%]"
        />

        <div
          className="mx-auto w-[46%] h-[38px]
        rounded-b-[1.9rem] bg-black relative
        z-10 space-x-3 flex justify-center 
        items-center pb-3 pl-6"
        >
            <img 
            class="absolute 
           top-0 scale-x-[-1] w-4 left-[-0.95rem]"
            src={insetCorner} alt="" />
            <img 
            class="absolute 
           top-0 w-4 right-[-0.96rem]"
            src={insetCorner} alt="" />
            
        <div className="rounded-md w-16 h-2 
        box-border 
        border-l border-r border-opacity-10 
        bg-[#FFFFFF20]
     ">
        </div>
        <div className="rounded-full w-5 h-5
        box-border border-opacity-100
        border-[4px] border-[#171717]
        bg-gray-900
        bg-gradient-to-br from-gray-700 
        via-gray-800 to-gray-700
       ">
        </div>
        </div>
        <StatusIcons />

        <div class="w-full h-full relative z-10">
            {children}</div>
      </div>
    </div>
  );
}
