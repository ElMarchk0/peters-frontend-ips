import { useQuery } from "@tanstack/react-query";
import { getLabelData, getMemberData } from ".././utils";

const SearchForm = ({ handleSubmit }) => {
  // get member data
  const { data: memberData } = useQuery(["memberData"], () => getMemberData());

  // get label data
  const { data: labelData } = useQuery(["labelData"], () => getLabelData());

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Search" name="searchForm" />
      <button type="submit">Search</button>
      <br />
      <select name="memberForm">
        <option value="">All Members</option>
        {memberData?.map((member) => (
          <option key={member.member_id} value={member.member_id}>
            {member.member_name}
          </option>
        ))}
      </select>
      <select name="labelForm">
        <option value="">All Labels</option>
        {labelData?.map((label) => (
          <option key={label.label_id} value={label.label_id}>
            {label.label_name}
          </option>
        ))}
      </select>
    </form>
  );
};
export default SearchForm;
