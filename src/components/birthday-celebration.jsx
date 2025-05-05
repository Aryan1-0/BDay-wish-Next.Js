"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Heart, Sparkles, Gift, Cake, PartyPopper, MoveRight } from "lucide-react"
import BirthdayCelebration2 from "@/components/birthday-celebration2"

export default function BirthdayCelebration() {
  const [isCardOpen, setIsCardOpen] = useState(false)
  const [two, setTwo] = useState(false)

  return (
    <div>
      {two ? <BirthdayCelebration2 /> :
        <div className="flex flex-col items-center" >
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.3,
            }}
            className="relative mb-2"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-pink-600 mb-2">Happy Birthday!</h1>
            <div className="flex justify-center gap-3">
              <Cake className="w-8 h-8 text-pink-500" />
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-pink-600 mt-2">To My Princess</h3>
          </motion.div>

          <motion.div
            className="w-full max-w-md mx-auto my-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div
              className={`relative cursor-pointer transition-all duration-700 ease-in-out transform ${isCardOpen ? "rotate-0" : "rotate-2"
                }`}
              onClick={() => setIsCardOpen(!isCardOpen)}
            >
              <div
                className={`bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl p-14 sm:p-10 shadow-lg transition-all duration-700 transform ${isCardOpen ? "scale-95" : "scale-100"
                  }`}
              >
                <div className="absolute top-2 right-2">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Sparkles className="w-6 h-6 text-yellow-200" />
                  </motion.div>
                </div>

                <div className="text-center text-white">
                  <p className="text-lg font-medium mb-4">Tap to {isCardOpen ? "close" : "open"} your card</p>
                  <div className="flex justify-center">
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    >
                      <Gift className="w-14 h-14 text-white" />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Card content */}
              <AnimatePresence>
                {isCardOpen && <motion.div
                  className="absolute inset-0 bg-white max-[350px]:-top-6 max-[350px]:min-h-[275px] rounded-3xl p-4 shadow-xl shadow-rose-100 flex flex-col items-center justify-center"
                  initial={{ rotate: 2, rotateX: -90, opacity: 0 }}
                  animate={{
                    rotate: isCardOpen ? 0 : 2,
                    rotateX: isCardOpen ? 0 : -90,
                    opacity: isCardOpen ? 1 : 0,
                    zIndex: isCardOpen ? 10 : -1,
                  }}
                  exit={{ rotateX: -90, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-center">
                    <p className="text-purple-700 mb-2">
                    Just wanted to remind you—I know you have trust issues, and that’s okay. I’m not here to rush anything—Just communicate so we can figure it out together, one step at a time
                    </p>
                    <p className="text-pink-600 font-medium">I hope your birthday is full of love, magic, and everything that makes you smile 💖</p>
                    <div className="flex justify-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                      >
                        <Heart className="w-8 h-8 stroke-none fill-rose-500" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>}
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-md mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="text-center">
              <p className="text-lg text-purple-700 mb-4">

                May every wish you make today come true. You deserve the world, and I’ll always be here to remind you of that.
              </p>
              <div className="flex justify-center items-center gap-2">
                <p className="text-pink-600 font-medium">If forever feels uncertain, let’s make today unforgettable 🫶</p>
              </div>
            </div>
            <motion.div
              key="start-button"
              className="flex flex-col items-center justify-center mt-8"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              <motion.button
                onClick={() => setTwo(true)}
                className="bg-gradient-to-r z-10 from-pink-500 to-purple-500 shadow-lg hover:shadow-xl transition-all rounded-full font-medium text-white py-4 px-8 cursor-pointer border-2 border-white flex items-center gap-3"
                whileTap={{ scale: 0.95 }}
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                <PartyPopper className="w-6 h-6" />
                <span className="text-xl">Next</span>
                <MoveRight className="w-5 stroke-3 h-6" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div >
      }
    </div>
  )
}