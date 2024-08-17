let countdownInterval = setInterval(showCountdown, 1000);

function showCountdown() {
    let endDate = new Date(2025, 0, 1, 0, 0);
    let endTime = endDate.getTime();
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;

    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeroes = (num) => (num < 10 ? `0${num}` : num);

    if (remainingTime <= 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").innerHTML = `<h1>Countdown Has Expired</h1>`;
    }
    else {
        let daysLeft = Math.floor(remainingTime / oneDay);
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

        let result = `${addZeroes(daysLeft)} days ${addZeroes(hrsLeft)} hours ${addZeroes(minsLeft)} minutes ${addZeroes(secsLeft)} seconds`;

        document.querySelector(".countdown").innerHTML = result;
    }
}

showCountdown();
