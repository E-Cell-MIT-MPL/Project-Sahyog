
/**
 * Calculates a cursor effect based on mouse position
 * 
 * @param {MouseEvent} e - Mouse event
 * @param {HTMLElement} container - Container element
 * @returns {Object} - The effect object with x and y properties
 */
export const calculateCursorEffect = (e, container) => {
  const rect = container.getBoundingClientRect();
  
  // Calculate position of mouse cursor relative to the container
  const x = (e.clientX - rect.left) / container.offsetWidth - 0.5;
  const y = (e.clientY - rect.top) / container.offsetHeight - 0.5;
  
  return { x, y };
};

/**
 * Creates a smoother animation curve for parallax effects
 * 
 * @param {number} value - Input value between -1 and 1
 * @param {number} intensity - Intensity factor (default: 1)
 * @returns {number} - Smoothed value
 */
export const smoothCurve = (value, intensity = 1) => {
  // Apply a cubic ease function for smoother movement
  return value * value * value * intensity;
};

/**
 * Creates a spring animation configuration for Framer Motion
 * 
 * @param {number} stiffness - Spring stiffness (default: 100)
 * @param {number} damping - Spring damping (default: 10)
 * @param {number} mass - Spring mass (default: 1)
 * @returns {Object} - Spring animation configuration
 */
export const createSpringConfig = (stiffness = 100, damping = 10, mass = 1) => {
  return {
    type: "spring",
    stiffness,
    damping,
    mass
  };
};

/**
 * Creates a staggered animation for child elements
 * 
 * @param {number} staggerDelay - Delay between each child animation (default: 0.1)
 * @returns {Object} - Staggered animation configuration
 */
export const createStaggeredAnimation = (staggerDelay = 0.1) => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };
};

/**
 * Creates a scroll-triggered animation configuration
 * 
 * @param {number} threshold - Viewport intersection threshold (default: 0.1)
 * @param {Object} animation - Animation properties
 * @returns {Object} - Scroll animation configuration
 */
export const createScrollAnimation = (threshold = 0.1, animation = {}) => {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, threshold },
    variants: {
      hidden: { opacity: 0, y: 20, ...animation.hidden },
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ...animation.transition },
        ...animation.visible
      }
    }
  };
};

/**
 * Creates a glow effect animation
 * 
 * @param {string} color - Color for the glow effect (default: 'rgba(99, 102, 241, 0.3)')
 * @param {number} duration - Animation duration in seconds (default: 2)
 * @returns {Object} - Glow animation configuration
 */
export const createGlowEffect = (color = 'rgba(99, 102, 241, 0.3)', duration = 2) => {
  return {
    animate: {
      boxShadow: [
        `0 0 10px ${color}`,
        `0 0 20px ${color}`,
        `0 0 10px ${color}`,
      ]
    },
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };
};

/**
 * Applies a hover animation to an element
 * 
 * @param {Object} initialScale - Initial scale (default: 1)
 * @param {Object} hoverScale - Scale on hover (default: 1.05)
 * @returns {Object} - Hover animation configuration
 */
export const applyHoverAnimation = (initialScale = 1, hoverScale = 1.05) => {
  return {
    initial: { scale: initialScale },
    whileHover: { 
      scale: hoverScale,
      transition: { duration: 0.3 }
    }
  };
};
