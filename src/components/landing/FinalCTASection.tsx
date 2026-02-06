import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-20 bg-navy-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Limited Time Offer</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Start Trading with the World's{" "}
            <span className="text-primary">Fastest-Growing</span> Trading Community
          </h2>

          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Join over 20,000 traders who are already profiting from our signals. 
            Don't miss out on your chance to transform your financial future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-green-light text-primary-foreground text-lg px-8 py-6"
            >
              Join the FREE Group
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-gray-700 hover:bg-white/10 text-lg px-8 py-6"
            >
              Learn More
            </Button>
          </div>

          <p className="text-sm text-white/50">
            No credit card required • Cancel anytime • 100% Free
          </p>
        </div>
      </div>
    </section>
  );
};
