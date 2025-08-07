import React from "react";
import { format } from "date-fns";

export default function TimelineFilters({ from, to, onChange }) {
    return (
        <div style={{ display: "flex", gap: "1rem", padding: "1rem" }}>
            <label>
                From:{" "}
                <input
                    type="date"
                    value={format(from, "yyyy-MM-dd")}
                    onChange={(e) => onChange("from", new Date(e.target.value))}
                />
            </label>

            <label>
                To:{" "}
                <input
                    type="date"
                    value={format(to, "yyyy-MM-dd")}
                    onChange={(e) => onChange("to", new Date(e.target.value))}
                />
            </label>
        </div>
    );
}
