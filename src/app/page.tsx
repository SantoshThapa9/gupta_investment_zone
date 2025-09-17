import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { TrendingUp, Shield, Clock, Users, Star } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section
        id="home"
        className="bg-gradient-to-br from-background to-background2 flex flex-col items-center justify-center text-center h-150"
      >
        <strong className="font-font2 font-light text-xs border border-primary/20 text-primary bg-primary/10 rounded-md px-3 py-1">
          Authorized Angel One Partner
        </strong>
        <h1 className="text-3xl font-font3 md:text-5xl font-bold  mb-2 mt-5 px-10 max-w-6xl ">
          Invest Smarter with{" "}
          <span className="text-primary ">Gupta Investment Zone</span>
        </h1>
        <p className="text-md md:text-xl text-gray-600 mb-8 ">
          Lifetime guidance | Lowest Brokerage Guaranteed
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button>Open Demat Account Now</Button>
          </Link>
          <Link href="/about">
            <Button> Learn More</Button>
          </Link>
        </div>
      </section>
      {/* Why Choose Us Section */}

      <section className="py-20 px-10 bg-background container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-3xl lg:text-4xl mb-4">
            Why Choose Gupta Investment Zone?
          </h2>
          <p className="text-sm md:text-md text-muted-foreground max-w-2xl mx-auto">
            Experience the benefits of partnering with us for your investment
            journey
          </p>
        </div>

        <div className="grid grid-cols-2 gap-9">
          {/* Card 1 */}
          <div className="text-center p-6 bg-card border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="   font-semibold text-xl mb-2">
                Lowest Brokerage
              </h3>
              <p className="text-muted-foreground">
                Get the most competitive brokerage rates in the market when you
                open through us
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="text-center p-6  bg-card  border  border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="pt-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-secondary" size={32} />
              </div>
              <h3 className="   font-semibold text-xl mb-2">
                Angel One Credibility
              </h3>
              <p className="text-muted-foreground">
                Backed by Angel Ones trusted platform and advanced trading
                technology
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="text-center p-6  border  bg-card border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="   font-semibold text-xl mb-2">Fast Onboarding</h3>
              <p className="text-muted-foreground">
                Quick and hassle-free account opening process with minimal
                documentation
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="text-center p-6  border  bg-card border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="pt-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-secondary" size={32} />
              </div>
              <h3 className="   font-semibold text-xl mb-2">Trusted Support</h3>
              <p className="text-muted-foreground">
                Dedicated investment support and guidance from our experienced
                team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-10  mx-auto  sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="   font-bold text-3xl lg:text-4xl   mb-4">
            Trusted by Thousands of Investors
          </h2>
          <p className="text-xl text-muted-foreground">
            Join our growing community of successful investors
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="pt-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                Excellent service and the lowest brokerage rates. The account
                opening process was smooth and quick.
              </p>
              <div className="font-semibold  ">Rajesh Kumar</div>
              <div className="text-sm text-muted-foreground">
                Investor since 2023
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="pt-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                Great support team and reliable platform. Highly recommend for
                new investors.
              </p>
              <div className="font-semibold  ">Priya Sharma</div>
              <div className="text-sm text-muted-foreground">
                Investor since 2022
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="p-6  border  border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <div className="pt-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                The best decision I made was opening my demat account through
                Gupta Investment Zone.
              </p>
              <div className="font-semibold  ">Amit Patel</div>
              <div className="text-sm text-muted-foreground">
                Investor since 2021
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white flex flex-col items-center justify-center ">
        <h2 className="font-bold text-3xl lg:text-4xl  mb-4">
          Ready to Start Your Investment Journey?
        </h2>
        <p className="text-xl  mb-8 max-w-2xl mx-auto text-center">
          Open your demat account today and enjoy the lowest brokerage rates
          with Angel Ones trusted platform
        </p>
        <button className="flex items-center bg-slate-800 p-2 rounded-xl hover:opacity-90 cursor-pointer ">
          Open Demat Account Now
          <ArrowRight className="ml-2" size={20} />
        </button>
      </section>
    </div>
  );
}
