function hireMeAlert() {
    alert(' 🧡 Thank you for your interest ! 🧡 ');
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
   
    event.preventDefault();
    
   
    document.getElementById('formErrors').textContent = '';
    
   
    let hasError = false;
    let errors = '';

    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        errors += 'Name cannot be empty.\n';
        hasError = true;
    }

    const email = document.getElementById('email').value;
    if (email.trim() === '' || !email.includes('@')) {
        errors += 'Please enter a valid email.\n';
        hasError = true;
    }

    const subject = document.getElementById('subject').value;
    if (subject.trim() === '') {
        errors += 'Subject cannot be empty.\n';
        hasError = true;
    }

    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        errors += 'Message cannot be empty.\n';
        hasError = true;
    }

    // Show errors if any
    if (hasError) {
        document.getElementById('formErrors').textContent = errors.trim();
    } else {
      
        alert('🥳 Form submitted successfully ! 🥳');
        
        
    }
});


   
