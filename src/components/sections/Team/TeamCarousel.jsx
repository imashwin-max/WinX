import { useState, useRef, useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TeamCard } from './TeamCard';
import styles from './TeamCarousel.module.css';

export function TeamCarousel({ members }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < members.length - 1;

  // Calculate the pixel offset needed to center the active card perfectly
  const recalcOffset = useCallback((index) => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    const card = track.children[index];
    if (!card) return;

    const wrapperWidth = wrapper.clientWidth;
    const cardLeft = card.offsetLeft;
    const cardWidth = card.offsetWidth;

    // Center the active card inside the viewport
    const newOffset = cardLeft - ((wrapperWidth - cardWidth) / 2);

    // Clamp so last card is never pushed out of view (overflow: hidden)
    const maxOffset = Math.max(0, track.scrollWidth - wrapperWidth);
    setOffset(Math.max(0, Math.min(newOffset, maxOffset)));
  }, []);

  // Recalculate on index change
  useEffect(() => {
    recalcOffset(activeIndex);
    const frameId = requestAnimationFrame(() => recalcOffset(activeIndex));
    return () => cancelAnimationFrame(frameId);
  }, [activeIndex, recalcOffset]);

  // Recalculate on window resize
  useEffect(() => {
    const onResize = () => recalcOffset(activeIndex);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeIndex, recalcOffset]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') setActiveIndex((i) => Math.max(0, i - 1));
      if (e.key === 'ArrowRight') setActiveIndex((i) => Math.min(members.length - 1, i + 1));
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [members.length]);

  const prev = useCallback(() => setActiveIndex((i) => Math.max(0, i - 1)), []);
  const next = useCallback(() => setActiveIndex((i) => Math.min(members.length - 1, i + 1)), [members.length]);

  return (
    <div className={styles.carouselWrapper}>
      {/* Prev button */}
      <button
        onClick={prev}
        disabled={!canPrev}
        className={`${styles.arrowBtn} ${styles.arrowLeft} ${!canPrev ? styles.arrowDisabled : ''}`}
        aria-label="Previous team member"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Viewport — clips overflow */}
      <div ref={wrapperRef} className={styles.viewport}>
        <div
          ref={trackRef}
          className={styles.track}
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {members.map((member, index) => (
            <TeamCard
              key={member.id}
              {...member}
              isActive={index === activeIndex}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Next button */}
      <button
        onClick={next}
        disabled={!canNext}
        className={`${styles.arrowBtn} ${styles.arrowRight} ${!canNext ? styles.arrowDisabled : ''}`}
        aria-label="Next team member"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {members.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
            aria-label={`Go to team member ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}