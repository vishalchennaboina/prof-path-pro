import { Users, Briefcase, TrendingUp, MessageSquare, Calendar, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const feedPosts = [
  {
    id: 1,
    author: "Sarah Chen",
    role: "Senior Software Engineer at Google",
    time: "2h",
    content: "Just completed a fascinating project using React and TypeScript! The developer experience has improved tremendously. What's your favorite tech stack for 2024?",
    likes: 42,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    author: "Michael Rodriguez",
    role: "Product Manager at Meta",
    time: "4h",
    content: "Excited to announce that we're hiring 5 new junior developers! Remote work available. Looking for passionate individuals who love solving complex problems.",
    likes: 128,
    comments: 24,
    shares: 15,
  },
];

const suggestedConnections = [
  { name: "Alex Johnson", role: "Full Stack Developer", company: "Stripe", mutualConnections: 12 },
  { name: "Emma Davis", role: "UX Designer", company: "Figma", mutualConnections: 8 },
  { name: "David Kim", role: "Data Scientist", company: "Netflix", mutualConnections: 15 },
];

const jobRecommendations = [
  {
    title: "Senior React Developer",
    company: "Airbnb",
    location: "San Francisco, CA",
    type: "Full-time",
    posted: "2 days ago",
    applicants: 47,
  },
  {
    title: "Product Designer",
    company: "Spotify",
    location: "Remote",
    type: "Full-time", 
    posted: "1 week ago",
    applicants: 23,
  },
];

const techNews = [
  {
    title: "OpenAI Announces GPT-5 with Revolutionary Capabilities",
    source: "TechCrunch",
    time: "3h ago",
    category: "AI"
  },
  {
    title: "React 19 Beta Released with Exciting New Features",
    source: "React Blog",
    time: "6h ago",
    category: "Development"
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Summary */}
            <Card className="bg-gradient-card shadow-workspace-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">JD</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-lg text-foreground">John Doe</h3>
                  <p className="text-muted-foreground text-sm mb-4">Full Stack Developer</p>
                  <div className="grid grid-cols-3 gap-4 w-full text-center">
                    <div>
                      <p className="font-semibold text-primary">324</p>
                      <p className="text-xs text-muted-foreground">Connections</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">42</p>
                      <p className="text-xs text-muted-foreground">Posts</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary">8</p>
                      <p className="text-xs text-muted-foreground">Articles</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-workspace-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" />
                  Your Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Profile views</span>
                  <span className="font-semibold text-primary">156 this week</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Job matches</span>
                  <span className="font-semibold text-accent">23 new</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Skill endorsements</span>
                  <span className="font-semibold text-success">+12</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card className="shadow-workspace-md">
              <CardContent className="pt-6">
                <div className="flex space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Button variant="outline" className="w-full justify-start text-muted-foreground">
                      Share your thoughts...
                    </Button>
                  </div>
                </div>
                <div className="flex justify-between mt-4 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Event
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Job
                  </Button>
                  <Button variant="ghost" size="sm" className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Article
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Feed Posts */}
            {feedPosts.map((post) => (
              <Card key={post.id} className="shadow-workspace-md">
                <CardContent className="pt-6">
                  <div className="flex space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{post.author}</h4>
                        <span className="text-sm text-muted-foreground">• {post.time}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{post.role}</p>
                      <p className="mt-3 text-foreground">{post.content}</p>
                      
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                        <div className="flex space-x-6">
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                            👍 {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                            <MessageSquare className="w-4 h-4 mr-1" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                            ↗️ {post.shares}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Job Recommendations */}
            <Card className="shadow-workspace-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  Jobs for You
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {jobRecommendations.map((job, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">{job.title}</h4>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                    <p className="text-xs text-muted-foreground">{job.location} • {job.type}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">{job.applicants} applicants</span>
                      <Button variant="workspace" size="sm">Apply</Button>
                    </div>
                    {index < jobRecommendations.length - 1 && <div className="border-b border-border"></div>}
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  View All Jobs
                </Button>
              </CardContent>
            </Card>

            {/* People You May Know */}
            <Card className="shadow-workspace-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  People You May Know
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {suggestedConnections.map((person, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-secondary text-secondary-foreground">
                        {person.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm text-foreground truncate">{person.name}</p>
                      <p className="text-xs text-muted-foreground truncate">{person.role}</p>
                      <p className="text-xs text-muted-foreground">{person.mutualConnections} mutual connections</p>
                    </div>
                    <Button variant="outline" size="sm">Connect</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trending Tech News */}
            <Card className="shadow-workspace-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Trending News
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {techNews.map((news, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start gap-2">
                      <Badge variant="secondary" className="text-xs">{news.category}</Badge>
                      <span className="text-xs text-muted-foreground">{news.time}</span>
                    </div>
                    <h4 className="font-semibold text-sm text-foreground leading-snug">{news.title}</h4>
                    <p className="text-xs text-muted-foreground">{news.source}</p>
                    {index < techNews.length - 1 && <div className="border-b border-border"></div>}
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  View All News
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}