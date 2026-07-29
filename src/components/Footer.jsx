import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a14] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              iflow
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Conectando ideias, transformando negócios com tecnologia inteligente.
            </p>
          </div>
          {[
            {
              title: 'Produto',
              links: ['Funcionalidades', 'Preços', 'Integrações', 'API'],
            },
            {
              title: 'Empresa',
              links: ['Sobre Nós', 'Carreiras', 'Blog', 'Parceiros'],
            },
            {
              title: 'Suporte',
              links: ['Central de Ajuda', 'Documentação', 'Status', 'Contato'],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-purple-400 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-gray-600 text-sm">
            © 2025 iflow. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            {['GitHub', 'Twitter', 'LinkedIn', 'YouTube'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-gray-600 hover:text-purple-400 text-sm transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
