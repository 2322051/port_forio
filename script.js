const projects = {
  project1: {
    title: 'AIチャットボット開発',
    img: 'project1.jpg',
    desc: 'OpenAI APIとReactを活用した自動応答サービス。会話ログの可視化やFAQ管理も実装。',
    link: 'https://github.com/your-github/project1'
  },
  project2: {
    title: 'IoTデータ可視化',
    img: 'project2.jpg',
    desc: '複数センサーのリアルタイムデータをWebで可視化。AWSサーバレス構成。',
    link: 'https://github.com/your-github/project2'
  }
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
