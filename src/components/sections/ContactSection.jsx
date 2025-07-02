import React from 'react';
import { Mail, Github, Linkedin, Terminal } from 'lucide-react';
import { ContactForm } from '../ui/ContactForm';

export const ContactSection = () => {
  const contactLinks = [
    {
      icon: Mail,
      text: 'anirudhtemmanaboyina@gmail.com',
      color: 'text-green-400 border-green-400 hover:bg-green-400/10',
      href: 'mailto:anirudhtemmanaboyina@gmail.com'
    },
    {
      icon: Github,
      text: 'github.com/Ani-tem',
      color: 'text-green-400 border-green-400 hover:bg-green-400/10',
      href: 'https://github.com/Ani-tem'
    },
    {
      icon: Linkedin,
      text: 'linkedin.com/in/anirudh-temmanaboyina',
      color: 'text-green-400 border-green-400 hover:bg-green-400/10',
      href: 'https://linkedin.com/in/anirudh-temmanaboyina'
    },
    {
      icon: Terminal,
      text: 'Phone: +91 9652939453',
      color: 'text-cyan-400 border-cyan-400 hover:bg-cyan-400/10',
      href: 'tel:+919652939453'
    }
  ];

  return (
    <section className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-mono font-bold text-green-400 mb-4">CONTACT.SYS</h2>
        <p className="text-gray-300 font-mono">ESTABLISH_CONNECTION</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-mono text-cyan-400">GET_IN_TOUCH</h3>
          <p className="text-gray-300">
            Ready to collaborate on exciting projects or discuss opportunities? 
            Let's connect and build something amazing together.
          </p>
          
          <div className="space-y-4">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`flex items-center space-x-3 p-3 border transition-colors cursor-pointer ${link.color}`}
              >
                <link.icon className="w-5 h-5" />
                <span className="font-mono">{link.text}</span>
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};