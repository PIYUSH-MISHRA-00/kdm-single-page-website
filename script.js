function handlePropertyClick(title) {
    console.log(`Clicked on property: ${title}`);
}

function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (name && email && message) {
        console.log('Form submitted:', { name, email, message });
        event.target.reset();
        alert('Thank you for your message. We will get back to you soon!');
    } else {
        alert('Please fill in all fields.');
    }
}
