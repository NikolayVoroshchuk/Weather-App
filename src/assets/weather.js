export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 40 40"
    >
      <defs>
        <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1E64F0" />
          <stop offset="100%" stopColor="#1AD3FC" />
        </linearGradient>
        <linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC700" />
          <stop offset="100%" stopColor="#FFEA00" />
        </linearGradient>
        <linearGradient id="c" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" stopOpacity=".8" />
          <stop offset="100%" stopColor="#FFF" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <circle cx="20" cy="20" r="20" fill="url(#a)" />
        <circle cx="13.5" cy="16.5" r="6.5" fill="url(#b)" />
        <path
          fill="url(#c)"
          d="M14.4967105,28.4934211 C12.2893883,28.4934211 10.5,26.7040328 10.5,24.4967105 C10.5,22.4792488 11.9948021,20.8109168 13.9372778,20.5388431 C13.9091812,20.297341 13.8947368,20.0516731 13.8947368,19.8026316 C13.8947368,16.3217843 16.7165211,13.5 20.1973684,13.5 C22.8567494,13.5 25.131434,15.1470811 26.0569553,17.4767765 C26.1977419,17.466009 26.340007,17.4605263 26.4835526,17.4605263 C29.5302024,17.4605263 32,19.9303239 32,22.9769737 C32,26.0236234 29.5302024,28.4934211 26.4835526,28.4934211 C26.4362622,28.4934211 26.3891107,28.492826 26.3421053,28.4916429 L26.3421053,28.4934211 L14.4967105,28.4934211 Z"
        />
      </g>
    </svg>
  );
};
