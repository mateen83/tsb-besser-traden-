import { TrendingUp } from "lucide-react";

const results = [
  { profit: "+$2,450", pair: "EUR/USD", date: "Jan 15" },
  { profit: "+$1,890", pair: "GBP/JPY", date: "Jan 18" },
  { profit: "+$3,200", pair: "Gold", date: "Jan 20" },
  { profit: "+$1,675", pair: "BTC/USD", date: "Jan 22" },
  { profit: "+$2,100", pair: "USD/CAD", date: "Jan 25" },
  { profit: "+$4,500", pair: "S&P 500", date: "Jan 28" },
];

export const ResultsSection = () => {
  return (
    <section id="results" className="py-20 bg-[#0d1039]">

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Results From Our Members
          </h2>
          <p className="text-lg text-white/70">
            Real results from real traders using our signals every day.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-navy-light/50 rounded-xl p-6 border border-navy-light hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span className="text-white/70 text-sm">{result.pair}</span>
              </div>
              <p className="text-2xl font-bold text-primary mb-1">{result.profit}</p>
              <p className="text-sm text-white/50">{result.date}</p>
            </div>
          ))}
        </div>

{/* Screenshot Gallery */}
<div className="mt-16 grid md:grid-cols-3 gap-6 w-full h-screen">
  {["img1.jpg", "img2.jpg", "img3.jpg"].map((img, i) => (
    <div
      key={i}
      className="w-full h-full rounded-xl overflow-hidden border border-navy-light"
    >
      <img
        src={`/${img}`}
        alt={`Trading result ${i + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>



      </div>
    </section>
  );
};
