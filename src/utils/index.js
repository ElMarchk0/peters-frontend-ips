import axios from "axios";

// Return cards, members, actions, labels
const API_URL_CARD_DATA = "http://127.0.0.1:8000/api/cards/";
const API_URL_MEMBER_DATA = "http://127.0.0.1:8000/api/members/";
const API_URL_LABEL_DATA = "http://127.0.0.1:8000/api/labels/";
const API_URL_ACTION_DATA = "http://127.0.0.1:8000/api/cards/";
// Return all cards for an action
const API_URL_CARD_BY_ACTION_DATA = "http://127.0.0.1:8000/api/action_cards";
// Return all actions for a card
const API_URL_ACTION_BY_CARD_DATA = "http://127.0.0.1:8000/api/card_actions";

// Search for cards, members, actions, and labels.
// If the query, label_id, or/and member_id is blank an empty string then all items under each category is returned
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

export const getMemberData = async (query, memberId, cardId) => {
  const { data } = await axios.get(API_URL_MEMBER_DATA, {
    params: {
      search: query,
      member_id: memberId,
      cards__card_id: cardId,
    },
  });
  return data;
};

export const getLabelData = async (query, labelId, cardId) => {
  const { data } = await axios.get(API_URL_LABEL_DATA, {
    params: {
      search: query,
      label_id: labelId,
      cards__card_id: cardId,
    },
  });

  return data;
};

export const getActionData = async (query, actionId, cardId) => {
  const { data } = await axios.get(API_URL_ACTION_DATA, {
    params: {
      search: query,
      action_id: actionId,
      cards__card_id: cardId,
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
