
  // Get the modal element
  var modal = document.getElementById("modal");

  // Get the button that opens the modal
  var openModalButton = document.getElementById("generate-url-btn");

  // Get the button that closes the modal
  var closeModalButton = document.getElementById("close-modal-button");

  // Get the button that saves the input values
  var saveButton = document.getElementById("save-button");

  // Function to save the input values
  function saveInputValues() {
    var candidateName = document.getElementById("candidate-name").value;
    var candidateEmail = document.getElementById("candidate-email").value;
    console.log("Candidate Name:", candidateName);
    console.log("Candidate Email:", candidateEmail);
    closeModal();
  }
  
  // Event listeners for the buttons
  openModalButton.addEventListener("click", openModal);
  closeModalButton.addEventListener("click", closeModal);
  saveButton.addEventListener("click", saveInputValues);

  // Close the modal if the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (event.target === modal) {
      closeModal();
    }
  });

 $(function () {
    $("#data-table").DataTable({
      "responsive": true, "lengthChange": false, "autoWidth": false,
    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
      "responsive": true,
    });
  });
