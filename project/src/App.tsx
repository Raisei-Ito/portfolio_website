import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { Skills } from './components/sections/Skills';
import { Portfolio } from './components/sections/Portfolio';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2024 伊藤来晟 Portfolio. Built with React + TypeScript + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;