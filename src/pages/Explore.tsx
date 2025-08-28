import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, UserPlus, Building2, TrendingUp, MapPin, Users, BookOpen, Coffee } from "lucide-react";

const peopleData = [
  {
    id: 1,
    name: "Alex Thompson",
    role: "Senior Full Stack Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    avatar: "/placeholder.svg",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    mutualConnections: 12,
    isFollowing: false
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "Product Designer",
    company: "Design Studio",
    location: "New York, NY",
    avatar: "/placeholder.svg",
    skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
    mutualConnections: 8,
    isFollowing: true
  },
  {
    id: 3,
    name: "David Kim",
    role: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    avatar: "/placeholder.svg",
    skills: ["Docker", "Kubernetes", "CI/CD", "Terraform"],
    mutualConnections: 15,
    isFollowing: false
  },
  {
    id: 4,
    name: "Jennifer Walsh",
    role: "Data Scientist",
    company: "AI Innovations",
    location: "Boston, MA",
    avatar: "/placeholder.svg",
    skills: ["Python", "Machine Learning", "TensorFlow", "Statistics"],
    mutualConnections: 6,
    isFollowing: false
  }
];

const companiesData = [
  {
    id: 1,
    name: "TechCorp",
    industry: "Technology",
    size: "1,000-5,000 employees",
    location: "San Francisco, CA",
    logo: "/placeholder.svg",
    description: "Leading technology company focused on innovative solutions",
    openPositions: 23,
    followers: "45.2k",
    isFollowing: false
  },
  {
    id: 2,
    name: "AI Innovations",
    industry: "Artificial Intelligence",
    size: "100-500 employees",
    location: "Boston, MA",
    logo: "/placeholder.svg",
    description: "Pioneering AI research and development company",
    openPositions: 12,
    followers: "18.7k",
    isFollowing: true
  },
  {
    id: 3,
    name: "Green Energy Solutions",
    industry: "Renewable Energy",
    size: "500-1,000 employees",
    location: "Austin, TX",
    logo: "/placeholder.svg",
    description: "Sustainable energy technology and consulting",
    openPositions: 8,
    followers: "32.1k",
    isFollowing: false
  }
];

const eventsData = [
  {
    id: 1,
    title: "Tech Leaders Summit 2024",
    date: "March 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "San Francisco Convention Center",
    type: "Conference",
    attendees: 450,
    price: "Free",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "React Developer Meetup",
    date: "March 20, 2024",
    time: "7:00 PM - 9:00 PM",
    location: "TechHub Downtown",
    type: "Meetup",
    attendees: 85,
    price: "Free",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "AI & Machine Learning Workshop",
    date: "March 25, 2024",
    time: "2:00 PM - 6:00 PM",
    location: "Virtual Event",
    type: "Workshop",
    attendees: 200,
    price: "$49",
    image: "/placeholder.svg"
  }
];

