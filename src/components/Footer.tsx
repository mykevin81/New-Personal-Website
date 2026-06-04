import { FadeIn } from './ui/FadeIn';
import { ArrowUpRight } from 'lucide-react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks: { label: string; href: string; download?: string }[] = [
    { label: 'GitHub', href: 'https://github.com/mykevin81' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kevinhwangin/' },
    { label: 'Twitter / X', href: 'https://x.com/mykevin81' },
    { label: 'Resume', href: '/downloads/resume.pdf', download: 'Kevin_Hwang_Resume.pdf' },
  ];

  return (
    <footer className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-stone bg-paper-dark text-ink mt-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-6 lg:col-span-5">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 leading-tight">
              Let's build something{' '}
              <span className="text-terracotta italic">impactful</span>{' '}
              together.
            </h2>
            <a
              href="mailto:mykevin81@gmail.com"
              className="inline-flex items-center gap-2 text-lg border-b border-ink/30 pb-1 hover:border-terracotta hover:text-terracotta transition-colors group">
              
              mykevin81@gmail.com
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        <div className="md:col-span-6 lg:col-span-4 lg:col-start-9 flex flex-col justify-between">
          <FadeIn delay={0.2} className="flex flex-col gap-4 mb-12 md:mb-0">
            <p className="font-mono text-xs uppercase tracking-widest text-ink-light mb-2">
              Elsewhere
            </p>
            {socialLinks.map((link) =>
            <a
              key={link.label}
              href={link.href}
              {...(link.download ? { download: link.download } : { target: '_blank', rel: 'noopener noreferrer' })}
              className="text-ink/80 hover:text-terracotta transition-colors w-fit flex items-center gap-2 group">
              
                {link.label}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all" />
              </a>
            )}
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 text-ink-light/70 font-mono text-xs">
              <p>© {currentYear} Kevin Hwang.</p>
              <p>Typeset in Fraunces & Inter.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </footer>);

}