import { Link } from "react-router-dom";
import { ArrowRight, Users, Briefcase, TrendingUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-accent-lighter">The Workspace</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Connect with professionals, discover opportunities, and build your career in the world's most engaging professional network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" variant="workspace" className="bg-white text-primary hover:bg-white/90">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/jobs">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything you need to advance your career
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From networking to job hunting, skill development to industry insights - we've got you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-workspace-md hover:shadow-workspace-lg transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Professional Network</h3>
                <p className="text-muted-foreground">
                  Connect with industry professionals and expand your network globally.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-workspace-md hover:shadow-workspace-lg transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Job Opportunities</h3>
                <p className="text-muted-foreground">
                  Discover your dream job with personalized recommendations and filters.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-workspace-md hover:shadow-workspace-lg transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Industry Insights</h3>
                <p className="text-muted-foreground">
                  Stay updated with the latest trends and news in your field.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-workspace-md hover:shadow-workspace-lg transition-all duration-300 group">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Engage in meaningful discussions and share your expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to accelerate your career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already building their future with The Workspace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/profile">
              <Button size="lg" variant="workspace">
                Create Your Profile
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/community">
              <Button size="lg" variant="outline">
                Join Community
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
