export default function ListValues({ point, paddingYSize }) {
  // check to see if the item is another array
  const element =
    typeof point === "object" ? (
      <li className={`w-full py-${paddingYSize}`}>
        {point.map((point, idx) => (
          <div key={idx}>{point}</div>
        ))}
      </li>
    ) : (
      <li className={`w-full py-${paddingYSize}`}>{point}</li>
    );
  return element;
}
