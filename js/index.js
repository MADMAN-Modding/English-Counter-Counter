function main() {
    // Millis to Christmas
    christmas_Days = 1703527200000 - Date.now();

   // Millis to Days for Christmas + Rounding 86,400,000
    christmas_Days = Math.ceil(christmas_Days /= 86400000);

    // Edits the number in HTML
    document.getElementById("christmas_Days").innerHTML = christmas_Days;

    // Gets millis from the day Linux was mentioned
    linux_Days = Date.now() - 1701302400000;

    // Rounds the Day Down
    linux_Days = Math.floor(linux_Days /= 86400000);

    // Edits the number in HTML
    document.getElementById("linux_Days").innerHTML = linux_Days;

    // Millis to Thanksgiving
    thanksgiving_Days = 1732752000000 - Date.now();

    // Millis to Days for Thanksgiving + Rounding 86,400,000
    thanksgiving_Days = Math.ceil(thanksgiving_Days /= 86400000);

    // Edits the number in HTML
    document.getElementById("thanksgiving_Days").innerHTML = thanksgiving_Days;

    // Millis to Halloween
    halloween_Days = 1730347200000 - Date.now();

    // Millis to Days for Halloween + Rounding 86,400,000
    halloween_Days = Math.ceil(halloween_Days /= 86400000)

    document.getElementById("halloween_Days").innerHTML = halloween_Days;
}
