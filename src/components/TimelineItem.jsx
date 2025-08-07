import React, { useState } from "react";

export default function TimelineItem({ item, visibleDays }) {
    const start = new Date(item.start);
    const end = new Date(item.end);

    const startIndex = visibleDays.findIndex((day) => day.toDateString() === start.toDateString());
    const endIndex = visibleDays.findIndex((day) => day.toDateString() === end.toDateString());

    if (startIndex === -1 || endIndex === -1) {
        return null;
    }

    const [name, setName] = useState(item.name);
    const [editing, setEditing] = useState(false);

    return (
        <div
            className="timeline-item"
            style={{
                gridColumnStart: startIndex + 2,
                gridColumnEnd: endIndex + 3,
            }}
            title={`${name}\n${item.start} → ${item.end}`}
            onDoubleClick={() => setEditing(true)}
        >
            {editing ? (
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setEditing(false)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") setEditing(false);
                    }}
                    autoFocus
                />
            ) : (
                name
            )}
        </div>
    );
}
