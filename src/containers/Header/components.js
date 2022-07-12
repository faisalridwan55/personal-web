import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import { Row } from "../../components/Grid";
import { BLACK, WHITE } from "../../constants/Colors";
import { DIST_SIZE, FONT_SIZE } from "../../constants/Size";
import { AnimatePresence } from "framer-motion";


export const HeaderContainer = styled(Row)`
    top: 0;
    width: 100%;
    position: absolute;
    align-items: center;
    justify-content: center;
    margin: ${DIST_SIZE.xs} 0;
`

export const CustomNavLink = ({children, ...props}) => {
    const defaultFontSize = FONT_SIZE().md
    const MyNav = styled(NavLink)`
        color: ${WHITE};
        text-decoration: none;
        font-size: ${props.fontSize || defaultFontSize};
        &:hover {
            color: ${BLACK};
            opacity: 0.8;
        };
    `;

    return (
        <MyNav 
            activeStyle={{color: BLACK, fontWeight: "bold", textDecoration: `underline wavy ${BLACK}`, textUnderlineOffset: "8px"}}
            {...props}
        >
            {children}
        </MyNav>
    )
}
    
export const NavButton = ({open, ...props}) => {
    const style = {
        left: 15,
        top: 5,
        position: 'absolute',
        borderStyle: 'none',
        backgroundColor: 'transparent',
    }

    const pathVariants = {
        initial: {
          opacity: 0,
          pathLength: 0,
        },
        final: {
          opacity: 1,
          pathLength: 1,
          transition: { 
            duration: 1,
            ease: "easeInOut",
          }
        }
    };

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.button style={style} initial="initial" animate="final" {...props}>
                {open ? (
                    <div>
                        <motion.svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="bi bi-x-lg" viewBox="0 0 16 16">
                            <motion.path
                                key="close-icon"
                                stroke={open ? "black" : "white"} 
                                strokeWidth={2}
                                fill="none"
                                variants={pathVariants}
                                d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"
                            />
                        </motion.svg>
                    </div>
                ) : (
                    <div>
                        <motion.svg 
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            class="bi bi-list"
                            viewBox="0 0 16 16"
                        >
                            <motion.path 
                                key="open-icon"
                                fill-rule="evenodd"
                                stroke={open ? "black" : "white"}  
                                fill="none"
                                variants={pathVariants}
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                            />
                        </motion.svg>
                    </div>
                )}
            </motion.button>
        </AnimatePresence>
    )
}
