import React from "react";
import { format } from "date-fns";

export default function TimelineHeader({ visibleDays, dayWidth }) {
    return (
        <div className="timeline-header" style={{ display: "flex" }}>
            <div
                className="timeline-days"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${visibleDays.length}, ${dayWidth}px)`
                }}
            >
                {visibleDays.map((day) => (
                    <div
                        key={day}
                        style={{
                            borderLeft: "1px solid #ddd",
                            textAlign: "center",
                            fontSize: "12px",
                            padding: "4px 0",
                        }}
                    >
                        {format(day, "MMM d")}
                    </div>
                ))}
            </div>
        </div>
    );
}
