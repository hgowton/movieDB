import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const variants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 }
}

const Accordian = (props) => {
    const [ isPush, setIsPushed ] = useState(false);
    return(
        <article>
            <h2 role="button" onClick={() => setIsPushed(prevState => !prevState)}>The Heading</h2>
            
        <AnimatePresence>
            {isPush && (
                <motion.div 
                variants={variants}
                style={{overflow: 'hidden'}}
                initial='closed'
                animate='open'
                exit='closed'>
                    <h1>{props.movie}</h1>}
                    <p>
                    I'm baby neutra flannel retro squid authentic, narwhal artisan polaroid cray distillery salvia palo santo blue bottle. Kale chips photo booth locavore drinking vinegar, VHS lo-fi whatever. Tacos listicle shabby chic, tofu godard chicharrones squid trust fund keytar cardigan semiotics mustache polaroid shoreditch butcher. Poutine keffiyeh YOLO +1 tumeric hoodie. IPhone fashion axe sartorial, raclette blue bottle shaman tbh ramps pok pok mlkshk cray ennui hammock drinking vinegar. Brunch stumptown normcore shabby chic 3 wolf moon etsy.
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
        </article>

    );
};

export default Accordian;