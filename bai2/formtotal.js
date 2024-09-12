var no=0;
var total =0;
function add(){
    no++;
    var pname = frm.pname.value;
    var qty = frm.qty.value;
    var price = frm.up.value;
    var sub = qty*price;
    var row = "<tr>";
    row += "<td>" + no + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + price + "</td>";
    row += "<td>" + sub + "</td>";
    total += sub;
    row += "</tr>";
    document.getElementById("tbl").innerHTML += row;
    document.getElementById("total").innerText = total;
  
}