import patternBgDark from "@/assets/pattern-bg-dark.jpg";
import patternGeometric from "@/assets/pattern-geometric.png";

interface BackgroundPatternProps {
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
  variant?: 'default' | 'geometric';
}

const BackgroundPattern = ({ children, className = "", overlay = true, variant = 'default' }: BackgroundPatternProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Pattern Background - Darker and more visible */}
      {variant === 'default' ? (
        <div 
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url(${patternBgDark})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: '600px',
            filter: 'hue-rotate(200deg) saturate(1.5) brightness(0.7)',
          }}
        />
      ) : (
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url(${patternGeometric})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: '400px',
          }}
        />
      )}
      
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/15 to-primary/20 pointer-events-none" />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundPattern;
