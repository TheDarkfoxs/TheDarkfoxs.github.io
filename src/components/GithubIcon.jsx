import { forwardRef, useImperativeHandle, useState } from "react";

const GithubIcon = forwardRef(
  ({ onMouseEnter, onMouseLeave, className, size = 20, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    useImperativeHandle(ref, () => ({
      startAnimation: () => setIsHovered(true),
      stopAnimation: () => setIsHovered(false),
    }));

    const handleMouseEnter = (e) => {
      setIsHovered(true);
      onMouseEnter?.(e);
    };

    const handleMouseLeave = (e) => {
      setIsHovered(false);
      onMouseLeave?.(e);
    };

    return (
      <div
        className={className}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}
        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center" }}
      >
        <svg
          fill="none"
          height={size}
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          width={size}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          />
          <path
            d="M9 18c-4.51 2-5-2-7-2"
            style={{
              transformOrigin: "9px 18px",
              animation: isHovered ? "github-tail-wag 1.5s ease-in-out infinite" : "none",
              transition: "transform 0.3s ease"
            }}
          />
        </svg>
      </div>
    );
  }
);

GithubIcon.displayName = "GithubIcon";

export { GithubIcon };
