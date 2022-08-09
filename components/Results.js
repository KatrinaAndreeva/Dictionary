import Result from './Result';
import data from '../words.json';

export default function Results() {
  return (
    <div className="relative grid w-full h-auto grid-cols-4 gap-2 px-3 mx-auto ">
      {data.map((word) => (
        <Result
          key={word.id}
          title={word.title}
          correctWord={word.correctWord}
          id={word.id}
        />
      ))}
    </div>
  );
}
