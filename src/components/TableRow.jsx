const TableRow = ({ card }) => {
  let mostRecentActionDate = new Date(
    card.action[card.action.length - 1]?.date
  ).toDateString();

  let cardDuration = card.duration;

  if (mostRecentActionDate === "Invalid Date") {
    mostRecentActionDate = "";
  }

  if (cardDuration) {
    cardDuration = `${cardDuration} days`;
  }

  return (
    <tr key={card.card_id}>
      <td>{card.name}</td>
      <td>{card.description}</td>
      <td>{card.members.map((member) => member.member_name).join(", ")}</td>
      <td>{card.labels.map((label) => label.label_name).join(", ")}</td>
      <td>{card.action[card.action.length - 1]?.list_after}</td>
      <td>{mostRecentActionDate}</td>
      <td>{cardDuration}</td>
    </tr>
  );
};

export default TableRow;
