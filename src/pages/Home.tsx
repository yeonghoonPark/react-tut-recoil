import { useRecoilState, useRecoilValue } from "recoil";
import { textCountState, textState } from "../recoil/state";

export default function Home() {
    const [text, setText] = useRecoilState(textState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const textCount = useRecoilValue(textCountState);

    return (
        <>
            <input type="text" value={text} onChange={handleChange} />
            <br />
            Echo: {text}
            <br />
            Text Count : {textCount}
        </>
    );
}
