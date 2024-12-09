// Function para open sa modal
function openModal() {
    document.getElementById('codeModal').style.display = 'block';
  }
  
  // Function para close sa modal
  function closeModal() {
    document.getElementById('codeModal').style.display = 'none';
  }
  
  // Close modal kung i-click ang gawas sa modal
  window.onclick = function(event) {
    const modal = document.getElementById('codeModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  // Bact To Home
  document.getElementById('backToHomeBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
  });
  