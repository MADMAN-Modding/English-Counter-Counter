window.onload = function main() {
    christmas_Days = 1703527200000 - Date.now();

    christmas_Days /= 1000;

    christmas_Days /= 60;

    christmas_Days /= 60;

    christmas_Days /= 24;

    christmas_Days = parseInt(christmas_Days);

    document.getElementById("christmas_Days").innerHTML = christmas_Days;

    linux_Days = Date.now() - 1700244000000;

    linux_Days /= 1000;

    linux_Days /= 60;

    linux_Days /= 60;

    linux_Days /= 24;

    linux_Days = parseInt(linux_Days);

    document.getElementById("linux_Days").innerHTML = linux_Days;
}