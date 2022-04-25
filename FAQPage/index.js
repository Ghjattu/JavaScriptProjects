const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(function (faqItem) {
    const faqButton = faqItem.querySelector('.faq-button');
    faqButton.addEventListener('click', function () {
        faqItems.forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
        faqItem.classList.toggle('active');
    });
});
