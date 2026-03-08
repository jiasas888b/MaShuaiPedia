
document.addEventListener('DOMContentLoaded', function() {
    // 版本号
    let ver = "v0.3.0 beta 1";
    document.getElementById("vertext").textContent = ver;
    
    //搜索总数文本
    const searchAll = "36";
    document.getElementById("count").textContent = searchAll;
});
//尝试加入enter搜索
document.getElementById("find").addEventListener("keydown",function(event){
    if(event.key === "Enter"){
        ok();
    }
});

/*
//调去version.json文件
fetch('version.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("versionInfo").innerHTML = `版本：${data.search_major}`
    })
*/

document.getElementById("checkbtn").addEventListener('change',function(){
  document.body.style.backgroundColor = this.checked ? 'black' : '';
});