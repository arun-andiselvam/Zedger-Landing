'use client';

import { motion } from "framer-motion";

const DownloadSection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-foreground/70 text-sm mb-2">Want your fast, easy, & secure?</p>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-8">
              Download the epay<br />App today!
            </h2>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-block">
                <div className="bg-foreground text-background rounded-lg px-5 py-2 flex items-center gap-3 hover:opacity-90 transition-opacity">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.5,1.25a.5.5,0,0,1,.5.5V3h1.25a.5.5,0,0,1,.5.5V4a.5.5,0,0,1-.5.5H18V5.75a.5.5,0,0,1-.5.5H17a.5.5,0,0,1-.5-.5V4.5H15.25A.5.5,0,0,1,14.75,4V3.5a.5.5,0,0,1,.5-.5H16.5V1.75a.5.5,0,0,1,.5-.5ZM12,2C6.477,2,2,6.477,2,12s4.477,10,10,10,10-4.477,10-10c0-1.564-.36-3.042-1-4.357V7.5A.5.5,0,0,0,20.5,7H18.15c-.126-.175-.26-.344-.4-.508V4.5a.5.5,0,0,0-.5-.5H15.857A9.959,9.959,0,0,0,12,2Zm0,2a8,8,0,1,1-8,8A8.009,8.009,0,0,1,12,4ZM7.5,8.5,12,17l4.5-8.5Z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] opacity-80">GET IT ON</p>
                    <p className="font-semibold text-sm -mt-0.5">Google Play</p>
                  </div>
                </div>
              </a>
              <a href="#" className="inline-block">
                <div className="bg-foreground text-background rounded-lg px-5 py-2 flex items-center gap-3 hover:opacity-90 transition-opacity">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                  </svg>
                  <div>
                    <p className="text-[10px] opacity-80">Download on the</p>
                    <p className="font-semibold text-sm -mt-0.5">App Store</p>
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="bg-card rounded-[2.5rem] p-3 shadow-2xl max-w-[280px]">
                <div className="bg-coca-gray-light rounded-[2rem] p-4 min-h-[400px]">
                  {/* Phone Content */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-bold text-foreground">My Task</span>
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-primary-foreground text-xs">G</span>
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="bg-card rounded-2xl p-4 mb-4 shadow-sm">
                    <div className="grid grid-cols-7 gap-2 text-center text-xs">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <span key={i} className="text-muted-foreground">{day}</span>
                      ))}
                      {[1, 2, 3, 4, 5, 6, 7].map((date) => (
                        <span
                          key={date}
                          className={`py-1 ${date === 5 ? 'bg-primary text-primary-foreground rounded-full' : 'text-foreground'}`}
                        >
                          {date}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Task List */}
                  <div className="space-y-3">
                    <div className="bg-card rounded-xl p-3 shadow-sm">
                      <p className="text-xs font-medium text-foreground">Complete UI for Booking App</p>
                      <p className="text-[10px] text-muted-foreground mt-1">Today • 2:00 PM</p>
                    </div>
                    <div className="bg-card rounded-xl p-3 shadow-sm">
                      <p className="text-xs font-medium text-foreground">Client Meeting</p>
                      <p className="text-[10px] text-muted-foreground mt-1">Tomorrow • 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
