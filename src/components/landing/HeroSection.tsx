import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Users, FolderCheck, ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-primary min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-8">
              Your<br />
              everyday<br />
              tasks,<br />
              <span className="italic font-normal">automated.</span>
            </h1>
          </motion.div>

          {/* Right Content - Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Main Phone */}
            <div className="relative z-10 mx-auto max-w-[280px]">
              <div className="bg-card rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-coca-gray-light rounded-[2rem] p-4 min-h-[400px]">
                  {/* Phone Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-foreground">140</span>
                    <div className="flex items-center gap-1">
                      <div className="w-8 h-8 bg-primary rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stats Card */}
                  <div className="bg-card rounded-2xl p-4 mb-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-muted-foreground">Daily Traffic</span>
                      <span className="text-xs text-green-500">+2.45%</span>
                    </div>
                    <div className="text-2xl font-bold text-foreground">12</div>
                  </div>
                  
                  {/* Chart Placeholder */}
                  <div className="bg-card rounded-2xl p-4 shadow-sm">
                    <div className="h-24 flex items-end gap-1">
                      {[40, 60, 30, 80, 50, 70, 45].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-primary/20 rounded-t"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute top-20 -right-4 bg-card rounded-xl p-3 shadow-lg"
            >
              <p className="text-xs text-muted-foreground mb-1">Task management with the most</p>
              <p className="text-xs text-muted-foreground">convenient flow at this time, making</p>
              <p className="text-xs text-muted-foreground">your work easier and simpler.</p>
              <Button size="sm" className="mt-3 bg-primary text-primary-foreground rounded-full text-xs">
                Book a Demo
              </Button>
            </motion.div>

            {/* Notification Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute bottom-40 left-0 space-y-2"
            >
              <div className="bg-card rounded-xl p-3 shadow-lg flex items-center gap-2">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-xs">📋</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-foreground">Define Timeline Building F...</p>
                  <p className="text-[10px] text-muted-foreground">In Progress</p>
                </div>
              </div>
              <div className="bg-card rounded-xl p-3 shadow-lg flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-orange-400"></div>
                <div>
                  <p className="text-xs font-medium text-foreground">Managing Prototype</p>
                  <p className="text-[10px] text-muted-foreground">Task • Marketing</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          {/* Left Stats Card */}
          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-foreground mb-1">Task management</h3>
            <p className="text-muted-foreground mb-6">made simple</p>
            
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">450+</p>
                  <p className="text-xs text-muted-foreground">Active Users</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <FolderCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">80%</p>
                  <p className="text-xs text-muted-foreground">Projects Done</p>
                </div>
              </div>
            </div>
            
            <Button variant="link" className="mt-4 text-primary p-0 h-auto">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Right Description Card */}
          <div className="flex flex-col justify-between">
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Task like what you see, rarely and is required for your everyday tasks and world events in just a few clicks.
            </p>
            
            {/* Activity Card */}
            <div className="bg-card rounded-2xl p-4 shadow-lg mt-4">
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                  alt="User"
                  className="w-10 h-10 rounded-full object-cover -ml-4 border-2 border-card"
                />
              </div>
              <h4 className="font-semibold text-foreground text-sm">Help they be productive</h4>
              <p className="text-xs text-muted-foreground">with activities</p>
            </div>
          </div>
        </motion.div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-center text-primary-foreground/60 text-sm mb-6">Trusted by 50+ companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Boltshift', 'Lightbox', 'FeatherDev', 'Spherule', 'GlobalBank', 'Nietzsche'].map((company) => (
              <div key={company} className="flex items-center gap-2 text-primary-foreground/70">
                <div className="w-6 h-6 rounded-full border border-primary-foreground/30"></div>
                <span className="text-sm font-medium">{company}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
