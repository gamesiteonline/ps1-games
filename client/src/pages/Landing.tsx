import { Download, Gamepad2, Zap, Trophy } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Landing() {
  const [, navigate] = useLocation();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block px-6 py-2 border-4 border-blue-600 bg-blue-900/50 rounded-sm text-white text-sm font-bold">
            PLAYSTATION 1 • RETRO GAMING
          </div>
          <h1 className="text-7xl font-bold mb-6 text-white drop-shadow-lg" style={{textShadow: '0 0 20px rgba(0, 102, 204, 0.5)'}}>
            PS1 CLASSICS
          </h1>
          <p className="text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The legendary PlayStation 1 collection. Hundreds of iconic games from the 90s.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => navigate('/games')} className="px-8 py-4 bg-blue-600 text-white font-bold text-lg border-2 border-white hover:bg-blue-500 transition-all">
              <Download className="inline mr-2 w-5 h-5" /> BROWSE GAMES
            </button>
            <button onClick={() => navigate('/guides')} className="px-8 py-4 bg-slate-700 text-white font-bold text-lg border-2 border-blue-600 hover:border-blue-400 transition-all">
              <Zap className="inline mr-2 w-5 h-5" /> LEARN MORE
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="p-6 border-4 border-blue-600 bg-slate-800/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">2K+</div>
              <div className="text-sm text-gray-300">Games</div>
            </div>
            <div className="p-6 border-4 border-blue-600 bg-slate-800/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-sm text-gray-300">Free</div>
            </div>
            <div className="p-6 border-4 border-blue-600 bg-slate-800/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">90s</div>
              <div className="text-sm text-gray-300">Nostalgia</div>
            </div>
          </div>
        </div>
      </section>
      <footer className="border-t border-blue-900 py-8 px-4 text-center text-gray-400 text-sm">
        <p>© 2026 Gamesiteonline • Fahad • Tanzania</p>
      </footer>
    </div>
  );
}
