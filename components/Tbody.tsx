import Tr from "./Tr";

export default function Tbody({ resultSearcher }) {
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
