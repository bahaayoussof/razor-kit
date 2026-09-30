# AGENTS.md

## Project Purpose

This repository is being gradually transformed into an open-source project under the RazorKit brand.

Changes must be performed incrementally and safely.

Do not perform broad refactors unless explicitly requested.

## Core Rules

1. Make only the change explicitly requested in the current task.
2. Do not modify unrelated files.
3. Do not perform opportunistic refactoring.
4. Do not rename files, folders, components, classes, APIs, or namespaces unless explicitly requested.
5. Do not change component behavior unless explicitly requested.
6. Preserve existing functionality while restructuring or rebranding.
7. Do not remove existing code unless it is clearly obsolete and removal is explicitly requested.
8. Do not introduce new dependencies without approval.
9. Do not change the technology stack or project architecture without approval.
10. Prefer small, reviewable changes over large rewrites.

## Incremental Migration Order

The project migration must follow this order:

1. Project structure
2. RazorKit branding and naming
3. Documentation cleanup
4. Component-by-component review
5. Component API improvements
6. Packaging and distribution
7. Testing and release preparation

Do not skip ahead to later stages unless explicitly instructed.

## Structure Changes

When modifying project structure:

- Move files only when required by the task.
- Preserve file contents unless a content change is explicitly requested.
- Update imports, references, links, and configuration only when required to keep the project working.
- Do not combine restructuring with rebranding or functional refactoring.
- Ensure the project still builds and runs after the change.

## Branding Changes

Branding changes must be handled separately from structural changes.

When rebranding to RazorKit:

- Replace Momah-specific branding only when explicitly requested.
- Do not automatically rename public component APIs.
- Do not rename component implementation details unless included in the task.
- Keep functional behavior unchanged.

## Component Changes

Components must be reviewed and modified one at a time.

For each component:

- Understand the existing implementation first.
- Preserve current behavior unless a behavioral change is explicitly requested.
- Avoid changes to other components.
- Do not introduce shared abstractions prematurely.
- Do not generalize code only because multiple components look similar.
- Prefer backward-compatible changes where practical.

## Documentation

Documentation must describe the actual implementation.

Do not:

- Claim features that are not implemented.
- Claim zero dependencies when dependencies exist.
- Mark components as production-ready without evidence.
- Invent APIs or configuration options.

Examples must match the real code.

## Code Changes

When editing existing files:

- Modify files in place.
- Do not reprint or rewrite entire files unnecessarily.
- Keep changes minimal.
- Follow the existing code style unless a separate style migration is requested.
- Do not add comments that merely explain obvious code.

## Validation

After changes, verify where applicable:

- The project builds successfully.
- The documentation site starts successfully.
- Existing routes still work.
- Internal links are valid.
- No imports or references were broken.
- No unrelated files were changed.

If validation cannot be performed, clearly state what was not verified.

## Git Discipline

Each task should result in a focused change that could reasonably be committed independently.

Avoid mixing:

- Structure changes
- Branding changes
- Component refactoring
- Dependency upgrades
- Formatting-only changes

in the same task unless explicitly requested.

## Decision Rule

If a requested change reveals another problem, do not automatically fix it.

Report the issue and leave it unchanged unless fixing it is necessary for the requested task.