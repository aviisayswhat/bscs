const magicBtn = document.getElementById('magic-btn');
const profileAvatar = document.getElementById('profile-avatar');

if (magicBtn && profileAvatar) {
    magicBtn.addEventListener('dblclick', function(e) {
        e.preventDefault();

        // 1. Simulan ang fade out
        profileAvatar.classList.add('fade-out');

        setTimeout(function() {
            if (profileAvatar.src.includes('gacha.png')) {
                profileAvatar.src = 'me.png';
                profileAvatar.style.objectPosition = '10px 0.5px'; 
                profileAvatar.style.transform = 'scale(1.30)';
            } else {
                profileAvatar.src = 'gacha.png';
                profileAvatar.style.objectPosition = '10px 50px';
                profileAvatar.style.transform = 'scale(2.0)';
            }
        }, 250); 

        setTimeout(function() {
            profileAvatar.classList.remove('fade-out');
        }, 500);
    });
}
