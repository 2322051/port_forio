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
function openModal(key) {
  document.getElementById('modal-title').textContent = projects[key].title;
  document.getElementById('modal-img').src = projects[key].img;
  document.getElementById('modal-description').textContent = projects[key].desc;
  document.getElementById('modal-link').href = projects[key].link;
  document.getElementById('project-modal').style.display = 'flex';
}
function closeModal() {
  document.getElementById('project-modal').style.display = 'none';
}
// モーダル外クリックや×クリックも対応
document.querySelector('.close').onclick = closeModal;
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) closeModal();
};
