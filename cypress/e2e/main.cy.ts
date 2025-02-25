import * as _ from "lodash";

import {
  homeSelectors,
  pollResultSelectors,
  pollSelectors,
} from "../store/selectors";
import { createPollVote, getPoll, getPolls } from "../store/requests";

describe("Home page tests.", () => {
  it("Should render the home page", () => {
    getPolls();
    cy.visit("/");
    cy.wait("@getPolls");
    cy.get(homeSelectors.title).should("be.visible");
    cy.get(homeSelectors.subtitle).should("be.visible");
    cy.get(homeSelectors.table).should("be.visible");
    cy.get(homeSelectors.tableRow).should("be.visible");
  });
});
describe("Viewing and adding polls.", () => {
  it("Should go to a poll when clicked", () => {
    getPolls();
    getPoll();
    cy.visit("/");
    cy.wait("@getPolls");
    cy.get(homeSelectors.tableRow).click();
    cy.wait("@getPoll");
    cy.get(pollSelectors.headerText).should("be.visible");
  });
  it("Should create a poll", () => {
    getPolls();
    getPoll();
    createPollVote();
    cy.visit("/");
    cy.wait("@getPolls");
    cy.get(homeSelectors.tableRow).click();
    cy.wait("@getPoll");
    cy.get(pollSelectors.pollOptionButton).click();
    cy.wait("@createPollVote");
    cy.get(pollResultSelectors.resultTitle).should("be.visible");
  });
});
