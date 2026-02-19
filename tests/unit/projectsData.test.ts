import { projectsData } from "@/data";
import { LINK_TYPES } from "@/types";

describe("projectsData", () => {
  it("has unique project ids", () => {
    const ids = projectsData.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("has trimmed titles and descriptions", () => {
    projectsData.forEach((project) => {
      expect(project.title).toBe(project.title.trim());
      expect(project.description).toBe(project.description.trim());
    });
  });

  it("contains valid links for each project", () => {
    const validTypes = new Set(Object.values(LINK_TYPES));

    projectsData.forEach((project) => {
      expect(project.links.length).toBeGreaterThan(0);

      project.links.forEach((link) => {
        expect(validTypes.has(link.type)).toBe(true);
        expect(link.text.trim().length).toBeGreaterThan(0);
        expect(link.link.trim().length).toBeGreaterThan(0);
      });
    });
  });
});
