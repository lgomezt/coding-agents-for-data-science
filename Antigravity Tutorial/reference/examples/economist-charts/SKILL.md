---
name: economist-charts
description: Use when creating a new Economist-inspired chart or restyling an existing data plot to match this project's Economist-inspired reference.
---

# Economist-inspired charts

## Read the design reference first

Read [the complete design reference](resources/chart-design-reference.html) before choosing colours, typography, layout, or export settings. Resolve this path relative to this SKILL.md, not the working directory. Read the HTML text and tables; the embedded example is also viewable in a browser.

Use the reference's course preset. Its official-source notes and course adaptations are explicitly separated. Do not present this preset as an official Economist template. If the reference is missing or unreadable, report that and stop before styling.

## Identify the input

- For an existing plot, inspect the image, its generating code, and the plotted data. Record the values, missingness, categories, units, limits, scale, and any transformations. A screenshot alone cannot recover exact data; ask for the source if it is absent.
- For a new plot, inspect the source table and the requested comparison. Confirm the plotted columns and chart type. Ask when the quantity or aggregation is unclear.

## Create or restyle

1. Preserve the original data, analysis code, and outputs. Put rendering code and styled exports in separate files; check for existing filenames before writing. Reuse the project's Python environment and installed plotting library. Ask before installing dependencies.
2. Apply the reference's colours, font fallback, title hierarchy, spacing, and labels. Use only lawfully available fonts; do not download brand fonts or add a logo. Record the actual font used.
3. Keep missing periods at their original positions. A missing value is not zero. For lines, retain a gap; for bars, leave the position empty and explain it. Do not interpolate, smooth, drop missing periods, reaggregate, or change units to improve appearance.
4. In a restyle, retain the original chart type, limits, scale, and transformations. If these are misleading, explain the issue and propose a separate change for approval. For a new chart, follow the reference's chart-selection and axis rules.
5. Export PNG and SVG with descriptive filenames. Include an accurate title, units, date range, source, and any missing-data note. Do not invent a finding or source attribution.

## Verify and report

Compare the plotted values, category order, and missingness against the source. Open the exports and inspect labels, clipping, contrast, and gaps. If visual inspection is unavailable, report it as unverified.

Return the output paths, run command, font choice, styling changes, data checks, and any unresolved issue. Separate verified checks from assumptions. The skill's instructions do not grant permission to upload files or change unrelated project content.
