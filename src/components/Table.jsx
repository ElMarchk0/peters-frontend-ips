import TableRow from "./TableRow";

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
          <th>Card Members</th>
          <th>Card Labels</th>
          <th>Card Actions</th>
          <th>Most Recent Action</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((card) => (
          <TableRow key={card.card_id} card={card} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
