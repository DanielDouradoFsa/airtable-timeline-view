# Timeline Component

This project implements a timeline visualization component using React. It arranges timeline items into compact, non-overlapping lanes, where items with non-overlapping dates share the same lane. The component is fully responsive, supports zoom controls, and allows date filtering using a "From" and "To" range.

## ✅ What I like about this implementation

I am particularly satisfied with the robust synchronization between the timeline header (day labels) and the timeline items. The layout is managed using CSS grid, ensuring pixel-perfect alignment between visual elements. The timeline is fully functional and accurately reflects event durations and positions, even when zoomed or filtered. The user can intuitively explore events across any date range with minimal UI friction.

## 🔁 What I would change if I were going to do it again

If I had more time, I would enhance the UI/UX with features such as:

- A polished and branded design system with hover interactions, color coding by category, and dynamic tooltips.
- Multiple date view modes: monthly, weekly, and quarterly views.
- Side panel or detail drawer when clicking on an event to see additional metadata.
- Keyboard navigation and accessibility improvements (a11y).
- Persisting event changes (like edited names) via context or external state.

## 🎨 Design decisions and inspiration

The core functionality of the timeline was prioritized over styling in this iteration. My primary goal was to ensure proper behavior and precise alignment of events over time.

For inspiration and guidance, I looked at:

- **Google Calendar**, particularly how events snap to time blocks and how header and event content align.
- **Airtable's Timeline View** ([reference](https://support.airtable.com/docs/timeline-view-overview)), especially in the way events are condensed and arranged into lanes to reduce vertical space usage.

These references influenced both the behavior of the zoom and scrolling interactions and the choice of CSS grid for aligning the header and items.

## 🧪 How I would test this if I had more time

With additional time, I would write integration tests that ensure the timeline behaves correctly based on a given dataset. These tests would cover:

- The number of rendered lanes and timeline items based on the mock data.
- Whether the correct items are visible within the selected date range.
- Ensuring tooltips and zoom controls function properly.
- Checking that filtering by date updates the lanes and header accordingly.
- Basic accessibility checks (tab navigation, screen reader compatibility).

Tools I would use for this include React Testing Library, Jest, and possibly Cypress for E2E interaction testing.

---

Thank you for reviewing this project! I focused on delivering a working and accurate timeline that could serve as a strong foundation for a featured scheduling or project planning UI.
