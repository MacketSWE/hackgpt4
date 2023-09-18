import { gql } from "@apollo/client";

export const GET_EVENTS = gql`
  query Events {
    events(order_by: { createdAt: desc }) {
      id
      baby
      type
      comment
      foodTime
      createdAt
      sleepEndTime
      sleepStartTime
    }
  }
`;

export const GET_LATEST_EVENT = gql`
  query LatestEvent {
    events(order_by: { createdAt: desc }, limit: 1) {
      id
      baby
      type
      comment
      foodTime
      createdAt
      sleepEndTime
      sleepStartTime
    }
  }
`;

export const ADD_EAT_EVENT = gql`
  mutation AddEatEvent($baby: uuid, $type: String!, $foodTime: numeric) {
    insert_events(
      objects: [{ baby: $baby, type: $type, foodTime: $foodTime }]
    ) {
      returning {
        id
      }
    }
  }
`;

export const ADD_SLEEP_EVENT = gql`
  mutation AddSleepEvent(
    $baby: uuid
    $type: String!
    $sleepStartTime: numeric
  ) {
    insert_events(
      objects: [{ baby: $baby, type: $type, sleepStartTime: $sleepStartTime }]
    ) {
      returning {
        id
      }
    }
  }
`;

export const ADD_SLEEP_END_TIME = gql`
  mutation ($id: uuid, $sleepEndTime: numeric) {
    update_events(
      where: { id: { _eq: $id } }
      _set: { sleepEndTime: $sleepEndTime }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`;

export const ADD_EVENT_COMMENT = gql`
  mutation ($id: uuid, $comment: String!) {
    update_events(where: { id: { _eq: $id } }, _set: { comment: $comment }) {
      affected_rows
      returning {
        id
        comment
      }
    }
  }
`;

export const UPDATE_SLEEP_START_TIME = gql`
  mutation ($id: uuid, $sleepStartTime: numeric) {
    update_events(where: { id: { _eq: $id } }, _set: { sleepStartTime: $sleepStartTime }) {
      affected_rows
      returning {
        id
        sleepStartTime
      }
    }
  }
`;

export const UPDATE_SLEEP_END_TIME = gql`
  mutation ($id: uuid, $sleepEndTime: numeric) {
    update_events(where: { id: { _eq: $id } }, _set: { sleepEndTime: $sleepEndTime }) {
      affected_rows
      returning {
        id
        sleepEndTime
      }
    }
  }
`;

export const UPDATE_FOOD_TIME = gql`
  mutation ($id: uuid, $foodTime: numeric) {
    update_events(where: { id: { _eq: $id } }, _set: { foodTime: $foodTime }) {
      affected_rows
      returning {
        id
        foodTime
      }
    }
  }
`;
