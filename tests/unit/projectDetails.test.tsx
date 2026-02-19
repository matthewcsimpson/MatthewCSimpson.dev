import { render, screen } from "@testing-library/react";

import ProjectDetails from "@/components/ProjectDetails";

describe("ProjectDetails", () => {
  it("renders markdown content when longDescription is provided", () => {
    render(
      <ProjectDetails
        title="Test Project"
        description="Fallback description"
        imageSrc="/images/test.png"
        longDescription={[
          "## Test Heading\n\n- Item one\n\n[Docs](https://example.com)",
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Project Overview" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Test Heading" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Docs" })).toHaveAttribute(
      "href",
      "https://example.com",
    );
    expect(screen.getByText("Item one")).toBeInTheDocument();
  });

  it("falls back to description when longDescription is missing", () => {
    render(
      <ProjectDetails
        title="Fallback Project"
        description="This is fallback text"
        imageSrc="/images/fallback.png"
      />,
    );

    expect(screen.getByText("This is fallback text")).toBeInTheDocument();
  });
});
