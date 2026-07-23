'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, GraduationCap, BookOpen, ArrowDown, Sparkles, Compass, Star, TrendingUp, Users } from 'lucide-react';
import { classes } from '@/lib/constants';

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{ x: number; y: number; size: number; speedX: number; speedY: number; opacity: number }> = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx!.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden">
      {/* Rich gradient background - deep indigo/purple with warm coral accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950" />
      
      {/* Abstract gradient orbs */}
      <div className="absolute top-[-10%] left-[20%] w-[60%] h-[60%] bg-gradient-to-br from-blue-600/20 via-indigo-600/15 to-transparent rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/10 to-transparent rounded-full blur-[100px]" />
      <div className="absolute top-[30%] right-[5%] w-[30%] h-[30%] bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-[80px]" />

      {/* Floating particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#fafafa] dark:from-[#0f0f11] to-transparent" />

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-8 border border-white/10">
              <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
              <span>Latest NCERT 2026&ndash;27 Syllabus</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Master NCERT with
              <br />
              <span className="bg-gradient-to-r from-indigo-200 via-blue-200 to-indigo-100 bg-clip-text text-transparent">
                Free Step-by-Step Solutions
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
              Comprehensive NCERT solutions for Classes 6&ndash;12. Expert-verified, 
              easy to understand, and <span className="text-indigo-300 font-semibold">completely free</span> for every student.
            </p>

            {/* Search form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-12">
              <div className="relative flex items-center bg-white/95 backdrop-blur-sm rounded-full shadow-2xl ring-1 ring-white/20 overflow-hidden transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500/50">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a class, subject, or chapter..."
                  className="w-full pl-14 pr-36 py-4 text-base bg-transparent outline-none text-gray-900 placeholder-gray-400"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1/2 -translate-y-1/2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </span>
                </button>
              </div>
            </form>

            {/* Class chips */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <span className="text-white/40 text-sm font-medium flex items-center gap-1.5">
                <Compass className="h-4 w-4" />
                Browse by Class:
              </span>
              {classes.map((cls) => (
                <a
                  key={cls.slug}
                  href={`/${cls.slug}`}
                  className="group relative px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white/80 hover:text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20"
                >
                  {cls.name}
                </a>
              ))}
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <BookOpen className="h-3.5 w-3.5 text-indigo-300" />
                <span>1500+ Solutions</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Users className="h-3.5 w-3.5 text-indigo-300" />
                <span>100K+ Students</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Star className="h-3.5 w-3.5 text-indigo-300" />
                <span>Expert Verified</span>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <TrendingUp className="h-3.5 w-3.5 text-indigo-300" />
                <span>100% Free</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-4 w-4 text-white/20" />
      </div>
    </section>
  );
}
