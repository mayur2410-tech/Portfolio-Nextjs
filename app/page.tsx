"use client"

import type React from "react"
import {
  SiReact,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiTailwindcss,
  SiGit,
  SiJavascript,
  SiFigma,
  SiHtml5,
} from "react-icons/si"


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
  const [theme, setTheme] = useState<"light" | "dark">("light")
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

  // const projects = [
  //   {
  //     title: "E-Commerce Platform",
  //     description:
  //       "A full-stack MERN application with user authentication, product management, and payment integration.",
  //     tags: ["React", "Node.js", "MongoDB", "Express"],
  //     category: "mern",
  //     image: "/placeholder.svg?height=300&width=500&text=E-Commerce",
  //   },
  //   {
  //     title: "Portfolio Website",
  //     description: "A responsive portfolio website built with HTML, CSS, and JavaScript.",
  //     tags: ["HTML", "CSS", "JavaScript"],
  //     category: "html",
  //     image: "/placeholder.svg?height=300&width=500&text=Portfolio",
  //   },
  //   {
  //     title: "Task Management App",
  //     description: "A React application for managing tasks with drag-and-drop functionality.",
  //     tags: ["React", "Tailwind CSS", "Firebase"],
  //     category: "react",
  //     image: "/placeholder.svg?height=300&width=500&text=Task+App",
  //   },
  //   {
  //     title: "Banking App UI Design",
  //     description: "A modern UI design for a banking application created in Figma.",
  //     tags: ["Figma", "UI/UX", "Prototype"],
  //     category: "figma",
  //     image: "/placeholder.svg?height=300&width=500&text=Banking+UI",
  //   },
  //   {
  //     title: "RESTful API for Blog",
  //     description: "A backend API for a blog platform with authentication and CRUD operations.",
  //     tags: ["Node.js", "Express", "MongoDB", "REST API"],
  //     category: "backend",
  //     image: "/placeholder.svg?height=300&width=500&text=Blog+API",
  //   },
  //   {
  //     title: "Weather Dashboard",
  //     description: "A React application that displays weather information using a third-party API.",
  //     tags: ["React", "API Integration", "Tailwind CSS"],
  //     category: "react",
  //     image: "/placeholder.svg?height=300&width=500&text=Weather+App",
  //   },
  // ]
  const projects = [
    {
      title: "Laundry Management System",
      description: "The Laundry Management System digitizes traditional laundry services, enabling users, workers, and admins to manage orders, track status, and optimize stock efficiently.",
      image: "https://github.com/mayur2410-tech/Portfolio-Website/blob/main/src/assests/laundrymanagement.png?raw=true",
      video: "#",
      technologies: ["React", "Node JS", "MongoDB","Express JS", "Tailwind CSS"],
      category: "mern",
      github: "https://github.com/mayur2410-tech/laundry_buddy",
      demo: "https://laundry-buddy-frontend.onrender.com/",
      featured: true
    },
    {
      title: "API Hub",
      description: "Unified API Explorer integrates MealDB, CocktailDB, and Harry Potter APIs for efficient browsing, recipe and character discovery, and optimized API fetching.",
      image: "https://github.com/mayur2410-tech/Portfolio-Website/blob/main/src/assests/apihub.png?raw=true",
      technologies: ["React","Tailwind CSS"],
      category: "react",
      github: "https://github.com/mayur2410-tech/REACT-JS/tree/main/react/react-4-in-1-website/4-websites",
      demo: "https://animated-basbousa-d53885.netlify.app/",
      featured: true
    },
    {
      title: "WholeMonkey E-commerce Website",
      description: "Developed a static clone of the Wholemonkey e-commerce website using React.",
      
      image:"https://github.com/mayur2410-tech/Portfolio-Website/blob/main/src/assests/wholemonkey.png?raw=true",
      technologies: ["React", "CSS"],
      category: "react",
      github: "https://github.com/mayur2410-tech/REACT-JS/tree/main/react/wholemonkey-clone-using-react/vite_app",
      demo: "https://wholemonkey.netlify.app/",
      featured: true
    },
    {
      title: "Youtube Clone",
      description: "Developed a YouTube clone in React and integrated the YouTube API for fetching video data.",
      image: "https://github.com/mayur2410-tech/Portfolio-Website/blob/main/src/assests/utube.png?raw=true",
      technologies: ["React","CSS"],
      category: "react",
      github: "https://github.com/mayur2410-tech/REACT-JS/tree/main/react/youtube-clone%20using%20react/youtube",
      demo: "https://youtube-clonereactjs.netlify.app/"
    },
    {
      title: "Background-Color-Changer",
      description: "Implemented a dynamic background color changer with individual color buttons and custom color input using HTML, CSS, and JavaScript.",
      image: "https://github.com/mayur2410-tech/Portfolio-Website/blob/main/src/assests/bg-color.png?raw=true",
      technologies: ["HTML", "CSS", "Javascript"],
      category: "html-css",
      github: "https://github.com/mayur2410-tech/html-css_js_project/tree/main/Background-color-changer",
      demo: "https://meek-cheesecake-019e0e.netlify.app/"
    },
    {
      title: "Linear Gradient Color Maker",
      description: "Developed a linear gradient color maker with customizable color options using HTML, CSS, and JavaScript.",
      image:"https://github.com/mayur2410-tech/Portfolio-Website/blob/main/src/assests/lineargradient.png?raw=true" ,
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "html-css",
      github: "https://github.com/mayur2410-tech/html-css_js_project/tree/main/linear-gradient-color-maker",
      demo: "https://resonant-churros-e8bb6b.netlify.app/"
    }
  ];

  // const skills = [
  //   { name: "HTML/CSS", level: 90 },
  //   { name: "JavaScript", level: 85 },
  //   { name: "React", level: 80 },
  //   { name: "Node.js", level: 75 },
  //   { name: "Express.js", level: 75 },
  //   { name: "MongoDB", level: 70 },
  //   { name: "REST API", level: 80 },
  //   { name: "Git", level: 75 },
  //   { name: "Tailwind CSS", level: 85 },
  // ]

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
              MW
            </h1>
          </motion.div>
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:block"
          >
            <ul className="flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                <motion.li key={item} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </motion.li>
              ))}
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
                <Moon className="h-[1.2rem] w-[1.2rem] transition-all text-slate-700 dark:text-slate-200" />
              ) : (
                <Sun className="h-[1.2rem] w-[1.2rem] transition-all text-slate-700 dark:text-slate-200" />
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
                  Hey, I'm
                  <span
                    className={cn("bg-gradient-to-r text-transparent bg-clip-text", themeColors[themeColor].primary)}
                  >
                    <TypewriterComponent
                      options={{
                        strings: ["a Mayur Waykar", "a Developer", "a Creator"],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: `text-transparent bg-clip-text bg-gradient-to-r ${themeColors[themeColor].primary}`,
                        cursorClassName: themeColors[themeColor].accent
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
                A passionate B.Tech CSE student with a drive for creating innovative web solutions and exploring
                cutting-edge technologies.
              </motion.p>

              <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.7 }}
  className="flex flex-nowrap justify-center md:justify-start gap-4 w-full"
>
  <Button
    size="lg"
    onClick={() => {
      const link = document.createElement('a');
      link.href = "https://drive.google.com/uc?export=download&id=1dKuCvo0M43b-lqNpNJJ-pvyGsHdOQCi4";
      link.download = "Resume MW.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }}
    className={cn(
      "min-w-[50%] sm:min-w-0 bg-gradient-to-r", // Forces 50% width on mobile, auto on larger screens
      themeColors[themeColor].button
    )}
  >
    <Download className="w-5 h-5 mr-2" />
    Download Resume
  </Button>

  <Button
    size="lg"
    variant="outline"
    onClick={() => scrollToSection("contact")}
    className={cn(
      "min-w-[50%] sm:min-w-0", // Same as above
      themeColors[themeColor].border,
      themeColors[themeColor].accent
    )}
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
                  href="https://github.com/mayur2410-tech"
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
                  href="https://www.linkedin.com/in/mayur-a-waykar/"
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
                  href="mailto:mayurwaykar9@gmail.com"
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
                  "relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden border-4 border-white",
                  `border-gradient-to-r ${themeColors[themeColor].primary}`,
                )}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
               >
                <img
                  src="https://github.com/mayur2410-tech/Portfolio-Website/blob/main/src/assests/profilephoto.jpg?raw=true"
                  alt="Mayur Waykar"
                  className="w-full h-full object-cover relative z-10 filter-none" 
                />
                <div className="absolute inset-0 bg-white/5 z-20"></div>
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

      {/* My Journey Section */}
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
              My Journey
            </h2>
            <div className={cn("h-1 w-20 bg-gradient-to-r mx-auto", themeColors[themeColor].primary)}></div>
            <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mt-4">
              A passionate full stack developer crafting exceptional digital experiences through code and creativity
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent md:before:mx-auto md:before:translate-x-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-gradient-to-r",
                  themeColors[themeColor].primary,
                  "md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
                )}>
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between space-x-2 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">B.Tech in Computer Science</h3>
                    <time className={cn("text-sm font-semibold px-3 py-1 rounded-full", themeColors[themeColor].secondary)}>2024 - Present</time>
                  </div>
                  <div className={cn("text-lg font-medium mb-3", themeColors[themeColor].accent)}>Rai University</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Currently pursuing Bachelor's in Computer Science with focus on web development and software engineering.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-gradient-to-r",
                  themeColors[themeColor].primary,
                  "md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"
                )}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between space-x-2 mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Higher Secondary (HSC)</h3>
                    <time className={cn("text-sm font-semibold px-3 py-1 rounded-full", themeColors[themeColor].secondary)}>2022 - 2024</time>
                  </div>
                  <div className={cn("text-lg font-medium mb-3", themeColors[themeColor].accent)}>G.R.P.Sabnis</div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    Completed HSC with focus on Science and Mathematics, laying the foundation for my technical education.
                  </p>
                </div>
              </motion.div>
            </div>
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

    {/* Skills Grid - 5 in first row, 5 in second row */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {[
        { name: "React", icon: <SiReact className="text-[#61DAFB]" />, level: 90 },
        { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" />, level: 85 },
        { name: "Express", icon: <SiExpress className="text-[#000000] dark:text-[#FFFFFF]" />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 75 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" />, level: 95 },
        { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" />, level: 90 },
        { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" />, level: 95 },
        { name: "CSS", icon: <SiCss3 className="text-[#1572B6]" />, level: 90 },
        { name: "Git", icon: <SiGit className="text-[#F05032]" />, level: 85 },
        { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" />, level: 75 },
      ].map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className={cn(
            "bg-white dark:bg-slate-800/50 p-4 rounded-xl border shadow-lg",
            "border-slate-200 dark:border-slate-700",
            "flex flex-col items-center justify-center gap-2",
            "hover:shadow-xl transition-all duration-300",
            // Force 5 items per row on md screens and up
            "md:col-span-1",
            // Adjust for smaller screens (2 cols on mobile, 3 on sm)
            index >= 5 ? "sm:col-start-1 sm:col-end-4 md:col-auto" : ""
          )}
        >
          {/* Icon Container with Transparent Background */}
          <div className={cn(
            "w-16 h-16 rounded-full flex items-center justify-center mb-2 p-3",
            "bg-white/20 dark:bg-slate-800/20",
            "shadow-md"
          )}>
            <div className="text-3xl">{skill.icon}</div>
          </div>

          {/* Skill Name */}
          <h3 className="text-sm font-medium text-center text-slate-900 dark:text-white">
            {skill.name}
          </h3>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className={cn("h-full rounded-full", `bg-gradient-to-r ${themeColors[themeColor].progress}`)}
            ></motion.div>
          </div>

          {/* Skill Percentage */}
          <span className={cn("text-xs font-semibold", themeColors[themeColor].accent)}>
            {skill.level}%
          </span>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Projects Section */}
      {/* <section id="projects" className="py-20">
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
              <TabsTrigger value="mern" className="flex-1">
               MERN
              </TabsTrigger>
              <TabsTrigger value="react" className="flex-1">
                React
              </TabsTrigger>
              <TabsTrigger value="html" className="flex-1">
              HTML/CSS
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
      </section> */}

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
        <TabsTrigger value="mern" className="flex-1">
          MERN
        </TabsTrigger>
        <TabsTrigger value="react" className="flex-1">
          React
        </TabsTrigger>
        <TabsTrigger value="html-css" className="flex-1">
          HTML/CSS
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

      {["react","mern", "html-css"].map((category) => (
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
      <Button 
        size="lg" 
        className={cn("bg-gradient-to-r", themeColors[themeColor].button)}
        onClick={() => window.open("https://github.com/mayur2410-tech", "_blank")}
      >
        <Github className="mr-2 h-4 w-4" />
        View All Projects on GitHub
      </Button>
    </motion.div>
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
                      <a href="mailto:mayurwaykar9@gmail.com" className="hover:underline">
                        mayurwaykar9@gmail.com
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
                        href="https://github.com/mayur2410-tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        github.com/mayur2410-tech
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
                        href="https://www.linkedin.com/in/mayur-a-waykar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        linkedin.com/in/mayur-a-waykar
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
                    href="https://github.com/mayur2410-tech"
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
                    href="https://www.linkedin.com/in/mayur-a-waykar/"
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
                    href="mailto:mayurwaykar9@gmail.com"
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
      
    </main>
  )
}

// function ProjectCard({ project, themeColor, themeColors }) {
//   return (
//     <Card
//       className={cn(
//         "overflow-hidden bg-white dark:bg-slate-800/50 border transition-all duration-300 transform hover:-translate-y-2",
//         "border-slate-200 dark:border-slate-700 hover:shadow-lg",
//       )}
//     >
//       <div className="h-48 relative overflow-hidden">
//         <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
//         <div className="absolute bottom-4 left-4">
//           <h3 className="text-xl font-semibold text-white">{project.title}</h3>
//         </div>
//       </div>
//       <CardContent className="p-6">
//         <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
//         <div className="flex flex-wrap gap-2 mt-4">
//           {project.tags.map((tech) => (
//             <Badge key={tag} variant="outline" className={cn(themeColors[themeColor].secondary)}>
//               {tag}
//             </Badge>
//           ))}
//         </div>
//         <div className="mt-6 flex justify-between">
//           <Button
//             variant="outline"
//             size="sm"
//             className={cn(themeColors[themeColor].border, themeColors[themeColor].accent)}
//           >
//             View Details
//           </Button>
//           <Button
//             size="sm"
//             className={cn(
//               "bg-slate-100 dark:bg-slate-700",
//               themeColors[themeColor].hover,
//               themeColors[themeColor].accent,
//             )}
//           >
//             <Github className="h-4 w-4" />
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }

function ProjectCard({ project, themeColor, themeColors }) {
  return (
    <Card
      className={cn(
        "overflow-hidden bg-white dark:bg-slate-800/50 border transition-all duration-300 transform hover:-translate-y-2",
        "border-slate-200 dark:border-slate-700 hover:shadow-lg",
        "h-full flex flex-col" // Added for better card height consistency
      )}
    >
      <div className="h-48 relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/placeholder.svg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        </div>
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className={cn(
                "text-xs",
                themeColors[themeColor].border,
                themeColors[themeColor].accent
              )}
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "flex-1",
              themeColors[themeColor].border,
              themeColors[themeColor].accent
            )}
            onClick={() => window.open(project.demo, "_blank")}
          >
            Live Demo
          </Button>
          <Button
            size="sm"
            className={cn(
              "bg-slate-100 dark:bg-slate-700",
              themeColors[themeColor].hover,
              themeColors[themeColor].accent,
            )}
            onClick={() => window.open(project.github, "_blank")}
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

