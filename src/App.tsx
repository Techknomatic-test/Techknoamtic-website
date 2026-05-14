import { motion, useScroll, useSpring } from 'motion/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { ScrollToTop } from './components/routing/ScrollToTop';
import { useLenis } from './hooks/useLenis';
import { useTheme } from './hooks/useTheme';
import { AppRoutes } from './routes/AppRoutes';

type AppWrapperProps = {
  theme: string;
  toggleTheme: () => void;
};

const AppWrapper = ({ theme, toggleTheme }: AppWrapperProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-brand-950 text-white' : 'bg-white text-brand-950'} transition-colors duration-500 overflow-x-hidden selection:bg-accent/10`}>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-[60] origin-left"
        style={{ scaleX }}
      />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useLenis();

  return (
    <Router>
      <ScrollToTop />
      <AppWrapper theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}
