export default function Phone(props) {
  return (
    <div className="rounded-[37px] shadow-[0_0_2px_2px_rgba(255,255,255,0.1)] border-10 border-black overflow-hidden relative">
      {props.children}
    </div>
  )
}
