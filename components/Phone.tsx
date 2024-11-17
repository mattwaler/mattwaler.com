export default function Phone(props) {
  return (
    <div className="relative aspect-[288/600] rounded-3xl lg:rounded-[45px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-8 border-zinc-900 ml-1">
      <div className="absolute -inset-[1px] rounded-2xl border-[3px] border-zinc-700 border-opacity-40 lg:rounded-[37px] pointer-events-none"></div>
      <div className="relative w-full h-full rounded-2xl lg:rounded-[37px] overflow-hidden flex items-center justify-center  bg-zinc-900/10">
        {props.children}
      </div>
      <div className="hidden sm:block absolute left-[-12px] top-20 w-[6px] h-8 bg-zinc-900 rounded-l-md shadow-md"></div>
      <div className="hidden sm:block absolute left-[-12px] top-36 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
      <div className="hidden sm:block absolute left-[-12px] top-52 w-[6px] h-12 bg-zinc-900 rounded-l-md shadow-md"></div>
      <div className="hidden sm:block absolute right-[-12px] top-36 w-[6px] h-16 bg-zinc-900 rounded-r-md shadow-md"></div>
    </div>
  )
}
