import { experiences, process as processSteps, projects, services } from "./portfolio";

/**
 * Everything in the "My progress" section is derived from data that already exists in
 * portfolio.ts (projects, experiences, services, process). Nothing here is invented:
 * no percentages, no extra dates, no extra achievements.
 */

export interface WorkRef {
  id: string;
  company: string;
  role: string;
  period: string;
}
export interface ProjectRef {
  id: string;
  name: string;
  year: string;
}
export interface GrowthSkill {
  name: string;
  summary: string | null;
  projects: ProjectRef[];
  work: WorkRef[];
  /** Ids of timeline entries this skill appears in. */
  relatedIds: string[];
}
export interface GrowthTrack {
  id: string;
  label: string;
  blurb: string;
  skills: GrowthSkill[];
}
export interface TimelineItem {
  id: string;
  kind: "Role" | "Project";
  year: string;
  title: string;
  meta: string;
  href: string;
  current: boolean;
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const serviceDesc = (name: string) => services.find((s) => s.name === name)?.desc ?? null;
const stepDesc = (title: string) => processSteps.find((s) => s.title === title)?.desc ?? null;

function projectMatches(key: string) {
  return projects.filter((p) =>
    [...p.tech, ...p.tags, ...p.deliverables].some((item) => norm(item).startsWith(key))
  );
}
function workMatches(key: string) {
  return experiences.filter((e) => {
    const parts = e.role.split("&").map(norm);
    const text = norm([e.role, e.description, ...e.highlights].join(" "));
    return parts.some((p) => p.startsWith(key)) || text.includes(key);
  });
}

/** keys: normalized keywords searched in existing project and work text. Empty = no evidence in the data. */
function skill(name: string, keys: string[], summary: string | null): GrowthSkill {
  const ps = keys.length ? [...new Map(keys.flatMap(projectMatches).map((p) => [p.id, p])).values()] : [];
  const ws = keys.length ? [...new Map(keys.flatMap(workMatches).map((w) => [w.company, w])).values()] : [];
  const projectRefs = ps.map((p) => ({ id: p.id, name: p.name, year: p.year }));
  const workRefs = ws.map((w) => ({ id: `role-${slug(w.company)}`, company: w.company, role: w.role, period: w.period }));
  return {
    name,
    summary,
    projects: projectRefs,
    work: workRefs,
    relatedIds: [...projectRefs.map((p) => `project-${p.id}`), ...workRefs.map((w) => w.id)],
  };
}

export const projectTotal = projects.length;

export const tracks: GrowthTrack[] = [
  {
    id: "design",
    label: "Design",
    blurb: "Wireframes, user flows, and high-fidelity interfaces designed in Figma.",
    skills: [
      skill("Figma", ["figma"], stepDesc("Design")),
      skill("UI/UX Design", ["uiux"], serviceDesc("UI/UX Design")),
      skill("Web Design", ["website"], serviceDesc("Web Design")),
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    blurb: "Interfaces built with HTML, CSS, JavaScript, React, and Next.js.",
    skills: [
      skill("HTML", [], null),
      skill("CSS", [], null),
      skill("JavaScript", [], null),
      skill("React", ["react"], stepDesc("Build")),
      skill("Next.js", [], stepDesc("Build")),
      skill("Frontend Development", ["frontend"], serviceDesc("Frontend Development")),
      skill("Responsive Web Development", ["responsive"], serviceDesc("Responsive Web Development")),
    ],
  },
  {
    id: "backend",
    label: "Backend",
    blurb: "Web applications with a Node.js and Express backend.",
    skills: [
      skill("Node.js", ["nodejs"], stepDesc("Build")),
      skill("Express.js", ["express"], null),
      skill("Fullstack Development", ["fullstack"], serviceDesc("Fullstack Development")),
    ],
  },
];

const yearOf = (s: string) => s.match(/\d{4}/)?.[0] ?? "";

export const timeline: TimelineItem[] = [
  ...experiences.map((e) => ({
    id: `role-${slug(e.company)}`,
    kind: "Role" as const,
    year: yearOf(e.period),
    title: e.company,
    meta: `${e.role}, ${e.period}`,
    href: "#experience",
    current: /present/i.test(e.period),
  })),
  ...projects.map((p) => ({
    id: `project-${p.id}`,
    kind: "Project" as const,
    year: p.year,
    title: p.name,
    meta: p.type,
    href: "#projects",
    current: false,
  })),
].sort((a, b) => a.year.localeCompare(b.year) || (a.kind === b.kind ? 0 : a.kind === "Role" ? -1 : 1));

export const timelineYears = [...new Set(timeline.map((t) => t.year))];
