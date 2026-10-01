import React, { useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "../index.module.css";

const COMPONENTS_DATA = [
  {
    id: "DualDate",
    name: "DualDate",
    category: "Form Controls",
    desc: "Hijri date picker that also fills in the matching Gregorian date.",
    aria: false,
    path: "/docs/components/DualDate",
  },
  {
    id: "DateInput",
    name: "DateInput",
    category: "Form Controls",
    desc: "Read-only date input (Hijri or Gregorian) initialized by an app-provided calendar function.",
    aria: false,
    path: "/docs/components/DateInput",
  },
  {
    id: "DateRange",
    name: "DateRange",
    category: "Form Controls",
    desc: "Single date or date-range picker (Hijri or Gregorian) with required validation.",
    aria: false,
    path: "/docs/components/DateRange",
  },
  {
    id: "InputField",
    name: "InputField",
    category: "Form Controls",
    desc: "Labelled Bootstrap input with configurable type and an optional initial value.",
    aria: false,
    path: "/docs/components/InputField",
  },
  {
    id: "AutoComplete",
    name: "AutoComplete",
    category: "Form Controls",
    desc: "Searchable select input with local or remote (GET) data sources.",
    aria: true,
    path: "/docs/components/AutoComplete",
  },
  {
    id: "SelectInput",
    name: "SelectInput",
    category: "Form Controls",
    desc: "Native Bootstrap select with a label and an empty default option.",
    aria: false,
    path: "/docs/components/SelectInput",
  },
  {
    id: "SmartSelect",
    name: "SmartSelect",
    category: "Form Controls",
    desc: "Custom single or multi-select with optional search, clear button, and a JavaScript API.",
    aria: false,
    path: "/docs/components/SmartSelect",
  },
  {
    id: "ChipSelect",
    name: "ChipSelect",
    category: "Form Controls",
    desc: "Multi-select dropdown with dismissible chips and live search.",
    aria: true,
    path: "/docs/components/ChipSelect",
  },
  {
    id: "FileUpload",
    name: "FileUpload",
    category: "Form Controls",
    desc: "Drag-and-drop file picker with client-side size, type, and count checks.",
    aria: false,
    path: "/docs/components/FileUpload",
  },
  {
    id: "AttachBox",
    name: "AttachBox",
    category: "Form Controls",
    desc: "Attachment row with file name, preview button, and download link.",
    aria: false,
    path: "/docs/components/AttachBox",
  },
  {
    id: "TextArea",
    name: "TextArea",
    category: "Form Controls",
    desc: "Labelled fixed-height Bootstrap textarea with an optional initial value.",
    aria: false,
    path: "/docs/components/TextArea",
  },
  {
    id: "CkEditor",
    name: "CkEditor",
    category: "Form Controls",
    desc: "CKEditor 5 wrapper with a Word-style toolbar and required validation.",
    aria: true,
    path: "/docs/components/CkEditor",
  },
  {
    id: "DataTable",
    name: "DataTable",
    category: "Data Display",
    desc: "JavaScript table renderer with optional search box, column picker, and pagination controls.",
    aria: false,
    path: "/docs/components/DataTable",
  },
  {
    id: "Badge",
    name: "Badge",
    category: "Data Display",
    desc: "Status tag and category badge component.",
    aria: false,
    path: "/docs/components/Badge",
  },
  {
    id: "AttachmentCard",
    name: "AttachmentCard",
    category: "Data Display",
    desc: "Attachment card with file name, description, and a preview button.",
    aria: false,
    path: "/docs/components/AttachmentCard",
  },
  {
    id: "Tooltip",
    name: "Tooltip",
    category: "Overlays & Feedback",
    desc: "Hover/focus tooltip with HTML content and viewport-aware placement.",
    aria: true,
    path: "/docs/components/Tooltip",
  },
  {
    id: "LabelTip",
    name: "LabelTip",
    category: "Overlays & Feedback",
    desc: "Label with an optional info-icon tooltip; can shorten long text.",
    aria: true,
    path: "/docs/components/LabelTip",
  },
  {
    id: "Banner",
    name: "Banner",
    category: "Overlays & Feedback",
    desc: "Informational banner with an optional icon and title.",
    aria: false,
    path: "/docs/components/Banner",
  },
  {
    id: "Notification",
    name: "Notification",
    category: "Overlays & Feedback",
    desc: "Static notice box with an icon, title, and message.",
    aria: false,
    path: "/docs/components/Notification",
  },
  {
    id: "StatusModal",
    name: "StatusModal",
    category: "Overlays & Feedback",
    desc: "Bootstrap status modal opened from JavaScript, with optional confirm/cancel buttons.",
    aria: true,
    path: "/docs/components/StatusModal",
  },
  {
    id: "Breadcrumb",
    name: "Breadcrumb",
    category: "Navigation",
    desc: "Bootstrap breadcrumb trail rendered from a list of (name, URL) pairs.",
    aria: true,
    path: "/docs/components/Breadcrumb",
  },
];

export default function ComponentsGallery() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("All");

  const categories = [
    "All",
    "Form Controls",
    "Data Display",
    "Overlays & Feedback",
    "Navigation",
  ];

  const filtered = COMPONENTS_DATA.filter((item) => {
    const matchesCat = selectedCat === "All" || item.category === selectedCat;
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <Layout
      title="Components Gallery — RazorKit"
      description="Browse all 19+ ASP.NET MVC UI components with live specs and feature badges."
    >
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1rem" }}
      >
        <div style={{ textAlign: "start", marginBottom: "2.5rem" }}>
          <h1
            style={{
              fontFamily: "var(--momah-font-display)",
              fontSize: "2.5rem",
              fontWeight: "800",
            }}
          >
            Components Gallery
          </h1>
          <p
            style={{ color: "var(--momah-text-secondary)", fontSize: "1.1rem" }}
          >
            Explore {COMPONENTS_DATA.length} ASP.NET MVC components.
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <input
            type="text"
            placeholder="🔍 Filter components by name or tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: "0.75rem 1.25rem",
              borderRadius: "var(--momah-radius-md)",
              border: "1px solid var(--momah-border-strong)",
              background: "var(--momah-bg-surface)",
              color: "var(--momah-text-primary)",
              fontFamily: "var(--momah-font-body)",
              fontSize: "0.95rem",
              width: "100%",
              maxWidth: "400px",
            }}
          />

          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`${styles.filterBtn} ${selectedCat === cat ? styles.filterBtnActive : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* CARDS GRID */}
        <div className={styles.galleryGrid}>
          {filtered.map((item) => (
            <Link key={item.id} to={item.path} className="momah-card">
              <div>
                <div className="momah-card-header">
                  <h3 className="momah-card-title">{item.name}</h3>
                  {item.status && <span className="momah-card-status">{item.status}</span>}
                </div>
                <p className="momah-card-desc">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
