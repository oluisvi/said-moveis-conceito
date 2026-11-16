const categoryTabs = [...document.querySelectorAll('.category-tab')];
const categoryPanel = document.querySelector('#category-panel');
const panelTitle = document.querySelector('#panel-title');
const panelDescription = document.querySelector('#panel-description');
const panelKicker = document.querySelector('#panel-kicker');
const panelLink = document.querySelector('#panel-link');

const categoryContent = {
  moveis: {
    title: 'Móveis para viver junto.',
    kicker: 'PARA SUA CASA',
    description: 'Converse com a equipe sobre as opções de móveis e consulte o que está disponível na loja.',
    link: 'Perguntar sobre móveis',
    label: 'Móveis'
  },
  colchoes: {
    title: 'Colchões para o seu descanso.',
    kicker: 'PARA SEU DESCANSO',
    description: 'A Said também trabalha com colchões. Pergunte à equipe sobre opções e conheça de perto na loja.',
    link: 'Perguntar sobre colchões',
    label: 'Colchões'
  }
};

function selectCategory(tab, moveFocus = false) {
  const key = tab.dataset.category;
  const content = categoryContent[key];
  for (const item of categoryTabs) {
    const active = item === tab;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
  }
  categoryPanel.dataset.active = key;
  categoryPanel.setAttribute('aria-labelledby', tab.id);
  panelTitle.textContent = content.title;
  panelKicker.textContent = content.kicker;
  panelDescription.textContent = content.description;
  panelLink.firstChild.textContent = content.link + ' ';
  if (moveFocus) tab.focus();
}

for (const tab of categoryTabs) {
  tab.addEventListener('click', () => selectCategory(tab));
  tab.addEventListener('keydown', (event) => {
    const current = categoryTabs.indexOf(tab);
    let next;
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (current + 1) % categoryTabs.length;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (current - 1 + categoryTabs.length) % categoryTabs.length;
    if (next !== undefined) {
      event.preventDefault();
      selectCategory(categoryTabs[next], true);
    }
  });
}
