import React from "react";
import TimelineItem from "./TimelineItem";

export default function TimelineLane({ items, dayWidth, visibleDays }) {
    return (
        <div className="timeline-lane" style={{ display: "flex" }}>
            <div
                className="lane-content"
                style={{
                    gridTemplateColumns: `repeat(${visibleDays.length}, ${dayWidth}px)`,
                    position: "relative",
                }}
            >
                {items.map((item) => (
                    <TimelineItem
                        key={item.id}
                        item={item}
                        visibleDays={visibleDays}
                    />
                ))}
            </div>
        </div>
    );
}
