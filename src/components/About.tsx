import React from 'react';
import { FadeIn } from './ui/FadeIn';
export function About() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-stone bg-paper-dark/30">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4 lg:col-span-3">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-2">About</h2>
            <span className="font-mono text-sm text-ink-light">02</span>
          </FadeIn>
        </div>

        <div className="md:col-span-8 lg:col-span-7 lg:col-start-5">
          <FadeIn delay={0.2}>
            <div className="prose prose-lg prose-p:text-ink-light prose-p:leading-relaxed prose-p:mb-6 max-w-none">
              <p className="text-xl md:text-2xl font-serif text-ink mb-8 leading-snug">
                I excel at carrying a project all the way through — from the
                first design conversations to shipping the product and keeping
                it healthy in production.
              </p>
              <p>
                I started my career as a full-stack developer writing PHP, but
                over the years I've grown into a backend and DevOps specialist.
                Today my work centers on the systems beneath the surface:
                resilient services, deployment pipelines, and the infrastructure
                that quietly makes everything else possible.
              </p>
              <p>
                I care deeply about performance, stability, and customer reach.
                Software earns its trust through the boring stuff — fast
                response times, predictable behavior under load, and being
                available wherever people need it. That's the work I find most
                rewarding.
              </p>
              <p>
                In my free time, I tinker with home automations — small
                deployments that quietly improve the quality of daily life.
                There's something satisfying about applying the same engineering
                rigor to lights, sensors, and routines that I bring to
                production systems at work.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>);

}