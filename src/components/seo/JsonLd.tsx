import { projects, socials } from "@/data/portfolio";
import { site } from "@/lib/site";

const personId = `${site.url}/#person`;
const websiteId = `${site.url}/#website`;

/** Escape characters that could break out of a <script> block. */
function serialize(data: unknown) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

function isRealUrl(url: string | null | undefined): url is string {
  return !!url && /^https:\/\//.test(url);
}

export function JsonLd() {
  const sameAs = socials.map((s) => s.href).filter(isRealUrl);

  const person = {
    "@type": "Person",
    "@id": personId,
    name: site.fullName,
    alternateName: site.name,
    url: site.url,
    jobTitle: site.jobTitle,
    description: site.description,
    image: `${site.url}/images/bryan-berlandro-portrait-about.jpeg`,
    homeLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressCountry: site.countryCode,
      },
    },
    knowsAbout: site.knowsAbout,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    name: `${site.fullName} Portfolio`,
    url: site.url,
    description: site.description,
    inLanguage: "en",
    author: { "@id": personId },
    publisher: { "@id": personId },
  };

  const works = projects.map((p) => ({
    "@type": "CreativeWork",
    "@id": `${site.url}/#project-${p.id}`,
    name: p.name,
    description: p.description,
    genre: p.type,
    dateCreated: p.year,
    keywords: p.tech.join(", "),
    image: `${site.url}${p.img}`,
    creator: { "@id": personId },
    isPartOf: { "@id": websiteId },
    ...(isRealUrl(p.liveUrl) ? { url: p.liveUrl } : {}),
  }));

  const graph = { "@context": "https://schema.org", "@graph": [person, website, ...works] };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialize(graph) }}
    />
  );
}
