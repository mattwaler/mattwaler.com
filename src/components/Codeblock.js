const Codeblock = ({ children }) => {
  return (
    <div
      aria-hidden="true"
      className="not-prose w-full p-4 bg-gray-900 text-white rounded-xl shadow-xl text-sm sm:text-base"
    >
      <div className="space-x-2 flex items-center">
        <div className="rounded-full w-3 h-3 bg-red-500"></div>
        <div className="rounded-full w-3 h-3 bg-yellow-500"></div>
        <div className="rounded-full w-3 h-3 bg-green-500"></div>
      </div>
      <div className="py-6">
        <pre>
          {children}
        </pre>
      </div>
    </div>
  )
}

export default Codeblock
