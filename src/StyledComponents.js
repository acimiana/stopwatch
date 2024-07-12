import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c34;
  font-family: Arial, sans-serif;
  padding: 20px;
  position: relative;
`;

export const Clock = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border: 7px solid #61dafb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  background: radial-gradient(circle, #111 80%, #282c34 70%);
`;

export const Graduation = styled.div`
  position: absolute;
  width: 2px;
  height: ${({ size }) => (size === 'large' ? '15px' : '8px')};
  background-color: #61dafb;
  transform-origin: 50% 100%;
  left: 50%;
  bottom: 6px;
`;

export const GraduationsContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(${({ index }) => index * 6}deg);
`;

export const Needle = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: ${({ thickness }) => thickness}px;
  height: ${({ length }) => length};
  background: ${({ color }) => color};
  transform-origin: bottom center;
  transition: transform 0.6s cubic-bezier(0.42, 0, 0.58, 1);
  z-index: 2;
`;

export const SecondsNeedle = styled(Needle)`
  transform: ${({ seconds }) => `rotate(${seconds * 6}deg)`};
`;

export const MinutesNeedle = styled(Needle)`
  height: ${({ length }) => length};
  background: ${({ color }) => color};
  transform: ${({ minutes }) => `rotate(${minutes * 6}deg)`};
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 40px;
`;

export const Button = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-family: Arial, sans-serif;
  &:hover {
    opacity: 0.8;
  }
`;

export const StartButton = styled(Button)`
  background-color: ${({ active }) => (active ? '#f0ad4e' : '#5cb85c')};
`;

export const StopButton = styled(Button)`
  background-color: #d9534f;
`;

export const RestartButton = styled(Button)`
  background-color: #5bc0de;
`;

export const DigitalDisplay = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-top: 20px;
  color: white;
`;

export const NewButtonsContainer = styled.div`
  position: relative;
  height: 20px; 
  width: 100%; 
  z-index: 10;
`;

export const BigButton = styled.div`
  position: absolute;
  cursor: pointer;
  width: 10px;
  height: 30px;
  background-color: #61dafb;
  top: -16%;
  right: calc(49.8%);
`;

export const SmallButton1 = styled.div`
  position: absolute;
  cursor: pointer;
  width: 10px;
  height: 15px;
  background-color: #61dafb;
  top: 60%;
  left: 48%;
  transform: rotate(-15deg);
`;

export const SmallButton2 = styled.div`
  position: absolute;
  cursor: pointer;
  width: 10px;
  height: 15px;
  background-color: #61dafb;
  top: 60%;
  right: 48.1%;
  transform: rotate(15deg);
`;

export const SmallCircle = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #61dafb;
  top: 50%;
  left: 48.8%;
`;
