const Details = ({ items }) => {
  const numberOfItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberOfPacked / numberOfItems) * 100);

  return (
    <footer className="stats">
      {numberOfItems === 0 ? (
        "You have no item(s) on your list"
      ) : (
        <em>
          {percentage === 100
            ? "You got everything packed"
            : ` You have ${numberOfItems} item(s) on your list, and already packed${" "}
        ${numberOfPacked} item(s) ${percentage} %.`}
        </em>
      )}
    </footer>
  );
};

export default Details;
