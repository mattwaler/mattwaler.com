const Background = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1440"
    height="560"
    preserveAspectRatio="none"
    viewBox="0 0 1440 560"
    className="fixed inset-0 min-w-screen min-h-screen z-0 opacity-20 object-cover"
  >
    <g fill="none" mask='url("#SvgjsMask1000")'>
      <path fill="#0e2a47" d="M0 0h1440v560H0z"></path>
      <path
        fill="#184a7e"
        d="M0 141c57.6-14.8 172.8-78.8 288-74s172.8 86.6 288 98 172.8-55.8 288-41 172.8 114.4 288 115 230.4-89.6 288-112v433H0z"
      ></path>
      <path
        fill="#2264ab"
        d="M0 391c96 17.2 288 82.8 480 86s288-76.4 480-70 384 81.6 480 102v51H0z"
      ></path>
    </g>
    <defs>
      <mask id="SvgjsMask1000">
        <path fill="#fff" d="M0 0h1440v560H0z"></path>
      </mask>
    </defs>
  </svg>
);

export default Background;
