# Design Guidelines: Interactive Crush Message Experience

## Design Approach: Reference-Based (Playful Romance)
Drawing inspiration from: Interactive Valentine's card experiences, Duolingo's playful character interactions, and modern dating app onboarding flows. The design should feel warm, inviting, and slightly nervous - mirroring the emotional state of confessing feelings.

## Core Design Philosophy
This is an intimate, single-user journey experience. Every interaction should feel intentional, personal, and emotionally resonant. The design should build anticipation through progressive revelation.

## Color Palette

**Primary Colors (Light Mode):**
- Background: 340 25% 97% (soft blush white)
- Primary: 340 82% 62% (romantic rose pink)
- Secondary: 280 65% 68% (soft purple)
- Text Primary: 340 40% 20% (deep warm charcoal)
- Text Secondary: 340 20% 45% (muted mauve)

**Accent:**
- Success/Action: 10 80% 65% (warm coral)
- Gentle emphasis: 45 90% 88% (soft cream background for messages)

**Dark Mode:** Not required for this intimate experience - keep light and warm throughout.

## Typography

**Font Families:**
- Primary: 'Quicksand' or 'Nunito' (rounded, friendly sans-serif via Google Fonts)
- Display: 'Pacifico' or 'Dancing Script' for emotional headers (use sparingly)

**Hierarchy:**
- Main messages: 2.5rem - 3.5rem, medium weight, tight leading
- Button text: 1.125rem, semibold
- Popup messages: 1.5rem, medium weight
- Body context: 1rem, regular weight

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20 for consistent rhythm

**Layout Strategy:**
- Full-viewport centered experiences (each page feels like its own moment)
- Maximum content width: 28rem (448px) for intimate, focused feel
- Generous padding: p-8 on mobile, p-12 on desktop
- All content vertically and horizontally centered

## Component Library

### A. Page Transitions
- Fade in/out transitions between pages (300ms duration)
- Buttons should have gentle scale on hover (scale-105)
- Messages should slide in from bottom with fade

### B. Buttons
**Primary Buttons:**
- Large touch targets: py-4 px-8
- Fully rounded corners (rounded-full)
- Soft shadow: shadow-lg
- Gradient backgrounds using primary and secondary colors
- White text

**Secondary/Alternative Buttons:**
- Outlined style with primary color border
- Background: transparent or very light tint
- Same padding and rounding as primary

### C. Modal/Popup
- Centered overlay with backdrop blur
- White card with generous padding (p-8)
- Rounded corners: rounded-2xl
- Drop shadow: shadow-2xl
- Maximum width: 20rem (320px)
- Single action button centered at bottom

### D. Message Display Sections
- White/cream cards with rounded-3xl corners
- Soft shadow for depth
- Padding: p-8 to p-12
- Text centered
- Icon/illustration space reserved at top

### E. Animated Cat Element
- Position: Absolute top-right of message card
- Size: 80px - 120px
- Gentle floating animation (subtle vertical movement)
- Playful, cute illustration style

## Page-Specific Layouts

### Page 1: Initial Message
- Full viewport height
- Single centered card
- Large heading "I Have Something For You"
- Two buttons stacked vertically with gap-4
- Subtle heart or sparkle decorative elements in corners

### Page 2: Alone Check
- Animated cat in top-right of message card
- Message card occupies center 60% of viewport
- Two buttons horizontal on desktop, stacked on mobile
- Breathing room around all elements

### Page 3: Final Reveal
- Dramatic presentation
- Larger text treatment
- Centered message
- Optional: Confetti or sparkle animation on load (very subtle)

## Visual Enrichment

**Decorative Elements:**
- Subtle floating hearts in background (very faint, non-distracting)
- Soft gradient overlays on page backgrounds
- Sparkle accents near interactive elements
- Shadow play for depth and hierarchy

**Micro-interactions:**
- Buttons pulse gently when they're the only/critical action
- Cat blinks or tilts head periodically
- Heart icons can have gentle beat animation

## Images & Illustrations

**Cute Cat Illustration:**
- Style: Kawaii/chibi aesthetic with big eyes
- Color: Complementary to color palette (soft orange, white, or pink tones)
- Animation: Subtle floating/bobbing motion, occasional blink
- Format: SVG or high-quality PNG with transparency
- Placement: Top-right corner of message cards, slightly overlapping edge

**Background Elements:**
- No hero images needed (this is an interactive experience, not a landing page)
- Optional: Very subtle geometric patterns or soft bokeh effects in background
- Keep backgrounds minimal to maintain focus on messages

## Accessibility & Experience

- All interactive elements minimum 44x44px touch target
- High contrast between text and backgrounds
- Clear visual feedback on all interactions
- Smooth, non-jarring transitions
- Mobile-first design (likely viewed on phones)
- Single-column, centered layouts throughout

## Emotional Design Considerations

- **Anticipation Building:** Each page should feel like opening a gift
- **Playful Tension:** "Don't Show" button should feel mischievous but harmless
- **Warmth:** Soft colors and rounded shapes create safety
- **Intimacy:** Constrained widths and centered content feel personal
- **Joy:** Final reveal should feel celebratory but genuine