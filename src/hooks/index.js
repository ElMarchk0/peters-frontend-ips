import { useState } from "react";

export const useSearchQuery = () => {
  const [query, setQuery] = useState("");
  const [member, setMember] = useState("");
  const [label, setLabel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { searchForm, memberForm, labelForm } = Object.fromEntries(
      new FormData(e.target)
    );

    // access value from select in searchForm

    console.log(labelForm);
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
