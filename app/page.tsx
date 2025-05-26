"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Chrome,
  Clock,
  Download,
  Filter,
  Folder,
  FolderOpen,
  Menu,
  Play,
  Search,
  Shield,
  Star,
  TrendingUp,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <FolderOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                ChatFolders
              </span>
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 text-xs px-2 py-1">
                NEW
              </Badge>
            </motion.div>

            <div className="hidden lg:flex items-center space-x-12">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-10"
              >
                <a
                  href="#features"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
                >
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
                >
                  Pricing
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
                <a
                  href="#reviews"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
                >
                  Reviews
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium"
                >
                  Sign In
                </Button>
                <a href="/extension.zip" download>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Chrome className="w-4 h-4 mr-2" />
                    Install Extension
                  </Button>
                </a>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              <a
                href="#features"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Pricing
              </a>
              <a
                href="#reviews"
                className="block text-gray-700 hover:text-blue-600 font-medium"
              >
                Reviews
              </a>
              <a href="/extension.zip" download>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Chrome className="w-4 h-4 mr-2" />
                  Install Extension
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border border-blue-200 text-base px-6 py-2 hover:shadow-lg transition-shadow">
                <Star className="w-4 h-4 mr-2" />
                Rated #1 ChatGPT Organization Tool
              </Badge>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8"
            >
              Transform Your ChatGPT
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Into an Organized Workspace
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Create smart folders, search instantly, and manage your ChatGPT
              conversations like a pro. Say goodbye to endless scrolling and
              hello to productivity.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <a href="/extension.zip" download>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Install Free Extension
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-3" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center space-x-12 text-sm text-gray-500"
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                Free forever
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                No signup required
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                Works instantly
              </div>
            </motion.div>
          </motion.div>

          {/* Demo Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-20 relative"
            style={{ y }}
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-5 border-b border-gray-200 flex items-center">
                <div className="flex space-x-3">
                  <div className="w-4 h-4 bg-red-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                </div>
                <div className="ml-6 text-lg text-gray-700 font-medium">
                  ChatGPT with Folders
                </div>
              </div>
              <div className="p-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      color: "blue",
                      title: "Work Projects",
                      items: [
                        "Marketing Campaign Ideas",
                        "Code Review Notes",
                        "Meeting Summaries",
                      ],
                    },
                    {
                      color: "green",
                      title: "Learning",
                      items: [
                        "Python Tutorials",
                        "AI Research",
                        "Language Practice",
                      ],
                    },
                    {
                      color: "purple",
                      title: "Personal",
                      items: [
                        "Recipe Ideas",
                        "Travel Planning",
                        "Creative Writing",
                      ],
                    },
                  ].map((folder, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="space-y-4"
                    >
                      <div
                        className={`flex items-center gap-2 font-semibold text-gray-800`}
                      >
                        <Folder
                          className={`w-5 h-5 text-${folder.color}-600`}
                        />
                        {folder.title}
                      </div>
                      <div className="ml-8 space-y-3 text-gray-600">
                        {folder.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 1 + index * 0.1 + itemIndex * 0.05,
                            }}
                            className="text-sm"
                          >
                            • {item}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything you need to stay organized
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to make your ChatGPT experience more
              productive and organized.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <FolderOpen className="w-6 h-6" />,
                title: "Smart Folders",
                description:
                  "Create unlimited folders and organize your conversations by topic, project, or any system you prefer.",
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: "Instant Search",
                description:
                  "Find any conversation in seconds with powerful search that works across all your chats and folders.",
              },
              {
                icon: <Filter className="w-6 h-6" />,
                title: "Advanced Filters",
                description:
                  "Filter by date, folder, keywords, or conversation length to quickly find what you're looking for.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Quick Actions",
                description:
                  "Move, copy, rename, and organize with simple drag-and-drop or one-click actions.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Privacy First",
                description:
                  "All data stays in your browser. No external servers, no data collection, complete privacy.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "Auto Backup",
                description:
                  "Automatic backup of your organization system so you never lose your carefully arranged chats.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Badge className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-700 border border-yellow-200 text-lg px-6 py-3">
              <Award className="w-5 h-5 mr-2" />
              4.9/5 stars from 1,200+ reviews
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Loved by professionals worldwide
            </h2>
            <p className="text-xl text-gray-600">
              See what our users are saying about ChatFolders
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "Sarah Chen",
                role: "Product Manager",
                avatar: "/placeholder.svg?height=40&width=40",
                text: "This extension is a game-changer! I went from chaos to complete organization in minutes. The search feature alone saves me hours every week.",
              },
              {
                name: "Mike Rodriguez",
                role: "Software Engineer",
                avatar: "/placeholder.svg?height=40&width=40",
                text: "Finally, a way to organize my ChatGPT conversations that actually works. The folder system is intuitive and the interface is clean.",
              },
              {
                name: "Emily Watson",
                role: "Content Creator",
                avatar: "/placeholder.svg?height=40&width=40",
                text: "I use ChatGPT for everything from writing to research. This extension keeps everything organized and easy to find. Absolutely essential!",
              },
            ].map((review, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{review.text}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          {review.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {review.role}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade when you need more features
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                name: "Free",
                price: "$0",
                period: "forever",
                features: [
                  "Unlimited folders",
                  "Basic search",
                  "Local storage",
                  "Drag & drop",
                  "Export chats",
                ],
                buttonText: "Get Started",
                popular: false,
              },
              {
                name: "Pro",
                price: "$4.99",
                period: "/month",
                features: [
                  "Everything in Free",
                  "Advanced search",
                  "Cloud backup",
                  "Smart filters",
                  "Bulk operations",
                  "Priority support",
                ],
                buttonText: "Upgrade to Pro",
                popular: true,
              },
              {
                name: "Team",
                price: "$12.99",
                period: "/month",
                features: [
                  "Everything in Pro",
                  "Team workspaces",
                  "Shared folders",
                  "Admin controls",
                  "Team analytics",
                  "Dedicated support",
                ],
                buttonText: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm px-4 py-2">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card
                  className={`h-full ${
                    plan.popular
                      ? "border-blue-200 shadow-xl bg-gradient-to-b from-blue-50 to-white"
                      : "border-gray-200 shadow-lg bg-white"
                  } transition-all duration-300`}
                >
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {plan.name}
                      </h3>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-gray-900">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 text-lg">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-sm"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full text-lg py-3 transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl"
                          : "bg-gray-900 hover:bg-gray-800"
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-slate-500/10"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to organize your ChatGPT conversations?
            </h2>
            <p className="text-xl text-purple-100 mb-12 leading-relaxed">
              Join thousands of users who have transformed their ChatGPT
              workflow with ChatFolders. Start organizing today and never lose a
              conversation again.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            >
              <a href="/extension.zip" download>
                <Button
                  size="lg"
                  className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-10 py-4 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Download className="w-5 h-5 mr-3" />
                  Install Free Extension
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white hover:bg-white text-purple-900 text-lg px-10 py-4 transition-all duration-300"
              >
                View on Chrome Store
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-center space-x-12 text-purple-200"
            >
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                4.9/5 rating
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-yellow-400" />
                10,000+ users
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-yellow-400" />
                100% secure
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <FolderOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">ChatFolders</span>
            </div>

            <div className="flex space-x-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 ChatFolders. All rights reserved. Made with ❤️ for
              productivity enthusiasts.
            </p>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
