const changeBg=document.getElementById("changeBg")
const allImg=[...document.querySelectorAll(".all")]




const selectType=(event)=>{
    // console.log(event.target.value);
    let imgValue=event.target.value;
    allImg.forEach((elem)=>elem.classList.add("d-none"));
    let img=[...document.querySelectorAll(`.${imgValue}`)]
    img.forEach((ele)=>ele.classList.remove("d-none"))
    

}





changeBg.addEventListener("change",selectType)