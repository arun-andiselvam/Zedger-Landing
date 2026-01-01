import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    id: "anti-loss",
    title: "Anti-Loss Technology",
    content: "Leave your lost worrying out of the shifting and typesetting industry. Lorem ipsum has been the industry's standard dummy text and used for typesetting, remains essentially unchanged."
  },
  {
    id: "exchange",
    title: "Exchange Easily",
    content: "Seamlessly exchange data and information across all your devices and platforms with our secure synchronization technology."
  },
  {
    id: "encrypted",
    title: "Fully Encrypted",
    content: "Your data is protected with military-grade encryption, ensuring complete privacy and security for all your sensitive information."
  },
  {
    id: "options",
    title: "Plenty of Options",
    content: "Choose from a wide variety of customization options to tailor the experience exactly to your needs and preferences."
  }
];

const AccordionSection = () => {
  return (
    <section className="py-20 bg-coca-gray-light">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              We will take care of your<br />everything
            </h2>
            
            <Accordion type="single" collapsible defaultValue="anti-loss" className="space-y-2">
              {accordionItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-b border-border"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Phone Image */}
            <div className="relative mx-auto max-w-[300px]">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop"
                alt="Person using phone"
                className="rounded-3xl shadow-2xl"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-1/4 -right-8 bg-card rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-xs">📊</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Managing Prototype Tasks</p>
                    <p className="text-[10px] text-muted-foreground">In Progress</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute top-1/2 -right-4 bg-card rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Get Solution with Corvide</p>
                    <p className="text-[10px] text-muted-foreground">Task • Events</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute bottom-1/4 -right-8 bg-card rounded-xl p-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <span className="text-xs">📱</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-foreground">Awesome & Sumarring App</p>
                    <p className="text-[10px] text-muted-foreground">Running Update</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AccordionSection;
