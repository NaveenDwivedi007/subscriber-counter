const count = document.querySelectorAll(".count")



count.forEach((counter)=>{
  counter.innerText="0"

  const UpdateCounter=()=>{
    // const target = Number(counter.getAttribute("data-target"))
    const target = +counter.getAttribute("data-target")
    const c = +counter.innerText

    const increment = target/200;

    if (c<target) {
      counter.innerText = Math.ceil(c+increment)
      setTimeout(UpdateCounter,1)
    }else{
      counter.innerText=target;
    }
  }
  UpdateCounter()
})
