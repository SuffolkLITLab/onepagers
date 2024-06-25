# Suffolk LIT Lab One-Pagers

A collection of one-page summaries of the Suffolk University Law School's Legal Information & Technology Lab (LIT Lab)'s projects and initiatives.

Find it at [onepagers.suffolklitlab.org/](https://onepagers.suffolklitlab.org/).


## Notes for Future Users

This is for one-pagers that are meant to be viewed as PDFs or printed to paper. To make this work the layout CSS stretches .page divs to fill the screen/page and instructs the printing dialog to break only after pages, not within them. If the contents of a page are longer than the page, they will just disappear off the bottom of the page when printing.

You can add pages by adding the following code for each one page:

```
<section class="page">
  <div class="page-content">
    <!-- Page content goes here. -->
  </div>
</section>
```

Do not add additional page footers; they will added to section.page automatically.

### Template Parts

HTML for the document header (`<header id="document-header">`, not `<head>`), nav buttons, and page footers (`<footer class="page-footer">`) is in the template-parts folder and loaded by assets/js/load-template-parts.js.

Set the document title (the `<h1>` tag, not the `<title>` tag) and subtitle (.subtitle) using the `data-title` and `data-subtitle` (optional) properties of the #document-header tag. For one-pagers, identify the PDF file location using the `data-pdf` (optional) property.

### Utility Classes

General utility classes are kept in /assets/scss/_utility.scss. I've made no attempt at comprehensiveness; I just added things as I needed them.

Font size classes (.font-xs through .font-huge) are in /assets/scss/_typography.scss.

Flex and grid layouts are in /assets/scss/_flex-grid.scss. Use .row for horizontal groups, .flex-col for vertical groups, and .grid for grids. Note the utility classes for spacing and positioning, and for grid columns.

All the available Bootstrap icons are shown [here](https://icons.getbootstrap.com/).


## Changelog

All notable changes to this project will be documented in this file. The format
is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

### 1.2 - 2024-03-07

#### Changed
- Minor wording changes to the Document Assembly Line one-pager.


### 1.1 - 2024-02-26

#### Changed
- Made some minor style and substance changes based on feedback from @plocket.


### 1.0 - 2024-02-23

#### Added
- Index of one-pagers at index.html.
- One-pager for the Document Assembly Line.
- One-pager for LIT Lab partnerships.
