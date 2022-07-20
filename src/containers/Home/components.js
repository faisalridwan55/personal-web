import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Box } from "../../components/Grid";
import { Text } from "../../components/Text";
import { BLACK } from "../../constants/Colors";
import IsDesktop from "../../functions/isDesktop";

const timeFormatter = () => {
    const time = new Date().toLocaleTimeString()

    return `${time.slice(0,5)} ${time.slice(8)}`
}

export const Footer = () => {
    const [time, setTime] = useState(timeFormatter())

    useEffect(() => {
        setTimeout(() => {
            setTime(timeFormatter())
        }, 60000)
    }, [time])

    return (
        <Text 
            style={{
                bottom: 0,
                right: 0,
                left: 0,
                padding: '16px',
                position: 'absolute',
                textAlign: 'center'
            }}>
            {`It's ${time} now at my place (Jakarta)`}
        </Text>
    )
}

export const SecretText = () => {
    const [revealSecret, setRevealSecret] = useState(false)
    const isDesktop = IsDesktop()
    const revealVariants = {
        visible: { opacity: 1},
        hidden: { opacity: 0}
    }
    const secretVariants = {
        visible: { opacity: 1, y: isDesktop ? -30 : -20},
        hidden: { opacity: 0}
    }

    return (
        <Box 
            onMouseLeave={() => setRevealSecret(false)}
            minHeight='100px'
            marginTop='8px'
            alignItems='center'
        >
            <AnimatePresence>
                <Text as={motion.i}
                    size="l"
                    color={BLACK}
                    textAlign="center"
                    width='fit-content'
                    whileHover={{
                        scale: 1.2,
                        textShadow: '0px 0px 10px rgba(255, 255, 255, 1)', 
                        cursor: 'pointer'
                    }}
                    onClick={() => setRevealSecret(true)}
                    animate={!revealSecret ? 'visible' : 'hidden'}
                    variants={revealVariants}
                    transition={{duration: 1}}
                >
                    Click to reveal my secret
                </Text>
                {revealSecret && 
                    <Text as={motion.i}
                        size="l"
                        color={BLACK}
                        textAlign="center"
                        animate={revealSecret ? 'visible' : 'hidden'}
                        variants={secretVariants}
                        transition={{duration: 1}}
                    >
                        I still use my spare time for coding
                    </Text>
                }
            </AnimatePresence>
        </Box>
    )
}