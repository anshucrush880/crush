export default function AnimatedCat() {
  return (
    <div className="animate-float">
      <svg
        width="120"
        height="120"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Body */}
        <ellipse cx="50" cy="60" rx="25" ry="28" fill="#FFB6C1" />
        <ellipse cx="50" cy="62" rx="22" ry="25" fill="#FFC0CB" />
        
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
        
        {/* Eyes */}
        <circle cx="40" cy="55" r="5" fill="#2C3E50" />
        <circle cx="60" cy="55" r="5" fill="#2C3E50" />
        
        {/* Eye shine with blink */}
        <g className="animate-blink">
          <circle cx="41" cy="54" r="2" fill="white" />
          <circle cx="61" cy="54" r="2" fill="white" />
        </g>
        
        {/* Nose */}
        <path
          d="M 50 60 L 50 68"
          stroke="#FF69B4"
          strokeWidth="2"
          strokeLinecap="round"
        />
        
        {/* Mouth */}
        <path
          d="M 50 68 Q 45 70 42 69"
          stroke="#FF69B4"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 50 68 Q 55 70 58 69"
          stroke="#FF69B4"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
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
        
        {/* Cheeks */}
        <circle cx="50" cy="72" r="3" fill="#FFB6C1" />
        
        {/* Blush marks */}
        <ellipse cx="32" cy="64" rx="4" ry="2" fill="#FF69B4" opacity="0.3" />
        <ellipse cx="68" cy="64" rx="4" ry="2" fill="#FF69B4" opacity="0.3" />
        
        {/* Small hearts around cat */}
        <g className="animate-pulse" style={{ animationDuration: '1.5s' }}>
          <path d="M 85 45 L 87 48 L 89 45 Q 89 42 87 42 Q 85 42 85 45 Z" fill="#FF69B4" opacity="0.6" />
        </g>
        <g className="animate-pulse" style={{ animationDuration: '1.8s', animationDelay: '0.5s' }}>
          <path d="M 12 50 L 14 53 L 16 50 Q 16 47 14 47 Q 12 47 12 50 Z" fill="#FF69B4" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
