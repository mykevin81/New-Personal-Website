import React from 'react';
import { FadeIn } from './ui/FadeIn';
export function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-20 pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
        <FadeIn>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] text-balance">
            Kevin Hwang
          </h1>
        </FadeIn>

        <FadeIn
          delay={0.2}
          direction="none"
          className="flex items-center gap-3 pb-2">
          
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-40"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-terracotta"></span>
          </div>
          <span className="font-mono text-sm uppercase tracking-wider text-ink-light">
            Available for new roles
          </span>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-stone pt-8">
        <div className="md:col-span-4 lg:col-span-3">
          <FadeIn delay={0.3}>
            <p className="font-mono text-xs uppercase tracking-widest text-ink-light mb-2">
              Position
            </p>
            <p className="text-sm font-medium">
              Senior / Staff
              <br />
              Software Engineer
            </p>
          </FadeIn>
        </div>

        <div className="md:col-span-8 lg:col-span-7 lg:col-start-5">
          <FadeIn delay={0.4}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-serif leading-snug text-pretty text-ink-light">
              <span className="text-ink">
                Building resilient backends and the pipelines that ship them.
              </span>{' '}
              I focus on backend architecture and DevOps deployment
              infrastructure that keeps systems fast, stable, and dependable at
              scale.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>);

}