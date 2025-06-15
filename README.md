# Karsak Films Website

This repository contains the static files for the Karsak Films website. Each top‑level
folder represents a section of the site with an `index.html` file and its
associated stylesheet. Russian translations live inside `ru/` subdirectories.

## Structure
- `aboutus/`
- `contacts/`
- `filminginkz/`
- `globalpartnerships/`
- `indiainkz/`
- `services/`

Shared styles are defined in `header.css` and `common.css`. A small Jekyll
configuration (`_config.yml`) sets the permalink style but no build steps are
required.

## Running locally
Open `index.html` or any page in your browser or serve the directory with a
static web server:

```bash
python3 -m http.server
```

## Notes
JavaScript for the dynamic header lives in `scripts/header.js`. Pages load the
header snippet (`header.html` or `headerru.html`) at runtime.
