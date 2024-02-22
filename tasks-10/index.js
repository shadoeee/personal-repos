const countdown = document.querySelector(".countdown"); // selected element

let time = 10; // countdown initialization

countdown.innerHTML = time--; // callback pain (nested callback)
setTimeout(() => {
    countdown.innerHTML = time--;
    setTimeout(() => {
        countdown.innerHTML = time--;
        setTimeout(() => {
            countdown.innerHTML = time--;
            setTimeout(() => {
                countdown.innerHTML = time--;
                setTimeout(() => {
                    countdown.innerHTML = time--;
                    setTimeout(() => {
                        countdown.innerHTML = time--;
                        setTimeout(() => {
                            countdown.innerHTML = time--;
                            setTimeout(() => {
                                countdown.innerHTML = time--;
                                setTimeout(() => {
                                    countdown.innerHTML = time--;
                                    countdown.innerHTML = "Happy Independence Day🎉";
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);
