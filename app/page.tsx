"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Send,
  Moon,
  Sun,
  ExternalLink,
  Download,
  Award,
  Clock,
  BookOpen,
  Code,
  Zap,
  Heart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils"
import TypewriterComponent from "typewriter-effect"

export default function Home() {
  const { toast } = useToast()
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [themeColor, setThemeColor] = useState<"blue" | "red" | "purple" | "green">("red")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Theme colors mapping
  const themeColors = {
    blue: {
      primary: "from-blue-500 to-cyan-400",
      secondary: "bg-blue-500/20 text-blue-400 border-blue-500/20",
      accent: "text-blue-400",
      button: "from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600",
      hover: "hover:bg-blue-500/10",
      border: "border-blue-500/50",
      progress: "from-blue-500 to-cyan-400",
    },
    red: {
      primary: "from-red-500 to-orange-400",
      secondary: "bg-red-500/20 text-red-400 border-red-500/20",
      accent: "text-red-400",
      button: "from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600",
      hover: "hover:bg-red-500/10",
      border: "border-red-500/50",
      progress: "from-red-500 to-orange-400",
    },
    purple: {
      primary: "from-purple-500 to-pink-400",
      secondary: "bg-purple-500/20 text-purple-400 border-purple-500/20",
      accent: "text-purple-400",
      button: "from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600",
      hover: "hover:bg-purple-500/10",
      border: "border-purple-500/50",
      progress: "from-purple-500 to-pink-400",
    },
    green: {
      primary: "from-emerald-500 to-green-400",
      secondary: "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
      accent: "text-emerald-400",
      button: "from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600",
      hover: "hover:bg-emerald-500/10",
      border: "border-emerald-500/50",
      progress: "from-emerald-500 to-green-400",
    },
  }

  // Toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Apply theme to document
  useEffect(() => {
    const root = window.document.documentElement
    if (theme === "dark") {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }
  }, [theme])

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.5,
      },
    }),
  }

  // Scroll to section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // In a real implementation, you would send this data to your backend
      // For demonstration, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack MERN application with user authentication, product management, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "mern",
      image: "/placeholder.svg?height=300&width=500&text=E-Commerce",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      category: "html",
      image: "/placeholder.svg?height=300&width=500&text=Portfolio",
    },
    {
      title: "Task Management App",
      description: "A React application for managing tasks with drag-and-drop functionality.",
      tags: ["React", "Tailwind CSS", "Firebase"],
      category: "react",
      image: "/placeholder.svg?height=300&width=500&text=Task+App",
    },
    {
      title: "Banking App UI Design",
      description: "A modern UI design for a banking application created in Figma.",
      tags: ["Figma", "UI/UX", "Prototype"],
      category: "figma",
      image: "/placeholder.svg?height=300&width=500&text=Banking+UI",
    },
    {
      title: "RESTful API for Blog",
      description: "A backend API for a blog platform with authentication and CRUD operations.",
      tags: ["Node.js", "Express", "MongoDB", "REST API"],
      category: "backend",
      image: "/placeholder.svg?height=300&width=500&text=Blog+API",
    },
    {
      title: "Weather Dashboard",
      description: "A React application that displays weather information using a third-party API.",
      tags: ["React", "API Integration", "Tailwind CSS"],
      category: "react",
      image: "/placeholder.svg?height=300&width=500&text=Weather+App",
    },
  ]

  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "REST API", level: 80 },
    { name: "Git", level: 75 },
    { name: "Tailwind CSS", level: 85 },
  ]

  const certifications = [
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive course covering full-stack web development with MERN stack.",
      image: "/placeholder.svg?height=200&width=300&text=Web+Dev+Certificate",
    },
    {
      title: "React - The Complete Guide",
      issuer: "Coursera",
      date: "2023",
      description: "Advanced React concepts including hooks, context API, and Redux.",
      image: "/placeholder.svg?height=200&width=300&text=React+Certificate",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      description: "JavaScript fundamentals, algorithms, and data structures.",
      image: "/placeholder.svg?height=200&width=300&text=JS+Certificate",
    },
  ]

  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "Project Manager",
      company: "TechSolutions Inc.",
      content:
        "Ashwani is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive.",
      avatar: "/placeholder.svg?height=100&width=100&text=RS",
    },
    {
      name: "Priya Patel",
      position: "UI/UX Designer",
      company: "CreativeMinds",
      content:
        "Working with Ashwani was a great experience. He translated my designs into flawless code and added thoughtful improvements along the way.",
      avatar: "/placeholder.svg?height=100&width=100&text=PP",
    },
    {
      name: "Vikram Singh",
      position: "Startup Founder",
      company: "InnovateTech",
      content:
        "Ashwani helped build our MVP in record time. His technical expertise and dedication were key to our successful product launch.",
      avatar: "/placeholder.svg?height=100&width=100&text=VS",
    },
  ]

  const timeline = [
    {
      year: "2023",
      title: "Started B.Tech Program",
      description: "Enrolled in B.Tech program at Rai University with focus on Computer Science.",
      icon: <BookOpen className="h-5 w-5" />,
    },
    {
      year: "2022",
      title: "First Web Development Project",
      description: "Completed my first full-stack web application using the MERN stack.",
      icon: <Code className="h-5 w-5" />,
    },
    {
      year: "2022",
      title: "Web Development Certification",
      description: "Earned certification in modern web development technologies and practices.",
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: "2021",
      title: "Started Learning Programming",
      description: "Began my journey in programming with HTML, CSS, and JavaScript.",
      icon: <Zap className="h-5 w-5" />,
    },
  ]

  const blogPosts = [
    {
      title: "Getting Started with React Hooks",
      excerpt: "Learn how to use React Hooks to simplify your functional components and manage state effectively.",
      date: "May 15, 2023",
      readTime: "5 min read",
      image: "/placeholder.svg?height=200&width=300&text=React+Hooks",
    },
    {
      title: "Building RESTful APIs with Node.js",
      excerpt: "A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express.",
      date: "April 3, 2023",
      readTime: "8 min read",
      image: "/placeholder.svg?height=200&width=300&text=Node.js+APIs",
    },
    {
      title: "Mastering CSS Grid Layout",
      excerpt: "Explore the power of CSS Grid Layout and how it can transform your web design approach.",
      date: "March 22, 2023",
      readTime: "6 min read",
      image: "/placeholder.svg?height=200&width=300&text=CSS+Grid",
    },
  ]

  return (
    <main className={cn("relative", theme === "dark" ? "dark" : "")}>
      {/* Background animation */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-slate-100 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          {/* Geometric shapes background */}
          <div className="h-full w-full">
            {/* Floating circles */}
            {Array.from({ length: 15 }).map((_, i) => (
              <motion.div
                key={`circle-${i}`}
                className={cn(
                  "absolute rounded-full",
                  `bg-gradient-to-r ${themeColors[themeColor].primary} opacity-10 dark:opacity-20`,
                )}
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  opacity: [0, 0.4, 0],
                  scale: [0, 2, 0],
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                }}
                style={{
                  width: Math.random() * 200 + 50,
                  height: Math.random() * 200 + 50,
                }}
              />
            ))}

            {/* Floating squares */}
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={`square-${i}`}
                className={cn(
                  "absolute rounded-md",
                  `bg-gradient-to-r ${themeColors[themeColor].primary} opacity-10 dark:opacity-15`,
                )}
                initial={{
                  opacity: 0,
                  rotate: 0,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  rotate: [0, 90, 180],
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                }}
                style={{
                  width: Math.random() * 100 + 30,
                  height: Math.random() * 100 + 30,
                }}
              />
            ))}

            {/* Floating triangles */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={`triangle-${i}`}
                className="absolute opacity-10 dark:opacity-15"
                initial={{
                  opacity: 0,
                  rotate: 0,
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  opacity: [0, 0.3, 0],
                  rotate: [0, 120, 240],
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 5,
                }}
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${Math.random() * 50 + 25}px solid transparent`,
                  borderRight: `${Math.random() * 50 + 25}px solid transparent`,
                  borderBottomWidth: `${Math.random() * 100 + 50}px`,
                  borderBottomStyle: "solid",
                  borderBottomColor: `rgba(239, 68, 68, 0.2)`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h1
              className={cn(
                "text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text",
                themeColors[themeColor].primary,
              )}
            >
              Ashwani Kumar
            </h1>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:block"
          >
            <ul className="flex space-x-8">
              {["Home", "About", "Skills", "Timeline", "Projects", "Blog", "Testimonials", "Contact"].map(
                (item, index) => (
                  <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.nav>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            {/* Theme color selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="border-slate-200 dark:border-slate-800">
                  <span className={cn("w-4 h-4 rounded-full bg-gradient-to-r", themeColors[themeColor].primary)} />
                  <span className="sr-only">Toggle theme color</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setThemeColor("blue")}>
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 mr-2" />
                  Blue
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeColor("red")}>
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-red-500 to-orange-400 mr-2" />
                  Red
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeColor("purple")}>
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 mr-2" />
                  Purple
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setThemeColor("green")}>
                  <span className="w-4 h-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-400 mr-2" />
                  Green
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Dark mode toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-slate-200 dark:border-slate-800"
            >
              {theme === "light" ? (
                <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-700" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0 text-slate-700" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile menu button */}
            <Button variant="outline" size="icon" className="md:hidden border-slate-200 dark:border-slate-800">
              <span className="sr-only">Open menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        ref={ref}
      >
        <motion.div style={{ y: textY }} className="container mx-auto px-4 z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center md:text-left"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "inline-block px-4 py-1 rounded-full text-sm font-medium mb-6",
                  themeColors[themeColor].secondary,
                )}
              >
                Full Stack Developer
              </motion.span>

              <div className="overflow-hidden mb-4">
                <motion.h1
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white"
                >
                  Hey, I'm{" ASHWANI KUMAR "}
                  <span
                    className={cn("bg-gradient-to-r text-transparent bg-clip-text", themeColors[themeColor].primary)}
                  >
                    <TypewriterComponent
                      options={{
                        strings: ["Ashwani Kumar", "a Developer", "a Creator"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-lg"
              >
                A passionate first-year B.Tech student with a drive for creating innovative web solutions and exploring
                cutting-edge technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap justify-center md:justify-start gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("projects")}
                  className={cn("bg-gradient-to-r", themeColors[themeColor].button)}
                >
                  View Projects
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className={cn(themeColors[themeColor].border, themeColors[themeColor].accent)}
                >
                  Contact Me
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex justify-center md:justify-start mt-10 gap-4"
              >
                <a
                  href="https://github.com/Ashwanikumar0555"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "bg-slate-200 dark:bg-slate-800 p-3 rounded-full hover:scale-110 transition-transform",
                    themeColors[themeColor].hover,
                  )}
                >
                  <Github className={cn("w-5 h-5", themeColors[themeColor].accent)} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ashwani-kumar056/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "bg-slate-200 dark:bg-slate-800 p-3 rounded-full hover:scale-110 transition-transform",
                    themeColors[themeColor].hover,
                  )}
                >
                  <Linkedin className={cn("w-5 h-5", themeColors[themeColor].accent)} />
                </a>
                <a
                  href="mailto:ashwanikumar05556@gmail.com"
                  className={cn(
                    "bg-slate-200 dark:bg-slate-800 p-3 rounded-full hover:scale-110 transition-transform",
                    themeColors[themeColor].hover,
                  )}
                >
                  <Mail className={cn("w-5 h-5", themeColors[themeColor].accent)} />
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <motion.div
                className={cn(
                  "relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4",
                  `border-gradient-to-r ${themeColors[themeColor].primary}`,
                )}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/placeholder.svg?height=400&width=400&text=Ashwani+Kumar"
                  alt="Ashwani Kumar"
                  className="w-full h-full object-cover"
                />
                <div
                  className={cn("absolute inset-0 bg-gradient-to-tr opacity-30", themeColors[themeColor].primary)}
                ></div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
                className={cn(
                  "absolute top-0 right-0 md:right-20 p-3 rounded-lg shadow-lg",
                  "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn("w-3 h-3 rounded-full", `bg-gradient-to-r ${themeColors[themeColor].primary}`)}
                  ></span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">React</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" }}
                className={cn(
                  "absolute bottom-10 left-0 md:left-10 p-3 rounded-lg shadow-lg",
                  "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn("w-3 h-3 rounded-full", `bg-gradient-to-r ${themeColors[themeColor].primary}`)}
                  ></span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Node.js</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 0, y: 0 }}
                animate={{ x: [0, 15, 0], y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 6, ease: "easeInOut" }}
                className={cn(
                  "absolute top-20 left-0 md:left-0 p-3 rounded-lg shadow-lg",
                  "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700",
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    className={cn("w-3 h-3 rounded-full", `bg-gradient-to-r ${themeColors[themeColor].primary}`)}
                  ></span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">MongoDB</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-slate-400"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text inline-block",
                themeColors[themeColor].primary,
              )}
            >
              About Me
            </h2>
            <div className={cn("h-1 w-20 bg-gradient-to-r mx-auto", themeColors[themeColor].primary)}></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "bg-white dark:bg-slate-800/50 p-8 rounded-2xl border shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                "border-slate-200 dark:border-slate-700 hover:shadow-lg",
                themeColors[themeColor].hover,
              )}
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center mb-6",
                  `bg-gradient-to-r ${themeColors[themeColor].primary}`,
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Who I Am</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                I am Ashwani Kumar, a first-year B.Tech student with a passion for web development and technology. My
                journey in tech is driven by curiosity and the desire to create innovative solutions.
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                I specialize in both frontend and backend technologies, with a focus on the MERN stack. My goal is to
                build innovative solutions that solve real-world problems while providing exceptional user experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className={cn(
                "bg-white dark:bg-slate-800/50 p-8 rounded-2xl border shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                "border-slate-200 dark:border-slate-700 hover:shadow-lg",
                themeColors[themeColor].hover,
              )}
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center mb-6",
                  `bg-gradient-to-r ${themeColors[themeColor].primary}`,
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Education</h3>
              <div className="mb-4">
                <span
                  className={cn(
                    "inline-block px-3 py-1 rounded-full text-sm font-medium mb-2",
                    themeColors[themeColor].secondary,
                  )}
                >
                  Rai University
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Currently pursuing B.Tech with a CGPA of 9.05
                </p>
              </div>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                My academic journey has equipped me with strong fundamentals in computer science and engineering
                principles, which I apply to my development projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className={cn(
                "bg-white dark:bg-slate-800/50 p-8 rounded-2xl border shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                "border-slate-200 dark:border-slate-700 hover:shadow-lg",
                themeColors[themeColor].hover,
              )}
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-full flex items-center justify-center mb-6",
                  `bg-gradient-to-r ${themeColors[themeColor].primary}`,
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">Goals & Fun Facts</h3>
              <div className="space-y-4">
                <div>
                  <h4 className={cn("font-medium mb-1", themeColors[themeColor].accent)}>Career Goal</h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    Become a proficient Full Stack Developer creating impactful applications
                  </p>
                </div>
                <div>
                  <h4 className={cn("font-medium mb-1", themeColors[themeColor].accent)}>Fun Fact</h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    I solved my first programming challenge at age 15
                  </p>
                </div>
                <div>
                  <h4 className={cn("font-medium mb-1", themeColors[themeColor].accent)}>Learning Focus</h4>
                  <p className="text-slate-700 dark:text-slate-300">
                    Currently mastering advanced React patterns and cloud deployment
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text inline-block",
                themeColors[themeColor].primary,
              )}
            >
              Personal Information
            </h2>
            <div className={cn("h-1 w-20 bg-gradient-to-r mx-auto", themeColors[themeColor].primary)}></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={cn(
                "bg-white dark:bg-slate-800/50 p-8 rounded-2xl border shadow-xl",
                "border-slate-200 dark:border-slate-700",
              )}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4">
                      <span
                        className={cn("bg-slate-100 dark:bg-slate-700 p-3 rounded-full", themeColors[themeColor].hover)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className={cn("w-6 h-6", themeColors[themeColor].accent)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                          />
                        </svg>
                      </span>
                      <div>
                        <span className="block text-sm text-slate-500 dark:text-slate-400">Name</span>
                        <span className="block text-lg font-medium text-slate-900 dark:text-white">Ashwani Kumar</span>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <span
                        className={cn("bg-slate-100 dark:bg-slate-700 p-3 rounded-full", themeColors[themeColor].hover)}
                      >
                        <Mail className={cn("w-6 h-6", themeColors[themeColor].accent)} />
                      </span>
                      <div>
                        <span className="block text-sm text-slate-500 dark:text-slate-400">Email</span>
                        <a
                          href="mailto:ashwanikumar05556@gmail.com"
                          className="block text-lg font-medium text-slate-900 dark:text-white hover:underline"
                        >
                          ashwanikumar05556@gmail.com
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-6">
                    <li className="flex items-center gap-4">
                      <span
                        className={cn("bg-slate-100 dark:bg-slate-700 p-3 rounded-full", themeColors[themeColor].hover)}
                      >
                        <MapPin className={cn("w-6 h-6", themeColors[themeColor].accent)} />
                      </span>
                      <div>
                        <span className="block text-sm text-slate-500 dark:text-slate-400">Location</span>
                        <span className="block text-lg font-medium text-slate-900 dark:text-white">
                          Gujarat, Ahmedabad
                        </span>
                      </div>
                    </li>
                    <li className="flex items-center gap-4">
                      <span
                        className={cn("bg-slate-100 dark:bg-slate-700 p-3 rounded-full", themeColors[themeColor].hover)}
                      >
                        <Github className={cn("w-6 h-6", themeColors[themeColor].accent)} />
                      </span>
                      <div>
                        <span className="block text-sm text-slate-500 dark:text-slate-400">GitHub</span>
                        <a
                          href="https://github.com/Ashwanikumar0555"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg font-medium text-slate-900 dark:text-white hover:underline"
                        >
                          github.com/Ashwanikumar0555
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-4">
                  <span
                    className={cn("bg-slate-100 dark:bg-slate-700 p-3 rounded-full", themeColors[themeColor].hover)}
                  >
                    <Linkedin className={cn("w-6 h-6", themeColors[themeColor].accent)} />
                  </span>
                  <div>
                    <span className="block text-sm text-slate-500 dark:text-slate-400">LinkedIn</span>
                    <a
                      href="https://www.linkedin.com/in/ashwani-kumar056/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-medium text-slate-900 dark:text-white hover:underline"
                    >
                      linkedin.com/in/ashwani-kumar056
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text inline-block",
                themeColors[themeColor].primary,
              )}
            >
              Technical Skills
            </h2>
            <div className={cn("h-1 w-20 bg-gradient-to-r mx-auto", themeColors[themeColor].primary)}></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "bg-white dark:bg-slate-800/50 p-8 rounded-2xl border shadow-xl",
                "border-slate-200 dark:border-slate-700",
              )}
            >
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Skills Overview</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className={cn(themeColors[themeColor].accent)}>{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        className={cn("h-full rounded-full", `bg-gradient-to-r ${themeColors[themeColor].progress}`)}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className={cn(
                "bg-white dark:bg-slate-800/50 p-8 rounded-2xl border shadow-xl",
                "border-slate-200 dark:border-slate-700",
              )}
            >
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Skill Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border",
                    "border-slate-200 dark:border-slate-600",
                  )}
                >
                  <h4 className={cn("text-lg font-medium mb-3", themeColors[themeColor].accent)}>Frontend</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>HTML/CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border",
                    "border-slate-200 dark:border-slate-600",
                  )}
                >
                  <h4 className={cn("text-lg font-medium mb-3", themeColors[themeColor].accent)}>Backend</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>REST API</li>
                    <li>MongoDB</li>
                  </ul>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border",
                    "border-slate-200 dark:border-slate-600",
                  )}
                >
                  <h4 className={cn("text-lg font-medium mb-3", themeColors[themeColor].accent)}>Tools</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Git</li>
                    <li>VS Code</li>
                    <li>Postman</li>
                    <li>Figma</li>
                  </ul>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={cn(
                    "bg-slate-50 dark:bg-slate-700/50 p-4 rounded-xl border",
                    "border-slate-200 dark:border-slate-600",
                  )}
                >
                  <h4 className={cn("text-lg font-medium mb-3", themeColors[themeColor].accent)}>Other</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                    <li>Responsive Design</li>
                    <li>API Integration</li>
                    <li>Database Design</li>
                    <li>Deployment</li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text inline-block",
                themeColors[themeColor].primary,
              )}
            >
              My Journey
            </h2>
            <div className={cn("h-1 w-20 bg-gradient-to-r mx-auto mb-8", themeColors[themeColor].primary)}></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              A timeline of my educational and professional milestones.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-700 transform md:translate-x-[-50%]"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  <div
                    className={cn(
                      "order-1 md:w-1/2 px-6 py-4",
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12 md:order-2",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block px-3 py-1 rounded-full text-sm font-medium mb-2",
                        themeColors[themeColor].secondary,
                      )}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-slate-700 dark:text-slate-300">{item.description}</p>
                  </div>

                  <div
                    className={cn(
                      "absolute left-0 md:left-1/2 flex items-center justify-center",
                      "w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-200 dark:border-slate-700 transform md:translate-x-[-50%]",
                    )}
                  >
                    <span
                      className={cn(
                        "flex items-center justify-center w-8 h-8 rounded-full",
                        `bg-gradient-to-r ${themeColors[themeColor].primary}`,
                      )}
                    >
                      {item.icon}
                    </span>
                  </div>

                  <div
                    className={cn(
                      "order-2 md:w-1/2 px-6 py-4",
                      index % 2 === 0 ? "md:text-left md:pl-12 md:order-1" : "md:text-right md:pr-12",
                    )}
                  >
                    {/* Empty div for layout */}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text inline-block",
                themeColors[themeColor].primary,
              )}
            >
              Certifications
            </h2>
            <div className={cn("h-1 w-20 bg-gradient-to-r mx-auto mb-8", themeColors[themeColor].primary)}></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Professional certifications that validate my skills and knowledge in various technologies and development
              practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={cn(
                  "bg-white dark:bg-slate-800/50 rounded-2xl border overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2",
                  "border-slate-200 dark:border-slate-700",
                )}
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={cert.image || "/placeholder.svg"} alt={cert.title} className="w-full h-full object-cover" />
                  <div
                    className={cn("absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70")}
                  ></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                    <div className="flex items-center mt-2">
                      <Award className="w-4 h-4 text-white mr-2" />
                      <span className="text-white text-sm">
                        {cert.issuer} - {cert.date}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 mb-4">{cert.description}</p>
                  <div className="flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className={cn(themeColors[themeColor].border, themeColors[themeColor].accent)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Certificate
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className={cn(themeColors[themeColor].hover, themeColors[themeColor].accent)}
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              className={cn(
                "bg-white dark:bg-slate-800 border",
                "border-slate-200 dark:border-slate-700",
                themeColors[themeColor].hover,
                themeColors[themeColor].accent,
              )}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Upload New Certificate
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text inline-block",
                themeColors[themeColor].primary,
              )}
            >
              My Projects
            </h2>
            <div className={cn("h-1 w-20 bg-gradient-to-r mx-auto mb-8", themeColors[themeColor].primary)}></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project demonstrates different skills and technologies
              I've mastered.
            </p>
          </motion.div>

          <Tabs defaultValue="all" className="w-full mb-10">
            <TabsList className="flex flex-wrap justify-center w-full max-w-3xl mx-auto bg-slate-100 dark:bg-slate-800 p-1 rounded-lg">
              <TabsTrigger value="all" className="flex-1">
                All
              </TabsTrigger>
              <TabsTrigger value="react" className="flex-1">
                React
              </TabsTrigger>
              <TabsTrigger value="html" className="flex-1">
                HTML/CSS
              </TabsTrigger>
              <TabsTrigger value="mern" className="flex-1">
                MERN
              </TabsTrigger>
              <TabsTrigger value="figma" className="flex-1">
                Figma
              </TabsTrigger>
              <TabsTrigger value="backend" className="flex-1">
                Backend
              </TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                  >
                    <ProjectCard project={project} themeColor={themeColor} themeColors={themeColors} />
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            {["react", "html", "mern", "figma", "backend"].map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((project) => project.category === category)
                    .map((project, index) => (
                      <motion.div
                        key={project.title}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        custom={index}
                      >
                        <ProjectCard project={project} themeColor={themeColor} themeColors={themeColors} />
                      </motion.div>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Button size="lg" className={cn("bg-gradient-to-r", themeColors[themeColor].button)}>
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text inline-block",
                themeColors[themeColor].primary,
              )}
            >
              Latest Articles
            </h2>
            <div className={cn("h-1 w-20 bg-gradient-to-r mx-auto mb-8", themeColors[themeColor].primary)}></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Sharing my knowledge and experiences through articles on web development and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={cn(
                  "bg-white dark:bg-slate-800/50 rounded-2xl border overflow-hidden shadow-lg transition-all duration-300 transform hover:-translate-y-2",
                  "border-slate-200 dark:border-slate-700",
                )}
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
                  <div
                    className={cn("absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70")}
                  ></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Clock className={cn("w-4 h-4 mr-2", themeColors[themeColor].accent)} />
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {post.date} • {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{post.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 mb-4">{post.excerpt}</p>
                  <Button
                    variant="outline"
                    className={cn(themeColors[themeColor].border, themeColors[themeColor].accent)}
                  >
                    Read More
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              className={cn(
                "bg-white dark:bg-slate-800 border",
                "border-slate-200 dark:border-slate-700",
                themeColors[themeColor].hover,
                themeColors[themeColor].accent,
              )}
            >
              View All Articles
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text inline-block",
                themeColors[themeColor].primary,
              )}
            >
              Testimonials
            </h2>
            <div className={cn("h-1 w-20 bg-gradient-to-r mx-auto mb-8", themeColors[themeColor].primary)}></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              What people say about working with me.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className={cn(
                  "bg-white dark:bg-slate-800/50 p-8 rounded-2xl border shadow-xl transition-all duration-300 transform hover:-translate-y-2",
                  "border-slate-200 dark:border-slate-700",
                )}
              >
                <div className="flex items-center mb-6">
                  <div className="relative mr-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div
                      className={cn(
                        "absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center",
                        `bg-gradient-to-r ${themeColors[themeColor].primary}`,
                      )}
                    >
                      <Heart className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{testimonial.name}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <svg
                    className={cn("w-10 h-10 absolute -top-4 -left-4 opacity-10", themeColors[themeColor].accent)}
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-slate-700 dark:text-slate-300 relative z-10">{testimonial.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r text-transparent bg-clip-text inline-block",
                themeColors[themeColor].primary,
              )}
            >
              Get In Touch
            </h2>
            <div className={cn("h-1 w-20 bg-gradient-to-r mx-auto mb-8", themeColors[themeColor].primary)}></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out to me through the form below or via
              my contact information.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "bg-white dark:bg-slate-800/50 p-8 rounded-2xl border shadow-xl",
                "border-slate-200 dark:border-slate-700",
              )}
            >
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span
                    className={cn(
                      "bg-slate-100 dark:bg-slate-700 p-3 rounded-full mt-1",
                      themeColors[themeColor].hover,
                    )}
                  >
                    <Mail className={cn("w-5 h-5", themeColors[themeColor].accent)} />
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Email</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      <a href="mailto:ashwanikumar05556@gmail.com" className="hover:underline">
                        ashwanikumar05556@gmail.com
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span
                    className={cn(
                      "bg-slate-100 dark:bg-slate-700 p-3 rounded-full mt-1",
                      themeColors[themeColor].hover,
                    )}
                  >
                    <Github className={cn("w-5 h-5", themeColors[themeColor].accent)} />
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">GitHub</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      <a
                        href="https://github.com/Ashwanikumar0555"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/Ashwanikumar0555
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span
                    className={cn(
                      "bg-slate-100 dark:bg-slate-700 p-3 rounded-full mt-1",
                      themeColors[themeColor].hover,
                    )}
                  >
                    <Linkedin className={cn("w-5 h-5", themeColors[themeColor].accent)} />
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">LinkedIn</h4>
                    <p className="text-slate-700 dark:text-slate-300">
                      <a
                        href="https://www.linkedin.com/in/ashwani-kumar056/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/ashwani-kumar056
                      </a>
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span
                    className={cn(
                      "bg-slate-100 dark:bg-slate-700 p-3 rounded-full mt-1",
                      themeColors[themeColor].hover,
                    )}
                  >
                    <MapPin className={cn("w-5 h-5", themeColors[themeColor].accent)} />
                  </span>
                  <div>
                    <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-1">Location</h4>
                    <p className="text-slate-700 dark:text-slate-300">Gujarat, Ahmedabad</p>
                  </div>
                </li>
              </ul>

              <div className="mt-10">
                <h4 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Connect With Me</h4>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/Ashwanikumar0555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "bg-slate-100 dark:bg-slate-700 p-3 rounded-full transition-colors",
                      themeColors[themeColor].hover,
                    )}
                  >
                    <Github className={cn("w-5 h-5", themeColors[themeColor].accent)} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.linkedin.com/in/ashwani-kumar056/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "bg-slate-100 dark:bg-slate-700 p-3 rounded-full transition-colors",
                      themeColors[themeColor].hover,
                    )}
                  >
                    <Linkedin className={cn("w-5 h-5", themeColors[themeColor].accent)} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="mailto:ashwanikumar05556@gmail.com"
                    className={cn(
                      "bg-slate-100 dark:bg-slate-700 p-3 rounded-full transition-colors",
                      themeColors[themeColor].hover,
                    )}
                  >
                    <Mail className={cn("w-5 h-5", themeColors[themeColor].accent)} />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className={cn(
                "bg-white dark:bg-slate-800/50 p-8 rounded-2xl border shadow-xl",
                "border-slate-200 dark:border-slate-700",
              )}
            >
              <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">Send Me a Message</h3>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-slate-700 dark:text-slate-300 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 focus:border-slate-400 dark:focus:border-slate-500 text-slate-900 dark:text-white"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-slate-700 dark:text-slate-300 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 focus:border-slate-400 dark:focus:border-slate-500 text-slate-900 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-slate-700 dark:text-slate-300 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 focus:border-slate-400 dark:focus:border-slate-500 text-slate-900 dark:text-white"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-slate-700 dark:text-slate-300 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={5}
                    className="bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 focus:border-slate-400 dark:focus:border-slate-500 text-slate-900 dark:text-white"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn("w-full bg-gradient-to-r", themeColors[themeColor].button)}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-6 md:mb-0"
            >
              <h2
                className={cn(
                  "text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text",
                  themeColors[themeColor].primary,
                )}
              >
                Ashwani Kumar
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mt-2">Full Stack Developer</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 md:gap-6"
            >
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                Contact
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center"
          >
            <p className="text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Ashwani Kumar. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}

function ProjectCard({ project, themeColor, themeColors }) {
  return (
    <Card
      className={cn(
        "overflow-hidden bg-white dark:bg-slate-800/50 border transition-all duration-300 transform hover:-translate-y-2",
        "border-slate-200 dark:border-slate-700 hover:shadow-lg",
      )}
    >
      <div className="h-48 relative overflow-hidden">
        <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>
      <CardContent className="p-6">
        <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline" className={cn(themeColors[themeColor].secondary)}>
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <Button
            variant="outline"
            size="sm"
            className={cn(themeColors[themeColor].border, themeColors[themeColor].accent)}
          >
            View Details
          </Button>
          <Button
            size="sm"
            className={cn(
              "bg-slate-100 dark:bg-slate-700",
              themeColors[themeColor].hover,
              themeColors[themeColor].accent,
            )}
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

