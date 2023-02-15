import React from 'react'

import {motion} from "framer-motion"

export default function Projects() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <section id="projects" class="scroll-smooth">
        <div class="wrapper">
          <div class="container scrollx flex flex-col    ">
          
            <section class="sec1 pin">
              <h3 class="text-xl">Random User Project</h3>

              <div class="col flex flex-col sm:flex-row">
                <a
                  href="https://react-router-auth-15c38.web.app/"
                  target="_blank"
                  ><img
                    src="https://lh3.googleusercontent.com/S7fQrYCY_wx7pu_YHQY3cTLN0UUyi3f_vEeD9fGMObVvgZ7ehhbbqZVfLgJwBFH4b-Q2no1XfHDJjkWiadoSw7zTeysGgRArZNrpZTN8qE5UUv3l7rrM0-fqUluJUYiZqGg2B8Uc3_bDi3nCw0pOjthz0YuXbK0iZ6J_XuyzugM4yC6KaSOJ2lsvUh6xh5VC2kzelAfL-acOqgZNOYlaGA2WC31eKsW6ZCFEQEwn1TrIJpp5j675WcZnd4kDqFstESzE8bFIwgY7REValOhUFQfnnEGpWj648hKGFc1lz59BFnLsnivLjoRHL_Ah-kUwqDW0UwcwHlMmF4zdaJ0DsnDol3_JKGvM-HpUFTJKOJh1tQIgxy7pPgUwG4gfGmkS4mqYtYZpJeX0HY8EJLPVLKafP4Z57NFz9XYkNvnboZDG_KieZYfft_gQcNACq02G2AJgl_LZzrZGRd_oOxupTJmAb5tvgXSEBYlpQZI51GcXKilH7ykdCRvUuWf1eLXlyX-OIRdN9NofoPa0Yqybr4osIiT22UbYD-lfNYo_v3T5HNgNEuV0BZOxj-YM7lGMuZtuD3ILzYQ9sQ8EaHX6kkyJuP8qA_4yC-1GrXjA5IMlDShDsMXIJZc9PXP43Bgv8Na2deWBhkNTquXb-pLfIGG8rbaMfrD-zQ7kydrJBnx4y1HDqKLCN3stASwq85aT1XFCKBOfJunOGVCf4mAVaOCayernPrijYp5dg_0VgG1QJpBpcxrdoM9PUakqls--Zp0uC_3nxR87RtLW7eZ9L2yxhJDpLVnGwUIUbDmTCcCQLmefXyBcKHuNYXd6Iv-cWDTBPFz4sbYgOubgQSbtNwpz4Scw3FDPZDMCtZNs04hukERrOooI3sPcA7Eeulqmm3udqgLWB2Cli5yKP7uS_iFeQq3ZjHOxP9IYRnwsk-Go1A=w896-h619-no?authuser=0"
                    alt="Random user"
                    class=""
                    
                /></a>
                <p class="w-full sm:w-1/2 sm:text-3xl" id="project-text">
                  A project that made use of various methods & techniques
                  including error boundaries, Firebase hosting, authentication,
                  and backend pagination utilizing Google authentication and the
                  randomuser.me API.
                </p>
              </div>
            </section>
            <section class="sec2 pin">
              <h3 class="text-xl anim">React Calculator</h3>

              <div class="col anim flex flex-col sm:flex-row">
                <a href="https://react-calc-blond.vercel.app/" target="_blank"
                  ><img
                    src="https://plus.unsplash.com/premium_photo-1669658981244-afe0e3e371bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1353&q=80"
                    alt="calculator"
                    class=""
                    
                /></a>
                <p class="w-full sm:w-1/2 sm:text-3xl" id="project-text">
                  A React-based calculator that allows users to perform basic
                  mathematical operations such as addition, subtraction,
                  multiplication and division, with a clean and intuitive user
                  interface. It uses state management to dynamically update the
                  display and ensure accurate calculation results.
                </p>
              </div>
            </section>
            <section class="sec3 pin w-full">
              <h3 class="text-xl anim">Metabnb Marketplace</h3>

              <div class="col anim flex flex-col sm:flex-row">
                <a href="https://meta-bnb-sepia.vercel.app/" target="_blank"
                  ><img
                    src="https://meta-bnb-sepia.vercel.app/static/media/secondHero.a8af7e0fa95161e46002.png"
                    alt="calculator"
                    class=""
                /></a>
                <p class="w-full sm:w-1/2 sm:text-3xl" id="project-text">
                  "Metabnb", a landing page built in React, provides luxury and
                  affordable virtual houses for rent in the metaverse.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>


    </motion.div>
  )
}