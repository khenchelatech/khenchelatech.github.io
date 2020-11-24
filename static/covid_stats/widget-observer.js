window.addEventListener('message', function(event) {
    if (!event.data) {
        return;
    }

    if (event.data.type && event.data.type === "COVID_STATS_UPDATE_HEIGHT" && !!document.getElementById('covid-stats-iframe')) {
        document.getElementById('covid-stats-iframe').style.height = event.data.payload.height + "px";
    }
}, false);