document.addEventListener('DOMContentLoaded', function() {
    const acceptForms = document.querySelectorAll('.accept-form');
    const rejectForms = document.querySelectorAll('.reject-form');

    acceptForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const acceptBtn = form.querySelector('.accept-btn');
            acceptBtn.innerText = '✓ Accepted';
            acceptBtn.classList.add('accepted');

            // Delay form submission by 2 seconds to display the updated button
            setTimeout(() => {
                form.submit();
            }, 2000);

            event.preventDefault(); // Prevent default form submission behavior
        });
    });

    rejectForms.forEach(form => {
        form.addEventListener('submit', function(event) {
            const rejectBtn = form.querySelector('.reject-btn');
            rejectBtn.innerText = '✗ Rejected';
            rejectBtn.classList.add('rejected');

            // Delay form submission by 2 seconds to display the updated button
            setTimeout(() => {
                form.submit();
            }, 2000);

            event.preventDefault(); // Prevent default form submission behavior
        });
    });
});
