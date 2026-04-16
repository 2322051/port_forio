const projects = {
  lumina: {
    no: '01',
    title: 'Lum!na',
    img: 'images/lumina1.png',
    desc: '時間割の作成・共有、掲示板での情報交換、図書館や教室の空き状況確認、友達の位置共有、参考書の売買など、学生生活の「困った」を一つで解決するプラットフォーム。',
    stack: 'HTML · CSS · JavaScript · Flask · SQLite'
  },
  hobit: {
    no: '02',
    title: 'Hobit',
    img: 'images/hobit1.png',
    desc: '趣味を中心としたマッチングアプリ。カジュアル層からガチ勢まで誰でも気軽に参加でき、プロフィールと AI による性格分析を組み合わせて最適な友達候補をレコメンド。',
    stack: 'Swift · SwiftUI · UIKit · Python · SQLite3 · OpenAI API'
  },
  money: {
    no: '03',
    title: 'Group Wallet',
    img: 'images/money.png',
    desc: 'グループ内でのお金のやり取りを見える化し、記録・精算できるアプリ。モバイルと Web を行き来しながら使える設計。',
    stack: 'Swift · SwiftUI · React · Ruby · AWS · Docker'
  },
  rapid: {
    no: '04',
    title: 'Rapid Clicks',
    img: 'images/aimLab.png',
    desc: '画面をクリックするだけというシンプルなルールと直感的な操作性で、誰でも気軽に楽しめるゲーム。ターゲットの位置・サイズ・出現時間がランダムに変化し、実績やランキングで競える。',
    stack: 'HTML · CSS · JavaScript · PHP · MySQL'
  },
  connectbiz: {
    no: '05',
    title: 'ConnectBiz',
    img: 'images/tyuusyoukigyou.png',
    desc: '企業・個人の情報登録、提携状況・メッセージ・マッチング情報を一括管理するマイページ、業種やスキルでの検索機能を備えた中小企業向けのビジネスアライアンスプラットフォーム。',
    stack: 'HTML · CSS · JavaScript'
  },
  resource: {
    no: '06',
    title: 'ResourceHub',
    img: 'images/resource_manegiment.png',
    desc: 'あらゆるリソースを登録・編集・削除し、用途や数、ステータスを簡単に管理できる Web アプリ。SQLite による安全かつ高速なデータベース連携と、グラフによる利用状況の可視化。',
    stack: 'HTML · CSS · JavaScript · SQLite'
  }
};

/* --------------------------------------------------------
   Modal — project details
   -------------------------------------------------------- */
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalEyebrow = document.getElementById('modal-eyebrow');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-description');
const modalStack = document.getElementById('modal-stack');

function openProject(key) {
  const p = projects[key];
  if (!p) return;
  modalEyebrow.textContent = `— No. ${p.no}`;
  modalTitle.textContent = p.title;
  modalImg.src = p.img;
  modalImg.alt = `${p.title} screenshot`;
  modalDesc.textContent = p.desc;
  modalStack.textContent = p.stack;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeProject() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('.work-item').forEach(item => {
  item.querySelector('.work-link').addEventListener('click', (e) => {
    e.preventDefault();
    openProject(item.dataset.key);
  });
});

document.getElementById('close-modal').addEventListener('click', closeProject);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeProject();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('is-open')) closeProject();
});

/* --------------------------------------------------------
   Reveal on scroll
   -------------------------------------------------------- */
const revealTargets = document.querySelectorAll('.hero, section.about, section.work, section.skills, section.log, section.contact');
revealTargets.forEach(el => el.classList.add('reveal'));

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

revealTargets.forEach(el => io.observe(el));

/* --------------------------------------------------------
   Nav active state on scroll
   -------------------------------------------------------- */
const navLinks = document.querySelectorAll('.site-nav nav a[href^="#"]');
const sections = Array.from(navLinks).map(a => {
  const id = a.getAttribute('href').slice(1);
  return { link: a, section: document.getElementById(id) };
}).filter(s => s.section);

function setActiveNav() {
  const y = window.scrollY + 120;
  let active = sections[0];
  for (const s of sections) {
    if (s.section.offsetTop <= y) active = s;
  }
  navLinks.forEach(a => a.classList.remove('is-active'));
  if (active) active.link.classList.add('is-active');
}

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      setActiveNav();
      ticking = false;
    });
    ticking = true;
  }
});
setActiveNav();
