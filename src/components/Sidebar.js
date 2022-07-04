import { AnimatePresence } from "framer-motion";
import styledComponents from "styled-components";
import { NavButton } from "../containers/Header/components";
import MotionWrapper from "./MotionWrapper";

const sidebarInitial = { x: '-100vw' }
const sidebarTransition = { transition: { duration: 1} }
export const sidebarVariants = {
    initial: sidebarInitial,
    final: { x: 0, ...sidebarTransition },
    exit: {...sidebarInitial, ...sidebarTransition },
}

const SidebarContainer = styledComponents.div`
    width: 100%;
    height: 100%;
    position: fixed;
    padding: 2rem
`

const Sidebar = ({showSidebar, handleNavButtonClicked}) => {
    return (
        <AnimatePresence>
            {showSidebar && (
                <MotionWrapper 
                    exit="exit"
                    animate="final"
                    initial="initial"
                    variants={sidebarVariants}
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        zIndex: '999',
                        backgroundColor:' white'
                    }}
                >
                    <SidebarContainer>
                        <NavButton 
                            open={showSidebar} 
                            onClick={() => handleNavButtonClicked(!showSidebar)} 
                        />
                    </SidebarContainer>
                </MotionWrapper>
            )}
        </AnimatePresence>
    );
}
 
export default Sidebar;