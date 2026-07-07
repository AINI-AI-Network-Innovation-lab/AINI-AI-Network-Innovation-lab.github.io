import type { CollectionEntry } from "astro:content";
import type { Person, Publication } from "../types";

export function byOrder<T extends { data: { order: number } }>(entries: T[]) {
  return [...entries].sort((a, b) => a.data.order - b.data.order);
}

export function byDate<T extends { data: { date: Date } }>(entries: T[]) {
  return [...entries].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function selectFeaturedProjects(entries: CollectionEntry<"projects">[], limit = 3) {
  const featured = byOrder(entries).filter((entry) => entry.data.featured);
  return featured.slice(0, limit);
}

export function selectFeaturedNews(entries: CollectionEntry<"news">[], limit = 3) {
  return byDate(entries).slice(0, limit);
}

export function selectFeaturedPublications(entries: Publication[], limit = 5) {
  const featured = entries
    .filter((entry) => entry.featured)
    .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));
  return featured.slice(0, limit);
}

export function groupPublicationsByYear(entries: Publication[]) {
  return entries.reduce<Record<string, Publication[]>>((acc, entry) => {
    const key = String(entry.year);
    const current = acc[key] ?? [];
    current.push(entry);
    acc[key] = current.sort((a, b) => a.title.localeCompare(b.title));
    return acc;
  }, {});
}

export function sortPeople(entries: Person[]) {
  return [...entries].sort((a, b) => a.order - b.order);
}

export function selectPeopleSnapshot(entries: Person[], limit = 4) {
  const sorted = sortPeople(entries);
  const lead = sorted.find((entry) => entry.group === "lead");
  const others = sorted.filter((entry) => entry.group !== "lead").slice(0, Math.max(limit - 1, 0));
  return lead ? [lead, ...others] : sorted.slice(0, limit);
}

