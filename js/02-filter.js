// модель - это наши данные
const tech = [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'Node.js' },
    { label: 'React' },
    { label: 'Vue' },
    { label: 'Next.js' },
    { label: 'Mobx' },
    { label: 'Redux' },
    { label: 'React Router' },
    { label: 'GraphQl' },
    { label: 'PostgreSQL' },
    { label: 'MongoDB' },
  ];
  
  /*
   * 1. Рендерим разметку элементов списка
   * 2. Слушаем изменение фильтра
   * 3. Фильтруем данные и рендерим новые элементы
   */
  
  const refs = {
    list: document.querySelector('.js-list'),
    input: document.querySelector('#filter'),
  };

  refs.input.addEventListener('input',  _.debounce(onFilterChange, 500))

  const listItemsMarkup = createListItemsMarkup(tech);

  console.log(listItemsMarkup);


// insertAdjacentHTML - используем если уже что то есть, и вы хотите туда добавить
// innerHTML - используем если там пуcто 
populateList(listItemsMarkup);

// представление - это то что у нас есть в интерфейсе, и вы никогда не найдейтесь на то что написано в интерфейсе
  function createListItemsMarkup(items){
    return items.map(item => `<li>${item.label}</li>`).join("");
  }

// у меня есть фильтр я сделаю на баззе массива tech новый массив отфильтрованных элиментов label которых совпадает с evt.target.value
  function onFilterChange(evt){
    console.log('INPUT')
    const filter = evt.target.value.toLowerCase();

    // если у обьекта в свойствей лейбел есть кусок текста который лежит в фильтре, просто верни мне этот обьект и в результате я получу отфильтрованный массив элимента
    const filteredItems = tech.filter(t => t.label.toLowerCase().includes(filter))

    const listItemsMarkup = createListItemsMarkup(filteredItems);

    // разметку отфильтрованного массива вешаю в наш лист
    populateList(listItemsMarkup)

  }

  function populateList(markup){
    refs.list.innerHTML = markup;
  }

