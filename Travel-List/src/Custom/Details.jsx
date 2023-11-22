const Details = ({ items }) => {
  const numberOfItems = items.length;
  const numberOfPacked = items.filter((item) => item.packed).length;

  return (
    <footer className="stats">
      <em>
        You have {numberOfItems} item(s) on your list, and already packed{" "}
        {numberOfPacked} item(s).
      </em>
    </footer>
  );
};

export default Details;
