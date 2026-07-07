import { describe, expect, it } from "vitest";
import {
  groupPublicationsByYear,
  selectFeaturedProjects,
  selectFeaturedPublications,
  selectPeopleSnapshot
} from "./content";
import type { Person, Publication } from "../types";

describe("content helpers", () => {
  it("limits featured projects on the homepage", () => {
    const entries = [1, 2, 3, 4].map((index) => ({
      data: { featured: true, order: index }
    }));

    expect(selectFeaturedProjects(entries as never[], 3)).toHaveLength(3);
    expect(selectFeaturedProjects(entries as never[], 3)[0].data.order).toBe(1);
  });

  it("keeps the lab lead in the people snapshot", () => {
    const people: Person[] = [
      { name: "Student A", role: "Student", group: "student", order: 4 },
      { name: "Lead", role: "Director", group: "lead", order: 2 },
      { name: "Researcher", role: "Scientist", group: "researcher", order: 3 },
      { name: "Student B", role: "Student", group: "student", order: 5 }
    ];

    const snapshot = selectPeopleSnapshot(people, 3);

    expect(snapshot).toHaveLength(3);
    expect(snapshot[0].group).toBe("lead");
  });

  it("caps featured publications and sorts by most recent year", () => {
    const publications: Publication[] = [
      { title: "A", authors: ["X"], venue: "V", year: 2024, featured: true },
      { title: "B", authors: ["X"], venue: "V", year: 2026, featured: true },
      { title: "C", authors: ["X"], venue: "V", year: 2025, featured: false },
      { title: "D", authors: ["X"], venue: "V", year: 2025, featured: true }
    ];

    const selected = selectFeaturedPublications(publications, 2);

    expect(selected).toHaveLength(2);
    expect(selected.map((entry) => entry.title)).toEqual(["B", "D"]);
  });

  it("groups publications by year", () => {
    const grouped = groupPublicationsByYear([
      { title: "B", authors: ["X"], venue: "V", year: 2025 },
      { title: "A", authors: ["X"], venue: "V", year: 2025 },
      { title: "C", authors: ["X"], venue: "V", year: 2024 }
    ]);

    expect(Object.keys(grouped)).toEqual(["2024", "2025"]);
    expect(grouped["2025"].map((entry) => entry.title)).toEqual(["A", "B"]);
  });
});

