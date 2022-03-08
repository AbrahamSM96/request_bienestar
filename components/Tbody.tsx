import Tr from "./Tr";

interface props {
  resultSearcher: [];
}

export default function Tbody({ resultSearcher }: props) {
  return (
    <tbody>
      {resultSearcher.map((tuple: any, index: Number) => {
        return (
          <Tr key={`tuple-${tuple.id}-${index}`} {...tuple} index={index} />
        );
      })}
    </tbody>
  );
}
