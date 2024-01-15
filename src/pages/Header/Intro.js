import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Me from "../images/rahul3.jpeg";
import { mediaQueries } from "./Themes";
import Typewriter from 'typewriter-effect';


const typeStrings = ['CSE Student', 'Designer', 'Developer']; // Add more strings as needed

const Box = styled(motion.div)`
  /* width: 50vw;
height:50vh;
 */
  width: 55vw;
  display: flex;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  position: absolute;
  left: 50%;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);

  ${mediaQueries(1200)`
    width: 65vw;
  `};

  ${mediaQueries(60)`
    width: 70vw;
  `};

  ${mediaQueries(50)`
    width: 50vw;
    background-size: 100% 2px;

    flex-direction:column;
    justify-content:space-between;
  
  `};

  ${mediaQueries(40)`
    width: 60vw;
    
  
  `};

  ${mediaQueries(30)`
    width: 70vw;
    
  
  `};
  ${mediaQueries(20)`
    width: 60vw;
    
  
  `};

  @media only screen and (max-width: 50em) {
    background: none;
    border: none;
    border-top: 2px solid ${(props) => props.theme.body};
    border-bottom: 2px solid ${(props) => props.theme.text};
    background-image: linear-gradient(
        50%,
        black 50%
      ),
      linear-gradient(
        50%,
       black 50%
      );
    background-size: 2px 100%;
    background-position: 0 0, 100% 0;
    background-repeat: no-repeat;
  }

  //height:55vh;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  .pic {
    position: absolute;
    bottom: 0;
    left: 51%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
  ${mediaQueries(50)`
      width: 100%;
    height: 50%;
      .pic {
    
    width: 70%;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    
  }

  `};

  ${mediaQueries(40)`
  
      .pic {
    
    width: 80%;
    
  }

  `};

  ${mediaQueries(30)`
     

      .pic {
    
    width: 90%;
    
  }

  `};
  ${mediaQueries(20)`
     

     .pic {
   
   width: 80%;
   
 }

 `};
`;

const Text = styled(motion.div)`
  font-size: calc(1rem + 1.5vw);
  color: black;
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};

    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;

    ${mediaQueries(50)`
        font-size: calc(0.7rem + 1vw);
        color: black;


  `};
  }

  ${mediaQueries(40)`
        font-size: calc(1rem + 1.5vw);
        color: black;

  `};
  ${mediaQueries(20)`
         padding: 1rem;
         color:black;


  `};
`;

const Intro = () => {
  /* console.log(mq); */

  const [height, setHeight] = useState("55vh");

  useEffect(() => {
    if (window.matchMedia("(max-width: 50em)").matches) {
      setHeight("70vh");
    }
    if (window.matchMedia("(max-width: 20em)").matches) {
      setHeight("60vh");
    }
  }, []);
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: height }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
        <Text>
          <h1 className="text-3xl">Hi,</h1>

          <h3 className="text-clip mt-2">I'm Rahul Krishna.</h3>

          <div className=" text-2xl font-semibold  items-center flex justify-start mt-3">
            <Typewriter
              options={{
                strings: typeStrings,
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <h6 className="mt-5"> I'm a coder and designer transforming ideas into digital elegance. </h6>
        </Text>
        </motion.div>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="My Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
