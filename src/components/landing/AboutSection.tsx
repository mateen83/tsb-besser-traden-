import { Star, Award, Users, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "20,000+", label: "Active Members" },
  { icon: TrendingUp, value: "87%", label: "Win Rate" },
  { icon: Award, value: "10+", label: "Years Experience" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Meet Simon - Your Trading Mentor
            </h2>
            
            <p className="text-lg text-muted-foreground">
              With over 10 years of experience in the financial markets, Simon has helped thousands 
              of traders achieve consistent profitability. His unique approach combines technical 
              analysis with risk management principles that have been proven time and time again.
            </p>

            <p className="text-muted-foreground">
              After years of working for top investment banks, Simon decided to share his knowledge 
              with everyday traders. The Signals Bank was born from a simple mission: make professional 
              trading accessible to everyone, regardless of their experience level.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-2 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Trustpilot Mini */}
            <div className="flex items-center gap-2 pt-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-trustpilot text-trustpilot" />
                ))}
              </div>
              <span className="text-muted-foreground">4.6/5 on Trustpilot</span>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop"
                alt="Simon - Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gold text-white p-4 rounded-xl">
              <Award className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
