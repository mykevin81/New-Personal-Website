import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { App } from './App';

// Mock the child components
vi.mock('./components/Hero', () => ({
  Hero: () => <div data-testid="hero-component">Hero</div>,
}));

vi.mock('./components/About', () => ({
  About: () => <div data-testid="about-component">About</div>,
}));

vi.mock('./components/Experience', () => ({
  Experience: () => <div data-testid="experience-component">Experience</div>,
}));

vi.mock('./components/Footer', () => ({
  Footer: () => <div data-testid="footer-component">Footer</div>,
}));

describe('App Component', () => {
  describe('Rendering', () => {
    it('renders the main application container', () => {
      render(<App />);
      const container = screen.getByRole('main').parentElement;
      expect(container).toBeInTheDocument();
    });

    it('renders all child components in correct order', () => {
      const { container } = render(<App />);
      const components = container.querySelectorAll('[data-testid]');
      expect(components).toHaveLength(4);
      expect(screen.getByTestId('hero-component')).toBeInTheDocument();
      expect(screen.getByTestId('about-component')).toBeInTheDocument();
      expect(screen.getByTestId('experience-component')).toBeInTheDocument();
      expect(screen.getByTestId('footer-component')).toBeInTheDocument();
    });

    it('renders the main element', () => {
      render(<App />);
      const main = screen.getByRole('main');
      expect(main).toBeInTheDocument();
    });

    it('renders the grain overlay div', () => {
      const { container } = render(<App />);
      const grainOverlay = container.querySelector('[style*="background-image"]');
      expect(grainOverlay).toBeInTheDocument();
      expect(grainOverlay).toHaveClass('pointer-events-none');
      expect(grainOverlay).toHaveClass('fixed');
      expect(grainOverlay).toHaveClass('inset-0');
      expect(grainOverlay).toHaveClass('z-50');
    });

    it('renders Footer as a sibling to main, not inside it', () => {
      const { container } = render(<App />);
      const main = container.querySelector('main');
      const footer = screen.getByTestId('footer-component');
      expect(main).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
      // Footer should not be a descendant of main
      expect(main?.contains(footer)).toBe(false);
    });
  });

  describe('Styling and Classes', () => {
    it('applies correct container classes', () => {
      const { container } = render(<App />);
      const root = container.firstChild as HTMLElement;
      expect(root).toHaveClass('min-h-screen');
      expect(root).toHaveClass('bg-paper');
      expect(root).toHaveClass('text-ink');
      expect(root).toHaveClass('font-sans');
      expect(root).toHaveClass('overflow-x-hidden');
    });

    it('applies selection styling classes', () => {
      const { container } = render(<App />);
      const root = container.firstChild as HTMLElement;
      expect(root).toHaveClass('selection:bg-terracotta');
      expect(root).toHaveClass('selection:text-paper');
    });

    it('renders grain overlay with correct opacity', () => {
      const { container } = render(<App />);
      const grainOverlay = container.querySelector('[style*="background-image"]');
      expect(grainOverlay).toHaveClass('opacity-[0.04]');
    });
  });

  describe('Component Structure', () => {
    it('has correct DOM hierarchy', () => {
      const { container } = render(<App />);
      const root = container.firstChild as HTMLElement;

      // Root should be a div
      expect(root.tagName).toBe('DIV');

      // Should have grain overlay as first child
      const grainOverlay = root.querySelector('.pointer-events-none');
      expect(grainOverlay?.parentElement).toBe(root);

      // Should have main element
      const main = root.querySelector('main');
      expect(main).toBeInTheDocument();
    });

    it('renders main with Hero, About, and Experience components', () => {
      const { container } = render(<App />);
      const main = container.querySelector('main');

      expect(main?.querySelector('[data-testid="hero-component"]')).toBeInTheDocument();
      expect(main?.querySelector('[data-testid="about-component"]')).toBeInTheDocument();
      expect(main?.querySelector('[data-testid="experience-component"]')).toBeInTheDocument();
    });

    it('renders Footer outside of main', () => {
      const { container } = render(<App />);
      const main = container.querySelector('main');
      const footer = container.querySelector('[data-testid="footer-component"]');

      expect(main?.contains(footer)).toBe(false);
    });
  });

  describe('Grain Overlay', () => {
    it('includes SVG filter in grain overlay background', () => {
      const { container } = render(<App />);
      const grainOverlay = container.querySelector('[style*="background-image"]');
      const style = grainOverlay?.getAttribute('style');

      expect(style).toBeTruthy();
      if (style) {
        expect(style).toContain('url(');
        expect(style).toContain('svg');
        expect(style).toContain('feTurbulence');
        expect(style).toContain('fractalNoise');
      }
    });

    it('grain overlay has no pointer events', () => {
      const { container } = render(<App />);
      const grainOverlay = container.querySelector('[style*="background-image"]');
      expect(grainOverlay).toHaveClass('pointer-events-none');
    });

    it('grain overlay covers full viewport', () => {
      const { container } = render(<App />);
      const grainOverlay = container.querySelector('[style*="background-image"]');
      expect(grainOverlay).toHaveClass('fixed');
      expect(grainOverlay).toHaveClass('inset-0');
      expect(grainOverlay).toHaveClass('h-full');
      expect(grainOverlay).toHaveClass('w-full');
    });
  });

  describe('Accessibility', () => {
    it('has semantic HTML structure', () => {
      const { container } = render(<App />);
      expect(container.querySelector('main')).toBeInTheDocument();
    });

    it('root div does not interfere with accessibility', () => {
      render(<App />);
      // The app should be renderable and not have accessibility violations
      expect(screen.getByRole('main')).toBeInTheDocument();
    });
  });

  describe('Component Integration', () => {
    it('renders all components exactly once', () => {
      const { container } = render(<App />);
      expect(container.querySelectorAll('[data-testid="hero-component"]')).toHaveLength(1);
      expect(container.querySelectorAll('[data-testid="about-component"]')).toHaveLength(1);
      expect(container.querySelectorAll('[data-testid="experience-component"]')).toHaveLength(1);
      expect(container.querySelectorAll('[data-testid="footer-component"]')).toHaveLength(1);
    });

    it('components are in the correct document order', () => {
      const { container } = render(<App />);
      const allTestIds = Array.from(container.querySelectorAll('[data-testid]')).map(
        (el) => el.getAttribute('data-testid')
      );

      expect(allTestIds).toEqual([
        'hero-component',
        'about-component',
        'experience-component',
        'footer-component',
      ]);
    });
  });
});
