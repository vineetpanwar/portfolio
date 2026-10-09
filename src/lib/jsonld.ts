import { site } from "@/content/site";
import { experience, education } from "@/content/experience";
import { caseStudies } from "@/content/caseStudies";
import { skillGroups } from "@/content/skills";

// schema.org Person + project list so AI agents extract clean, structured facts.
export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: site.summary,
    email: `mailto:${site.email}`,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    sameAs: [site.links.github, site.links.linkedin, site.links.heyfurnish],
    knowsAbout: skillGroups.flatMap((g) => g.items),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: education.school,
    },
    worksFor: {
      "@type": "Organization",
      name: experience[0].company,
    },
    hasOccupation: experience.map((role) => ({
      "@type": "Occupation",
      name: role.title,
      occupationLocation: { "@type": "Place", name: role.location },
      description: `${role.title} at ${role.company} (${role.period}): ${role.summary}`,
    })),
  };
}

export function projectsJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Selected engineering work — Vineet Panwar",
    itemListElement: caseStudies.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: c.title,
        headline: c.oneLiner,
        about: c.tags.join(", "),
        url: `${site.url}/work/${c.slug}`,
        author: { "@type": "Person", name: site.name },
      },
    })),
  };
}
