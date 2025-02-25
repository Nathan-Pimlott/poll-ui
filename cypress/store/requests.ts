import { mockPoll, mockPolls } from "../mock";

export const getPolls = () => {
  cy.intercept(
    {
      method: "GET",
      url: "/api/polls",
    },
    mockPolls,
  ).as("getPolls");
};

export const getPoll = () => {
  cy.intercept(
    {
      method: "GET",
      url: "/api/poll/8a81658c-04e0-4d9e-a010-59a624f556ec",
    },
    mockPoll,
  ).as("getPoll");
};

export const createPollVote = () => {
  cy.intercept(
    {
      method: "POST",
      url: "/api/vote",
    },
    { statusCode: 201 },
  ).as("createPollVote");
};
