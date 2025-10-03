import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';
import BlushingCat from '@/components/BlushingCat';

export default function Ready() {
  const [, setLocation] = useLocation();

  const handleYes = () => {
    setLocation('/reveal');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/30 via-background to-primary/20 p-8 relative overflow-hidden">
      {/* Romantic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts */}
        <Heart className="absolute bottom-0 left-[18%] text-primary/25 w-8 h-8 animate-heart-float" />
        <Heart className="absolute bottom-0 left-[35%] text-primary/25 w-10 h-10 animate-heart-float" style={{ animationDelay: '1.5s' }} />
        <Heart className="absolute bottom-0 left-[52%] text-primary/25 w-7 h-7 animate-heart-float" style={{ animationDelay: '3s' }} />
        <Heart className="absolute bottom-0 left-[68%] text-primary/25 w-9 h-9 animate-heart-float" style={{ animationDelay: '4.5s' }} />
        <Heart className="absolute bottom-0 right-[15%] text-primary/25 w-11 h-11 animate-heart-float" style={{ animationDelay: '2s' }} />
        
        {/* Sparkles */}
        <Sparkles className="absolute top-[28%] left-[12%] text-primary/35 w-6 h-6 animate-sparkle" />
        <Sparkles className="absolute top-[58%] right-[18%] text-primary/35 w-7 h-7 animate-sparkle" style={{ animationDelay: '0.6s' }} />
        <Sparkles className="absolute top-[35%] right-[28%] text-primary/35 w-5 h-5 animate-sparkle" style={{ animationDelay: '1.1s' }} />
        <Sparkles className="absolute bottom-[40%] left-[22%] text-primary/35 w-6 h-6 animate-sparkle" style={{ animationDelay: '1.6s' }} />
      </div>

      <div className="max-w-2xl w-full animate-scale-in">
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center border border-card-border relative overflow-visible">
          <div className="flex justify-center mb-8">
            <BlushingCat />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-12 leading-relaxed animate-slide-up">
            Are you ready to know?
          </h2>

          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="px-12 py-8 text-xl rounded-full shadow-lg hover:scale-105 transition-transform"
              onClick={handleYes}
              data-testid="button-yes-ready"
            >
              Yes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
