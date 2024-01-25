import Container from "../layouts/Container";
import { Button } from "../ui/button";
import macPic from "@/assets/mac-back.jpg";
import { motion } from "framer-motion";

const intro = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};
const introChildren = {
  hidden: {
    opacity: 0,
    y: -150,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const leptop = {
  initial: {
    y: 0,
    rotate: 0,
    scale: 5,
  },
  animate: {
    y: 20,
    rotate: -20,
    scale: 1,
    transition: {
      duration: 1,
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  },
};
const Hero = () => {
  return (
    <div className="overflow-hidden">
      <Container className="h-screen grid place-content-center md:grid-cols-2 gap-8 md:gap-2 my-40 md:my-20">
        <motion.div
          variants={intro}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-4 order-2 md:order-1"
        >
          <motion.h1 variants={introChildren} className="text-7xl font-bold">
            <span className="text-gray">Don't worry,</span>
            <br />
            <span className="text-dark-gray">We'll fix it.</span>
          </motion.h1>
          <motion.p
            variants={introChildren}
            className="text-dark-gray max-w-[50ch]"
          >
            Welcome to <span className="text-black font-bold">iRepair</span>,
            your one-stop place for all kinds of{" "}
            <span className="text-black font-bold">Macbook Repairs</span> and
            diagnostic.
          </motion.p>
          <motion.div variants={introChildren}>
            <Button className="font-bold w-fit">Book a Call</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={leptop}
          initial="initial"
          animate="animate"
          className="w-full order-1 md:order-2"
        >
          <img
            src={macPic}
            alt="mac book repairing"
            className="w-full max-w-[500px] rounded-sm md:ml-auto md:mr-[24px]"
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default Hero;
