const projects = {
  project1: {
    title: 'グループ内お金管理アプリ',
    img: 'images/money.png',
    desc: 'グループでのお金のやり取りを見える化し、記録・精算できるアプリ',
    link: 'https://github.com/your-github/project1'
  },
  project2: {
    title: 'Lum!na',
    img: 'images/lumina1.png',
    desc: '時間割の作成・共有、掲示板での情報交換、図書館や教室の空き状況確認、友達の位置共有、参考書の売買など、学生生活の“困った”を一つで解決できるプラットフォーム。',
    link: 'https://github.com/your-github/project2'
  },
  project3: {
    title: 'Hobit',
    img: 'images/hobit1.png',
    desc: '本サービスは、幅広い趣味カテゴリーに対応し、同じ熱量で楽しめる仲間と出会える「趣味を中心としたマッチング」を実現しています。恋愛目的ではなく、気軽で自然な出会いを重視しているため、マッチングアプリ特有の“出会い”に抵抗がある方にも使いやすい設計です。趣味の深さやレベルに関係なく、カジュアル層からガチ勢まで誰でも気軽に参加でき、ユーザーのプロフィールや趣味、さらにAIによる性格分析を活用することで、一人ひとりに最適な友達候補をおすすめするレコメンド機能も備えています。',
    link: 'https://github.com/your-github/project2'
  },
  project4: {
    title: 'Rapid Clicks',
    img: 'images/aimLab.png',
    desc: '画面をクリックするだけというシンプルなルールと直感的な操作性で、誰でも気軽に楽しめるゲームです。プレイヤーは、画面上に表示されるターゲットをできるだけ早くクリックすることで、スコアを競います。ターゲットの出現位置やサイズ、出現時間などがランダムに変化するため、毎回異なるチャレンジが楽しめます。',
    link: 'https://github.com/your-github/project2'
  },
  project5: {
    title: 'Lum!na',
    img: 'images/tyuusyoukigyou.png',
    desc: '時間割の作成・共有、掲示板での情報交換、図書館や教室の空き状況確認、友達の位置共有、参考書の売買など、学生生活の“困った”を一つで解決できるプラットフォーム。',
    link: 'https://github.com/your-github/project2'
  },
  project6: {
    title: 'Lum!na',
    img: 'images/resource_manegiment.png',
    desc: '時間割の作成・共有、掲示板での情報交換、図書館や教室の空き状況確認、友達の位置共有、参考書の売買など、学生生活の“困った”を一つで解決できるプラットフォーム。',
    link: 'https://github.com/your-github/project2'
  },
};

// カードクリックでモーダル表示
document.querySelectorAll('.project-card').forEach(card => {
  card.onclick = function() {
    const key = this.dataset.key;
    const p = projects[key];
    document.getElementById('modal-title').textContent = p.title;
    document.getElementById('modal-img').src = p.img;
    document.getElementById('modal-description').textContent = p.desc;
    document.getElementById('modal-link').href = p.link;
    document.getElementById('project-modal').style.display = 'flex';
  }
});
// 閉じる動作
document.getElementById('close-modal').onclick = closeModal;
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) closeModal();
};
function closeModal() {
  document.getElementById('project-modal').style.display = 'none';
}
