import React, { useState } from "react";
import { assignLanes, getMinMaxDatesFromItems } from "../utils/assignLanes";
import { differenceInDays, eachDayOfInterval } from "date-fns";
import TimelineHeader from "./TimelineHeader";
import TimelineLane from "./TimelineLane";
import TimelineFilters from "./TimelineFilters";
import timelineItems from "../mocks/timelineItems";

/**
 * Checks if a timeline item is within the selected date range.
 *
 * @param {Object} item - The timeline item.
 * @param {Date} from - Start of visible range.
 * @param {Date} to - End of visible range.
 * @returns {boolean} True if item is within the range.
 */
function isInRange(item, from, to) {
    const start = new Date(item.start);
    const end = new Date(item.end);
    return !(end < from || start > to);
}

export default function Timeline() {
    const { maxDate, minDate } = getMinMaxDatesFromItems(timelineItems);

    const [dayWidth, setDayWidth] = useState(24);
    const [visibleFrom, setVisibleFrom] = useState(minDate);
    const [visibleTo, setVisibleTo] = useState(maxDate);

    const visibleItems = timelineItems.filter((item) => isInRange(item, visibleFrom, visibleTo));
    const hiddenItems = timelineItems.filter((item) => !isInRange(item, visibleFrom, visibleTo));
    const lanes = assignLanes(visibleItems);

    const visibleDays = eachDayOfInterval({ start: visibleFrom, end: visibleTo });
    const totalDays = differenceInDays(visibleTo, visibleFrom) + 1;
    const timelineWidth = totalDays * dayWidth;

    const handleFilterChange = (key, date) => {
        if (key === "from") setVisibleFrom(date);
        else if (key === "to") setVisibleTo(date);
    };

    return (
        <div>
            <TimelineFilters from={visibleFrom} to={visibleTo} onChange={handleFilterChange} />
            <div style={{ padding: "0 1rem 1rem" }}>
                <h4>
                    ✅ Events in selected range:{" "}
                    <span title={visibleItems.map((i) => `${i.name} (${i.start} → ${i.end})`).join("\n")} style={{ cursor: "pointer" }}>
                        {visibleItems.length}
                    </span>
                </h4>

                <h4>
                    ❌ Events outside selected range:{" "}
                    <span title={hiddenItems.map((i) => `${i.name} (${i.start} → ${i.end})`).join("\n")} style={{ cursor: "pointer" }}>
                        {hiddenItems.length}
                    </span>
                </h4>
            </div>

            <div style={{ display: "flex", gap: 8, padding: 8 }}>
                <h4>
                    Apply zoom:
                </h4>
                <button onClick={() => setDayWidth((w) => Math.min(w + 4, 60))}>+</button>
                <button onClick={() => setDayWidth((w) => Math.max(w - 4, 12))}>–</button>
            </div>

            <div className="timeline-container" style={{ overflowX: "auto" }}>
                <div style={{ minWidth: timelineWidth }}>
                    <TimelineHeader visibleDays={visibleDays} dayWidth={dayWidth} />
                    {lanes.map((lane, i) => (
                        <TimelineLane
                            key={i}
                            items={lane}
                            dayWidth={dayWidth}
                            visibleDays={visibleDays}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
