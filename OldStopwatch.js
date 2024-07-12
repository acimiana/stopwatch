// import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   background-color: #282c34;
//   font-family: Arial, sans-serif;
//   padding: 20px;
// `;

// const Clock = styled.div`
//   position: relative;
//   width: 250px;
//   height: 250px;
//   border: 7px solid #61dafb;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
//   background: radial-gradient(circle, #111 80%, #282c34 70%);
// `;

// const Graduation = styled.div`
//   position: absolute;
//   width: 2px;
//   height: ${({ size }) => (size === 'large' ? '15px' : '8px')}; /* Adjusted sizes */
//   background-color: #61dafb;
//   transform-origin: 50% 100%;
//   left: 50%;
//   bottom: 6px;
// `;

// const GraduationsContainer = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   transform: rotate(${({ index }) => index * 6}deg);
// `;

// const Needle = styled.div`
//   position: absolute;
//   bottom: 50%;
//   left: 50%;
//   width: ${({ thickness }) => thickness}px;
//   height: ${({ length }) => length};
//   background: ${({ color }) => color};
//   transform-origin: bottom center;
//   transition: transform 0.6s cubic-bezier(0.42, 0, 0.58, 1); /* Adjusted transition */
//   z-index: 2;
// `;

// const SecondsNeedle = styled(Needle)`
//   transform: ${({ seconds }) => `rotate(${seconds * 6}deg)`};
// `;

// const MinutesNeedle = styled(Needle)`
//   height: ${({ length }) => length};
//   background: ${({ color }) => color};
//   transform: ${({ minutes }) => `rotate(${minutes * 6}deg)`};
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-top: 60px;
//   margin-bottom: 40px;
// `;

// const Button = styled.button`
//   padding: 15px 30px;
//   border: none;
//   border-radius: 8px;
//   color: white;
//   cursor: pointer;
//   font-size: 18px;
//   font-family: Arial, sans-serif;
//   &:hover {
//     opacity: 0.8;
//   }
// `;

// const StartButton = styled(Button)`
//   background-color: ${({ active }) => (active ? '#f0ad4e' : '#5cb85c')};
// `;

// const StopButton = styled(Button)`
//   background-color: #d9534f;
// `;

// const RestartButton = styled(Button)`
//   background-color: #5bc0de;
// `;

// const DigitalDisplay = styled.div`
//   font-size: 40px;
//   font-weight: bold;
//   margin-top: 20px;
//   color: white;
// `;

// const BigButton = styled.div`
//   position: absolute;
//   width: 10px;
//   height: 15px;
//   background-color: #61dafb;
//   top: 21%;
//   right: 49.8%;
// `;

// const SmallButton1 = styled.div`
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   background-color: #61dafb;
//   top: 22%;
//   right: 51.1%;
//   transform: rotate(-15deg);
// `;

// const SmallButton2 = styled.div`
//   position: absolute;
//   width: 10px;
//   height: 10px;
//   background-color: #61dafb;
//   top: 22%;
//   right: 48.5%;
//   transform: rotate(15deg);
// `;

// const Stopwatch = () => {
//   const [milliseconds, setMilliseconds] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [isActive, setIsActive] = useState(false);
//   const intervalRef = useRef(null);

//   const startStopwatch = () => {
//     setIsActive(true);
//     intervalRef.current = setInterval(() => {
//       setMilliseconds((prev) => prev + 10);
//     }, 10);
//   };

//   const restartStopwatch = () => {
//     setIsActive(false);
//     clearInterval(intervalRef.current);
//     setMilliseconds(0);
//     setSeconds(0);
//     setMinutes(0);
//   };

//   const handleStartPause = () => {
//     setIsActive((prev) => !prev);
//   };

//   const handleStop = () => {
//     restartStopwatch();
//   };

//   const handleRestart = () => {
//     restartStopwatch();
//     startStopwatch();
//   };

//   useEffect(() => {
//     if (isActive) {
//       intervalRef.current = setInterval(() => {
//         setMilliseconds((prev) => prev + 10);
//       }, 10);
//     } else {
//       clearInterval(intervalRef.current);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [isActive]);

//   useEffect(() => {
//     if (milliseconds >= 1000) {
//       setSeconds((prev) => prev + 1);
//       setMilliseconds(0);
//     }
//     if (seconds >= 60) {
//       setMinutes((prev) => prev + 1);
//       setSeconds(0);
//     }
//   }, [milliseconds, seconds]);

//   const formatTime = (time) => {
//     const mins = Math.floor(time / (60 * 1000));
//     const secs = Math.floor((time % (60 * 1000)) / 1000);
//     const millisecs = Math.floor((time % 1000) / 10);
//     return `${mins}:${secs < 10 ? '0' : ''}${secs}.${millisecs < 10 ? '0' : ''}${millisecs}`;
//   };

//   const renderGraduations = () => {
//     const graduations = [];
//     for (let i = 0; i < 60; i++) {
//       graduations.push(
//         <GraduationsContainer key={i} index={i}>
//           <Graduation size={(i === 0 || i === 15 || i === 30 || i === 45) ? 'large' : 'small'} />
//         </GraduationsContainer>
//       );
//     }
//     return graduations;
//   };

//   return (
//     <Container>
//       <Clock>
//         {renderGraduations()}
//         <SecondsNeedle seconds={seconds} length="45%" thickness={2} color="#61dafb" />
//         <MinutesNeedle minutes={minutes} length="35%" thickness={4} color="#21a1f1" />
//       </Clock>
//       <BigButton />
//       <SmallButton1 />
//       <SmallButton2 />
//       <ButtonContainer>
//         <StartButton active={isActive} onClick={handleStartPause}>
//           {isActive ? 'Pause' : 'Start'}
//         </StartButton>
//         <StopButton onClick={handleStop}>Stop</StopButton>
//         {!(milliseconds === 0 && seconds === 0 && minutes === 0) && (
//           <RestartButton onClick={handleRestart}>Restart</RestartButton>
//         )}
//       </ButtonContainer>
//       <DigitalDisplay>
//         {formatTime(minutes * 60 * 1000 + seconds * 1000 + milliseconds)}
//       </DigitalDisplay>
//     </Container>
//   );
// };

// export default Stopwatch;
