// @/constants/theme.ts

export const COLORS = {
    // Brand
    primary: '#FFD700',
    primaryDark: '#D90E17',
    secondary: '#D90E17',
    secondaryDark: '#E7040E',

    // Brand / Accent Aliases
    regalNavy: '#FFD700',
    regalNavyLight: '#D90E17',
    royalGold: '#FFD700',
    sandyBrown: '#B6B6B6',
    tomato: '#E7040E',

    // Canvas & Surfaces
    background: '#F5F5F5',
    surface: '#FEFEFE',
    surfaceElevated: '#FFFFFF',
    surfaceActive: '#FFD700',

    // Core Neutrals
    white: '#FFFFFF',
    black: '#0C0C0C',

    // Standard Screen Text
    text: '#0C0C0C',
    textSecondary: '#444444',
    textMuted: '#444444',
    textLight: '#B6B6B6',

    // Yellow Background Foreground
    yellowText: '#0C0C0C',
    yellowIcon: '#0C0C0C',

    // Button Text — Always Dark (#0C0C0C) on #FFD700
    buttonText: '#0C0C0C',
    buttonTextPrimary: '#0C0C0C',
    buttonTextSecondary: '#FFFFFF', // White text on Red background CTAs
    buttonTextYellow: '#0C0C0C',
    buttonTextRed: '#FFFFFF',

    // Text on Brand Colors
    textOnHighlight: '#0C0C0C',
    textOnGold: '#0C0C0C',
    textOnPrimary: '#0C0C0C',
    textOnSecondary: '#FFFFFF',
    textOnDark: '#FFFFFF',

    // Icons
    icon: '#0C0C0C',
    iconActive: '#0C0C0C',
    iconMuted: '#444444',
    iconLight: '#FFFFFF',

    // Icons on Brand Colors
    iconOnPrimary: '#0C0C0C',
    iconOnSecondary: '#FFFFFF',
    iconOnYellow: '#0C0C0C',
    iconOnRed: '#FFFFFF',
    iconOnWhite: '#0C0C0C',
    iconOnDark: '#FFFFFF',

    // Borders
    border: '#CCCCCC',
    borderMuted: '#E7E7E7',
    borderStrong: '#B6B6B6',

    // Status
    success: '#217A34',
    successLight: '#3DE05F',

    warning: '#FFD700',
    warningLight: '#F2F2F2',

    error: '#E7040E',
    errorLight: '#F2F2F2',

    info: '#3B3B3B',
    infoLight: '#E7E7E7',

    // Shadows
    shadowColor: '#0C0C0C',
} as const;

export const FONTS = {
    fontFamily: {
        heading: 'var(--font-outfit), sans-serif',
        body: 'var(--font-outfit), sans-serif', // STRICT: Outfit font used globally for headings & body
    },
    weights: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
    },
} as const;

export const SPACING = {
    xs: '6px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '28px',
} as const;

// STRICT REQUIREMENT: All non-zero structural radius tokens use rounded-md (0.375rem / 6px)
export const GLOBAL_RADIUS = 'rounded-md';

export const RADIUS = {
    none: '0px',
    button: '0.375rem',  // rounded-md
    sm: '0.375rem',      // rounded-md
    md: '0.375rem',      // rounded-md
    lg: '0.375rem',      // rounded-md
    xl: '0.375rem',      // rounded-md
    card: '0.375rem',    // rounded-md (Replaces 16px)
    xxl: '0.375rem',     // rounded-md
    round: '0.375rem',    // rounded-md (Replaces pill 9999px)

    // Continuous Curvature Squircles mapped to standard rounded-md
    squircleSm: '0.375rem',
    squircleMd: '0.375rem',
    squircleLg: '0.375rem',
} as const;

export const SHADOWS = {
    subtle: '0px 2px 6px rgba(12, 12, 12, 0.08)',
    card: '0px 3px 13px rgba(12, 12, 12, 0.15)',
    floating: '0px 14px 30px rgba(12, 12, 12, 0.15)',
} as const;