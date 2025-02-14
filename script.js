function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");
	let row = table.insertRow(0);
	let cel1 = row.insertCel(0);
	let cel2 = row.insertCel(1);
	cell1.innerHTML = "New Cel1";
	cell2.innerHTML = "New Cel2";
}