import React from 'react';

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-24 bg-gradient-to-b from-[#0a0a14] to-[#0f0f1a]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/5 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <div>
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
              Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Vamos transformar seu negócio?
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Preencha o formulário e nossa equipe entrará em contato em até 24 horas 
              para apresentar uma solução personalizada para sua empresa.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📧', text: 'contato@iflow.com.br' },
                { icon: '📞', text: '(11) 99999-8888' },
                { icon: '📍', text: ' São Paulo, SP - Brasil' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 text-gray-300">
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Nome completo</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Empresa</label>
                <input
                  type="text"
                  placeholder="Nome da empresa"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  placeholder="Conte-nos sobre seu projeto..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] transition-all duration-300"
              >
                🚀 Teste Grátis por 14 Dias
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
