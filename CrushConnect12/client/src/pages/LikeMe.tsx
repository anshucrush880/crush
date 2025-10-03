import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';

export default function LikeMe() {
  const [, setLocation] = useLocation();

  const handleYes = () => {
    setLocation('/ready');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/30 via-background to-secondary/30 p-8 relative overflow-hidden">
      {/* Romantic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts */}
        <Heart className="absolute bottom-0 left-[12%] text-primary/25 w-9 h-9 animate-heart-float" />
        <Heart className="absolute bottom-0 left-[28%] text-primary/25 w-7 h-7 animate-heart-float" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-0 left-[44%] text-primary/25 w-11 h-11 animate-heart-float" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-0 left-[60%] text-primary/25 w-8 h-8 animate-heart-float" style={{ animationDelay: '3s' }} />
        <Heart className="absolute bottom-0 left-[76%] text-primary/25 w-10 h-10 animate-heart-float" style={{ animationDelay: '4s' }} />
        
        {/* Sparkles */}
        <Sparkles className="absolute top-[20%] left-[15%] text-primary/35 w-7 h-7 animate-sparkle" />
        <Sparkles className="absolute top-[50%] right-[20%] text-primary/35 w-6 h-6 animate-sparkle" style={{ animationDelay: '0.7s' }} />
        <Sparkles className="absolute top-[70%] left-[25%] text-primary/35 w-5 h-5 animate-sparkle" style={{ animationDelay: '1.3s' }} />
        <Sparkles className="absolute bottom-[35%] right-[30%] text-primary/35 w-6 h-6 animate-sparkle" style={{ animationDelay: '0.4s' }} />
      </div>

      <div className="max-w-2xl w-full animate-scale-in">
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl shadow-2xl p-16 text-center border border-card-border relative">
          {/* Corner hearts */}
          <Heart className="absolute top-4 right-4 text-primary w-7 h-7 animate-pulse" fill="currentColor" />
          <Heart className="absolute top-4 left-4 text-primary w-7 h-7 animate-pulse" fill="currentColor" style={{ animationDelay: '0.5s' }} />
          <Heart className="absolute bottom-4 right-4 text-primary w-7 h-7 animate-pulse" fill="currentColor" style={{ animationDelay: '1s' }} />
          <Heart className="absolute bottom-4 left-4 text-primary w-7 h-7 animate-pulse" fill="currentColor" style={{ animationDelay: '1.5s' }} />

          <h1 className="font-display text-6xl md:text-7xl text-primary mb-12 leading-tight animate-slide-up">
            Do You Like Me?
          </h1>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="px-12 py-8 text-2xl rounded-full shadow-lg hover:scale-105 transition-transform"
              onClick={handleYes}
              data-testid="button-yes-like"
            >
              Yes ❤️
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
