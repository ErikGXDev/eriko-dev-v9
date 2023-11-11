import type { CollectionEntry } from "astro:content";

export function getUniqueTags(posts: CollectionEntry<"projects">[]) {
  const tags: string[] = [];

  posts.forEach((p) => {
    p.data.tags.forEach((tag) => {
      if (!tags.includes(tag) && tag != "all") {
        tags.push(tag);
      }
    });
  });

  return tags;
}

export function toTitleCase(s: string) {
  const part1 = s.slice(0, 1);
  const part2 = s.slice(1);

  return part1.toUpperCase() + part2;
}
