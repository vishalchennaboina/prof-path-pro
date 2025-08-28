import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Search, Send, MoreHorizontal, Phone, Video, Info, Paperclip, Smile, Plus } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Sarah Chen",
    avatar: "/placeholder.svg",
    lastMessage: "Thanks for the feedback on the project proposal!",
    timestamp: "2m ago",
    unread: 2,
    online: true,
    role: "Senior Developer"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    avatar: "/placeholder.svg",
    lastMessage: "The client meeting went well. Let's discuss next steps.",
    timestamp: "15m ago",
    unread: 0,
    online: true,
    role: "Product Manager"
  },
  {
    id: 3,
    name: "Emily Watson",
    avatar: "/placeholder.svg",
    lastMessage: "Can you review the latest design mockups?",
    timestamp: "1h ago",
    unread: 1,
    online: false,
    role: "UX Designer"
  },
  {
    id: 4,
    name: "Development Team",
    avatar: "/placeholder.svg",
    lastMessage: "Alex: The new feature is ready for testing",
    timestamp: "2h ago",
    unread: 5,
    online: false,
    role: "Group Chat",
    isGroup: true
  },
  {
    id: 5,
    name: "Lisa Park",
    avatar: "/placeholder.svg",
    lastMessage: "Great job on the presentation today!",
    timestamp: "3h ago",
    unread: 0,
    online: false,
    role: "Team Lead"
  }
];

const messages = [
  {
    id: 1,
    sender: "Sarah Chen",
    content: "Hey! I reviewed your project proposal and it looks really solid. The technical architecture section is particularly well thought out.",
    timestamp: "10:30 AM",
    isMe: false
  },
  {
    id: 2,
    sender: "Me",
    content: "Thank you! I spent a lot of time on that section. Did you have any specific feedback or suggestions for improvement?",
    timestamp: "10:32 AM",
    isMe: true
  },
  {
    id: 3,
    sender: "Sarah Chen",
    content: "Overall it's great. I think we could strengthen the timeline section a bit more. Maybe add some buffer time for testing phases?",
    timestamp: "10:35 AM",
    isMe: false
  },
  {
    id: 4,
    sender: "Me",
    content: "That makes perfect sense. I'll add additional testing phases and some contingency time. Should I also include user acceptance testing?",
    timestamp: "10:37 AM",
    isMe: true
  },
  {
    id: 5,
    sender: "Sarah Chen",
    content: "Absolutely! UAT is crucial for this type of project. Also, consider adding a pilot phase before full rollout.",
    timestamp: "10:40 AM",
    isMe: false
  },
  {
    id: 6,
    sender: "Sarah Chen",
    content: "Thanks for the feedback on the project proposal!",
    timestamp: "10:42 AM",
    isMe: false
  }
];

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      console.log("Sending message:", newMessage);
      setNewMessage("");
      // Real messaging functionality will be handled by Supabase integration
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-8rem)]">
          {/* Conversations Sidebar */}
          <div className="lg:col-span-1">
            <Card className="h-full shadow-workspace-lg border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Messages</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-[calc(100vh-16rem)]">
                  <div className="space-y-1 p-3">
                    {filteredConversations.map((conversation) => (
                      <div
                        key={conversation.id}
                        onClick={() => setSelectedConversation(conversation)}
                        className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                          selectedConversation.id === conversation.id
                            ? "bg-primary/10 border border-primary/20"
                            : "hover:bg-muted/50"
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="relative">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={conversation.avatar} />
                              <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                            </Avatar>
                            {conversation.online && (
                              <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 border-2 border-background rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4 className="font-medium text-foreground truncate">
                                {conversation.name}
                              </h4>
                              <span className="text-xs text-muted-foreground">
                                {conversation.timestamp}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1 truncate">
                              {conversation.role}
                            </p>
                            <div className="flex items-center justify-between">
                              <p className="text-sm text-muted-foreground truncate flex-1">
                                {conversation.lastMessage}
                              </p>
                              {conversation.unread > 0 && (
                                <Badge className="ml-2 h-5 min-w-5 text-xs">
                                  {conversation.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-3">
            <Card className="h-full shadow-workspace-lg border-0 flex flex-col">
              {/* Chat Header */}
              <CardHeader className="flex-shrink-0 border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedConversation.avatar} />
                        <AvatarFallback>{selectedConversation.name[0]}</AvatarFallback>
                      </Avatar>
                      {selectedConversation.online && (
                        <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 bg-green-500 border-2 border-background rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{selectedConversation.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {selectedConversation.online ? "Active now" : "Last seen 2h ago"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Info className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 p-0 overflow-hidden">
                <ScrollArea className="h-full p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
                      >
                        <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${message.isMe ? "flex-row-reverse space-x-reverse" : ""}`}>
                          {!message.isMe && (
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={selectedConversation.avatar} />
                              <AvatarFallback className="text-xs">{selectedConversation.name[0]}</AvatarFallback>
                            </Avatar>
                          )}
                          <div className={`px-4 py-2 rounded-2xl ${
                            message.isMe 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted text-foreground"
                          }`}>
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>

              {/* Message Input */}
              <div className="flex-shrink-0 border-t p-4">
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="pr-10"
                    />
                    <Button variant="ghost" size="sm" className="absolute right-1 top-1/2 -translate-y-1/2">
                      <Smile className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    variant="workspace"
                    size="sm"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}