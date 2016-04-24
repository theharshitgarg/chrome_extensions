document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
	alert("Hello! \n\nFrom \nHarshit Garg");
	var doc = new jsPDF();
	doc.save('sample.pdf');   
  }, false);
}, false);
