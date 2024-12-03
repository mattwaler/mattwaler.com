export default function Phone(props) {
  return (
    <div className="relative aspect-[288/600] rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-zinc-900 ml-1">
      <div className="absolute -inset-[1px] rounded-[37px] border-[3px] border-zinc-700 border-opacity-40 pointer-events-none"></div>
      <div className="relative w-full h-full rounded-[37px] overflow-hidden grid grid-cols-1 grid-rows-1 bg-zinc-900/10">
        <div className="z-[-1] col-start-1 row-start-1 bg-black w-[1206px] h-[2622px]"></div>
        <div className="z-10 col-start-1 row-start-1">
          {props.children}
        </div>
      </div>
      <div className="hidden sm:block absolute left-[-12px] top-20 w-[6px] h-8 bg-zinc-900 rounded-l-md shadow-md"></div>
      <div className="hidden sm:block absolute left-[-12px] top-36 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
      <div className="hidden sm:block absolute left-[-12px] top-52 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
      <div className="hidden sm:block absolute right-[-12px] top-36 w-[6px] h-16 bg-zinc-900 rounded-r-md shadow-md"></div>
    </div>
  )
}
