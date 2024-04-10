function previewImage(input) {
    var reader = new FileReader();
  
    reader.onload = function(e) {
      var preview = document.getElementById('avatar-preview');
      preview.src = e.target.result;
    }
  
    if (input.files && input.files[0]) {
      reader.readAsDataURL(input.files[0]);
    } else {
      var preview = document.getElementById('avatar-preview');
      preview.src = 'placeholder.jpg'; // Set placeholder image if no file is selected
    }
  }  