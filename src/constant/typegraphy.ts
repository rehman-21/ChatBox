//* <============[ FONTSTYLES ]===============>
export const fontStyles = {
  //* <===========[ FONTFAMILY]=================>
  fontFamily: {
    // HELVETICA_NENE_MED_EXT: "Helvetica Neue Medium Extended",
    HELVETICA_NENE_MED_EXT: 'Helvetica Neue Medium Extended',
    HELVETICA_NENE_BLOD: 'HelveticanNeueBlod',
    HELVETICA_NENE_MEDIUM: 'HelveticaNeueMedium',
    HELVETICA_NENE_BLACK: 'HelveticaNeueBlack',
    INTER: 'Inter_28pt-Bold',
    INTER_REGULAR: 'Inter_18pt_Regular',
    INTER_ITALIC: 'Inter_18pt-Italic',
    // INTER: "Inter_18pt_Black",
  },
  //* <==========[FONT_SIZE]==============>:
  fontSizes: {
    xxs: 10,
    xs: 11,
    sm: 12,
    md: 13,
    lg: 14,
    xl: 16,
    xxl: 17,
    xxxl: 18,
    h1: 24,
    h2: 25,
    h3: 31,
    h4: 32,
    display: 44,
  },

  //*<===============[LINE_HEIGHT]==============>
  lineHeight: {
    small: 12,
    medium: 18,
    large: 22,
    extraLarge: 44,
  },
};

//* <================[TYPOGRAPHY]=========>

export const typographyStyles = {
  tagline: {
    // fontFamily: fontStyles.fontFamily.HelveticaMedExt,
    fontSize: fontStyles.fontSizes.h1,
  },
  header: {
    fontSize: fontStyles.fontSizes.h1,
  },
  bodyText: {
    fontSize: fontStyles.fontSizes.xl,
  },
  smallText: {
    fontSize: fontStyles.fontSizes.lg,
  },
  header2: {
    fontSize: fontStyles.fontSizes.h4,
  },
  largeTitle: {
    fontSize: fontStyles.fontSizes.h3,
  },
  title1: {
    fontSize: fontStyles.fontSizes.h2,
  },
  title2: {
    fontSize: fontStyles.fontSizes.xxxl,
  },
  title3: {
    fontSize: fontStyles.fontSizes.xxl,
  },
  headline: {
    fontSize: fontStyles.fontSizes.lg,
  },
  body: {
    fontSize: fontStyles.fontSizes.lg,
  },
  callOut: {
    fontSize: fontStyles.fontSizes.md,
  },
  subHead: {
    fontSize: fontStyles.fontSizes.sm,
  },
  subHead1: {
    fontSize: fontStyles.fontSizes.sm,
  },
  footNote: {
    fontSize: fontStyles.fontSizes.sm,
  },
  caption: {
    fontSize: fontStyles.fontSizes.xs,
  },
  caption2: {
    fontSize: fontStyles.fontSizes.xs,
  },
  caption3: {
    fontSize: fontStyles.fontSizes.xxs,
  },
};
