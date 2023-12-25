
const counter =(count=0) => {
    const timer = setInterval(()=> {
        count++;
        console.log(count);
    }, 1000)

   setTimeout(() => {
        clearInterval(timer)
   },11000)
}

counter();