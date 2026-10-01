# Component Audit

Tracks the component-by-component audit and migration to RazorKit. The component implementations exist in this repository only as source listings inside each component's documentation page; those listings are treated as the source of truth.

## Badge
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: `icon` is output with `Html.Raw`; no ARIA; Playground radius handling differs from the partial.

## Banner
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: tuple model; basic example with `TitleColor: null` did not compile (fixed in docs); raw-HTML `Icon` via `Html.Raw`; palm image has no `alt`; Playground passes an anonymous object instead of a tuple.

## AutoComplete
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: `required` does not block submit; remote timeout leaves the loading state stuck; cached-query race can show stale results; tooltip header is hard-coded.

## DualDate
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes (also homepage card status removed)
- Implementation changed: no
- Important findings: tuple model reads 6 elements (docs listed 4); submitted fields are visible read-only inputs, not hidden; `minDate`/`maxDate` written into JS via `Html.Raw` (injection risk); `jquery.calendars.plus.js` required but undocumented; loads Google Fonts; debug `console.log` on every init; no keyboard access or ARIA; RTL-only; out-of-range error text is never reset; no initial-value parameter.

## DateInput
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: all doc examples used `new { "…", true, … }` (invalid C#; the partial casts to `ITuple`) — replaced with tuples and the `UI/_DateInput` path; calendar depends entirely on an app-provided global `createCalendersWithRang` (not in repo); the required error element is never shown by the partial; `required` on a readonly input is not enforced by browsers; range fixed to -100y/+2y.

## DateRange
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: no presets exist (gallery/intro claimed them); needs `jquery.calendars.plus.js` and `jquery.calendars.picker.js` (undocumented); `Id` with `-` produces a JS syntax error via `window.validateDateRange_{Id}`; global `.calendars-popup` styles affect every picker on the page; selecting a date marks non-required fields valid (green); submit is blocked when required and empty.

## InputField
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: guide embedded a stale copy of the partial (removed); unscoped `<style>` forces `direction: rtl` / right alignment and hides number spinners on every `input` on the page; empty placeholder falls back to Arabic default text; examples used `_InputField` without the `UI/` path; `ViewData["Value"]` from the parent view leaks into every instance; `text-gray-700` is not a Bootstrap class; gallery claimed icon slots/formatting that do not exist.

## SelectInput
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: plain native `<select>` — gallery/intro claimed search and option grouping; usage snippet declared a variable outside `@{ }` (invalid Razor) and used `_SelectInput` without `UI/`; typed tuple model requires all 5 elements with exact types; no pre-selected value support; Playground passes an anonymous object with non-existent `selected`/`options` parameters.

## SmartSelect (formerly MomahSelect)
- Status: migrated
- Renamed: yes — `MomahSelect` → `SmartSelect`: partial `_MomahSelect.cshtml` → `_SmartSelect.cshtml` (`UI/_MomahSelect` → `UI/_SmartSelect`), doc route `/docs/components/MomahSelect` → `/docs/components/SmartSelect`, gallery/homepage/sidebar/intro entries, Playground config (`configs/MomahSelect.js` → `configs/SmartSelect.js`) and data key. Internal JS/CSS identifiers (`cs-*`, `ss-*`, `ms-*`, `getSelectedValue`, `setSelectValue`, `setSelectOption`, `validateSelect_{Id}`) were already neutral and are unchanged. Clean breaking rename: no redirect or alias.
- Docs corrected: yes
- Gallery corrected: yes (also homepage card status/description)
- Implementation changed: no
- Important findings: multi-select does not always have search (only with `Filter`); `Filter`/`Clear` enabled by any non-empty string incl. `"false"`; non-`List<(string,string)>` options silently ignored; `setSelectOption` builds HTML without escaping; multi-select chips re-insert option text as raw HTML (XSS even for Razor-encoded text); no keyboard/ARIA support and the hidden native select stays focusable; `OnChange` not fired for programmatic changes; dropdown is moved to `<body>`; Playground uses non-existent `Searchable`/`MultiSelect` and `List<SelectListItem>`; gallery/homepage claimed AJAX/remote loading.

## ChipSelect
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes (status removed; `aria: true` kept — ARIA combobox/listbox implemented)
- Implementation changed: no
- Important findings: Quick Reference redeclared `const values`/`const items` (SyntaxError) — fixed; boolean props must be real `bool`s; items need an `id` (e.g. `SelectListItem` lists render nothing); no required/validation; nothing posted when empty; preselected ids not in `items` are not submitted; changing `config.multiple` after init only partially switches mode; global `.cs-*` classes collide with SmartSelect's `.cs-dropdown` / `.cs-search-input` / `.cs-no-results`; no Playground entry.

## FileUpload
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: does not upload and files are never included in a native form submit (only `getFiles()`); gallery/intro claimed progress indicators; requires undocumented `UI/_FilePreview` partial and `showFilePreview`; error visibility depends on a non-Bootstrap `.hidden` class (all errors visible with Bootstrap alone) and other Tailwind classes; `MaxFiles` cast `(int)` — `null` throws (`0` = unlimited); undocumented 7th tuple element `"short"` render mode; internal events have no public API; file names inserted via `innerHTML` unescaped; duplicate file names break remove/preview; Playground uses a different path, a bare `null` in a tuple, and extensions instead of MIME types.

## AttachBox
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: `FileId`/`FileName` placed in an inline `onclick` JS string — HTML encoding is decoded before execution, so `'` breaks it and crafted names can inject script; undocumented `ActionUrl` model property; global `openAttachmentFromUrl` bakes in the first instance's `ActionUrl`; no file-type icon is rendered (docs claimed autodetected icons); `FileName` is optional (derived from `FileId`); every instance re-renders `_FilePreview` and `_StatusModal`; `_FilePreview` is not documented in this repo; icon-only buttons have no `aria-label`.

## TextArea
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: textarea has no `name` attribute, so its value is never submitted; default content is a single space, which hides the placeholder and makes `required` always pass; guide embedded a stale copy of the partial; examples used the non-existent `_TextAreaField`; gallery/intro claimed auto-resize and a character counter.

## CkEditor
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes (status removed; `aria: true` kept — custom controls have ARIA attributes and CKEditor provides its own)
- Implementation changed: no
- Important findings: file name inconsistency (`_CKEditor` in guide vs `_CkEditor.cshtml` in source tab/Playground — matters on case-sensitive file systems); `Ctrl+U` only appears in a tooltip, no shortcut registered; native `required` on the hidden textarea blocks empty submissions before the component's submit handler (no visible message); documented ancestor `--editor-height` override cannot work (wrapper/editable set inline values); requires a CKEditor 5 classic build (v34+) at a fixed path, licensed separately (GPL/commercial); empty `Id` renders nothing.

## DataTable (formerly MomahTable / momah-table)
- Status: migrated
- Renamed: yes — `MomahTable` → `DataTable`: JS global `MomahTable.render` → `RazorKit.DataTable.render` (exposed as `window.RazorKit.DataTable`; the `RazorKit` namespace object is created only if it does not already exist), files `momahTable.js` → `dataTable.js` and `momah-table.css` → `data-table.css`, doc route `/docs/components/momah-table` → `/docs/components/DataTable`, table-owned CSS classes `momah-*` → `data-table-*` (e.g. `momah-table-host` → `data-table-host`, `momah-cols-*` → `data-table-cols-*`), gallery/homepage/sidebar/intro entries, Playground config (`configs/MomahTable.js` → `configs/DataTable.js`), data key, and Playground dark-mode selectors. Clean breaking rename: no redirect or alias.
- Docs corrected: yes
- Gallery corrected: yes (also homepage card status/description)
- Implementation changed: no
- Important findings: not dependency-free (Bootstrap CSS, Bootstrap JS for picker/modal, fixed arrow image paths); no sorting and no server-side behavior (gallery/homepage/intro claimed both); any string cell value containing `<` — including plain `field` data — is inserted via `innerHTML` (XSS); with a search box, later renders skip the actions and the column picker keeps stale records; `show: false` columns still appear in the picker; undocumented `filter.onFilter` and `window.initializeSearchInput`; `pagination.css` only targets `#pagination`.

## AttachmentCard
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes (and one shared-issue sentence added to AttachBox)
- Gallery corrected: yes
- Implementation changed: no
- Important findings: same inline-`onclick` injection risk as AttachBox; shares the global `openAttachmentFromUrl` with AttachBox (first renderer's `ActionUrl` wins for both); `FileId` cannot be a full URL (docs claimed it can); "style once" guard uses a non-shared `ViewData` copy so styles render every time; no download action (gallery claimed one); re-renders `_FilePreview`/`_StatusModal` per card.

## Tooltip
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes (status removed; `aria: true` kept — `role="tooltip"` + `aria-describedby`)
- Implementation changed: no
- Important findings: `label`/`icon`/`content` rendered with `Html.Raw` (no warning in docs); "assets once per page" guard uses a non-shared `ViewData` copy, so style/script are written per instance; `start`/`end` placement semantics in CSS are the reverse of the docs and of the JS flip logic; LTR side-placement arrows point away from the trigger; no `Escape` dismissal; `role="button"` without an action; gallery claimed micro-animations (none); GitHub `[!NOTE]` admonitions did not render in Docusaurus (converted).

## LabelTip
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes (status removed; `aria: true` kept — icon has `role`/`aria-label`, tip has `role="tooltip"`)
- Implementation changed: no
- Important findings: `Class` replaces the default wrapper classes (docs said appended); `content` overrides `Label`; tooltip shows on hover of the whole wrapper, not only the icon; "CSS once" guard uses a non-shared `ViewData` copy; words split on spaces only; tooltip not linked via `aria-describedby`; no `Escape` dismissal.

## Notification
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes
- Implementation changed: no
- Important findings: static notice box with no JavaScript — gallery/intro called it a "toast notification manager engine"; "all text colors default to teal" was false (content is `#374151`); empty-string colors are not defaulted (`??` only handles null); accent border is always physically on the right; `Icon` via `Html.Raw`; no ARIA role; typed tuple needs all 5 elements; Playground passes an anonymous object to the typed-tuple partial.

## StatusModal
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes (status removed; `aria: true` kept — Bootstrap modal semantics)
- Implementation changed: no
- Important findings: examples used `_StatusModal` without `UI/` and a non-existent `_GenericStatusModal`; undocumented types (`warning`, `return`, `delete`, `transfer`, `send`) and options (`size`, `showCancelButton`, `cancelButtonText`); `aria-labelledby` points to a non-existent id (no accessible name); malformed `</sv g>` in the error icon; fixed element IDs are duplicated when the partial is rendered more than once (AttachBox/AttachmentCard do this per instance); `onCancel` not called on Escape/backdrop; requires jQuery loaded before Bootstrap 5 for `.modal()`.

## Breadcrumb
- Status: audited
- Renamed: no (already neutral)
- Docs corrected: yes
- Gallery corrected: yes (status removed; `aria: true` kept — `aria-label` on `<nav>`, though `aria-current` is misapplied)
- Implementation changed: no
- Important findings: unscoped `<style>` restyles every `<a>` on the page; the "active" last item is still a clickable link; `aria-current="page"` is set on every item; `dir="rtl"` is hard-coded; examples used `_Breadcrumb` without `UI/`; a `null` model throws.

## Cross-Component Findings
- Status labels (`NEW` / `STABLE` / `UPDATED`) were removed from every gallery entry and homepage card; nothing in the repository supports them.
- Several "render once per page" guards store their flag in the partial's own copy of `ViewData`, which is not shared between partial calls (AttachmentCard, Tooltip, LabelTip), so assets are written per instance.
- Several partials emit unscoped global CSS that affects the whole page (InputField: all `input`s; Breadcrumb: all `a`s; DateRange: all `.calendars-popup`).
- ChipSelect and SmartSelect both define global `.cs-dropdown`, `.cs-search-input`, and `.cs-no-results` with conflicting rules.
- AttachBox and AttachmentCard both define the global `openAttachmentFromUrl`; the first one rendered wins (including its `ActionUrl`).
- FileUpload, AttachBox, and AttachmentCard depend on a `UI/_FilePreview` partial that is not documented in this repository.
- Several examples referenced partials without the `UI/` folder or by non-existent names; they were aligned with `Views/Shared/UI/` (the location used by the Playground and the other components).
- Most Playground configs that pass anonymous objects to typed-tuple partials (SelectInput, Notification, Banner) or use non-existent parameters (SmartSelect, SelectInput, FileUpload) would fail against the real partials; the Playground is not used on any page and was not changed.
- The component overview table in `docs/intro.mdx` repeated several of the false claims (presets, AJAX loading, progress tracking, server-side sorting, toast engine, auto-height/counter, micro-animations); those rows were aligned with the corrected gallery descriptions.
