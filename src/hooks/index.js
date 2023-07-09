import { useState } from "react";

export const useSearchQuery = () => {
  const [query, setQuery] = useState("");
  const [member, setMember] = useState("");
  const [label, setLabel] = useState("");

  // Handle form data submission and set values for query, member, and label
  const handleSubmit = (e) => {
    e.preventDefault();
    const { searchForm, memberForm, labelForm } = Object.fromEntries(
      new FormData(e.target)
    );

    setQuery(searchForm);
    setMember(memberForm);
    setLabel(labelForm);
  };

  return {
    query,
    label,
    member,
    handleSubmit,
    setQuery,
  };
};
