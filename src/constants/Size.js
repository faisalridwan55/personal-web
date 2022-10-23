import IsDesktop from "../functions/isDesktop";

export const FONT_SIZE = () => {
  const isDesktop = IsDesktop();

  return {
    sm: isDesktop ? "16px" : "12px",
    md: isDesktop ? "20px" : "14px",
    l: isDesktop ? "24px" : "16px",
    xl: isDesktop ? "28px" : "18px",
    xxl: isDesktop ? "32px" : "20px",
    xxxl: isDesktop ? "36px" : "22px",
    title: isDesktop ? "80px" : "44px",
  };
};

export const DIST_SIZE = () => {
  const isDesktop = IsDesktop();

  return {
    xs: isDesktop ? "8px" : "6px",
    sm: isDesktop ? "16px" : "12px",
    md: isDesktop ? "24px" : "18px",
    l: isDesktop ? "32px" : "24px",
    xl: isDesktop ? "40px" : "30px",
  };
};
