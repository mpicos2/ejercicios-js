const d = document,
 w = window;

export default function scrollTopButton(btn){
    const $crollBtn = d.querySelector(btn);

    w.addEventListener("scroll",(e)=>{
        let scrollTop = w.pageXOffset || d.documentElement.acrollTop;

        if(scrollTop>600){
            $scrollBtn.classList.remove("hidden");
        }else{
            $scrollBtn.classList.add("hidden");
        }

        console.log(w.pageXOffset,d.documentElement.scrollTop);
    });

    d.addEventListener("click",(e)=>{
        if (e.target.matches(btn)){
            w.scrollTo({
                behavior:"smooth",
                top: 0,
                //left:o,
            });
        }
    })
} 