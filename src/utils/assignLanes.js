/**
 * Sorts an array of timeline items in ascending order based on their start date.
 *
 * @param {Array} items - Array of timeline items. Each item must have a `start` date string (e.g., '2021-01-14').
 * @returns {Array} The same array, sorted by start date from earliest to latest.
 */
const sortItemsBasedOnStartDate = (items) => {
    return items.sort((a, b) => new Date(a.start) - new Date(b.start));
};

/**
 * Determines the earliest start date and the latest end date from a list of timeline items.
 *
 * @param {Array} items - Array of timeline items. Each item must have `start` and `end` date strings.
 * @returns {Object} An object with two properties:
 *   - `minDate` (Date): the earliest start date among all items.
 *   - `maxDate` (Date): the latest end date among all items.
 */
export const getMinMaxDatesFromItems = (items) => {
    const sortedItems = sortItemsBasedOnStartDate(items);
    const minDate = new Date(sortedItems[0].start);
    const maxDate = new Date(sortedItems[sortedItems.length - 1].end);
    return { minDate, maxDate };
};

/**
 * Assigns timeline items to lanes in a space-efficient way.
 * Items that do not overlap in time are placed on the same lane.
 *
 * @param {Array} items - Array of timeline items. Each item must have `start` and `end` date strings.
 * @returns {Array} An array of lanes. Each lane is an array of items that do not overlap with each other.
 */
export function assignLanes(items) {
    const sortedItems = sortItemsBasedOnStartDate(items);
    const lanes = [];

    /**
     * Attempts to assign an item to an existing lane.
     * If no suitable lane is found, a new lane is created.
     *
     * @param {Object} item - The timeline item to be assigned.
     */
    function assignItemToLane(item) {
        for (const lane of lanes) {
            if (new Date(lane[lane.length - 1].end) < new Date(item.start)) {
                lane.push(item);
                return;
            }
        }
        lanes.push([item]);
    }

    for (const item of sortedItems) {
        assignItemToLane(item);
    }

    return lanes;
}
