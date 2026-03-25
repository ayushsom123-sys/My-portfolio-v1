import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const SESSION_KEY = 'splashScreenPlayed';

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(() => {
    // Only play once per browser session (not on every navigation).
    try {
      const played = sessionStorage.getItem(SESSION_KEY);
      if (!played) {
        sessionStorage.setItem(SESSION_KEY, '1');
        return true;
      }
      return false;
    } catch {
      // If sessionStorage is unavailable, fail open and play once anyway.
      return true;
    }
  });

  if (!isVisible) return null;

  const capsuleAppearMs = 250;
  const fillMs = 1800;
  const fadeMs = 500;

  const overlayFadeDelay = capsuleAppearMs + fillMs;

  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: '#F5F0E8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'all',
        }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: fadeMs / 1000, delay: overlayFadeDelay / 1000, ease: 'easeInOut' }}
        onAnimationComplete={() => setIsVisible(false)}
      >
        <motion.div
          style={{
            width: 280,
            height: 96,
            borderRadius: 9999,
            position: 'relative',
            overflow: 'hidden',
            background: 'rgba(28,22,18,0.10)',
            border: '0.8px solid rgba(200,150,32,0.35)',
          }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: capsuleAppearMs / 1000, ease: 'easeOut' }}
        >
          <motion.div
            style={{
              position: 'absolute',
              inset: 0,
              background: '#1C1612',
              borderRadius: 9999,
              transformOrigin: 'left center',
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: fillMs / 1000, delay: capsuleAppearMs / 1000, ease: 'easeInOut' }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

