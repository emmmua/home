// 初始化 AOS 动画库
AOS.init({
    duration: 1000,
    once: true
});

// 打字效果
const texts = ['热爱编程', '热爱设计', '热爱创造'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
    } else {
        setTimeout(type, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();

    // 技能进度条动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('data-progress');
            }
        });
    });

    document.querySelectorAll('.skill-progress').forEach(bar => {
        observer.observe(bar);
    });
});

// 初始化卡片倾斜效果
VanillaTilt.init(document.querySelector(".card"), {
    max: 5,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});

// 添加鼠标移动视差效果
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width / 2;
        const cardY = rect.top + rect.height / 2;

        const angleX = (mouseY - cardY) * 0.01;
        const angleY = (mouseX - cardX) * -0.01;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
});