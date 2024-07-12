import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;
`;

export const ClockContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 20px;
  overflow: hidden; /* Ensure the clock area clips the changing background */
`;

export const Clock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid rgba(97, 218, 251, 0.5); /* Transparent border */
  background-color: #fff; /* Initial background color */
  clip-path: ${({ clipPath }) => clipPath}; /* Clip the background dynamically */
`;

export const Dot = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: white;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

export const Dot15 = styled(Dot)`
  top: 24%; /* Adjusted for better positioning */
  left: 50%;
`;

export const Dot30 = styled(Dot)`
  top: 50%;
  left: 13%; /* Adjusted for better positioning */
`;

export const Dot45 = styled(Dot)`
  top: 76%; /* Adjusted for better positioning */
  left: 50%;
`;

export const Needle = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 2px;
  height: ${({ length }) => length};
  background: ${({ color }) => color};
  transform-origin: bottom center;
  transition: transform 0.05s linear;
  animation: rotateNeedle 60s linear infinite; /* Animation for seconds needle */
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SecondsNeedle = styled(Needle)`
  transform: ${({ seconds }) => `rotate(${seconds * 6}deg)`};
  animation-name: ${rotateAnimation}; /* Apply animation */
`;

export const MinutesNeedle = styled(Needle)`
  height: 40%;
  background: #21a1f1;
  transform: ${({ minutes }) => `rotate(${minutes * 6}deg)`};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 16px;
  &:hover {
    opacity: ${({ disabled }) => (disabled ? '1' : '0.8')};
  }
`;

export const StartButton = styled(Button)`
  background-color: ${({ active }) => (active ? 'yellow' : 'green')};
`;

export const StopButton = styled(Button)`
  background-color: red;
`;

export const ResetButton = styled(Button)`
  background-color: blue;
`;

export const DigitalDisplay = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin-top: 20px;
  color: white;
`;
