document.addEventListener('DOMContentLoaded', () => {
    const serviceForm = document.getElementById('service-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    serviceForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const serviceType = escapeHTML(document.getElementById('service-type').value);
        const serviceDate = escapeHTML(document.getElementById('service-date').value);

        // Validate the date
        if (new Date(serviceDate) < new Date()) {
            alert('Please select a future date.');
            return;
        }

        // Confirmation message
        confirmationMessage.innerHTML = `Your ${serviceType} service has been booked for ${serviceDate}.`;
    });

    // Escape HTML to prevent XSS attacks
    const escapeHTML = (str) => {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    };
});
