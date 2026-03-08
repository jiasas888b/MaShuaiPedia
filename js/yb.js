//医保
let ybvar = localStorage.getItem('ybvar') ? parseInt(localStorage.getItem('ybvar')) : 0;

function addyb(){
  ybvar += 100;
  document.getElementById("ybValue").textContent = ybvar;
  localStorage.setItem('ybvar',ybvar);
}
//加载
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById("ybValue").textContent = ybvar;
   });