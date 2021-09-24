import booksIcon from './assets/books.svg'
import bookCover from './assets/021cover.jpg'
export default function BookWidget() {
    return(
        <div 
        class="flex flex-col p-5 w-full h-full
        bg-gradient-to-b from-yellow-400 
        to-yellow-600 bg-red-400 
        bg-blend-overlay space-y-3.5">
           
            <div class="flex justify-between
            items-start">
                <div class="w-[5.7rem] h-[5.7rem] 
            
                rounded-xl overflow-hidden shadow-sm">
                    <img src={bookCover}
                    class="w-[100%]"
                    alt="Zero to One book 
                    cover image"/>
                </div>
                <img src={booksIcon}
                class="w-6 m-1.5 drop-shadow-sm"
                 alt="Books app icon" />
            </div>
            <div class="flex flex-col space-y-1
            text-white font-medium
            drop-shadow-sm ml-0.5 leading-5 text-lg">
                <span class="">
                    Zero to One</span>
                <span class="opacity-50 
                ">
                    Peter Thiel</span>
            </div>
        </div>
    )
}