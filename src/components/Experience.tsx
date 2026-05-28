import React from 'react';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/FadeIn';
const ROLES = [
{
  company: 'JP Morgan Chase',
  location: 'Seattle, WA',
  title: 'Senior Software Engineer · Platform Engineering',
  period: 'May 2023 — Present',
  description:
  'Engineered automated Kubernetes metrics-scraping pipelines that delivered end-to-end observability across multi-cluster environments while eliminating manual ops toil for platform SRE teams, designed high-throughput rate-limiting for the Kubernetes API gateway to enforce traffic-shaping policies at scale and improve SLA compliance, and architected an Identity & Access Management system with automated entitlement-request workflows that removed a single point of failure and reduced provisioning lead time.'
},
{
  company: 'BEGiN',
  location: 'New York, NY',
  title: 'Senior Software Engineer',
  period: 'Nov 2021 — Mar 2023',
  description:
  'Architected scalable Spring Boot data pipelines capable of processing millions of bulk transactional events through asynchronous message queues, modernised Jenkins + Kubernetes CI/CD pipelines with secret scanning, image signing, and staged rollout gates to cut deployment cycle time, and provided backend and infrastructure technical leadership by defining service design standards, on-call runbooks, and incident-response practices that reduced MTTR and eliminated recurring production incidents through circuit-breakers and retry policies.'
},
{
  company: 'Little Passports',
  location: 'San Francisco, CA',
  title: 'Senior Software Engineer',
  period: 'May 2017 — Nov 2021',
  description:
  'Designed and built a suite of Spring Boot microservices powering the full ecommerce order lifecycle — cart, checkout, fulfillment, and notification — with domain-driven service boundaries, led a large-scale platform modernization that executed a zero-downtime migration from a monolithic schema to microservice-owned databases, automated containerized deployments via Jenkins, Docker, and Kubernetes for repeatable environment-parity releases, and implemented service-level observability through structured logging, distributed traces, and health-check endpoints to enable faster triage and proactive alerting.'
},
{
  company: 'VMDOC',
  location: 'San Jose, CA',
  title: 'Full Stack Developer',
  period: 'May 2016 — May 2017',
  description:
  'Built HIPAA-compliant backend services in PHP and MySQL with strict access controls, audit logging, and encryption at rest and in transit to meet healthcare compliance standards, and designed secure REST APIs for partner integrations and mobile clients with OAuth-based authentication and role-based authorization.'
}];

export function Experience() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-stone">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
        <div className="md:col-span-4 lg:col-span-3">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif mb-2">Experience</h2>
            <span className="font-mono text-sm text-ink-light">03</span>
          </FadeIn>
        </div>

        <div className="md:col-span-8 lg:col-span-7 lg:col-start-5">
          <StaggerContainer className="space-y-12">
            {ROLES.map((role, index) =>
            <StaggerItem key={index}>
                <div className="group relative pl-8 md:pl-0">
                  {/* Timeline line for mobile */}
                  <div className="absolute left-0 top-2 bottom-[-3rem] w-px bg-stone md:hidden last:bottom-0"></div>
                  {/* Timeline dot for mobile */}
                  <div className="absolute left-[-4px] top-2.5 h-2 w-2 rounded-full bg-terracotta md:hidden"></div>

                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2 gap-2 md:gap-8">
                    <h3 className="text-xl font-serif font-medium group-hover:text-terracotta transition-colors">
                      {role.company}
                    </h3>
                    <span className="font-mono text-sm text-ink-light shrink-0">
                      {role.period}
                    </span>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-widest text-ink-light mb-4">
                    {role.title}{' '}
                    <span className="text-ink-light/60">· {role.location}</span>
                  </p>
                  <p className="text-ink-light leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </StaggerItem>
            )}
          </StaggerContainer>
        </div>
      </div>
    </section>);

}