const Table = ({ data, isLoading }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Card Name</th>
          <th>Card Description</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((card) => (
          <tr key={card.card_id}>
            <td>{card.name}</td>
            <td>{card.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
