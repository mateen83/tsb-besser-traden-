import { Check, X } from "lucide-react";

const withTSB = [
  "Proven trading signals with 87%+ accuracy",
  "Expert guidance from professional traders",
  "Active community for support and motivation",
  "Structured learning path from beginner to pro",
  "Automated tools to save time",
  "Risk management strategies included",
];

const withoutTSB = [
  "Trial and error costing you money",
  "No guidance, learning from mistakes",
  "Trading alone with no support",
  "Overwhelmed by conflicting information",
  "Manual trading taking all your time",
  "Emotional decisions leading to losses",
];

export const ComparisonSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The Choice Is Clear
          </h2>
          <p className="text-lg text-muted-foreground">
            See the difference between trading with professional guidance vs going it alone.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* With TSB */}
          <div className="bg-card rounded-2xl p-8 border-2 border-primary shadow-lg">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <Check className="w-5 h-5" />
                <span className="font-semibold">Recommended</span>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">
                Trading with The Signals Bank
              </h3>
            </div>
            <ul className="space-y-4">
              {withTSB.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-card-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Without TSB */}
          <div className="bg-card rounded-2xl p-8 border border-border opacity-75">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
                <X className="w-5 h-5" />
                <span className="font-semibold">Not Recommended</span>
              </div>
              <h3 className="text-2xl font-bold text-card-foreground">
                Trading by Yourself
              </h3>
            </div>
            <ul className="space-y-4">
              {withoutTSB.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-destructive-foreground" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
