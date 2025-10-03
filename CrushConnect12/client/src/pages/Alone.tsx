import { useState } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import AnimatedCat from '@/components/AnimatedCat';
import { Heart, Sparkles } from 'lucide-react';

export default function Alone() {
  const [, setLocation] = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  const handleYes = () => {
    setLocation('/like-me');
  };

  const handleNo = () => {
    setShowAlert(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-secondary/20 p-8 relative overflow-hidden">
      {/* Romantic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating hearts */}
        <Heart className="absolute bottom-0 left-[15%] text-primary/20 w-8 h-8 animate-heart-float" />
        <Heart className="absolute bottom-0 left-[45%] text-primary/20 w-6 h-6 animate-heart-float" style={{ animationDelay: '1.5s' }} />
        <Heart className="absolute bottom-0 left-[75%] text-primary/20 w-10 h-10 animate-heart-float" style={{ animationDelay: '3s' }} />
        <Heart className="absolute bottom-0 right-[20%] text-primary/20 w-7 h-7 animate-heart-float" style={{ animationDelay: '4.5s' }} />
        
        {/* Sparkles */}
        <Sparkles className="absolute top-[25%] left-[10%] text-primary/30 w-6 h-6 animate-sparkle" />
        <Sparkles className="absolute top-[65%] right-[15%] text-primary/30 w-5 h-5 animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute top-[40%] right-[25%] text-primary/30 w-4 h-4 animate-sparkle" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute bottom-[30%] left-[20%] text-primary/30 w-5 h-5 animate-sparkle" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="max-w-2xl w-full animate-scale-in">
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center border border-card-border relative overflow-visible">
          <div className="absolute -top-8 -right-8 z-10">
            <AnimatedCat />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 leading-relaxed max-w-lg mx-auto animate-slide-up">
            I want to say something, are you alone?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="sm:w-auto px-8 py-6 text-lg rounded-full shadow-lg hover:scale-105 transition-transform"
              onClick={handleYes}
              data-testid="button-yes-alone"
            >
              Yes, I am alone
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="sm:w-auto px-8 py-6 text-lg rounded-full hover:scale-105 transition-transform"
              onClick={handleNo}
              data-testid="button-no-not-alone"
            >
              No I am not alone
            </Button>
          </div>
        </div>
      </div>

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent className="max-w-sm rounded-2xl animate-scale-in" data-testid="alert-be-alone">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-2xl">
              Please be alone
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base pt-4">
              This is just for you! 🤫
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:justify-center">
            <Button
              className="rounded-full px-8"
              onClick={() => setShowAlert(false)}
              data-testid="button-alert-okay"
            >
              Okay
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
