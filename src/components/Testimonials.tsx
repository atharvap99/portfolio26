import { useEffect, useRef } from 'react';
import SectionHeading from './SectionHeading';
import { testimonials } from '../data/testimonials';

function TestimonialCards({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="testimonial-group" aria-hidden={duplicate || undefined}>
      {testimonials.map((testimonial, index) => (
        <figure className="testimonial-card" key={testimonial.name}>
          <div className="testimonial-card-top"><span>0{index + 1}</span><span aria-hidden="true">“</span></div>
          <blockquote>{testimonial.quote}</blockquote>
          <figcaption>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role} · {testimonial.organization}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function Testimonials() {
  const railRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    const firstGroup = track?.firstElementChild as HTMLElement | null;

    if (!rail || !track || !firstGroup) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let groupWidth = firstGroup.getBoundingClientRect().width;
    let offset = 0;
    let speed = 28;
    let pointerInside = false;
    let focused = false;
    let lastFrame = 0;
    let frameId = 0;

    const tick = (time: number) => {
      const delta = lastFrame ? Math.min((time - lastFrame) / 1000, 0.05) : 0;
      lastFrame = time;

      const targetSpeed = focused ? 0 : pointerInside ? 12 : 28;
      const easing = 1 - Math.exp(-delta / 0.55);
      speed += (targetSpeed - speed) * easing;
      if (groupWidth > 0) offset = (offset + speed * delta) % groupWidth;
      track.style.transform = `translate3d(${-offset}px, 0, 0)`;

      frameId = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (!reducedMotion.matches && !frameId) frameId = window.requestAnimationFrame(tick);
    };

    const stop = () => {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
      lastFrame = 0;
      track.style.removeProperty('transform');
    };

    const updateWidth = () => {
      const nextWidth = firstGroup.getBoundingClientRect().width;
      if (!nextWidth || !groupWidth) return;
      offset = (offset / groupWidth) * nextWidth;
      groupWidth = nextWidth;
      offset %= groupWidth;
    };

    const handleMotionPreference = () => reducedMotion.matches ? stop() : start();
    const handlePointerEnter = () => { pointerInside = true; };
    const handlePointerLeave = () => { pointerInside = false; };
    const handleFocusIn = () => { focused = true; };
    const handleFocusOut = (event: FocusEvent) => {
      focused = rail.contains(event.relatedTarget as Node | null);
    };

    rail.addEventListener('pointerenter', handlePointerEnter);
    rail.addEventListener('pointerleave', handlePointerLeave);
    rail.addEventListener('focusin', handleFocusIn);
    rail.addEventListener('focusout', handleFocusOut);
    reducedMotion.addEventListener('change', handleMotionPreference);

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(firstGroup);
    handleMotionPreference();

    return () => {
      stop();
      resizeObserver.disconnect();
      rail.removeEventListener('pointerenter', handlePointerEnter);
      rail.removeEventListener('pointerleave', handlePointerLeave);
      rail.removeEventListener('focusin', handleFocusIn);
      rail.removeEventListener('focusout', handleFocusOut);
      reducedMotion.removeEventListener('change', handleMotionPreference);
    };
  }, []);

  return (
    <section className="testimonials page-shell" aria-label="Testimonials">
      <SectionHeading index="03" label="In their words" note="A few notes from people I’ve worked with" />
      <div ref={railRef} className="testimonial-rail" role="region" tabIndex={0} aria-label="Testimonials. Hover to slow the ticker; focus it to pause.">
        <div ref={trackRef} className="testimonial-track">
          <TestimonialCards />
          <TestimonialCards duplicate />
        </div>
      </div>
      <p className="testimonial-scroll-hint" aria-hidden="true">AUTO-SCROLL · HOVER TO SLOW · FOCUS TO PAUSE <span>→</span></p>
    </section>
  );
}

export default Testimonials;
