import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const benefits = [
  "Access to all trading signals",
  "Join exclusive coaching calls",
  "Private community access",
  "Trading education resources",
  "Automated trading tools",
  "24/7 member support",
];

export const JoinCTASection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-xl">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ready to Start Your Trading Journey?
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Join our community of successful traders and get instant access to our proven trading signals. 
              Whether you're a beginner or experienced trader, we have everything you need to succeed.
            </p>

            <ul className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button size="lg" className="bg-primary hover:bg-green-light text-primary-foreground text-lg px-8 py-6">
              Join the FREE Group Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
