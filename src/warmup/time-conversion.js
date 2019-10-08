// ### Task
// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

function timeConversion(s) {
    /*
     * Write your code here.
     */
    return s.replace(/(^\d{2})(.*)(.{2})$/, (g1, g2, g3, g4) =>
        g4 === "PM"
            ? (Number(g2) % 12) + 12 + g3
            : g2 === "12"
            ? "00" + g3
            : g2 + g3
    );
}

function main() {
    console.log(timeConversion("07:05:45PM")); // -> 19:05:45
    console.log(timeConversion("12:40:22AM")); // -> 00:40:22
    console.log(timeConversion("06:40:03AM")); // -> 06:40:03
    console.log(timeConversion("12:45:54PM")); // -> 12:45:54
}

main();
