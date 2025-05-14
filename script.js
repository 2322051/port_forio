
// モーダルウィンドウを表示
const projectTitles = document.querySelectorAll('.project-title');
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');

// プロジェクトのデータ
const projectData = {
  project1: {
    title: 'プロジェクト名1',
    description: 'プロジェクト1の詳細説明。',
    link: 'https://example.com/project1'
  },
  project2: {
    title: 'プロジェクト名2',
    description: 'プロジェクト2の詳細説明。',
    link: 'https://example.com/project2'
  }
};

// プロジェクトタイトルがクリックされたとき
projectTitles.forEach(title => {
  title.addEventListener('click', (e) => {
    const projectId = e.target.getAttribute('data-project');
    const project = projectData[projectId];
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;
    modalLink.href = project.link;
    modal.style.display = 'block'; // モーダルを表示
  });
});

// モーダルを閉じる
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// モーダル外をクリックしても閉じる
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
