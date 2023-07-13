import { useRecoilState, useResetRecoilState } from 'recoil';
import { tempCState, tempFState } from '../recoil/state';

export default function Temp() {
  const [tempF, setTempF] = useRecoilState(tempFState);
  const [tempC, setTempC] = useRecoilState(tempCState);
  const resetTemp = useResetRecoilState(tempFState);

  const reset = () => resetTemp();

  const increseTempF = () => {
    setTempF((prev) => prev + 1);
  };
  const increseTempC = () => {
    setTempC((prev) => prev + 1);
  };

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <h2>화씨 : {tempF}</h2>
      <button onClick={increseTempF}>화씨 쁘라스 1</button>
      <h2>섭씨 : {tempC}</h2>
      <button onClick={increseTempC}>섭씨 쁘라스 1</button>
    </div>
  );
}
