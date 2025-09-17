import { Button } from "@/components/ui/Button";
import {
  CreditCard,
  TrendingUp,
  Shield,
  Clock,
  Users,
  BarChart3,
  Smartphone,
  HeadphonesIcon,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-card text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="  font-bold font-font3 text-4xl lg:text-5xl text-foreground mb-6">
              Our Services & Benefits
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive investment solutions designed to maximize your
              returns
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="container mx-auto ">
          <div className="text-center mb-16">
            <h2 className="  font-bold font-font3 text-3xl lg:text-4xl text-foreground mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the advantages of partnering with us for your
              investment journey
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {/* Card */}
            <div className="text-center bg-card p-6 border border-gray-200/50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-primary" size={32} />
                </div>
                <h3 className="font-font3 font-semibold text-md mb-2">
                  Lowest Brokerage
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-primary/10 text-primary">
                  Guaranteed
                </span>
                <p className="text-sm leading-6 opacity-80">
                  Get the most competitive brokerage rates in the market when
                  you open through us
                </p>
              </div>
            </div>

            <div className="text-center bg-card p-6 border-2 border-gray-200/50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CreditCard className="text-secondary" size={32} />
                </div>
                <h3 className="font-font3 font-semibold text-md mb-2">
                  Free Demat Account
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-green-100 text-green-700">
                  No Charges
                </span>
                <p className="text-sm leading-6 opacity-80">
                  Open your demat account with zero account opening charges and
                  minimal maintenance fees
                </p>
              </div>
            </div>

            <div className="text-center bg-card p-6 border border-gray-200/50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-primary" size={32} />
                </div>
                <h3 className="font-font3 font-semibold text-md mb-2">
                  Fast Onboarding
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-blue-100 text-blue-700">
                  24-48 Hours
                </span>
                <p className="text-sm leading-6 opacity-80">
                  Quick and hassle-free account opening process with minimal
                  documentation
                </p>
              </div>
            </div>

            <div className="text-center bg-card p-6 border border-gray-200/50 rounded-lg hover:shadow-lg transition-shadow">
              <div className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-secondary" size={32} />
                </div>
                <h3 className="font-font3 font-semibold text-md mb-2">
                  Trusted Support
                </h3>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 bg-purple-100 text-purple-700">
                  24/7 Available
                </span>
                <p className="text-sm leading-6 opacity-80">
                  Dedicated investment support and guidance from our experienced
                  team
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-gray-200/50 rounded-lg bg-card">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="text-primary" size={24} />
                </div>
                <h3 className="  text-2xl font-semibold">
                  Trading Platforms & Tools
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Access Angel Ones advanced trading platforms with comprehensive
                tools and features:
              </p>
              <ul className="space-y-2">
                {[
                  "Web-based trading platform",
                  "Mobile trading app",
                  "Advanced charting tools",
                  "Real-time market data",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-gray-200/50 rounded-lg bg-card">
              <div className="mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-secondary" size={24} />
                </div>
                <h3 className="  text-2xl font-semibold">
                  Investment Advisory
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Get expert guidance and personalized investment recommendations:
              </p>
              <ul className="space-y-2">
                {[
                  "Portfolio analysis & optimization",
                  "Risk assessment & management",
                  "Market research & insights",
                  "Goal-based investment planning",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-gray-200/50 rounded-lg bg-card">
              <div className="mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="text-primary" size={24} />
                </div>
                <h3 className="  text-2xl font-semibold">Digital Services</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Enjoy seamless digital experience with modern technology:
              </p>
              <ul className="space-y-2">
                {[
                  "Online account opening",
                  "Digital KYC process",
                  "Instant fund transfers",
                  "Digital contract notes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 border border-gray-200/50 rounded-lg bg-card">
              <div className="mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <HeadphonesIcon className="text-secondary" size={24} />
                </div>
                <h3 className="  text-2xl font-semibold">Customer Support</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Get comprehensive support whenever you need it:
              </p>
              <ul className="space-y-2">
                {[
                  "24/7 customer helpline",
                  "Live chat support",
                  "Email support",
                  "Dedicated relationship manager",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" size={16} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
          <h2 className="  font-bold text-3xl lg:text-4xl text-primary-foreground mb-4">
            Ready to Experience These Benefits?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied investors who chose Gupta Investment
            Zone for their investment journey
          </p>
          <Button>
            Open Your Account Today
            <ArrowRight size={15} />
          </Button>
        </div>
      </section>
    </div>
  );
}
