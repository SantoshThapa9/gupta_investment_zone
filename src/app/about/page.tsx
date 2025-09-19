import { Button } from "@/components/ui/Button";
import { Eye, Target, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="  font-bold text-4xl lg:text-5xl text-foreground mb-6">
              About Gupta Investment Zone
            </h1>
            <p className="  opacity-70 mb-8">
              Your trusted partner in building wealth through smart investments
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 px-10">
        <div className="container mx-auto flex flex-wrap">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-font3 font-bold text-3xl text-foreground mb-6">
                Who We Are
              </h2>
              <p className="  mb-6">
                Gupta Investment Zone is a trusted authorized partner of Angel
                One, one of Indias leading stockbroking companies. We specialize
                in helping individuals and families build wealth through smart
                investment strategies and the lowest brokerage rates in the
                market.
              </p>
              <p className="  mb-6">
                With years of experience in the financial services industry, we
                understand the challenges that new and experienced investors
                face. Our mission is to make investing accessible, affordable,
                and profitable for everyone.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Start Investing Today
              </Button>
            </div>
            <div className="bg-card p-8 rounded-lg">
              <h3 className="  font-semibold text-2xl text-foreground mb-4">
                Our Partnership with Angel One
              </h3>
              <p className="  mb-4">
                As an authorized partner of Angel One, we provide you with
                access to:
              </p>
              <ul className="space-y-2  ">
                <li>• Advanced trading platforms and tools</li>
                <li>• Comprehensive research and market insights</li>
                <li>• Secure and reliable trading infrastructure</li>
                <li>• 24/7 customer support</li>
                <li>• Lowest brokerage rates guaranteed</li>
              </ul>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div className="p-8 rounded-lg shadow bg-card">
              <div className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="  font-bold text-2xl text-foreground mb-4">
                  Our Mission
                </h3>
                <p  >
                  To democratize investing by providing the lowest brokerage
                  rates, expert guidance, and seamless access to financial
                  markets through our partnership with Angel One.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-lg shadow bg-card">
              <div className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="text-secondary" size={32} />
                </div>
                <h3 className="  font-bold text-2xl text-foreground mb-4">
                  Our Vision
                </h3>
                <p  >
                  To become the most trusted investment partner in India,
                  empowering millions of investors to achieve their financial
                  goals through smart, informed investment decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center mb-16">
            <h2 className="  font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Why Investors Choose Us
            </h2>
            <p className="text-xl   max-w-2xl mx-auto">
              We are committed to providing exceptional value and service to our
              clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg shadow bg-card">
              <div className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-primary" size={32} />
                </div>
                <h3 className="  font-semibold text-xl mb-2">
                  Proven Track Record
                </h3>
                <p  >
                  Years of experience helping investors achieve their financial
                  goals with consistent results.
                </p>
              </div>
            </div>

            <div className="text-center p-6 rounded-lg shadow bg-card">
              <div className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-secondary" size={32} />
                </div>
                <h3 className="  font-semibold text-xl mb-2">
                  Personalized Service
                </h3>
                <p  >
                  Dedicated support team that understands your unique investment
                  needs and goals.
                </p>
              </div>
            </div>

            <div className="text-center p-6 rounded-lg shadow bg-card">
              <div className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="  font-semibold text-xl mb-2">
                  Goal-Oriented Approach
                </h3>
                <p  >
                  We focus on helping you achieve specific financial milestones
                  through strategic planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
