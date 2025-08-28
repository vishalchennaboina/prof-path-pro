import { useState } from "react";
import { Edit3, MapPin, Calendar, Briefcase, GraduationCap, Award, FileText, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const skills = ["JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS", "Docker", "GraphQL"];
const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    description: "Leading development of scalable web applications using React and Node.js. Mentoring junior developers and implementing best practices."
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    duration: "2020 - 2022",
    description: "Built and maintained multiple client projects using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions."
  }
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "Stanford University",
    year: "2016 - 2020",
    gpa: "3.8 GPA"
  }
];

const certifications = [
  { name: "AWS Certified Developer", issuer: "Amazon Web Services", year: "2023" },
  { name: "React Professional Certificate", issuer: "Meta", year: "2022" },
  { name: "Google Cloud Professional", issuer: "Google", year: "2022" }
];

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Profile Header */}
        <Card className="bg-gradient-card shadow-workspace-lg mb-8">
          <CardContent className="pt-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="relative">
                <Avatar className="w-32 h-32">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-3xl">JD</AvatarFallback>
                </Avatar>
                <Button size="icon" variant="secondary" className="absolute -bottom-2 -right-2">
                  <Edit3 className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-foreground mb-2">John Doe</h1>
                    <p className="text-xl text-muted-foreground mb-3">Senior Full Stack Developer</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        San Francisco, CA
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Joined March 2020
                      </span>
                    </div>
                  </div>
                  <Button variant="workspace">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                
                <p className="text-foreground leading-relaxed mb-6">
                  Passionate full stack developer with 5+ years of experience building scalable web applications. 
                  Expertise in React, Node.js, and cloud technologies. Love mentoring junior developers and 
                  contributing to open source projects.
                </p>
                
                <div className="flex gap-3">
                  <Button variant="professional">Connect</Button>
                  <Button variant="outline">Message</Button>
                  <Button variant="outline">Follow</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Profile Tabs */}
        <Tabs defaultValue="about" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
          </TabsList>

          <TabsContent value="about" className="space-y-6">
            <Card className="shadow-workspace-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  About
                </CardTitle>
                <Button variant="ghost" size="sm">
                  <Edit3 className="w-4 h-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <p className="text-foreground leading-relaxed mb-4">
                  I'm a senior full stack developer with a passion for creating elegant, scalable solutions 
                  to complex problems. With over 5 years of experience in the tech industry, I've worked 
                  with startups and established companies to build web applications that serve millions of users.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  My expertise spans across modern JavaScript frameworks, cloud infrastructure, and DevOps practices. 
                  I believe in writing clean, maintainable code and am always eager to learn new technologies 
                  and share knowledge with the developer community.
                </p>
                <p className="text-foreground leading-relaxed">
                  When I'm not coding, you can find me contributing to open source projects, mentoring aspiring 
                  developers, or exploring the latest trends in technology.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-workspace-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Resume</CardTitle>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  Upload Resume
                </Button>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <FileText className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-semibold text-foreground">John_Doe_Resume.pdf</p>
                    <p className="text-sm text-muted-foreground">Last updated: March 2024</p>
                  </div>
                  <Button variant="outline" size="sm" className="ml-auto">
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <Card className="shadow-workspace-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-accent" />
                  Work Experience
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Experience
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{exp.title}</h3>
                          <p className="text-accent font-medium">{exp.company}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location} • {exp.duration}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      </div>
                      <p className="text-foreground">{exp.description}</p>
                      {index < experiences.length - 1 && <div className="border-b border-border mt-6"></div>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card className="shadow-workspace-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-accent" />
                  Education
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Education
                </Button>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{edu.degree}</h3>
                          <p className="text-accent font-medium">{edu.school}</p>
                          <p className="text-sm text-muted-foreground">{edu.year} • {edu.gpa}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card className="shadow-workspace-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Skills & Expertise</CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Skill
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="justify-center py-2 px-4 hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certifications" className="space-y-6">
            <Card className="shadow-workspace-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Certifications
                </CardTitle>
                <Button variant="outline" size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Certification
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center">
                      <Award className="w-6 h-6 text-success-foreground" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-foreground">{cert.name}</h3>
                          <p className="text-accent font-medium">{cert.issuer}</p>
                          <p className="text-sm text-muted-foreground">Issued {cert.year}</p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                      </div>
                      {index < certifications.length - 1 && <div className="border-b border-border mt-4"></div>}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}