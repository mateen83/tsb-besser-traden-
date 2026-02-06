import { Button } from "@/components/ui/button";
import { Check, Users, Trophy, DollarSign, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Users, text: "20,000+ members worldwide" },
  { icon: Trophy, text: "World's best-rated trading program" },
  { icon: DollarSign, text: "100% free" },
  { icon: TrendingUp, text: "Become profitable in financial markets" },
];

export const HeroSection = () => {
  return (
    <section className="bg-[#0d1039] py-16 lg:py-24">

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Join TSB and profit daily from our{" "}
              <span className="text-primary">FREE trading signals</span>
            </h1>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-white/90">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg">{benefit.text}</span>
                </li>
              ))}
            </ul>

         <Button
  size="lg"
  className="text-white hover:opacity-90 bg-[linear-gradient(241deg,_#7A3DE3_50%,_#0DE3D6_100%)] text-lg px-8 py-6"
>
  Join the FREE Group
</Button>


            {/* Award Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {["Best Trading Signals 2024", "Top Rated", "Verified Results"].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-navy-light/50 rounded-full px-4 py-2 border border-gold/30"
                >
                  <Trophy className="w-4 h-4 text-gold" />
                  <span className="text-white/80 text-sm">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden">
              <img
                src="/public/hero.webp"
                alt="Professional trader"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-2xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">+87%</p>
                  <p className="text-sm text-muted-foreground">Win Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
