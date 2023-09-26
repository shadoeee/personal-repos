const countdownElement = document.getElementById("countdown");

const countdown = (seconds, callback) => {
    if (seconds > 0) {
        countdownElement.innerText = seconds;
        setTimeout(() => {
            countdown(seconds - 1, callback);
        }, 1000);
    } else {
        callback();
    }
};

countdown(10, () => {
    countdownElement.innerText = "Happy Independence Day!";
});
