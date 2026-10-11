import { Magnetic } from '../../core/magnetic';

export function HeroVisual() {
  return (
    <div className="relative w-full h-[420px] md:h-[480px] flex items-center justify-center">
      {/* Soft ambient glow behind the image matching warm luxury theme */}
      <div
        className="absolute"
        style={{
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(214, 203, 185, 0.45) 0%, rgba(235, 228, 215, 0.25) 45%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(28px)',
        }}
      />

      <Magnetic
        actionArea={0.28}
        springConfig={{ damping: 18, stiffness: 140, mass: 0.2 }}
      >
        <img
          src="hero-visual.png"
          alt="Winx Cognitive Core Visual"
          style={{
            width: '100%',
            maxWidth: '440px',
            height: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 24px 44px rgba(26, 24, 22, 0.14))',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
      </Magnetic>
    </div>
  );
}

export default HeroVisual;