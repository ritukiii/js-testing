document.getElementById("jadge").addEventListener('click', function() {
  var mark = Number(document.getElementById('mark').value);

  var resutl = jadge(mark);
  document.getElementById('result').innerText = resutl;
});
