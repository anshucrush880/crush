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
import { Heart, Sparkles } from 'lucide-react';

export default function Landing() {
  const [, setLocation] = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  const handleShow = () => {
    setLocation('/alone');
  };

  const handleDontShow = () => {
    setShowAlert(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-accent/20 p-8 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-20 text-primary/10 w-12 h-12 animate-pulse" />
        <Heart className="absolute bottom-32 right-32 text-primary/10 w-16 h-16 animate-pulse" style={{ animationDelay: '0.3s' }} />
        <Heart className="absolute top-40 right-20 text-primary/10 w-10 h-10 animate-pulse" style={{ animationDelay: '0.7s' }} />
        
        {/* Floating hearts */}
        <Heart className="absolute bottom-0 left-[20%] text-primary/20 w-8 h-8 animate-heart-float" style={{ animationDelay: '0s' }} />
        <Heart className="absolute bottom-0 left-[60%] text-primary/20 w-6 h-6 animate-heart-float" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-0 left-[80%] text-primary/20 w-10 h-10 animate-heart-float" style={{ animationDelay: '4s' }} />
        
        {/* Sparkles */}
        <Sparkles className="absolute top-[30%] left-[15%] text-primary/20 w-6 h-6 animate-sparkle" />
        <Sparkles className="absolute top-[60%] right-[20%] text-primary/20 w-5 h-5 animate-sparkle" style={{ animationDelay: '0.8s' }} />
        <Sparkles className="absolute top-[20%] right-[30%] text-primary/20 w-4 h-4 animate-sparkle" style={{ animationDelay: '1.2s' }} />
      </div>

      <div className="max-w-md w-full animate-scale-in">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center border border-card-border">
          <h1 className="font-display text-5xl text-primary mb-12 leading-tight animate-slide-up">
            I Have Something For You
          </h1>

          <div className="flex flex-col gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button
              size="lg"
              className="w-full py-6 text-lg rounded-full shadow-lg hover:scale-105 transition-transform"
              onClick={handleShow}
              data-testid="button-show"
            >
              Show
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full py-6 text-lg rounded-full hover:scale-105 transition-transform"
              onClick={handleDontShow}
              data-testid="button-dont-show"
            >
              Don't Show
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-muted-foreground text-base animate-fade-in" style={{ animationDelay: '0.5s' }}>
        For Mansi Jii From Anshu
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground text-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
        created with 💝
      </div>

      <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
        <AlertDialogContent className="max-w-sm rounded-2xl animate-scale-in" data-testid="alert-please-click-show">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center text-2xl">
              Please Click On Show
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center text-base pt-4">
              I promise it will be worth it! 💕
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
