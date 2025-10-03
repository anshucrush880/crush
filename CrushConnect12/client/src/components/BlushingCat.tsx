export default function BlushingCat() {
  return (
    <div className="animate-float">
      <svg
        width="140"
        height="140"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Body */}
        <ellipse cx="50" cy="60" rx="26" ry="29" fill="#FFB6C1" />
        <ellipse cx="50" cy="62" rx="23" ry="26" fill="#FFC0CB" />
        
        {/* Left ear with wiggle animation */}
        <g className="origin-[25px_30px] animate-wiggle" style={{ animationDuration: '2s', animationDelay: '0s' }}>
          <path
            d="M 30 35 Q 25 15 20 20 Q 18 25 25 40 Z"
            fill="#FFB6C1"
            stroke="#FF69B4"
            strokeWidth="1"
          />
        </g>
        
        {/* Right ear with wiggle animation */}
        <g className="origin-[75px_30px] animate-wiggle" style={{ animationDuration: '2s', animationDelay: '0.3s' }}>
          <path
            d="M 70 35 Q 75 15 80 20 Q 82 25 75 40 Z"
            fill="#FFB6C1"
            stroke="#FF69B4"
            strokeWidth="1"
          />
        </g>
        
        {/* Closed shy eyes */}
        <path
          d="M 37 55 Q 40 57 43 55"
          stroke="#2C3E50"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 57 55 Q 60 57 63 55"
          stroke="#2C3E50"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Small smile */}
        <path
          d="M 45 67 Q 50 70 55 67"
          stroke="#FF69B4"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Nose */}
        <path
          d="M 50 60 L 50 66"
          stroke="#FF69B4"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Whiskers */}
        <path
          d="M 35 62 Q 30 62 28 60"
          stroke="#FF69B4"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 65 62 Q 70 62 72 60"
          stroke="#FF69B4"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Big blush marks - animated */}
        <g className="animate-pulse" style={{ animationDuration: '1.5s' }}>
          <ellipse cx="30" cy="65" rx="6" ry="4" fill="#FF1493" opacity="0.5" />
          <ellipse cx="70" cy="65" rx="6" ry="4" fill="#FF1493" opacity="0.5" />
        </g>
        
        {/* Extra blush glow */}
        <ellipse cx="30" cy="65" rx="8" ry="6" fill="#FF69B4" opacity="0.2" />
        <ellipse cx="70" cy="65" rx="8" ry="6" fill="#FF69B4" opacity="0.2" />
        
        {/* Small hearts around shy cat */}
        <g className="animate-pulse" style={{ animationDuration: '1.2s' }}>
          <path d="M 15 48 L 17 51 L 19 48 Q 19 45 17 45 Q 15 45 15 48 Z" fill="#FF1493" opacity="0.7" />
        </g>
        <g className="animate-pulse" style={{ animationDuration: '1.4s', animationDelay: '0.3s' }}>
          <path d="M 82 48 L 84 51 L 86 48 Q 86 45 84 45 Q 82 45 82 48 Z" fill="#FF1493" opacity="0.7" />
        </g>
        <g className="animate-pulse" style={{ animationDuration: '1.6s', animationDelay: '0.6s' }}>
          <path d="M 48 30 L 50 33 L 52 30 Q 52 27 50 27 Q 48 27 48 30 Z" fill="#FF1493" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
