function updateUTCTime() {
    const currentTimeUTC = new Date().toISOString().slice(11, -5) ;
    document.getElementById("currentTimeUTC").textContent = currentTimeUTC;
}

setInterval(updateUTCTime, 1000);
updateUTCTime();
