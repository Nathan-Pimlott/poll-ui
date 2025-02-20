import * as _ from "lodash";

import { selectors } from "../store/selectors";

describe("Home page should render.", () => {
  it("Should render the home page", () => {
    cy.visit("/");
    cy.get(selectors.title).should("be.visible");
  });
});
