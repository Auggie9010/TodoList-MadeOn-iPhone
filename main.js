var table = document.getElementById('todotable');

function addtodo() {
  var
    newTxt = document.getElementById('todotxt').value,
    newtr = table.insertRow(table.rows.length),
    newtd1 = newtr.insertCell(newtr.cells.length),
    newtd2 = newtr.insertCell(newtr.cells.length),
    newButton = document.createElement('button');

  if (newTxt != "") {
    newtd1.appendChild(document.createTextNode(newTxt));
    newButton.setAttribute('onclick', 'done(this.parentNode.parentNode.rowIndex)');
    newButton.appendChild(document.createTextNode("done"));
    newtd2.appendChild(newButton);
    document.getElementById('todotxt').value = "";
  }
}

function done(index) {
  table.deleteRow(index - 1);
}
