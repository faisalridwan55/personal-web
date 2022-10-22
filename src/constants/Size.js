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

export const DIST_SIZE = () => {
    const isDesktop = IsDesktop()
   
    return ({
        xs: isDesktop ? '8px' : '4px',
        sm: isDesktop ? '16px' : '8px',
        md: isDesktop ? '24px' : '12px',
        l: isDesktop ? '32px' : '16px',
        xl: isDesktop ? '40px' : '20px',
    })
}