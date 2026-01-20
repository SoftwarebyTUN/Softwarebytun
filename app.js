let p = localStorage.getItem("point") || 0;
document.getElementById("point").innerText = p;

function earn(){
  window.open("MONETAG_SMARTLINK_HERE","_blank");

  setTimeout(()=>{
    p++;
    localStorage.setItem("point",p);
    document.getElementById("point").innerText = p;
    alert("+1 Point");
  },15000);
}
