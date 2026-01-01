import { motion } from "framer-motion";
import { Play, Clock } from "lucide-react";

const testimonials = [
  {
    quote: "Coca-it always gives us my breathing room. More time to work with Pob M2.",
    author: "Jenny Wilson",
    role: "VP OF NUXEL",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
  },
  {
    quote: "Coca was the easiest to learn software, really helps to get the full journey of everything out of our back end.",
    author: "Saranavh Nguyen",
    role: "VP OF NUXEL",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
  },
  {
    quote: "Coca is now an easy to use experience with a great ux.",
    author: "Beth Diggs",
    role: "VP OF NUXEL",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Large Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[12rem] md:text-[20rem] font-bold text-muted/20 whitespace-nowrap">
          Testimonials
        </span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Video/Play Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <button className="w-14 h-14 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors">
            <Play className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
          </button>
          <button className="w-14 h-14 border border-border rounded-full flex items-center justify-center hover:bg-muted transition-colors">
            <Clock className="w-6 h-6 text-muted-foreground" />
          </button>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
