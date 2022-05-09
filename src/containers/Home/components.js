import { useState } from "react";
import { motion } from "framer-motion";

import { Box } from "../../components/Grid";
import { Text } from "../../components/Text";
import { BLACK } from "../../constants/Colors";

export const Footer = ({time}) => (
    <Text 
        style={{
            bottom: 0,
            padding: '16px',
            position: "absolute"
        }}>
        {`It's ${time} now in my place (Jakarta)`}
    </Text>
)

export const SecretText = () => {
    const [revealSecret, setRevealSecret] = useState(false)
    const revealVariants = {
        visible: { opacity: 1},
        hidden: { opacity: 0}
    }
    const secretVariants = {
        visible: { opacity: 1, y: -30},
        hidden: { opacity: 0}
    }

    return (
        <Box 
            onMouseLeave={() => setRevealSecret(false)}
            minHeight="100px"
            marginTop='8px'
        >
            <Text as={motion.i}
                size="l"
                color={BLACK}
                textAlign="center"
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
                    I still use my free time for make some code
                </Text>
            }
        </Box>
    )
}