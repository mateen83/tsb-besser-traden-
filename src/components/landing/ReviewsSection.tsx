import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Michael T.",
    rating: 5,
    text: "I've been trading for 3 years and never had consistent results until I joined TSB. The signals are incredibly accurate!",
    date: "2 weeks ago",
  },
  {
    name: "Sarah K.",
    rating: 5,
    text: "Started as a complete beginner. Now I'm making steady profits every week. The community support is amazing.",
    date: "1 month ago",
  },
  {
    name: "James R.",
    rating: 5,
    text: "The best investment I've ever made. The coaching calls alone are worth more than any course I've purchased.",
    date: "3 weeks ago",
  },
  {
    name: "Emma L.",
    rating: 5,
    text: "Skeptical at first, but the results speak for themselves. Consistent 80%+ win rate on the signals.",
    date: "1 week ago",
  },
  {
    name: "David M.",
    rating: 5,
    text: "The automated signals feature is a game-changer. I can trade even while working my full-time job.",
    date: "2 months ago",
  },
  {
    name: "Lisa P.",
    rating: 5,
    text: "Finally found a trading group that actually delivers. Transparent results and genuine community.",
    date: "3 weeks ago",
  },
];

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Members Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Rated Excellent on</span>
            <span className="text-trustpilot font-semibold">★ Trustpilot</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-trustpilot text-trustpilot" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-card-foreground mb-4">"{review.text}"</p>
                
                {/* Author */}
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-card-foreground">{review.name}</span>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
