// گرفتن تمام گواهی‌ها
const certificates = document.querySelectorAll('.certificate');

// گرفتن modal و عناصر داخل آن
const modal = document.getElementById('certificateModal');
const modalImage = document.getElementById('modalImage');
const caption = document.getElementById('caption');
const closeModal = document.querySelector('.close');

// اضافه کردن event listener برای هر تصویر گواهی
certificates.forEach(cert => {
    cert.addEventListener('click', () => {
        const imgSrc = cert.querySelector('img').src; // گرفتن لینک تصویر
        modal.style.display = "block"; // نمایش modal
        modalImage.src = imgSrc; // قرار دادن تصویر در modal
        caption.textContent = cert.querySelector('p').textContent; // نمایش عنوان گواهی در caption
    });
});

// بستن modal وقتی کاربر روی دکمه × کلیک می‌کند
closeModal.addEventListener('click', () => {
    modal.style.display = "none";
});

// بستن modal وقتی کاربر خارج از modal کلیک می‌کند
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
