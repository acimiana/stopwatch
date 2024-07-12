import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  Clock,
  Graduation,
  GraduationsContainer,
  SecondsNeedle,
  MinutesNeedle,
  ButtonContainer,
  StartButton,
  StopButton,
  RestartButton,
  DigitalDisplay,
  BigButton,
  SmallButton1,
  SmallButton2,
  SmallCircle,
  NewButtonsContainer
} from './StyledComponents';

// SWITCH ABSOLUTE POSITIONING TO RELATIVE
// SWITCH FROM STYLED TO CSS
// TRY TO DISABLE RESTART BUTTON WHEN TIMER IS RUNNING

const Stopwatch = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    setIsActive(true);
    intervalRef.current = setInterval(() => {
      setMilliseconds((prev) => prev + 10);
    }, 10);
  };

  const restartStopwatch = () => {
    setIsActive(false);
    clearInterval(intervalRef.current);
    setMilliseconds(0);
    setSeconds(0);
    setMinutes(0);
  };

  const handleStartPause = () => {
    setIsActive((prev) => !prev);
  };

  const handleStop = () => {
    restartStopwatch();
  };

  const handleRestart = () => {
    restartStopwatch();
    startStopwatch();
  };

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setMilliseconds((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  useEffect(() => {
    if (milliseconds >= 1000) {
      setSeconds((prev) => prev + 1);
      setMilliseconds(0);
    }
    if (seconds >= 60) {
      setMinutes((prev) => prev + 1);
      setSeconds(0);
    }
  }, [milliseconds, seconds]);

  const formatTime = (time) => {
    const mins = Math.floor(time / (60 * 1000));
    const secs = Math.floor((time % (60 * 1000)) / 1000);
    const millisecs = Math.floor((time % 1000) / 10);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}.${millisecs < 10 ? '0' : ''}${millisecs}`;
  };

  const renderGraduations = () => {
    const graduations = [];
    for (let i = 0; i < 60; i++) {
      graduations.push(
        <GraduationsContainer key={i} index={i}>
          <Graduation size={(i === 0 || i === 15 || i === 30 || i === 45) ? 'large' : 'small'} />
        </GraduationsContainer>
      );
    }
    return graduations;
  };

  return (
    <Container>
      <NewButtonsContainer>
        <BigButton onClick={handleStartPause} />
        <SmallButton1 onClick={handleStop} />
        <SmallButton2 onClick={handleRestart} />
      </NewButtonsContainer>
      <Clock>
        {renderGraduations()}
        <SecondsNeedle seconds={seconds} length="45%" thickness={2} color="#61dafb" />
        <MinutesNeedle minutes={minutes} length="35%" thickness={4} color="#21a1f1" />
        <SmallCircle />
      </Clock>
      <ButtonContainer>
        <StartButton active={isActive} onClick={handleStartPause}>
          {isActive ? 'Pause' : 'Start'}
        </StartButton>
        <StopButton onClick={handleStop}>Stop</StopButton>
        {!(milliseconds === 0 && seconds === 0 && minutes === 0) && (
          <RestartButton onClick={handleRestart}>Restart</RestartButton>
        )}
      </ButtonContainer>
      <DigitalDisplay>
        {formatTime(minutes * 60 * 1000 + seconds * 1000 + milliseconds)}
      </DigitalDisplay>
    </Container>
  );
};

export default Stopwatch;
