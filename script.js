

counters=[
    {id:"counter1",target:70},
    {id:"counter2",target:150},
    {id:"counter3",target:500}
]

counters.forEach(({id,target}) => {
    const span=document.getElementById(id)
    let count=0
    const duration=2000
    const interval=Math.floor(duration/target)

    span.textContent=0

    const counter=setInterval(()=>{
        count++;
        span.textContent=count;
        if(count>=target){
            clearInterval(counter)
        }
    },interval)
});