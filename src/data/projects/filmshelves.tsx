export const filmShelvesProject = [
  `FilmShelves is a catalogue and collection tracker for physical media. I collect Blu-rays and 4K discs, and every tool I tried tracked _films_, not the specific editions sitting on my shelf: the label, the steelbook, the slipcover, which disc is region-locked. So I built one.

FilmShelves records releases the way collectors think about them. A film comes from TMDB, a release is a specific edition of it (format, region, distributor, barcode, and disc structure), and a copy is what you personally own, with its condition, purchase details, and lending history. The community catalogue now holds over 100,000 releases.

## Features

- **Community catalogue:** a shared, contributor-maintained database of physical and digital releases, with box sets, TV seasons, per-disc contents, credits, extras, and "where to buy" links. Edits from regular contributors go through a review queue run by trusted members.
- **Catalogue ingestion:** background jobs that pull new releases from retailers and labels across several countries, match them by barcode, and resolve duplicates before they reach the catalogue.
- **Collections:** add copies by searching or scanning a barcode with your camera, track condition, purchases, and lending, and import an existing collection from CLZ.
- **Shelf Designer:** lay out your real shelving units and place your copies on them. Each release can carry its physical measurements, so spines are drawn to scale.
- **Lists & wishlists:** curate lists from your collection and keep a wishlist of releases you're hunting for.
- **Profiles & social:** public profiles with favourites and recent additions, friends, friend-aware lending, collection comparison, reviews, ratings, and activity feeds, all governed by privacy settings for who can see your profile and your collection.
- **Plans:** a free Collector plan and a paid Curator plan through Stripe, with features gated by a shared entitlements package.
- **PWA:** installable, with offline support and image caching.

## Development

FilmShelves is a Turborepo monorepo with a Next.js 16 web app and shared packages for the database, UI components, types, styles, utilities, and entitlements. The web app uses React 19, TypeScript, and SCSS modules, backed by PostgreSQL through Prisma, with Clerk for authentication, Stripe for billing, Cloudflare R2 for images, and Inngest for background work running on a dedicated worker process.

It deploys to Heroku with separate beta and production apps. GitHub Actions run every change through linting, type checks, Vitest tests, and a build, release with semantic-release, and guard database migrations so applied migrations can't be edited and destructive changes follow an expand and contract pattern.

## Screenshots

1. Home: the public home page, with rails of recently added, buzzing, and most owned releases.

![FilmShelves Home](/images/filmshelves-1-home.png)

2. Catalogue: the community catalogue, searchable and filterable by format, label, and more.

![FilmShelves Catalogue](/images/filmshelves-2-catalogue.png)

3. Release: a release page with its edition details, extras, retailer links, and a disc-by-disc breakdown.

![FilmShelves Release](/images/filmshelves-3-release.png)

4. Profile: a public profile, with a backdrop taken from the owner's top favourite.

![FilmShelves Profile](/images/filmshelves-4-profile.png)

5. Shelves: a collection laid out in the Shelf Designer, with every spine drawn to scale.

![FilmShelves Shelves](/images/filmshelves-5-shelves.png)
`,
];
