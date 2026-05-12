# Reflection

## 1. Hardest Bug Faced

One of the hardest bugs during development involved the AI-generated summary feature using the OpenAI API.

The frontend continuously crashed while generating audit summaries because invalid variables were passed into the API request body. Initially, variables such as `tool1` and `primaryTool` were used even though the actual state variables were named `tool` and `tool2`.

To debug this issue:
- browser console errors were analyzed
- API request payloads were checked
- component state variables were verified
- fallback handling was added for failed API responses

Eventually the issue was resolved by correcting variable names and implementing graceful fallback logic.

This debugging process improved understanding of React state management and API integration.

---

## 2. A Decision Reversed Midway

Initially, the application included a separate public reports page displaying audit reports.

However, after evaluating the assignment requirements and considering data privacy concerns, this design was reversed.

AI spending data can contain sensitive organizational information. Displaying all reports publicly would create privacy concerns and reduce trust.

The final design instead generates downloadable private reports for each user after the audit is completed.

This change improved professionalism and aligned the product more closely with real SaaS product expectations.

---

## 3. What Would Be Built In Week 2

If additional development time were available, the following features would be added:

- real PDF report generation
- shareable audit result URLs
- transactional email support
- advanced pricing intelligence
- enterprise billing analytics
- AI benchmark comparisons
- multi-user organization dashboards
- authentication system
- audit history tracking

These additions would transform the project from an MVP into a production-ready SaaS platform.

---

## 4. AI Tool Usage During Development

AI tools such as ChatGPT were used throughout development for:
- debugging
- UI improvements
- API integration guidance
- React component structuring
- Tailwind styling suggestions
- deployment troubleshooting

However, AI-generated code was not blindly trusted.

Several AI-generated suggestions produced:
- incorrect variable names
- JSX nesting issues
- invalid state references
- layout inconsistencies

All generated code was manually reviewed, debugged, and adjusted before integration into the project.

This process highlighted the importance of combining AI assistance with human debugging and engineering judgment.

---

## 5. Self Evaluation

### Discipline — 8/10
Development was completed consistently with iterative improvements across UI, backend, and documentation.

### Code Quality — 8/10
The application uses reusable components, clear structure, and organized logic, though additional testing could further

improve maintainability.

### Design Sense — 9/10
A strong focus was placed on creating a modern SaaS-style interface with responsive layouts and professional visual hierarchy.

### Problem Solving — 8/10
Multiple integration and UI issues were identified and resolved through debugging, experimentation, and iterative refinement.

### Entrepreneurial Thinking — 8/10
The project was designed not only as a coding exercise but as a realistic lead-generation SaaS product aligned with Credex’s business model.