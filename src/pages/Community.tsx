import { useState } from "react";
import { MessageSquare, Heart, Share, MoreHorizontal, Plus, TrendingUp, Users, Hash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const posts = [
  {
    id: 1,
    author: "Sarah Chen",
    role: "Senior Software Engineer at Google",
    time: "2h",
    content: "Just shipped a new feature that reduces page load time by 40%! The power of optimizing bundle sizes and lazy loading. What performance optimization techniques have made the biggest impact in your projects?",
    likes: 127,
    comments: 23,
    shares: 8,
    liked: false,
    image: null,
    tags: ["performance", "webdev", "optimization"]
  },
  {
    id: 2,
    author: "Michael Rodriguez",
    role: "Product Manager at Meta",
    time: "4h",
    content: "Exciting announcement! Our team is hiring 5 new junior developers for our React Native team. We're looking for passionate individuals who want to make an impact on mobile experiences for billions of users. Remote work welcome!",
    likes: 89,
    comments: 45,
    shares: 22,
    liked: true,
    image: null,
    tags: ["hiring", "reactnative", "remote"]
  },
  {
    id: 3,
    author: "Emily Davis",
    role: "UX Designer at Figma",
    time: "6h",
    content: "Design systems are not just about components - they're about creating a shared language between design and development teams. Here's how we've built a design system that scales across 50+ products at Figma.",
    likes: 234,
    comments: 67,
    shares: 34,
    liked: false,
    image: null,
    tags: ["designsystems", "ux", "collaboration"]
  }
];

const trendingTopics = [
  { tag: "react19", posts: 142 },
  { tag: "ai", posts: 89 },
  { tag: "webdev", posts: 76 },
  { tag: "career", posts: 54 },
  { tag: "opensource", posts: 43 }
];

const popularGroups = [
  { name: "React Developers", members: "45.2k", category: "Technology" },
  { name: "UX Design Community", members: "32.1k", category: "Design" },
  { name: "Startup Founders", members: "28.9k", category: "Business" },
  { name: "Data Science Hub", members: "67.3k", category: "Data" }
];

export default function Community() {
  const [newPost, setNewPost] = useState("");
  const [likedPosts, setLikedPosts] = useState<number[]>([2]);

  const handleLike = (postId: number) => {
    setLikedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Community</h1>
          <p className="text-muted-foreground">Connect, share, and learn with professionals worldwide</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Trending Topics */}
            <Card className="shadow-workspace-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors">
                    <div className="flex items-center gap-2">
                      <Hash className="w-4 h-4 text-muted-foreground" />
                      <span className="font-medium text-foreground">#{topic.tag}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{topic.posts}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Popular Groups */}
            <Card className="shadow-workspace-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-accent" />
                  Popular Groups
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {popularGroups.map((group, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-sm text-foreground">{group.name}</h4>
                        <p className="text-xs text-muted-foreground">{group.category}</p>
                        <p className="text-xs text-muted-foreground">{group.members} members</p>
                      </div>
                      <Button variant="outline" size="sm">Join</Button>
                    </div>
                    {index < popularGroups.length - 1 && <div className="border-b border-border"></div>}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post */}
            <Card className="shadow-workspace-md">
              <CardContent className="pt-6">
                <div className="flex space-x-3 mb-4">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <Textarea
                      placeholder="Share your thoughts with the community..."
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      className="min-h-[100px] resize-none"
                    />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">📷 Photo</Button>
                    <Button variant="ghost" size="sm">📹 Video</Button>
                    <Button variant="ghost" size="sm">📄 Article</Button>
                  </div>
                  <Button variant="workspace" disabled={!newPost.trim()}>
                    <Plus className="w-4 h-4 mr-2" />
                    Post
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Feed Tabs */}
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="following">Following</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {posts.map((post) => (
                  <Card key={post.id} className="shadow-workspace-md">
                    <CardContent className="pt-6">
                      <div className="flex space-x-3 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src="/placeholder.svg" />
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-foreground">{post.author}</h4>
                              <p className="text-sm text-muted-foreground">{post.role}</p>
                              <p className="text-sm text-muted-foreground">{post.time}</p>
                            </div>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-foreground mb-4 leading-relaxed">{post.content}</p>
                      
                      {post.tags && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-accent hover:text-accent-foreground">
                              #{tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex space-x-6">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleLike(post.id)}
                            className={`${likedPosts.includes(post.id) ? 'text-red-500' : 'text-muted-foreground'} hover:text-red-500`}
                          >
                            <Heart className={`w-4 h-4 mr-2 ${likedPosts.includes(post.id) ? 'fill-red-500' : ''}`} />
                            {post.likes + (likedPosts.includes(post.id) && !post.liked ? 1 : 0)}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            {post.comments}
                          </Button>
                          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-accent">
                            <Share className="w-4 h-4 mr-2" />
                            {post.shares}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="following" className="space-y-6">
                <div className="text-center py-12">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">No posts from people you follow</h3>
                  <p className="text-muted-foreground mb-4">Start following people to see their posts here</p>
                  <Button variant="workspace">Discover People</Button>
                </div>
              </TabsContent>

              <TabsContent value="trending" className="space-y-6">
                <div className="text-center py-12">
                  <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Trending posts loading...</h3>
                  <p className="text-muted-foreground">Check back soon for the hottest discussions</p>
                </div>
              </TabsContent>

              <TabsContent value="recent" className="space-y-6">
                <div className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">Recent posts loading...</h3>
                  <p className="text-muted-foreground">Latest community discussions will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Community Stats */}
            <Card className="shadow-workspace-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Community Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">1.2M+</p>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-accent">45k</p>
                  <p className="text-sm text-muted-foreground">Posts This Week</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-success">2.8k</p>
                  <p className="text-sm text-muted-foreground">Active Groups</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-workspace-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Create Group
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Hash className="w-4 h-4 mr-2" />
                  Start Discussion
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
              </CardContent>
            </Card>

            {/* Suggested Connections */}
            <Card className="shadow-workspace-md">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Suggested for You</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { name: "Alex Johnson", role: "Frontend Developer", mutualConnections: 12 },
                  { name: "Maria Garcia", role: "Product Designer", mutualConnections: 8 },
                  { name: "David Kim", role: "DevOps Engineer", mutualConnections: 15 }
                ].map((person, index) => (
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
                      <p className="text-xs text-muted-foreground">{person.mutualConnections} mutual</p>
                    </div>
                    <Button variant="outline" size="sm">Follow</Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}