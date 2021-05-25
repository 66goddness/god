

// document.getElementById("clearText").onclick=function(){
//     Array.from(document.querySelectorAll("#clearDiv div input")).forEach(i=>i.value);
// }

// 
function cxText(){
    let queryConArr = Array.from(document.querySelectorAll(".a input, .b input,.c input")).map(i => i.value);
    Array.from(document.getElementById("showTable").children[0].children).filter((a,b) => b != 0 ).filter(i => 
        (queryConArr[0] != "" 
        && i.children[0].innerText != queryConArr[0])
        ||
        (i.children[4].innerText.search(queryConArr[1]) == -1)
        ||
        (i.children[2].innerText != queryConArr[2])
        ).forEach(i => i.parentNode.removeChild(i));
}
// document.getElementById("remove").onclick=function(){
//     this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
//     }
//     document.getElementById("remove1").onclick=function(){
//         this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
//         }
//         document.getElementById("remove2").onclick=function(){
//             this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
//             }
// let arr=document.getElementById("remove");
// for(let i of arr){
//     i.onclick=function(){
//         this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)
//     }
// }
// Array.from(document.getElementById("remove")).forEach(i=>i.onclick=function(){
//     this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)  
// })
function deleteRow(r){
    var i=r.parentNode.parentNode.rowIndex;
    document.getElementById('showTable').deleteRow(i);
}







//弹窗
// function addNew() {
//     var d =document.getElementById("tj1");
//     d.style.display="";

// }
function addNew(){
    var tj1=document.getElementById("tj1");
    tj1.style.display="block";
}

// elementObject.onclick=function(){
//     // 事件处理代码
// }


// function close_div() {
//     document.getElementById("tj1").style.display = 'none';
//     document.body.style.overflow = 'auto';
// }
function close_div(){
    document.getElementById("tj1").style.display='none';
    document.body.style.overflow='auto';
}
//添加数据
function sure() {
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var sex = document.getElementById('sex').value;
    var jiguan = document.getElementById('jiguan').value;
    var place = document.getElementById('place').value;
    var taici = document.getElementById('taici').value;

    showTable.innerHTML += (
        `<tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${sex}</td>
        <td>${jiguan}</td>
        <td>${place}</td>
        <td>${taici}</td>
        <td>
          <span class="h">详情</span>
          <span class="i">修改</span>
          <button class="j" onclick="deleteRow(this)">删除</button>
         
      </td>
         </tr>`);
}
