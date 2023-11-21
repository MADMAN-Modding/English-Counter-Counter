function main() {
    // Millis to Christmas
    christmas_Days = 1703527200000 - Date.now();

    // Millis to Date Conversion 86,400,000
    christmas_Days /= 86400000

    // Casts to an Int
    christmas_Days = parseInt(christmas_Days);

    // Edits the number in HTML
    document.getElementById("christmas_Days").innerHTML = christmas_Days;

    // Gets millis from the day it happened last
    linux_Days = Date.now() - 1700244000000;

    // Millis to Date Conversion 86,400,000
    linux_Days /= 86400000;

    // Casts to an Int
    linux_Days = parseInt(linux_Days);

    // Edits the number in HTML
    document.getElementById("linux_Days").innerHTML = linux_Days;

    // Millis to Thanksgiving
    thanksgiving_Days = 1700697600000 - Date.now();

    // Millis to Date Conversion 86,400,000
    thanksgiving_Days /= 86400000

    // Casts to an Int
    thanksgiving_Days = parseInt(thanksgiving_Days);

    // Edits the number in HTML
    document.getElementById("thanksgiving_Days").innerHTML = thanksgiving_Days;
}
