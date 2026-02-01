import patternBg from "@/assets/pattern-bg.png";

interface BackgroundPatternProps {
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
}

const BackgroundPattern = ({ children, className = "", overlay = true }: BackgroundPatternProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url(${patternBg})`,
          backgroundRepeat: 'repeat',
          backgroundPosition: 'center',
          backgroundSize: '400px',
          filter: 'hue-rotate(200deg) saturate(2)',
        }}
      />
      
      {/* Blue tint overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-blue-800/5 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPattern;
