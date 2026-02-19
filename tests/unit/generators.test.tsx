import { render, screen } from "@testing-library/react";

import { generateLinkText } from "@/utils/generators";
import { LINK_TYPES, type ProjectLink } from "@/types";

describe("generateLinkText", () => {
  it("renders external links with target and rel", () => {
    const link: ProjectLink = {
      type: LINK_TYPES.REPOSITORY,
      text: "View on GitHub",
      link: "https://github.com/example/repo",
    };

    render(generateLinkText(link));

    const anchor = screen.getByRole("link", { name: /view on github/i });
    expect(anchor).toHaveAttribute("href", "https://github.com/example/repo");
    expect(anchor).toHaveAttribute("target", "_blank");
    expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
    expect(anchor).not.toHaveAttribute("download");
  });

  it("renders download links with download attribute", () => {
    const link: ProjectLink = {
      type: LINK_TYPES.DOWNLOAD,
      text: "Download Zip",
      link: "/downloads/file.zip",
    };

    render(generateLinkText(link));

    const anchor = screen.getByRole("link", { name: /download zip/i });
    expect(anchor).toHaveAttribute("href", "/downloads/file.zip");
    expect(anchor).toHaveAttribute("download");
    expect(anchor).not.toHaveAttribute("target");
    expect(anchor).not.toHaveAttribute("rel");
  });
});
