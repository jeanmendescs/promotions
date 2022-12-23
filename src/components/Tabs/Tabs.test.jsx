import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MOCK from "../../data/MOCK";
import App from "../../App";
import getPromotion from "../../utils/get-promotion";

const promotionTwo = getPromotion("PROMO_2", MOCK);
const promotionFive = getPromotion("PROMO_5", MOCK);

describe("Tabs", () => {
  it("should render two tabs", async () => {
    render(<App />);

    const promotionsTab = screen.getByRole("button", {
      name: /All Promotions/i,
    });
    const customersTab = screen.getByRole("button", {
      name: /New Customers/i,
    });

    expect(promotionsTab).toBeInTheDocument();
    expect(customersTab).toBeInTheDocument();
  });

  it("should render 'PROMO_2' product to new customers", async () => {
    render(<App />);

    const customersTab = screen.getByRole("button", {
      name: /New Customers/i,
    });
    const image = await screen.findByAltText(promotionTwo.name);
    const title = await screen.findByText(promotionTwo.name);

    userEvent.click(customersTab);
    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  it("should not render 'PROMO_5' product to new customers", async () => {
    render(<App />);

    const customersTab = screen.getByRole("button", {
      name: /New Customers/i,
    });
    const image = screen.queryByAltText(promotionFive.name);
    const title = screen.queryByText(promotionFive.name);

    userEvent.click(customersTab);

    expect(image).not.toBeInTheDocument();
    expect(title).not.toBeInTheDocument();
  });

  it("should render 'PROMO_2' after changing from new customers list to all promotions list", async () => {
    render(<App />);

    const customersTab = screen.getByRole("button", {
      name: /New Customers/i,
    });
    const promotionsTab = screen.getByRole("button", {
      name: /All Promotions/i,
    });

    const image = await screen.findByAltText(promotionTwo.name);
    const title = await screen.findByText(promotionTwo.name);

    userEvent.click(customersTab);
    userEvent.click(promotionsTab);

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
