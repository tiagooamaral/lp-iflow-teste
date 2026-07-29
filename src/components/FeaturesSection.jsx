import React from 'react';

const features = [
  {
    icon: '⚡',
    title: 'Automação Inteligente',
    description: 'Automatize tarefas repetitivas com fluxos inteligentes que aprendem e se adaptam ao seu negócio.',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    icon: '🔗',
    title: 'Integração Fácil',
    description: 'Conecte-se com mais de 500 ferramentas e plataformas sem precisar escrever uma linha de código.',
    gradient: 'from-blue-500 to-cyan-600',
  },
  {
    icon: '📊',
    title: 'Analytics em Tempo Real',
    description: 'Dashboards intuitivos com métricas em tempo real para decisões baseadas em dados concretos.',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    icon: '🔒',
    title: 'Segurança Total',
    description: 'Proteção de dados com criptografia de ponta a ponta e conformidade com as principais certificações.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: '🤝',
    title: 'Suporte 24/7',
    description: 'Equipe dedicada disponível 24 horas por dia, 7 dias por semana, para garantir seu sucesso.',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    icon: '🚀',
    title: 'Escalabilidade',
    description: 'Cresça sem limites com uma infraestrutura que escala automaticamente conforme sua demanda.',
    gradient: 'from-indigo-500 to-purple-600',
  },
];

export default function FeaturesSection() {
  return (
    <section id="funcionalidades" className="relative py-24 bg-[#0a0a14]">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-purple-600/3 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full">
            Funcionalidades
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tudo que você precisa
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Uma plataforma completa com ferramentas poderosas para transformar a maneira como sua empresa opera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className={`relative z-10 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-5 text-2xl`}>
                {feature.icon}
              </div>
              
              <h3 className="relative z-10 text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              
              <p className="relative z-10 text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
