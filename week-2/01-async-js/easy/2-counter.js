
const counterTimeout = (count=0) => {
    const timer = setTimeout(() => {
        count ++;
        console.log(count);
        counterTimeout(count);
    },1000)

    count ===10 && clearTimeout(timer)
}

counterTimeout()