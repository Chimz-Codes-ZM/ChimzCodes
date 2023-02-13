import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'

export default function Contact() {
  return (
    <motion.div className="flex flex-col items-center mt-16"
    
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <h2 className="text-2xl font-bold md:text-6xl">Get in touch</h2>
      <div className="flex mt-6">
        <a
          href="https://twitter.com/ChimzCodes"
          className="btn-social mr-6 hover:opacity-75 transition duration-300"
          target="_blank"
        >
          <i className="fab fa-twitter text-3xl sm:text-6xl lg:text-9xl"></i>
        </a>
        <a
          href="chimwemwe.hashnode.dev"
          className="btn-social mr-6 hover:opacity-75 transition duration-300"
          target="_blank"
        >
          <i className="fas fa-blog text-3xl sm:text-6xl lg:text-9xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/chimwemwe-masona/"
          className="btn-social mr-6 hover:opacity-75 transition duration-300"
          target="_blank"
        >
          <i className="fab fa-linkedin text-3xl sm:text-6xl lg:text-9xl"></i>
        </a>
        <a
          href="https://github.com/Chimz-Codes-ZM"
          className="btn-social hover:opacity-75 transition duration-300"
          target="_blank"
        >
          <i className="fab fa-github text-3xl sm:text-6xl lg:text-9xl"></i>
        </a>
      </div>
    </motion.div>
  );
}