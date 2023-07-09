import axios from "axios";

// Return cards, members, actions, labels
const API_URL_CARD_DATA = "http://127.0.0.1:8000/api/cards/";
const API_URL_MEMBER_DATA = "http://127.0.0.1:8000/api/members/";
const API_URL_LABEL_DATA = "http://127.0.0.1:8000/api/labels/";
const API_URL_ACTION_DATA = "http://127.0.0.1:8000/api/cards/";
// Return cards for a member
const API_URL_CARD_BY_MEMBER_DATA = "http://127.0.0.1:8000/api/member_cards";
// Return cards for a label
const API_URL_CARD_BY_LABEL_DATA = "http://127.0.0.1:8000/api/label_cards";
// Return cards for an action
const API_URL_CARD_BY_ACTION_DATA = "http://127.0.0.1:8000/api/action_cards";
// Return all actions for a card
const API_URL_ACTION_BY_CARD_DATA = "http://127.0.0.1:8000/api/card_actions";

// Search for cards, members, actions, and labels.
// If the query is an empty string then all items under each category is returned
export const getCardData = async (query, memberId, labelId) => {
  const { data } = await axios.get(API_URL_CARD_DATA, {
    params: {
      search: query,
      members__member_id: memberId,
      labels__label_id: labelId,
    },
  });
  return data;
};

export const getMemberData = async (query) => {
  const { data } = await axios.get(API_URL_MEMBER_DATA, {
    params: {
      search: query,
    },
  });
  return data;
};

export const getLabelData = async (query) => {
  const { data } = await axios.get(API_URL_LABEL_DATA, {
    params: {
      search: query,
    },
  });

  return data;
};

export const getActionData = async (query) => {
  const { data } = await axios.get(API_URL_ACTION_DATA, {
    params: {
      search: query,
    },
  });

  return data;
};

// Return all cards for a specific member by member_id
export const getCardByMemberData = async (member_id) => {
  const { data } = await axios.get(API_URL_CARD_BY_MEMBER_DATA, {
    params: {
      member_id,
    },
  });

  return data;
};

// Return all cards for a specific label by label_id
export const getCardByLabelData = async (label_id) => {
  const { data } = await axios.get(API_URL_CARD_BY_LABEL_DATA, {
    params: {
      label_id,
    },
  });

  return data;
};

// Return all cards for a specific action by action_id
export const getCardByActionData = async (action_id) => {
  const { data } = await axios.get(API_URL_CARD_BY_ACTION_DATA, {
    params: {
      action_id,
    },
  });

  return data;
};

// Return all actions for a specific card by card_id
export const getActionByCardData = async (card_id) => {
  const { data } = await axios.get(API_URL_ACTION_BY_CARD_DATA, {
    params: {
      card_id,
    },
  });

  return data;
};
