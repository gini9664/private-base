// 頭像上傳預覽功能
const avatarInput = document.getElementById('avatarInput');
const avatarPreview = document.getElementById('avatarPreview');

avatarInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      avatarPreview.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// 顯示感謝訊息
function showThankYou() {
  const thankYouMessage = document.getElementById('thankYouMessage');
  thankYouMessage.textContent = '謝謝瀏覽我的名片！';
  thankYouMessage.style.display = 'block';
}
