import ios15bg from "./assets/ios15bg.jpg";
import StatusIcons from "./StatusIcons";
import insetCorner from "./assets/inset-corner.svg";
import Notification from "./Notification";

export default function PhoneFrame({ children, isDismissed }) {
  return (
    <div
      class="bg-black w-[513px]
    h-[1110px] rounded-[90px]
    flex items-center justify-center relative
    border-[0.04rem] border-gray-200 border-opacity-70
     shadow-xl box-border"
    >
      {/* Sound profile button */}
      <div
        className="w-[0.28rem] h-8 
        bg-black border-t-[0.5px]
        rounded-l-[0.09rem]
         border-opacity-40
        absolute left-[-0.335rem] top-[21%]
        shadow box-border"
      ></div>
      {/* Volume up button */}
      <div
        className="w-[0.28rem] h-[4.3rem] 
        bg-black border-t-[0.5px]
        rounded-l-[0.09rem]
         border-opacity-40
        absolute left-[-0.335rem] top-[26.3%]
        shadow box-border"
      ></div>
      {/* Volume down button */}
      <div
        className="w-[0.28rem] h-[4.3rem] 
        bg-black border-t-[0.5px]
        rounded-l-[0.09rem]
         border-opacity-40
        absolute left-[-0.335rem] top-[34%]
        shadow box-border"
      ></div>
      {/* Power button */}
      <div
        className="w-[0.28rem] h-[6.2rem] 
        bg-black border-t-[0.5px]
        rounded-r-[0.09rem]
         border-opacity-40
        absolute right-[-0.353rem] top-[28%]
        shadow box-border"
      ></div>

      {/* Outer frame of the inner frames (not the black border)  */}
      <div
        class="absolute inset-0
        border-[4.5px] border-white border-opacity-10
        rounded-[90px] box-border z-0"
      ></div>
      {/* Inner frame  */}
      <div
        class="absolute inset-0
        border-[2px] border-white border-opacity-5
        rounded-[90px] box-border z-[1] pointer-events-none"
      ></div>
      {/* Screen glow */}
      <div
        class="absolute inset-0 pointer-events-none w-[470px] 
        h-[1067px] rounded-[70px] m-auto shadow-3xl-white z-20"
      ></div>
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

        <div class="relative z-[1]">
          {/* Notification / presentation */}
          <Notification isDismissed={isDismissed} />

          {/* Notch */}

          <div
            className="w-[46%] h-[38px] 
        rounded-b-[1.9rem] bg-[#181818] relative mx-auto 
         space-x-3 flex justify-center 
        items-center pb-3 pl-6
        "
          >
            <img
              class="absolute
           top-0 scale-x-[-1] w-4 left-[-0.945rem]"
              src={insetCorner}
              alt=""
            />
            <img
              class="absolute 
           top-0 w-4 right-[-0.943rem] fill-current"
              src={insetCorner}
              alt=""
            />

            <div
              className="rounded-md w-16 h-2 relative
        box-border 
        border-l border-r border-opacity-10 
        bg-[#FFFFFF20]
     "
            ></div>
            <div
              className="rounded-full w-5 h-5 relative
        box-border border-opacity-100
        border-[4px] border-[#171717]
        bg-gray-900
        bg-gradient-to-br from-gray-700 
        via-gray-800 to-gray-700
       "
            ></div>
          </div>
        </div>
        <StatusIcons />

        <div class="w-full h-full relative">{children}</div>
      </div>
    </div>
  );
}
