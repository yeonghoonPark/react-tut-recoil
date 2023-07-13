import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { hourSelector, minuteState } from '../recoil/state';

export default function Test() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+e.target.value);
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHours(Number(e.target.value));
  };

  useEffect(() => {
    console.log(minutes, '@minutes');
    console.log(hours, '@hours');
  }, [minutes, hours]);
  return (
    <div>
      <h5>Minutes</h5>
      <input type="number" value={minutes} onChange={handleMinuteChange} />
      <br />
      <h5>Hours</h5>
      <input type="number" value={hours} onChange={handleHourChange} />
    </div>
  );
}
