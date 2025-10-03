import { useEffect, useState, useRef } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import audioFile from '@assets/Haseen Talwiinder 128 Kbps (mp3cut.net)_1759488071333.mp3';

export default function Reveal() {
  const [currentLyric, setCurrentLyric] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Lyrics with timestamps (in seconds) - synced with music
  const lyricsWithTimestamps = [
    { time: 0, text: "Tu haseen tera naam haseen ae" },
    { time: 3, text: "Tere ishq da jaam haseen ae" },
    { time: 6, text: "Eh be-matlabi zindagi" },
    { time: 8.5, text: "Jado di tere naam haseen ae" },
    { time: 11, text: "Tere ishq da jaam haseen ae" },
    { time: 13.5, text: "Subha haseen meri shaam haseen ae" },
    { time: 16, text: "Eh be-matlabi zindagi" },
    { time: 18.5, text: "Jado di tere naam haseen ae" },
    { time: 21, text: "Tere ishq da jaam haseen ae" },
    { time: 23.5, text: "Subha haseen meri shaam haseen ae" },
    { time: 26, text: "Eh be-matlabi zindagi" },
    { time: 28.5, text: "Jado di tere naam" },
  ];

  useEffect(() => {
    const audio = new Audio(audioFile);
    audioRef.current = audio;
    audio.volume = 0.6;
    audio.loop = true;
    
    // Try to play (may be blocked by browser autoplay policy)
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise.catch(err => {
        console.log('Autoplay was prevented. User interaction needed.');
      });
    }

    // Sync lyrics with audio time
    const syncLyrics = () => {
      const currentTime = audio.currentTime;
      
      // Find the appropriate lyric based on current audio time
      for (let i = lyricsWithTimestamps.length - 1; i >= 0; i--) {
        if (currentTime >= lyricsWithTimestamps[i].time) {
          setCurrentLyric(i);
          break;
        }
      }
    };

    // Update lyrics based on audio time
    const interval = setInterval(syncLyrics, 100);

    return () => {
      clearInterval(interval);
      audio.pause();
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-accent/30 p-8 overflow-hidden relative">
      {/* Background hearts */}
      <div className="absolute inset-0 pointer-events-none">
        <Heart className="absolute top-10 left-10 text-primary/20 w-16 h-16 animate-pulse" />
        <Heart className="absolute top-20 right-20 text-primary/20 w-20 h-20 animate-pulse" style={{ animationDelay: '0.2s' }} />
        <Heart className="absolute bottom-20 left-32 text-primary/20 w-12 h-12 animate-pulse" style={{ animationDelay: '0.5s' }} />
        <Heart className="absolute bottom-32 right-40 text-primary/20 w-14 h-14 animate-pulse" style={{ animationDelay: '0.7s' }} />
        <Heart className="absolute top-1/2 left-20 text-primary/20 w-10 h-10 animate-pulse" style={{ animationDelay: '1s' }} />
        <Heart className="absolute top-1/3 right-10 text-primary/20 w-12 h-12 animate-pulse" style={{ animationDelay: '0.3s' }} />
        
        {/* Floating hearts from bottom */}
        <Heart className="absolute bottom-0 left-[10%] text-primary/30 w-10 h-10 animate-heart-float" />
        <Heart className="absolute bottom-0 left-[25%] text-primary/30 w-8 h-8 animate-heart-float" style={{ animationDelay: '1s' }} />
        <Heart className="absolute bottom-0 left-[40%] text-primary/30 w-12 h-12 animate-heart-float" style={{ animationDelay: '2s' }} />
        <Heart className="absolute bottom-0 left-[55%] text-primary/30 w-9 h-9 animate-heart-float" style={{ animationDelay: '3s' }} />
        <Heart className="absolute bottom-0 left-[70%] text-primary/30 w-11 h-11 animate-heart-float" style={{ animationDelay: '4s' }} />
        <Heart className="absolute bottom-0 left-[85%] text-primary/30 w-7 h-7 animate-heart-float" style={{ animationDelay: '5s' }} />
        
        {/* Sparkles everywhere */}
        <Sparkles className="absolute top-[15%] left-[25%] text-primary/40 w-8 h-8 animate-sparkle" />
        <Sparkles className="absolute top-[35%] left-[70%] text-primary/40 w-6 h-6 animate-sparkle" style={{ animationDelay: '0.5s' }} />
        <Sparkles className="absolute top-[55%] left-[15%] text-primary/40 w-7 h-7 animate-sparkle" style={{ animationDelay: '1s' }} />
        <Sparkles className="absolute top-[75%] left-[80%] text-primary/40 w-5 h-5 animate-sparkle" style={{ animationDelay: '1.5s' }} />
        <Sparkles className="absolute top-[25%] right-[35%] text-primary/40 w-6 h-6 animate-sparkle" style={{ animationDelay: '0.8s' }} />
        <Sparkles className="absolute bottom-[25%] right-[15%] text-primary/40 w-7 h-7 animate-sparkle" style={{ animationDelay: '1.2s' }} />
      </div>

      <div className="max-w-4xl w-full text-center animate-scale-in z-10">
        <div className="bg-card/90 backdrop-blur-sm rounded-3xl shadow-2xl p-16 border border-card-border relative">
          {/* Corner sparkles */}
          <Sparkles className="absolute top-4 right-4 text-primary w-6 h-6 animate-pulse" />
          <Sparkles className="absolute top-4 left-4 text-primary w-6 h-6 animate-pulse" style={{ animationDelay: '0.5s' }} />
          <Sparkles className="absolute bottom-4 right-4 text-primary w-6 h-6 animate-pulse" style={{ animationDelay: '1s' }} />
          <Sparkles className="absolute bottom-4 left-4 text-primary w-6 h-6 animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          <h1 className="text-4xl md:text-5xl text-foreground mb-8 leading-relaxed animate-slide-up font-semibold">
            Smay Aane Pr Pta Chalega<br />
            Waise Jo Tu Soch Rhi H Wo Sahi H
          </h1>
          
          {/* Animated lyrics display */}
          <div className="mt-12 min-h-[80px] flex items-center justify-center">
            <p 
              key={currentLyric}
              className="font-display text-2xl md:text-3xl text-primary animate-fade-in"
            >
              {lyricsWithTimestamps[currentLyric].text}
            </p>
          </div>
          
          {/* Floating hearts around the text */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <Heart className="text-primary w-12 h-12 animate-pulse" fill="currentColor" />
          </div>
        </div>

        <p className="text-muted-foreground text-sm mt-8 animate-fade-in" style={{ animationDelay: '1s' }}>
          💝 With love from Anshu
        </p>
      </div>
    </div>
  );
}
