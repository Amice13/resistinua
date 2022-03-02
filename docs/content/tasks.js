const source = [
  {
    id: 'business-petition',
    name: 'Підписати петицію щодо припинення ділових зв\'язків з Росією',
    skills: ['Без навичок'],
    tags: ['Цифровий напрямок'],
    reccuring: false
  },
  {
    id: 'cyber-security',
    name: 'Забезпечити власну кібербезпеку',
    skills: ['Без навичок'],
    tags: ['Цифровий напрямок'],
    reccuring: false
  },
  {
    id: 'communication',
    name: 'Забезпечити себе засобами комунікації',
    skills: ['Без навичок'],
    tags: ['Цифровий напрямок'],
    reccuring: false
  },
  {
    id: 'make-photo',
    name: 'Фіксувати військові злочини путінського режиму',
    skills: ['Без навичок'],
    tags: ['Інформаційний напрямок'],
    reccuring: false
  },
  {
    id: 'copywriting',
    name: 'Допомогти перекладом, редактурою, копірайтингом',
    skills: ['Переклад', 'Журналістика', 'Копірайтинг'],
    tags: ['Інформаційний напрямок'],
    reccuring: false
  },
  {
    id: 'thousand',
    name: 'Використати тисячу є-Підтримки на армію',
    skills: ['Без навичок'],
    tags: ['Благодійність'],
    reccuring: false
  },
  {
    id: 'media',
    name: 'Забезпечити себе джерелом достовірної інформації',
    skills: ['Без навичок'],
    tags: ['Цифровий напрямок'],
    reccuring: false
  },
  {
    id: 'volounteer',
    name: 'Записатись у волонтери',
    skills: ['Без навичок'],
    tags: ['Волонтерство'],
    reccuring: false
  },
  {
    id: 'tro',
    name: 'Записатися в територіальну оборону',
    skills: ['Військовий'],
    tags: ['Оборона'],
    reccuring: false
  },
  {
    id: 'cyber-army',
    name: 'Записатися у кібер-війська',
    skills: ['Інформаційні технології'],
    tags: ['Цифровий напрямок'],
    reccuring: false
  },
  {
    id: 'upvote',
    name: 'Підтримати українські проекти голосуванням',
    skills: ['Без навичок'],
    tags: ['Цифровий напрямок'],
    reccuring: false
  },
  {
    id: 'refugee-home',
    name: 'Надати помешкання тим, хто евакуююється',
    skills: ['Без навичок'],
    tags: ['Житло'],
    reccuring: false
  },
  {
    id: 'find-home',
    name: 'Знайти помешкання у випадку евакуації',
    skills: ['Без навичок'],
    tags: ['Житло'],
    reccuring: false
  },
  {
    id: 'sign-petition',
    name: 'Підписати петицію щодо підтримки України',
    skills: ['Без навичок'],
    tags: ['Цифровий напрямок'],
    reccuring: false
  },
  {
    id: 'psychology-aid',
    name: 'Долучитися до надання психологічної допомоги',
    skills: ['Психолог'],
    tags: ['Волонтерство'],
    reccuring: false
  },
  {
    id: 'nbu-donation',
    name: 'Здійснити внесок на потреби армії до НБУ',
    skills: ['Без навичок'],
    tags: ['Благодійність'],
    reccuring: true
  },
  {
    id: 'red-cross-donation',
    name: 'Здійснити внесок на потреби Червоного Хреста',
    skills: ['Без навичок'],
    tags: ['Благодійність'],
    reccuring: true
  },
  {
    id: 'give-transport',
    name: 'Надати допомогу із транспортом тим, хто евакуююється',
    skills: ['Водій'],
    tags: ['Транспорт'],
    reccuring: true
  },
  {
    id: 'refugee-transport',
    name: 'Отримати допомогу із переміщенням',
    skills: ['Без навичок'],
    tags: ['Транспорт'],
    reccuring: true
  },
  {
    id: 'remove-targets',
    name: 'Знищити мітки на об\'єктах інфрастуктури',
    skills: ['Без навичок'],
    tags: ['Оборона'],
    reccuring: true
  },
  {
    id: 'notify-targets',
    name: 'Повідомити про мітки на об\'єктах залізниці',
    skills: ['Без навичок'],
    tags: ['Оборона'],
    reccuring: true
  },
  {
    id: 'notify-troops',
    name: 'Повідомити про про російські війська',
    skills: ['Без навичок'],
    tags: ['Оборона'],
    reccuring: true
  },
  {
    id: 'inform-enemies',
    name: 'Поширюйте пропаганду',
    skills: ['Без навичок'],
    tags: ['Інформування'],
    reccuring: true
  },
  {
    id: 'give-blood',
    name: 'Здати кров на потреби поранених',
    skills: ['Без навичок'],
    tags: ['Донорство'],
    reccuring: true
  },
  {
    id: 'cocktail',
    name: 'Готувати "Бандера-Смузі" ("коктейль Молотова")',
    skills: ['Без навичок'],
    tags: ['Оборона'],
    reccuring: true
  },
  {
    id: 'barricades',
    name: 'Облаштувати завали та барикади',
    skills: ['Без навичок'],
    tags: ['Оборона'],
    reccuring: true
  },
  {
    id: 'remove-signs',
    name: 'Демонтувати дорожні знаки із вказівниками напрямків руху',
    skills: ['Без навичок'],
    tags: ['Оборона'],
    reccuring: true
  },
  {
    id: 'arrest-enemies',
    name: 'Затримати ворожих диверсантів',
    skills: ['Військовий'],
    tags: ['Оборона'],
    reccuring: true
  },
  {
    id: 'fund',
    name: 'Здійснити благодійний внесок',
    skills: ['Без навичок'],
    tags: ['Благодійність'],
    reccuring: true
  },
  {
    id: 'help',
    name: 'Надати гуманітарну допомогу',
    skills: ['Без навичок'],
    tags: ['Волонтерство'],
    reccuring: true
  },
  {
    id: 'ddos',
    name: 'Здійснити DDOS-атаку',
    skills: ['Інформаційні технології'],
    tags: ['Цифровий напрямок'],
    reccuring: true
  },
  {
    id: 'bloggers',
    name: 'Запросити блогерів підтримати Україну',
    skills: ['Без навичок'],
    tags: ['Інформування'],
    reccuring: true
  },
  {
    id: 'whistleblower',
    name: 'Зафіксувати військові злочини',
    skills: ['Юрист'],
    tags: ['Юридична робота'],
    reccuring: true
  },
  {
    id: 'block-tg',
    name: 'Заблокувати російські Телеграм-канали',
    skills: ['Інформаційні технології'],
    tags: ['Цифровий напрямок'],
    reccuring: true
  }
]

module.exports = source