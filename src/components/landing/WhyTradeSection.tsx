import { GraduationCap, Phone, Target, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: GraduationCap,
    title: "Learn from experienced traders",
    description: "Get mentored by professional traders with years of market experience and proven track records.",
  },
  {
    icon: Phone,
    title: "Exclusive coaching calls",
    description: "Join live coaching sessions where our experts break down market movements and trading strategies.",
  },
  {
    icon: Target,
    title: "Precise trading signals",
    description: "Receive accurate entry and exit points with detailed analysis for maximum profit potential.",
  },
  {
    icon: Zap,
    title: "Automated trading signals",
    description: "Copy our trades automatically with our integrated trading bots and automation tools.",
  },
];

const pressLogos = [
  "USA Today",
  "Yahoo Finance",
  "Benzinga",
  "MarketWatch",
  "Bloomberg",
  "Forbes",
];

export const WhyTradeSection = () => {
  return (
    <section id="why-trade" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Why Trade With Us?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of successful traders who have transformed their financial future with The Signals Bank.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Press Logos */}
        <div className="border-t border-border pt-12">
          <p className="text-center text-muted-foreground mb-8">As featured in</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            {pressLogos.map((logo, index) => (
              <div
                key={index}
                className="text-xl font-bold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
