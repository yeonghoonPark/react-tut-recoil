import { useRecoilValue } from "recoil";
import { todoListStatsState } from "../../recoil/state";

export default function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUmcompltedNum, percentCompleted } =
    useRecoilValue(todoListStatsState);

  const formattedPercentCompleted = Math.round(percentCompleted * 100);

  const stats = [
    { text: "Total items", value: totalNum },
    { text: "Items completed", value: totalCompletedNum },
    { text: "Items uncompleted", value: totalUmcompltedNum },
    { text: "Percent completed", value: formattedPercentCompleted },
  ];

  return (
    <section>
      <ul>
        {stats.map(({ text, value }) => (
          <li key={text}>
            {`${text}: ${value}`} {value === formattedPercentCompleted && "%"}
          </li>
        ))}
      </ul>
    </section>
  );
}
