export const whaleReportAdministrationProject = [
  `Ocean Wise is a major conservation non-profit that has multiple programs in place to help protect the world's oceans and the life that lives within them. The Whale Report Alert System (WRAS) is a program designed to alert mariners to the presence of whales in shipping lanes with the end goal of reducing whale strikes, of which there are as many as 20,000 every year. The system accepts data from automated systems as well as from users on the water.

Ocean Wise contracted [Skyrocket Digital](https://skyrocketdigital.com) to build an administration panel for this program. Created as a module of their broader web platform (<https://app.ocean.org>). As the primary contributor I built the screens and interactions for this module which allow administrator users to interact with and make changes to submitted whale sightings. Administrators are able to change many of the sighting details, including their status. This allows them to verify sightings, and remove sightings from public view that may not meet the criteria to be a valid sighting.

The admin panel interacts with the same back end that powers the Whale Report Alert System itself to allow these changes.

## Tech Stack

Next.js 15, TypeScript, Turbopack, SCSS/Sass (modules), Auth0, IronSession, TanStack Table, Recharts, Redux Toolkit, RTK Query, Axios, Google Maps, Google Tag Manager, i18n (English & French), MySQL, Contentful, SalesForce, Azure, Jest, Playwright, Sentry, Marker.io, notistack, and more.

## Challenges & Post Launch

The primary challenge for this admin panel is the specificity. This application has few users, but those users require a high level of detail as well as a fine level of control over what they are doing. The smallest of changes has a large impact, and I worked closely with the stakeholders to make sure that their feedback was heard and applied quickly and carefully.

## Screenshots

1. Dashboard: the dashboard offers an at-a-glance look at the system, with charts created using [Recharts](https://recharts.github.io/).

![Dashboard](https://raw.githubusercontent.com/matthewcsimpson/Client-Work-Case-Studies/main/Ocean-Wise-Whale-Report-Admin/assets/dashboard.png)

2. Report Validation Table: this is the main screen of the application, where admins view, edit (if necessary), and validate whale sightings. The table view is built with [TanStack Table](https://tanstack.com/table/latest).

![Validation](https://raw.githubusercontent.com/matthewcsimpson/Client-Work-Case-Studies/main/Ocean-Wise-Whale-Report-Admin/assets/report-validation.png)

3. Validation Details: the details screen is built from scratch and allows for fine control over several data points in a whale sighting, including longitude and latitude (with live updates on the map), and species/ecotype (subspecies) when applicable. The table also persists, compressing to the left side with the selected report highlighted.

![Validation Detail](https://raw.githubusercontent.com/matthewcsimpson/Client-Work-Case-Studies/main/Ocean-Wise-Whale-Report-Admin/assets/report-validation-detail.png)

4. Alert Logs: the alert log (since renamed notification log) records notifications sent to mariners from specific sightings. It again uses TanStack Table and many of the same styling cues.

![Alert Logs](https://raw.githubusercontent.com/matthewcsimpson/Client-Work-Case-Studies/main/Ocean-Wise-Whale-Report-Admin/assets/alert-log.png)

5. Alert Details: the alert details screen is built from scratch and is informational only.

![Alert Detail](https://raw.githubusercontent.com/matthewcsimpson/Client-Work-Case-Studies/main/Ocean-Wise-Whale-Report-Admin/assets/alert-log-detail.png)

6. Map View: this view reuses the map component originally created for the [Whale Report Alert System](/project/whale-report-system), displaying similar data but with interactions sending users back to relevant admin panel screens.

7. Sighting Detail: this view is also reused from the Whale Report Alert System, but shows slightly different information and any attached images.

![Sighting Detail](https://raw.githubusercontent.com/matthewcsimpson/Client-Work-Case-Studies/main/Ocean-Wise-Whale-Report-Admin/assets/sighting-detail.png)
`,
];
