import IsDesktop from "../functions/isDesktop"

export const FONT_SIZE = () => {
    const isDesktop = IsDesktop()

    return ({
        sm: isDesktop ? '16px' : '8px',
        md: isDesktop ? '20px' : '10px',
        l: isDesktop ? '24px' : '12px',
        xl: isDesktop ? '28px' : '14px',
        xxl: isDesktop ? '32px' : '16px',
        xxxl: isDesktop ? '36px' : '18px',
        title: isDesktop ? '80px' : '40px',
    })
}

export const DIST_SIZE = {
    xs: '8px',
    sm: '16px',
    md: '24px',
    l: '32px',
    xl: '40px',
}