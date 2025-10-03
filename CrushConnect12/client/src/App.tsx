import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "@/pages/Landing";
import Alone from "@/pages/Alone";
import LikeMe from "@/pages/LikeMe";
import Ready from "@/pages/Ready";
import Reveal from "@/pages/Reveal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/alone" component={Alone} />
      <Route path="/like-me" component={LikeMe} />
      <Route path="/ready" component={Ready} />
      <Route path="/reveal" component={Reveal} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
