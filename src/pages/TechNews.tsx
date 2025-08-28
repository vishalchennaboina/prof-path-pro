import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, TrendingUp, Clock, BookmarkPlus, Share2, ExternalLink, Filter } from "lucide-react";

const newsData = [
  {
    id: 1,
    title: "AI Revolution: GPT-5 Rumors and What It Means for Developers",
    excerpt: "Industry insiders hint at breakthrough capabilities in the next generation of AI models, potentially changing how we approach software development.",
    author: "Sarah Chen",
    authorImage: "/placeholder.svg",
    publishedAt: "2 hours ago",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "GPT", "Development"],
    trending: true,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Remote Work 2024: The New Hybrid Models Transforming Tech Companies",
    excerpt: "Major tech companies are adopting innovative hybrid work models that balance productivity, collaboration, and employee satisfaction.",
    author: "Marcus Rodriguez",
    authorImage: "/placeholder.svg",
    publishedAt: "4 hours ago",
    readTime: "7 min read",
    category: "Work Culture",
    tags: ["Remote Work", "Management", "Culture"],
    trending: false,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Quantum Computing Breakthrough: IBM's New 1000-Qubit Processor",
    excerpt: "IBM unveils its most powerful quantum processor yet, bringing us closer to solving complex problems in cryptography and drug discovery.",
    author: "Dr. Emily Watson",
    authorImage: "/placeholder.svg",
    publishedAt: "6 hours ago",
    readTime: "8 min read",
    category: "Quantum Computing",
    tags: ["Quantum", "IBM", "Innovation"],
    trending: true,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "Cybersecurity Alert: New Zero-Day Vulnerabilities in Popular Frameworks",
    excerpt: "Security researchers discover critical vulnerabilities affecting millions of applications. Here's what developers need to know.",
    author: "Alex Thompson",
    authorImage: "/placeholder.svg",
    publishedAt: "8 hours ago",
    readTime: "6 min read",
    category: "Cybersecurity",
    tags: ["Security", "Vulnerabilities", "Frameworks"],
    trending: false,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Green Tech: Sustainable Software Development Practices Gain Momentum",
    excerpt: "Tech industry leaders are prioritizing environmental impact, driving adoption of energy-efficient coding practices and green infrastructure.",
    author: "Lisa Park",
    authorImage: "/placeholder.svg",
    publishedAt: "12 hours ago",
    readTime: "4 min read",
    category: "Sustainability",
    tags: ["Green Tech", "Environment", "Best Practices"],
    trending: false,
    image: "/placeholder.svg"
  }
];

const trendingTopics = [
  { name: "AI & Machine Learning", count: 156 },
  { name: "Web3 & Blockchain", count: 89 },
  { name: "Cloud Computing", count: 67 },
  { name: "Cybersecurity", count: 54 },
  { name: "DevOps", count: 43 }
];

export default function TechNews() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredNews = newsData.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Tech News</h1>
          <p className="text-muted-foreground">Stay updated with the latest in technology</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-6">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="ai">AI</TabsTrigger>
              <TabsTrigger value="web3">Web3</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="cloud">Cloud</TabsTrigger>
              <TabsTrigger value="culture">Culture</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Featured Article */}
            {filteredNews.length > 0 && (
              <Card className="shadow-workspace-md border-0 overflow-hidden">
                <div className="relative h-48 bg-muted">
                  <img 
                    src={filteredNews[0].image} 
                    alt={filteredNews[0].title}
                    className="w-full h-full object-cover"
                  />
                  {filteredNews[0].trending && (
                    <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  )}
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {filteredNews[0].category}
                  </Badge>
                  <h2 className="text-2xl font-bold mb-3 text-foreground leading-tight">
                    {filteredNews[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {filteredNews[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={filteredNews[0].authorImage} />
                        <AvatarFallback>{filteredNews[0].author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <span>{filteredNews[0].author}</span>
                        <span>•</span>
                        <span>{filteredNews[0].publishedAt}</span>
                        <span>•</span>
                        <span>{filteredNews[0].readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="ghost" size="sm">
                        <BookmarkPlus className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Article List */}
            <div className="space-y-4">
              {filteredNews.slice(1).map((article) => (
                <Card key={article.id} className="shadow-workspace-sm border-0 hover:shadow-workspace-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex space-x-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {article.category}
                          </Badge>
                          {article.trending && (
                            <Badge variant="secondary" className="text-xs">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              Trending
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground leading-tight hover:text-primary transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-muted-foreground mb-3 leading-relaxed">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={article.authorImage} />
                              <AvatarFallback className="text-xs">{article.author[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                              <span>{article.author}</span>
                              <span>•</span>
                              <span>{article.publishedAt}</span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                          <div className="flex space-x-1">
                            {article.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="w-24 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
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
                      {topic.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-workspace-sm border-0">
              <CardHeader>
                <CardTitle>Today's Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Articles Published</span>
                  <span className="font-semibold text-foreground">47</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Trending Stories</span>
                  <span className="font-semibold text-foreground">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Active Readers</span>
                  <span className="font-semibold text-foreground">2.4k</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}