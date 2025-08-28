import { useState } from "react";
import { Search, MapPin, Clock, Briefcase, Filter, BookmarkPlus, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const jobListings = [
  {
    id: 1,
    title: "Senior React Developer",
    company: "Airbnb",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "5+ years",
    salary: "$140k - $180k",
    posted: "2 days ago",
    applicants: 47,
    description: "We're looking for a passionate Senior React Developer to join our platform team. You'll be working on features that millions of users interact with daily.",
    skills: ["React", "TypeScript", "Node.js", "GraphQL"],
    remote: false,
    company_logo: "A"
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Stripe",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    salary: "$120k - $160k",
    posted: "1 week ago",
    applicants: 23,
    description: "Join our payments platform team to build the financial infrastructure for the internet. Work with cutting-edge technology and talented engineers.",
    skills: ["JavaScript", "Python", "AWS", "Docker"],
    remote: true,
    company_logo: "S"
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Spotify",
    location: "New York, NY",
    type: "Full-time",
    experience: "2+ years",
    salary: "$100k - $130k",
    posted: "3 days ago",
    applicants: 82,
    description: "Help us create amazing user experiences for millions of music lovers worldwide. Work on our web platform and contribute to product innovation.",
    skills: ["React", "CSS", "JavaScript", "Testing"],
    remote: false,
    company_logo: "S"
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "Netflix",
    location: "Los Angeles, CA",
    type: "Full-time",
    experience: "4+ years",
    salary: "$130k - $170k",
    posted: "5 days ago",
    applicants: 31,
    description: "Scale our infrastructure to serve 200M+ subscribers globally. Work with cutting-edge cloud technologies and automation tools.",
    skills: ["AWS", "Kubernetes", "Docker", "Python"],
    remote: true,
    company_logo: "N"
  },
  {
    id: 5,
    title: "Product Designer",
    company: "Figma",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    salary: "$110k - $150k",
    posted: "1 day ago",
    applicants: 156,
    description: "Design the future of collaborative design tools. Work closely with engineers and product managers to create intuitive user experiences.",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems"],
    remote: true,
    company_logo: "F"
  },
  {
    id: 6,
    title: "Backend Engineer",
    company: "Discord",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "4+ years",
    salary: "$125k - $165k",
    posted: "4 days ago",
    applicants: 67,
    description: "Build the backend systems that power communication for millions of communities. Work with real-time messaging, voice, and video technologies.",
    skills: ["Go", "Python", "PostgreSQL", "Redis"],
    remote: false,
    company_logo: "D"
  }
];

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [experienceFilter, setExperienceFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const filteredJobs = jobListings.filter(job => {
    return (
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Your Dream Job</h1>
          <p className="text-muted-foreground">Discover amazing opportunities from top companies</p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-workspace-md mb-8">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="lg:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search jobs, companies, skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="san-francisco">San Francisco</SelectItem>
                  <SelectItem value="new-york">New York</SelectItem>
                  <SelectItem value="los-angeles">Los Angeles</SelectItem>
                </SelectContent>
              </Select>

              <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="entry">Entry Level</SelectItem>
                  <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                  <SelectItem value="senior">Senior (5+ years)</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="workspace" className="w-full">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Sidebar - Quick Stats */}
          <div className="lg:col-span-1">
            <Card className="shadow-workspace-md mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Job Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Jobs</span>
                  <span className="font-semibold text-primary">1,247</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">New this week</span>
                  <span className="font-semibold text-accent">89</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Remote jobs</span>
                  <span className="font-semibold text-success">456</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Applied jobs</span>
                  <span className="font-semibold text-warning">12</span>
                </div>
              </CardContent>
            </Card>

            {/* Popular Skills */}
            <Card className="shadow-workspace-md">
              <CardHeader>
                <CardTitle className="text-lg">Popular Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["React", "JavaScript", "Python", "AWS", "Node.js", "TypeScript"].map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="mr-2 mb-2 cursor-pointer hover:bg-accent hover:text-accent-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground">
                {filteredJobs.length} jobs found
              </p>
              <Select defaultValue="recent">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="salary">Highest Salary</SelectItem>
                  <SelectItem value="company">Company A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {filteredJobs.map((job) => (
              <Card key={job.id} className="shadow-workspace-md hover:shadow-workspace-lg transition-all duration-300 cursor-pointer group">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-lg">{job.company_logo}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-accent font-medium">{job.company}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.posted}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <BookmarkPlus className="w-4 h-4" />
                    </Button>
                  </div>

                  <p className="text-foreground mb-4 leading-relaxed">{job.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                    {job.remote && (
                      <Badge variant="outline" className="border-success text-success">
                        Remote
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-border">
                    <div className="flex items-center gap-6">
                      <span className="font-semibold text-accent">{job.salary}</span>
                      <span className="text-sm text-muted-foreground">{job.applicants} applicants</span>
                      <span className="text-sm text-muted-foreground">{job.experience}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      <Button variant="workspace" size="sm">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center pt-8">
              <Button variant="outline" size="lg">
                Load More Jobs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}