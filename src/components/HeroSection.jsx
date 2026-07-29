import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#1a1040] to-[#0f0f1a]">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500/5 blur-[80px]" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-[10%] w-4 h-4 rounded-full bg-purple-400/40 animate-float" />
      <div className="absolute bottom-40 right-[15%] w-6 h-6 rounded-full bg-blue-400/30 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-[20%] w-3 h-3 rounded-full bg-purple-300/20 animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
            🔥 Plataforma Inteligente
          </span>
        </div>

        <h1 className="animate-fade-in-up text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6" style={{ animationDelay: '0.2s' }}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-blue-400">
            iflow
          </span>
          <br />
          <span className="text-white">
            Conectando Ideias,
          </span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Transformando Negócios
          </span>
        </h1>

        <p className="animate-fade-in-up text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed" style={{ animationDelay: '0.4s' }}>
          A plataforma de automação inteligente que integra seus processos, 
          conecta sua equipe e acelera o crescimento do seu negócio com tecnologia de ponta.
        </p>

        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.6s' }}>
          <a
            href="#contato"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-105 transition-all duration-300"
          >
            Começar Agora
          </a>
          <a
            href="#funcionalidades"
            className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Explorar Soluções
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto" style={{ animationDelay: '0.8s' }}>
          {[
            { number: '98%', label: 'Satisfação' },
            { number: '15K+', label: 'Usuários Ativos' },
            { number: '500+', label: 'Integrações' },
            { number: '4.9', label: 'Avaliação' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
