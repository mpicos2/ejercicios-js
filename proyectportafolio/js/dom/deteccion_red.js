const d = document,
 w = window;
 n = navigator; 

export default function networkStatus(){
    const isOnLine = ()=>{
        const $div = d.createElement("div");

        if (n.onLine){
            $div.textContent = "Coneccion reestablecida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Coneccion perdida";
            $div.classList.add("online");
            $div.classList.remove("offline");
        }

        d.body.insertAdjacentElement("afterbegin",$div);
        setTimeout(()=> d.body.removeChild($div), 2000);
    };
    w.addEventListener("online", (e)=> isOnLine());
    w.addEventListener("offline", (e)=> isOnLine());
}