const trendingTopics = [
  { name: "Remote Work", posts: 234 },
  { name: "AI Ethics", posts: 189 },
  { name: "Web3", posts: 156 },
  { name: "Sustainability", posts: 143 },
  { name: "Career Growth", posts: 132 }
];

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("people");

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Explore</h1>
          <p className="text-muted-foreground">Discover new opportunities, people, and communities</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search people, companies, events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="people">People</TabsTrigger>
                <TabsTrigger value="companies">Companies</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="groups">Groups</TabsTrigger>
              </TabsList>

              <TabsContent value="people" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {peopleData.map((person) => (
                    <Card key={person.id} className="shadow-workspace-sm border-0 hover:shadow-workspace-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src={person.avatar} />
                            <AvatarFallback>{person.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-foreground mb-1">{person.name}</h3>
                            <p className="text-sm text-muted-foreground mb-1">{person.role}</p>
                            <p className="text-sm text-muted-foreground mb-2">{person.company}</p>
                            <div className="flex items-center text-xs text-muted-foreground mb-3">
                              <MapPin className="h-3 w-3 mr-1" />
                              {person.location}
                            </div>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {person.skills.slice(0, 3).map((skill) => (
                                <Badge key={skill} variant="secondary" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-muted-foreground">
                                {person.mutualConnections} mutual connections
                              </span>
                              <Button 
                                variant={person.isFollowing ? "secondary" : "professional"}
                                size="sm"
                              >
                                {person.isFollowing ? "Following" : <><UserPlus className="h-3 w-3 mr-1" /> Connect</>}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="companies" className="space-y-4 mt-6">
                <div className="space-y-4">
                  {companiesData.map((company) => (
                    <Card key={company.id} className="shadow-workspace-sm border-0 hover:shadow-workspace-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-16 w-16 bg-muted rounded-lg flex items-center justify-center">
                            <Building2 className="h-8 w-8 text-muted-foreground" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="font-semibold text-foreground mb-1">{company.name}</h3>
                                <p className="text-sm text-muted-foreground mb-1">{company.industry}</p>
                                <p className="text-sm text-muted-foreground mb-2">{company.size}</p>
                                <div className="flex items-center text-xs text-muted-foreground mb-3">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {company.location}
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">{company.description}</p>
                                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                                  <span>{company.openPositions} open positions</span>
                                  <span>{company.followers} followers</span>
                                </div>
                              </div>
                              <Button 
                                variant={company.isFollowing ? "secondary" : "professional"}
                                size="sm"
                              >
                                {company.isFollowing ? "Following" : "Follow"}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="events" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eventsData.map((event) => (
                    <Card key={event.id} className="shadow-workspace-sm border-0 hover:shadow-workspace-md transition-all duration-300">
                      <div className="h-32 bg-muted rounded-t-lg"></div>
                      <CardContent className="p-6">
                        <Badge variant="secondary" className="mb-2">
                          {event.type}
                        </Badge>
                        <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <span className="w-12">Date:</span>
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center">
                            <span className="w-12">Time:</span>
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span className="flex items-center">
                              <Users className="h-3 w-3 mr-1" />
                              {event.attendees} attending
                            </span>
                            <span>{event.price}</span>
                          </div>
                          <Button variant="professional" size="sm">
                            Join Event
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="groups" className="space-y-4 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      name: "React Developers Community",
                      members: "25.4k",
                      posts: "1.2k posts this week",
                      description: "A community for React developers to share knowledge and best practices"
                    },
                    {
                      name: "AI & Machine Learning",
                      members: "18.7k",
                      posts: "890 posts this week",
                      description: "Discussing the latest trends and developments in AI and ML"
                    },
                    {
                      name: "Product Management",
                      members: "32.1k",
                      posts: "756 posts this week",
                      description: "Product managers sharing insights and strategies"
                    },
                    {
                      name: "Startup Founders",
                      members: "12.3k",
                      posts: "445 posts this week",
                      description: "A supportive community for entrepreneurs and startup founders"
                    }
                  ].map((group, index) => (
                    <Card key={index} className="shadow-workspace-sm border-0 hover:shadow-workspace-md transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="h-12 w-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                            <Users className="h-6 w-6 text-accent-foreground" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-1">{group.name}</h3>
                            <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-2">
                              <span>{group.members} members</span>
                              <span>{group.posts}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">{group.description}</p>
                            <Button variant="professional" size="sm">
                              Join Group
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card className="shadow-workspace-sm border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-accent" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={topic.name} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg font-semibold text-accent w-6">
                        {index + 1}
                      </span>
                      <span className="font-medium text-foreground">{topic.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {topic.posts}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Suggested Actions */}
            <Card className="shadow-workspace-sm border-0">
              <CardHeader>
                <CardTitle>Suggested for You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Join a Study Group
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Coffee className="h-4 w-4 mr-2" />
                  Attend a Networking Event
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Connect with Alumni
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}