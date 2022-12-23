import { render, screen } from "@testing-library/react";

import Promotions from "./index";
import MOCK from "../../data/MOCK";

const getFirstProduct = MOCK.find((promotion) => promotion.id === "PROMO_1");

describe("Promotions", () => {
  it("should start without any promotions listed", async () => {
    render(<Promotions />);
    const loader = await screen.findByTestId("loader");
    expect(loader).toBeInTheDocument();
  });

  it("should render a list of products", async () => {
    render(<Promotions />);

    const images = await screen.findAllByAltText(/^Promotion/i);
    const titles = await screen.findAllByText(/^Promotion/i);
    const descriptions = await screen.findAllByText(
      /^Lorem ipsum dolor sit amet/i,
    );

    expect(images).toHaveLength(10);
    expect(titles).toHaveLength(10);
    expect(descriptions).toHaveLength(10);
  });

  it("should render a specific product", async () => {
    render(<Promotions />);

    const image = await screen.findByAltText(getFirstProduct.name);
    const title = await screen.findByText(getFirstProduct.name);

    expect(image).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
