---
name: Ideal Rafuna Portfolio
description: Employer-facing engineering portfolio for systems, simulation, digital twins, UAVs, robotics, and software-integrated physical systems.
colors:
  primary: "#0066CC"
  primary-muted: "#EAF4FF"
  secondary: "#28BDBD"
  secondary-muted: "#ECFAFA"
  ink: "#282C34"
  paper: "#FFFFFF"
  section: "#F8FAFD"
  border: "#E6E8EC"
  dark-bg: "#020817"
typography:
  display:
    fontFamily: "Sora, Manrope, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 5.75rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "0"
  headline:
    fontFamily: "Sora, Manrope, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: "0"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.02em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "16px 32px"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Ideal Rafuna Portfolio

## 1. Overview

**Creative North Star: "Flight-Test Console"**

The portfolio should feel like a calm engineering console assembled for a serious technical review: clear hierarchy, high-confidence typography, exact metrics, and visible system architecture. The visual language is premium but not ornamental; its memory comes from technical artifacts, especially the TelloTwin architecture spine, not from decorative gradients.

The system rejects university-application framing, generic SaaS hero templates, and card grids that flatten every achievement into the same weight. Recruiters should be able to skim it like a technical briefing: first establish role fit and work authorization, then inspect proof, then contact.

**Key Characteristics:**
- Crisp blue/teal engineering palette with large neutral surfaces.
- Sora display type for technical authority and Manrope for readable body copy.
- Cards only where they frame repeated evidence or case-study detail.
- Motion is restrained, fast, and explanatory; it never blocks scanning.

## 2. Colors

The palette is restrained engineering blue with a teal signal color, carried by neutral light and dark surfaces.

### Primary
- **Instrument Blue**: Main action, active navigation, high-confidence proof marks, and the primary resume CTA.

### Secondary
- **Telemetry Teal**: Live-system details, technical badges, selected accents, and architecture connectors.

### Neutral
- **Console Ink**: Main text and high-contrast UI detail.
- **Clean Paper**: Primary light-mode canvas and card surface.
- **Lab Section**: Alternating section band for long-scroll rhythm.
- **Soft Border**: Hairline separation, card boundaries, and gallery thumbnails.

### Named Rules

**The Signal Color Rule.** Blue and teal are reserved for actions, proof, and system relationships. They should not flood every card.

**The No Decorative Glow Rule.** Gradients can support hierarchy, but they must not become the visual idea.

## 3. Typography

**Display Font:** Sora (with Manrope/system fallback)
**Body Font:** Manrope (with system fallback)
**Label/Mono Font:** Manrope

**Character:** Sora gives the page a machined, technical stance without relying on monospace. Manrope keeps long recruiter-facing copy readable and modern.

### Hierarchy
- **Display** (700, fluid 3rem to 5.75rem, 0.98 line-height): Hero name only.
- **Headline** (650, fluid 2rem to 3.25rem, 1.05 line-height): Section titles and flagship project title.
- **Title** (600, 1.25rem to 1.5rem): Card and modal titles.
- **Body** (400, 1rem, 1.65 line-height): Paragraphs, case-study text, and descriptions. Cap long prose at 65-75ch.
- **Label** (650, 0.875rem, 0.02em): Short labels, badges, and compact metrics. Avoid repeated uppercase section eyebrows.

### Named Rules

**The Briefing Type Rule.** Large type introduces the page; compact type carries evidence. Do not use hero-scale text inside cards or dashboards.

## 4. Elevation

The system uses a hybrid of hairline borders and low, controlled shadows. Resting surfaces can have a subtle border or a subtle shadow, but not both at high intensity. Elevated states should feel like focus and inspection, not floating decoration.

### Shadow Vocabulary
- **Soft** (`0 2px 10px -2px hsl(220 13% 18% / 0.1)`): Small proof cards and quiet panels.
- **Medium** (`0 4px 20px -4px hsl(220 13% 18% / 0.15)`): Featured blocks, modals, and inspected cards.
- **Strong** (`0 8px 30px -8px hsl(210 100% 40% / 0.2)`): Rare emphasis for flagship technical proof.

### Named Rules

**The Inspection Rule.** Elevation appears when a user is inspecting or selecting something. Static decoration should stay flat.

## 5. Components

### Buttons
- **Shape:** Confident rectangular controls with modest rounding (8px).
- **Primary:** Instrument Blue with white text and clear press feedback.
- **Hover / Focus:** Color shift plus visible focus ring; active state should compress subtly.
- **Secondary / Ghost:** Outlined or quiet variants for secondary navigation and social links.

### Chips
- **Style:** Small, technical labels with controlled borders and strong text contrast.
- **State:** Filter chips must make selected state obvious without changing layout.

### Cards / Containers
- **Corner Style:** 8-12px radius, never oversized.
- **Background:** Clean Paper or Lab Section, with dark-mode equivalents.
- **Shadow Strategy:** Use Soft or Medium only when the card is interactive or important.
- **Border:** Thin full border when structure matters; no colored side stripes.
- **Internal Padding:** 24px default, tightened only for compact metrics.

### Inputs / Fields
- **Style:** Existing shadcn/ui field styling with token colors and visible focus ring.
- **Focus:** Ring must remain visible in both themes.
- **Error / Disabled:** Preserve shadcn semantics and contrast.

### Navigation
- **Style:** Fixed translucent top bar, compact labels, active underline, theme toggle, and mobile menu. Use the new employer-facing anchor labels only.

### Signature Component

**TelloTwin Architecture Spine:** A responsive coded diagram connecting DJI Tello / Simulator, FastAPI Backend, WebSocket / REST APIs, React + Three.js Dashboard, and Telemetry Logging / CSV Export. This is the portfolio's most memorable technical artifact.

## 6. Do's and Don'ts

### Do:
- **Do** keep HPI visa and no-sponsorship language visible in the hero, footer, and contact section.
- **Do** make TelloTwin the flagship proof object with 10 Hz telemetry, a 17-field state model, 12 REST endpoints, and one WebSocket stream.
- **Do** frame research and publications as engineering evidence, not as an academic destination.
- **Do** preserve dark/light theme parity and mobile scanning quality.
- **Do** use measured, fast interaction feedback with reduced-motion fallbacks.

### Don't:
- **Don't** use university-application positioning, degree-application language, or professor-facing calls to action.
- **Don't** claim unverified telemetry rates or other unverified performance.
- **Don't** make BeAlbanian founder-first or DBF Kosovo a separate mission page.
- **Don't** use repeated tiny uppercase section eyebrows, gradient text, large rounded icons above every heading, glassmorphism as decoration, or generic SaaS metric templates.
- **Don't** let cards become the whole design; use technical diagrams, timelines, and metrics to create hierarchy.
