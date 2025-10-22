import image_c7e822ef514f68ff036ef64874e3c04e9413c51c from 'figma:asset/c7e822ef514f68ff036ef64874e3c04e9413c51c.png';
import image_c7e822ef514f68ff036ef64874e3c04e9413c51c from 'figma:asset/c7e822ef514f68ff036ef64874e3c04e9413c51c.png';
import image_d8caadf9596b0a1ee893a782eaf3dd5f17656233 from 'figma:asset/d8caadf9596b0a1ee893a782eaf3dd5f17656233.png';
import image_4bc1cce42dfc7fc683b47ec90d19e0da9c8590cb from 'figma:asset/4bc1cce42dfc7fc683b47ec90d19e0da9c8590cb.png';
import image_7281ff22f3222029a8bf232c75f3a32dd0c3baac from 'figma:asset/7281ff22f3222029a8bf232c75f3a32dd0c3baac.png';
import image_98a6b03f15da70021a3c30ca67eb0fb7d5b2e5d9 from 'figma:asset/98a6b03f15da70021a3c30ca67eb0fb7d5b2e5d9.png';
import image_c7e822ef514f68ff036ef64874e3c04e9413c51c from 'figma:asset/c7e822ef514f68ff036ef64874e3c04e9413c51c.png';
import image_6fc97c984409db52411ad9837ec79737da96ae27 from 'figma:asset/6fc97c984409db52411ad9837ec79737da96ae27.png';
import { Mail, Linkedin, Github, Sparkles, Palette, Users, Lightbulb, FileText, ArrowRight, MessageCircle, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import image_62cb69ff29cf21c5dc585990e31d58b29fdfcc8a from 'figma:asset/62cb69ff29cf21c5dc585990e31d58b29fdfcc8a.png';
import { MouseGlow } from './components/MouseGlow';
import { ProjectCard } from './components/ProjectCard';
import { AnimatedCounter } from './components/AnimatedCounter';
import { Button } from './components/ui/button';
import { Card } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { motion } from 'motion/react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

// Behance Icon Component
function BehanceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
    </svg>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'experience', 'connect'];
      const scrollPosition = window.scrollY + 100; // offset for navbar height
      
      // Check if we're near the bottom of the page
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
      
      if (isNearBottom) {
        setActiveSection('connect');
        return;
      }

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: 'Jodify - Electronic music app',
      description: 'An app to find local music events',
      category: 'Mobile App',
      imageUrl: image_98a6b03f15da70021a3c30ca67eb0fb7d5b2e5d9,
      tags: ['iOS', 'Android', 'Web', 'Entertainment', 'Figma'],
    },
    {
      title: 'Cine.AR - Streaming service',
      description: 'An Argentinian focused free streaming service',
      category: 'Web Redesign',
      imageUrl: image_4bc1cce42dfc7fc683b47ec90d19e0da9c8590cb,
      tags: ['Web', 'Entertainment', 'Figma'],
    },
    {
      title: 'Vegy - Vegan food',
      description: 'Find local restaurant with vegan options',
      category: 'Mobile App',
      imageUrl: image_d8caadf9596b0a1ee893a782eaf3dd5f17656233,
      tags: ['Mobile', 'Food', 'Research'],
    },
  ];

  const skills = [
    { name: 'User Research', icon: Users, description: 'Interviews, surveys, usability testing' },
    { name: 'UI/UX Design', icon: Palette, description: 'Wireframing, prototyping, visual design' },
    { name: 'Design Thinking', icon: Lightbulb, description: 'Problem solving, ideation, iteration' },
    { name: 'Interaction Design', icon: Sparkles, description: 'Micro-interactions, animations' },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-terracotta-50 via-white to-terracotta-50">
      <MouseGlow />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 border-b border-terracotta-200/50 bg-terracotta-50/70 backdrop-blur-md rounded-[0px]">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4 sm:py-6"
        >
          <a href="#" className="flex items-center">
            <img
              src={image_c7e822ef514f68ff036ef64874e3c04e9413c51c}
              alt="KC Logo"
              className="h-8 w-8 object-contain p-[0px]"
            />
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            <a href="#" className={`transition-colors hover:text-terracotta-600 hover:font-bold ${activeSection === 'home' ? 'text-terracotta-600 font-bold' : 'text-gray-600'}`}>Home</a>
            <a href="#work" className={`transition-colors hover:text-terracotta-600 hover:font-bold ${activeSection === 'work' ? 'text-terracotta-600 font-bold' : 'text-gray-600'}`}>Work</a>
            <a href="#experience" className={`transition-colors hover:text-terracotta-600 hover:font-bold ${activeSection === 'experience' ? 'text-terracotta-600 font-bold' : 'text-gray-600'}`}>About</a>
            <a href="#connect" className={`transition-colors hover:text-terracotta-600 hover:font-bold ${activeSection === 'connect' ? 'text-terracotta-600 font-bold' : 'text-gray-600'}`}>Contact</a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button variant="outline" className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </motion.a>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-terracotta-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </motion.div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-terracotta-200/50"
          >
            <div className="flex flex-col space-y-4 px-4 sm:px-6 py-4 bg-terracotta-50/90 backdrop-blur-md">
              <a 
                href="#" 
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors hover:text-terracotta-600 ${activeSection === 'home' ? 'text-terracotta-600 font-bold' : 'text-gray-600'}`}
              >
                Home
              </a>
              <a 
                href="#work" 
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors hover:text-terracotta-600 ${activeSection === 'work' ? 'text-terracotta-600 font-bold' : 'text-gray-600'}`}
              >
                Work
              </a>
              <a 
                href="#experience" 
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors hover:text-terracotta-600 ${activeSection === 'experience' ? 'text-terracotta-600 font-bold' : 'text-gray-600'}`}
              >
                About
              </a>
              <a 
                href="#connect" 
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors hover:text-terracotta-600 ${activeSection === 'connect' ? 'text-terracotta-600 font-bold' : 'text-gray-600'}`}
              >
                Contact
              </a>
              <Button variant="outline" className="border-terracotta-600 text-terracotta-600 hover:bg-terracotta-50 w-full">
                <FileText className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-terracotta-100/30 px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="mx-auto max-w-7xl px-[0px] py-[26px]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-xl text-center md:text-left"
            >
              <h1 className="mb-4 bg-gradient-to-r from-terracotta-600 to-terracotta-400 bg-clip-text text-transparent font-[Red_Hat_Display] text-[48px] sm:text-[64px] lg:text-[96px] font-bold leading-[1.1]">
                Hi, I'm Kiara!
              </h1>
              <p className="mb-6 text-gray-600 font-normal not-italic no-underline leading-relaxed">
                I'm a designer with expertise in UX/UI and visual 
                identity development. My focus is on user 
                research, prototyping, and the creation of design  
                systems, emphasizing innovative and functional  
                solutions that enhance the user experience
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-600 transition-colors hover:text-terracotta-600"
                >
                  <Linkedin className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="https://behance.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-600 transition-colors hover:text-terracotta-600"
                >
                  <BehanceIcon className="h-6 w-6" />
                </motion.a>
                <motion.a
                  href="mailto:kiara@example.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-600 transition-colors hover:text-terracotta-600"
                >
                  <Mail className="h-6 w-6" />
                </motion.a>
              </div>
            </motion.div>

            {/* Circular Profile Picture */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px] overflow-hidden rounded-full border-4 border-terracotta-200 shadow-2xl">
                <motion.img
                  src={image_62cb69ff29cf21c5dc585990e31d58b29fdfcc8a}
                  alt="Kiara Correa"
                  className="h-full w-full object-cover"
                  whileHover={{ 
                    rotate: [0, -2, 2, -2, 2, 0],
                    transition: { duration: 0.5 }
                  }}
                />
              </div>
              {/* Decorative gradient ring */}
              <div className="absolute -inset-2 -z-10 rounded-full bg-gradient-to-r from-terracotta-400 to-terracotta-600 opacity-20 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-terracotta-600 text-[36px] font-bold text-center">My work</h2>
            <p className="mb-12 text-gray-600 text-center">
              A selection of projects showcasing my design process and problem-solving approach
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-12 text-terracotta-600 text-center text-[32px] font-bold">About Me</h2>
            
            {/* Skills Grid */}
            <div className="mb-16">
              <h3 className="mb-8 text-terracotta-600 text-center text-[24px] font-bold font-normal">Skills & Expertise</h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="group p-6 text-center transition-all hover:shadow-lg hover:border-terracotta-300">
                      <skill.icon className="mx-auto mb-4 h-12 w-12 text-terracotta-600 transition-transform group-hover:scale-110" />
                      <h3 className="mb-2">{skill.name}</h3>
                      <p className="text-gray-600 text-sm">{skill.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="mb-16 max-w-3xl mx-auto">
              <h3 className="mb-8 text-terracotta-600 text-center text-[24px] font-bold font-normal">Education</h3>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-8 before:absolute before:left-[7px] before:top-[28px] before:h-[calc(100%+24px)] before:w-[2px] before:bg-terracotta-200"
                >
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-terracotta-600 bg-white"></div>
                  <div className="mb-2 text-terracotta-600">2020 - 2024</div>
                  <h3 className="mb-1">Bachelor in Graphic Design</h3>
                  <p className="mb-2 text-gray-600">University Name</p>
                  <p className="text-gray-700 leading-relaxed">
                    Specialized in UX/UI design and digital media. Completed coursework in user research, 
                    interaction design, and visual communication.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-8"
                >
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-terracotta-600 bg-white"></div>
                  <div className="mb-2 text-terracotta-600">2023</div>
                  <h3 className="mb-1">UX Design Certification</h3>
                  <p className="mb-2 text-gray-600">Online Platform</p>
                  <p className="text-gray-700 leading-relaxed">
                    Advanced certification in UX design methodologies, including user research, 
                    prototyping, and usability testing.
                  </p>
                </motion.div>
              </div>
            </div>
            
            {/* Work Experience */}
            <div className="mb-16 space-y-8 max-w-3xl mx-auto">
              <h3 className="mb-8 text-terracotta-600 text-center text-[24px] font-bold font-normal">Experience</h3>
              {/* Timeline Item 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative pl-8 before:absolute before:left-[7px] before:top-[28px] before:h-[calc(100%+32px)] before:w-[2px] before:bg-terracotta-200"
              >
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-terracotta-600 bg-white"></div>
                <div className="mb-2 text-terracotta-600">Feb 2024 - Present</div>
                <h3 className="mb-1">UX/UI Designer</h3>
                <p className="mb-4 text-gray-600">Jodify</p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Built and maintained a Design System ensuring brand-wide consistency. 
                  Designed and tested high-fidelity prototypes, iterating quickly with user 
                  feedback to cut costs and development time. Led qualitative and quantitative 
                  research to understand user needs and guide user-centric solutions.
                </p>
                <div className="mb-2 text-gray-600 text-sm">Herramientas principales:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">Figma</Badge>
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">Design Systems</Badge>
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">Prototyping</Badge>
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">User Research</Badge>
                </div>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 before:absolute before:left-[7px] before:top-[28px] before:h-[calc(100%+32px)] before:w-[2px] before:bg-terracotta-200"
              >
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-terracotta-600 bg-white"></div>
                <div className="mb-2 text-terracotta-600">2023 - 2024</div>
                <h3 className="mb-1">Multimedia + UX/UI</h3>
                <p className="mb-4 text-gray-600">Mahalo</p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Responsible for designing a complete e-commerce website, from the navigation 
                  structure to the creation of visual interfaces.
                </p>
                <div className="mb-2 text-gray-600 text-sm">Herramientas principales:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">Figma</Badge>
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">Adobe XD</Badge>
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">Illustrator</Badge>
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">Photoshop</Badge>
                </div>
              </motion.div>

              {/* Timeline Item 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-4 border-terracotta-600 bg-white"></div>
                <div className="mb-2 text-terracotta-600">2022 - 2023</div>
                <h3 className="mb-1">Graphic Designer</h3>
                <p className="mb-4 text-gray-600">Freelance</p>
                <p className="mb-4 text-gray-700 leading-relaxed">
                  Designed visual identities for local brands, including logos, color palettes, 
                  and typography. Collaborated with clients and teams to translate requirements 
                  into impactful designs.
                </p>
                <div className="mb-2 text-gray-600 text-sm">Herramientas principales:</div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">Illustrator</Badge>
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">Photoshop</Badge>
                  <Badge variant="outline" className="border-terracotta-200 bg-terracotta-50 text-terracotta-700">Indesign</Badge>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    

      {/* Contact Section */}
      <section id="connect" className="px-4 sm:px-6 py-12 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-terracotta-600 text-[28px] sm:text-[32px] font-bold not-italic">Let's Connect</h2>
            <p className="mb-8 sm:mb-12 text-gray-600 max-w-2xl mx-auto px-4">
              Did you like the portfolio or want to share feedback? I'm open to connecting with other professionals in design, technology, and innovation.
            </p>
            
            <div className="mb-8 rounded-2xl border border-terracotta-200 bg-white/50 backdrop-blur-sm p-6 sm:p-12 transition-all duration-300 hover:shadow-[0_0_30px_rgba(164,93,59,0.3)] hover:border-terracotta-300">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Button size="lg" className="bg-terracotta-600 hover:bg-terracotta-700 mb-6 sm:mb-8 w-full sm:w-auto">
                  <Mail className="mr-2 h-5 w-5" />
                  Send me a message!
                </Button>
              </motion.div>
              
              {/* Separator Line */}
              <div className="mb-6 sm:mb-8 border-t border-terracotta-200"></div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center gap-2 rounded-lg bg-terracotta-50 px-4 py-2 text-terracotta-600 transition-colors hover:bg-terracotta-100"
                >
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center gap-2 rounded-lg bg-terracotta-50 px-4 py-2 text-terracotta-600 transition-colors hover:bg-terracotta-100"
                >
                  <BehanceIcon className="h-5 w-5" />
                  <span>Behance</span>
                </motion.a>
                
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-center justify-center gap-2 rounded-lg bg-terracotta-50 px-4 py-2 text-terracotta-600 transition-colors hover:bg-terracotta-100"
                >
                  <FileText className="h-5 w-5" />
                  <span>Resume</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white px-6 py-8">
        <div className="mx-auto max-w-7xl text-gray-600 text-center">
          <p>© 2025 Kiara Correa.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-terracotta-600 text-white shadow-lg transition-all hover:bg-terracotta-700 hover:shadow-xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </div>
  );
}