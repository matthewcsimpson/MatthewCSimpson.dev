export const cinelinksProject = [
  `A WordPress plugin that adds a Gutenberg block for embedding JustWatch widgets using TMDB or IMDB IDs.

## Features

- Global defaults in wp-admin settings.
- Per-block overrides in the block editor.
- Language override (limited to tested languages).
- Offer label, icon scale, max services, heading, border, and fallback message controls.
- Configurable wrapper margin as a global default and per-block override.
- Dynamic server-side render via block \`render.php\`.
- Icon scale option labels shown as percentages (for example \`60%\`, \`100%\`, \`200%\`).
- Shortcode support (\`[cinelink]\`) for use with Divi, Elementor, and other page builders.
- Uninstall cleanup removes saved plugin options when plugin is deleted.

The plugin also inserts the JustWatch code snippet into your site footer globally, which provides backward compatibility if you were previously using HTML code to embed widgets. Once you have the plugin installed, you can delete the code snippet you added to your theme.

## Shortcode Usage

Use the \`[cinelink]\` shortcode in any page builder's code or text module:

Movie, with IMDB:
\`[cinelink object_type="movie" id_type="imdb" external_id="tt31190636"]\`

TV Show, with TMDB:
\`[cinelink object_type="show" id_type="tmdb" external_id="245927"]\`

The three required attributes are \`object_type\` (movie or show), \`id_type\` (tmdb or imdb), and \`external_id\` (the title's ID). All other display settings are inherited from the plugin's global settings page.

## Tested Language Override Options

- Arabic
- Chinese
- Czech
- French
- German
- Italian
- Polish
- Portuguese
- Romanian
- Russian
- Spanish

## Requirements

- WordPress \`6.0+\` (tested up to \`6.9\`)
- PHP \`7.4+\`
- Node.js + npm (for block build)
- JustWatch API key

## Installation (WordPress)

1. Copy this plugin directory into \`wp-content/plugins/cinelink-embeds-for-justwatch\`.
2. Activate **CineLink Embeds for JustWatch** in wp-admin.
3. Go to **CineLink Embeds for JustWatch** in admin menu and add your API key.
4. Insert **CineLink Embed for JustWatch** block into a post/page.

## Usage

1. Choose content type (\`movie\` or \`show\`).
2. Choose ID type (\`imdb\` or \`tmdb\`).
3. Enter the external ID.
4. Optional: enable **Overrides** for per-block settings.

## External Services

This plugin connects to JustWatch services to load widget content.

Service used:

- JustWatch Widget script: \`https://widget.justwatch.com/justwatch_widget.js\`

What is sent:

- The configured JustWatch API key.
- Title identifiers and widget configuration (for example: object type, external ID, ID type, language, scale, and related widget options).
- Standard browser request metadata to JustWatch servers (such as visitor IP address, user agent, and referrer), as part of normal web requests.

When data is sent:

- The widget script is loaded on front-end page views.
- Widget-related data is requested when a page includes a JustWatch widget block.

Service documentation and policies:

- Widget documentation: https://apis.justwatch.com/docs/widget
- Terms of Service: https://partners.justwatch.com/legal/termsofuse
- Privacy Policy: https://partners.justwatch.com/legal/privacypolicy

## Screenshots

1. Global plugin settings in wp-admin.

![Global plugin settings in wp-admin](https://raw.githubusercontent.com/matthewcsimpson/CineLink-Embeds-for-JustWatch/refs/heads/main/assets/screenshot-1.png)

2. CineLink Embed for JustWatch block controls in the editor.

![CineLink Embed for JustWatch block controls in the editor](https://raw.githubusercontent.com/matthewcsimpson/CineLink-Embeds-for-JustWatch/refs/heads/main/assets/screenshot-2.png)

3. Block options with overrides disabled.

![Block options with overrides disabled](https://raw.githubusercontent.com/matthewcsimpson/CineLink-Embeds-for-JustWatch/refs/heads/main/assets/screenshot-3.png)

4. Block options with overrides enabled.

![Block options with overrides enabled](https://raw.githubusercontent.com/matthewcsimpson/CineLink-Embeds-for-JustWatch/refs/heads/main/assets/screenshot-4.png)

5. The widget rendered several different times. This does not represent all of the available customisations, just a taste of what's possible.

![Rendered widget examples](https://raw.githubusercontent.com/matthewcsimpson/CineLink-Embeds-for-JustWatch/refs/heads/main/assets/screenshot-5.png)

## Project Structure

\`\`\`text
cinelink-embeds-for-justwatch/
├─ cinelink-embeds-for-justwatch.php
├─ includes/
│  └─ admin-settings.php
├─ block/
│  ├─ block.json
│  ├─ edit.js
│  ├─ index.js
│  ├─ render.php
│  └─ build/
│     ├─ index.asset.php
│     └─ index.js
├─ assets/
│  ├─ admin-settings.css
│  ├─ admin-settings.js
│  ├─ justwatch-widget.css
│  ├─ banner-772x250.png
│  ├─ banner-1544x500.png
│  ├─ icon-128x128.png
│  ├─ icon-256x256.png
│  ├─ preview-icon.png
│  ├─ preview-margins.png
│  ├─ preview-heading-inside.png
│  ├─ preview-heading-outside.png
│  ├─ preview-labels-type.png
│  ├─ preview-labels-price.png
│  └─ preview-labels-none.png
├─ uninstall.php
├─ package.json
├─ package-lock.json
├─ readme.txt
├─ README.md
└─ LICENSE
\`\`\`

## Release Notes

Current plugin version: \`1.0.2\`

Highlights in \`1.0.2\`:

- Added shortcode support for Divi, Elementor, and other page builders.
- Updated readme with shortcode examples.

Highlights in \`1.0.1\`:
- Add custom admin footer on settings page.

Highlights in \`1.0.0\`:

- Stable release with global defaults and per-block overrides.
- Language override constrained to tested language set.
- Icon scale UI labels updated to percentages.
- Added uninstall cleanup via \`uninstall.php\`.

## License

GPLv2 or later. See \`LICENSE\`.
`,
];
