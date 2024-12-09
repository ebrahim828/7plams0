document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الإرسال الفعلي للنموذج
    alert('تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا.');
    this.reset(); // إعادة تعيين النموذج
});
