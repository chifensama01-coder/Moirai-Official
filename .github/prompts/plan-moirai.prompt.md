## Plan: Fix asset routing and code issues

TL;DR: The project is a Next.js + Sanity content site for Moirai. It currently uses Sanity for most product and blog images, but a local `src/assets` folder exists with many media files that are not yet referenced. The plan is to wire local assets into the UI, fix source and environment issues, and verify build/runtime behavior.

**Steps**
1. Confirm asset strategy: use local `src/assets` media directly in the app rather than relying only on Sanity.
2. Audit the main UI pages and identify placeholder sections where local images/videos should be inserted:
   - `src/app/page.tsx`
   - `src/app/collections/page.tsx`
   - `src/app/shop/page.tsx`
   - `src/app/about/page.tsx`
   - `src/app/bespoke/page.tsx`
   - `src/app/fashion-school/page.tsx`
   - `src/app/blog/page.tsx`
3. Create a small asset import helper if needed, such as `src/assets/index.ts`, to centralize imports and avoid path duplication.
4. Update page components to import and use the local media files from `src/assets`.
5. Fix code/config issues discovered during analysis:
   - `sanity.config.ts`: remove the unsafe `process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!` assertion and add a safer fallback or explicit error behavior.
   - `src/lib/sanity.ts`: keep Sanity env handling consistent and add a clear fallback message if the project ID is missing.
   - If build/time errors remain, validate `tsconfig.json` and ensure `next-env.d.ts` and dependent node modules are present.
   - Check `src/app/blog/[slug]/page.tsx` param typing and any `any`-typed event handlers that may cause compile issues.
6. Verify by running `npm run build` and inspecting pages to ensure local assets load without 404s.

**Relevant files**
- `src/app/page.tsx` — homepage hero and featured placeholders
- `src/app/collections/page.tsx` — collection product cards
- `src/app/shop/page.tsx` — shop product cards and image placeholders
- `src/app/about/page.tsx` — about page hero/brand section
- `src/app/bespoke/page.tsx` — bespoke gallery and process page
- `src/app/fashion-school/page.tsx` — fashion school hero and feature section
- `src/app/blog/page.tsx` — journal listing placeholders
- `src/app/blog/[slug]/page.tsx` — blog post layout and cover image handling
- `src/lib/sanity.ts` — Sanity client and URL builder queries
- `sanity.config.ts` — env config safety
- `tsconfig.json` — TypeScript config and path alias checks
- `src/assets` — local images/videos to reference

**Verification**
1. Confirm `npm install` completed successfully.
2. Run `npm run build` and resolve any missing module or JSX type issues.
3. Open the homepage and at least the shop/collections/about pages to verify local assets are loading and no broken media routes remain.
4. Check browser console/network for 404s on asset URLs or missing Sanity env warnings.

**Decisions**
- Use local `src/assets` files directly because the repository currently contains them and the user wants updated routes.
- Treat Sanity as the existing content source, but wire in local media for page-specific placeholders and static sections.
- Do not assume the app already has correct asset routes; the code review showed no current `/assets/...` references.

**Further considerations**
1. If there are too many media files to import individually, consider moving selected assets into `public/assets` and referencing them via absolute URLs.
2. If the project is intended to remain Sanity-first, minimize local asset changes to only pages that currently show placeholders.
3. If `node_modules` is missing or broken, the first fix should be `npm install` before code editing.
