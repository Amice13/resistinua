const source = [
  {
    id: '1',
    name: 'Єдина платформа в Notion',
    description: 'Ця сторінка зібрала всі офіційні телеграм канали, списки бомбосховищ, плани дій в разі будь-яких екстремальних ситуацій, петиції, перелік дій, якщо вступати в армію, інфу для волонтерів, перелік контактів лікарів, телеграм боти, інфу для переказу коштів і т. ін.',
    link: 'https://viyna.net/',
    tags: ['Інформація', 'Гайди', 'Завдання', 'Безпека'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '73',
    name: 'Повітряна тривога (Android)',
    description: 'Встановіть застосунок Повітряна тривога, щоб миттєво отримувати сповіщення системи цивільної оборони у вибраній області України',
    link: 'https://play.google.com/store/apps/details?id=com.ukrainealarm',
    tags: ['Офіційні', 'Інформація', 'Безпека'],
    type: ['Додаток'],
    location: ['Україна']
  },
  {
    id: '74',
    name: 'Повітряна тривога (iOS)',
    description: 'Встановіть застосунок Повітряна тривога, щоб миттєво отримувати сповіщення системи цивільної оборони у вибраній області України',
    link: 'https://apps.apple.com/ua/app/%D0%BF%D0%BE%D0%B2%D1%96%D1%82%D1%80%D1%8F%D0%BD%D0%B0-%D1%82%D1%80%D0%B8%D0%B2%D0%BE%D0%B3%D0%B0/id1611955391?l=uk',
    tags: ['Офіційні', 'Інформація', 'Безпека'],
    type: ['Додаток'],
    location: ['Україна']
  },
  {
    id: '2',
    name: 'Офіційний канал IT армія України',
    description: 'Офіційний канал Міністерства цифрової трансформації для фахівців у цифровій сфері. Надає оперативні завдання для боротьби на кіберфронті',
    link: 'https://t.me/itarmyofukraine2022',
    tags: ['Офіційні', 'Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '3',
    name: 'Ukraine Avenger Bot',
    description: 'Телеграм-бот, сотворений кіберполіцією для виявлення та знешкодження ворожих міток, пересування техніки, виявлення не розірваних боєприпасів, диверсантів',
    link: 'https://t.me/ukraine_avanger_bot',
    tags: ['Офіційні', 'Спротив', 'Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '4',
    name: 'Телеграм-бот СБУ',
    description: 'Офіційний чат-бот, куди можна повідомляти інформацію про російські війська та техніку.',
    link: 'https://t.me/stop_russian_war_bot',
    tags: ['Офіційні', 'Спротив', 'Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '88',
    name: 'Росія вторглася до України',
    description: 'Інформація про вторгнення Росії до України, верифікована Міністерством закордонних справ',
    link: 'https://war.ukraine.ua/',
    tags: ['Офіційні', 'Інформація',],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '26',
    name: 'Працюючі аптеки України',
    description: 'Карта Держлікслужби відображає актуальний статус роботи аптек в умовах воєнного стану в Україні',
    link: 'https://www.google.com/maps/d/u/0/viewer?mid=11ftUM5axVYLzh23VvRRUNBcDZ4stmh1l',
    tags: ['Офіційні', 'Здоров\'я'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '6',
    name: 'РФ200 ищи своих',
    description: 'Вебсайт, створений представниками МВС України, на якому публікується інформація щодо полонених та вбитих російських солдатів з початку окупації.',
    link: 'https://200rf.com/',
    tags: ['Офіційні', 'Для РФ'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '6',
    name: 'Гуманітарна та медична допомога Україні',
    description: 'На цьому ресурсі можна дізнатися, як надати гуманітарну допомогу народові України. Українські бізнесмени відкрили склад, до якого можна відправити будь-який вантаж, який допоможе людям.',
    link: 'http://www.helpukraine.center/',
    tags: ['Інформація', 'Волонтерство'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '7',
    name: 'Київ Цифровий',
    description: 'Мобільний додаток для мешканців Києва, який оперативно повідомляє про актульні події у міст та необхідність перейти до бомбосховищ.',
    link: [
      { url: 'https://play.google.com/store/apps/details?id=com.kyivdigital', title: 'Додаток для Андроід' },
      { url: 'https://apps.apple.com/ua/app/%D0%BA%D0%B8%D1%97%D0%B2-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B8%D0%B9/id1534007479', title: 'Додаток для iOS' }
    ],
    tags: ['Офіційні', 'Інформація', 'Безпека'],
    type: ['Додаток'],
    location: ['Київ']
  },
  {
    id: '34',
    name: 'Opir',
    description: 'Якісна та перевірена інформація у вигляді інтерактивної мапи для людей, які залишились у великих містах. Укриття, їжа, пальне, медпункти, зоомагазини, пункти гуманітарної допомоги.',
    link: 'https://opir.org/',
    tags: ['Інформація', 'Біженці', 'Здоров\'я', 'Домашні тварини'],
    type: ['Мапа'],
    location: ['України']
  },
  {
    id: '9',
    name: 'Телеграм-бот Фонду «Повернись Живим»',
    description: 'Фонд «Повернись Живим» створив телеграм-бот, де публікується список потреб армії.',
    link: 'https://t.me/+JPCDzX2h5fI0NTQy',
    tags: ['Інформація', 'Волонтерство'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '10',
    name: 'Укриття цивільного захисту Києва',
    description: 'Мапа із переліком адрес для укриття у різних района міста Києва.',
    link: 'https://www.google.com/maps/d/u/0/viewer?mid=1nv3QreO1QS5_AmRRNLHXu7u99sKJ6JRR&ll',
    tags: ['Інформація', 'Безпека'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '11',
    name: 'Ukraine Now Refuge',
    description: 'Допомога тим, хто намагається покинути територію',
    link: 'https://www.ukrainenow.org/refuge',
    tags: ['Біженці', 'Волонтерство'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '12',
    name: 'Прихисток',
    description: 'Вебсервіс, який допомагає прихистити співгромадян у скруті або отримати прихисток',
    link: 'https://prykhystok.in.ua/',
    tags: ['Біженці', 'Волонтерство', 'Житло'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '13',
    name: 'Чат-бот Volunteer Needs',
    description: 'Чат-бот для отримання допомоги з речами або роботою волонтерів.',
    link: 'http://t.me/volunteerneeds_bot',
    tags: ['Волонтерство'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '14',
    name: 'Чат-бот Safe Space',
    description: 'Показує найближчі укриття (поки лише в Києві)',
    link: 'https://t.me/safe_space_ua_bot',
    tags: ['Інформація', 'Безпека'],
    type: ['Чат-бот'],
    location: ['Київ']
  },
  {
    id: '15',
    name: 'Територіальна оборона ЗСУ',
    description: 'Інформація про територіальні центри комплектування та соціальної підтримки',
    link: 'https://sprotyv.in.ua/',
    tags: ['Спротив'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '16',
    name: 'Карта DeepState',
    description: 'Актуальна інформація на фронтах',
    link: 'https://www.google.com/maps/d/u/0/viewer?mid=1ROxxPyw0nPAa5HDAABCBU-IDECabGw3-&ll',
    tags: ['Інформація'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '33',
    name: 'Карта радіаційного забруднення України - SaveEcoBot',
    description: 'Український екологічний ресурс, що в режимі реального часу відображає інформацію про рівень радіаційного забруднення на всій території України. Після початку повномасштабної війни, захоплення ЧАЕС та загрози атомним станціям, ми слідкуємо за рівнем радіації в населених пунктах, збираючи усі доступні дані.',
    link: 'https://www.saveecobot.com/',
    tags: ['Екологія'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '8',
    name: 'Stand With Ukraine - Save lives',
    description: 'Бібліотека NFT токенів з постерів про війну в України. Всі гроші будуть відправлено на рахунок ЗСУ.',
    link: 'https://opensea.io/collection/save-life-in-ukraine',
    tags: ['Мистецтво', 'Благодійність'],
    type: ['Магазин'],
    location: ['Світ']
  },
  {
    id: '17',
    name: 'Чат-бот «Готовий до всього»',
    description: 'Telegram-бот надає поради про те, як підготуватися та діяти під час надзвичайних ситуацій',
    link: 'https://t.me/Hotovyi_do_vsioho_bot',
    tags: ['Інформація', 'Безпека'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '18',
    name: 'Stand For Ukraine',
    description: 'Перелік організацій та проектів, на користь яких можна зробити пожертву аби підтримати Збройні Сили України.',
    link: 'https://standforukraine.com/',
    tags: ['Інформація', 'Благодійність'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '19',
    name: 'Military 101 UA',
    description: 'Корисні лаконічні матеріали по навичкам поведінки під час воєнного стану: вогнева і тактична підготовка, базова медична допомога, поради по психології та інше.',
    link: 'https://military101.org.ua/course',
    tags: ['Інформація', 'Спротив'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '20',
    name: 'Dear Russian WTF',
    description: 'Вебсайт для розповсюдження серед громадян Російської Федерації.',
    link: 'https://dearrussian.wtf/',
    tags: ['Для РФ'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '21',
    name: 'Зупиніть війну',
    description: 'Вебсайт для розповсюдження серед громадян Російської Федерації.',
    link: 'https://stopwar.in.ua/',
    tags: ['Для РФ'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '22',
    name: 'Где мой сын',
    description: 'Цей проект створено українськими активістами для інформування мирних росіян про смерті їхніх близьких на війні Росії проти України, яка розпочалася 24 лютого о 4-й ранку і триває до сьогодні.',
    link: 'https://gdemoysyn.com/',
    tags: ['Для РФ'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '23',
    name: 'Нам по дорозі',
    description: 'Єдиний телеграм-бот для пошуку попутників.',
    link: 'https://t.me/nampodorozi_bot',
    tags: ['Біженці', 'Транспорт'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '24',
    name: 'Прихисток для українців',
    description: 'Телеграм-бот для надання інформації про можливість прихистити біженців',
    link: 'https://t.me/shelter_for_ukrainians_bot',
    tags: ['Біженці', 'Житло'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '25',
    name: 'Helping Ukraine',
    description: 'Вебсайт зі зверненням до різних країн світу щодо підтримки України',
    link: 'https://helping.in.ua/',
    tags: ['Міжнародна допомога'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '27',
    name: 'Довідник практичних порад',
    description: 'Чат-бот надає поради, як діяти у часі війни або надзвичайної інформації',
    link: 'https://t.me/DovidkaInfo_bot',
    tags: ['Інформація'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '28',
    name: 'SaveUA',
    description: 'Чат-бот для пошуку та надання допомоги',
    link: 'https://t.me/saveua_bot',
    tags: ['Інформація'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '29',
    name: 'FirstAidRobot',
    description: 'Бот помічник для надання першої домедичної допомоги',
    link: 'https://t.me/FirstAidRobot',
    tags: ['Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '30',
    name: 'Shelter for Ukraine',
    description: 'Мапа для пошуку житла за кордонами України',
    link: 'https://www.shelter4ua.com/',
    tags: ['Житло', 'Біженці'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '31',
    name: 'Военнопленные РФ',
    description: 'Сервіс для пошуку полонених російських військових',
    link: 'https://powukraine.org',
    tags: ['Для РФ'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '32',
    name: 'Attack On Europe',
    description: 'Задокументовані втрати техніки протягом російського вторгнення в Україну',
    link: 'https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-equipment.html',
    tags: ['Інформація', 'Для РФ'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '38',
    name: 'uainfo',
    description: 'Антипропагандистський ресурс для громадян РФ',
    link: 'https://uaposition.github.io/uainfo/',
    tags: ['Інформація', 'Для РФ'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '35',
    name: 'Ukrainian Witness',
    description: 'Мета проекту зафіксувати і показати світу те, що зараз відбувається в Україні. Це будуть хроніки непростого часу, які наші діти будуть дивитись на уроках історії України. України, яка перемогла Росію у війні.',
    link: 'https://www.facebook.com/story.php?story_fbid=2236651229825635&id=346164665540977',
    tags: ['Інформація', 'Збір доказів'],
    type: ['Проекти в соцемережах'],
    location: ['Світ']
  },
  {
    id: '36',
    name: 'Відео як Доказ',
    description: 'Польовий посібник “Відео як Доказ” допомагає активістам використовувати відеозйомку для викриття правопорушень та відновлення справедливості. Цей матеріал допоможе забезпечити справжні зміни і відновлення справедливості за допомогою великої кількості камер у великій кількості рук.',
    link: 'https://vae.witness.org/ua/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE-%D1%8F%D0%BA-%D0%B4%D0%BE%D0%BA%D0%B0%D0%B7/',
    tags: ['Інформація', 'Збір доказів'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '37',
    name: 'Мережа аптек',
    description: 'Інформація про мережу аптек в Україні, зібрана Ярославом Гарагуцем.',
    link: 'https://docs.google.com/spreadsheets/d/16z9JQn3u6Rr0rJwo1_dG-jJbtC7c2ZNd-Fgs9shZgro/edit?fbclid=IwAR0PYtM-09IqcHEDHxF2x70I8emIkEVvfGdZ3JvExazQMvj5q0vqVuJtbXs#gid=503360376',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Дані'],
    location: ['Україна']
  },
  {
    id: '39',
    name: 'Інструкція під час війни',
    description: 'Корисні посилання щодо власної діяьності під час війни.',
    link: 'https://prjctr.notion.site/96bec30d8f024c7abf6ab4281585a0d7',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '91',
    name: 'StopDrugsBot',
    description: 'Бот для блокування сервісів дезінформації',
    link: 'https://t.me/stopdrugsbot',
    tags: ['Інформація'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '40',
    name: 'Doc2rbot',
    description: 'Турбота - медичний бот, який знаходить лікарів для пацієнтів',
    link: 'https://t.me/Doc2rbot',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '41',
    name: 'FirstAidRobot',
    description: 'Бот помічник для надання першої домедичної допомоги',
    link: 'https://t.me/FirstAidRobot',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '42',
    name: 'Pharmacy Available Bot',
    description: 'Чат-бот для отримання інформації про наявність працюючих аптек поблизу',
    link: 'https://t.me/pharmacy_available_bot',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '43',
    name: 'Tribunal UA',
    description: 'Чат-бот фіксації військового злочину рф проти цивільного населення',
    link: 'https://t.me/tribunal_ua_bot',
    tags: ['Інформація', 'Збір доказів'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '44',
    name: 'Bomb Found Bot',
    description: 'Повідомлення про знайдені снаряди та бомби',
    link: 'https://t.me/bomb_found_bot',
    tags: ['Інформація', 'Безпека'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '45',
    name: 'Gov RF Bot',
    description: 'Бот який надає контакти влади РФ',
    link: 'https://t.me/gov_rf_bot',
    tags: ['Інформація', 'Безпека'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '46',
    name: 'Turbotnyk Bot',
    description: 'Необхідні речі для українських переселенців у ЦНАПах, що працюють як пункти турботи',
    link: 'https://t.me/turbotnyk_bot',
    tags: ['Інформація', 'Біженці'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '47',
    name: 'Fire Smoothie',
    description: 'Анонімно допоможе барменам знайти необхідні ресурси для коктейлів',
    link: 'https://t.me/fire_smoothie_bot',
    tags: ['Інформація', 'Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '48',
    name: 'Help-ukraine-win',
    description: 'Автоматичне навантаження сайтів РФ / РФ пропаганди',
    link: 'https://help-ukraine-win.firebaseapp.com',
    tags: ['DDOS', 'Завдання'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '49',
    name: 'The list',
    description: 'Автоматичне навантаження сайтів РФ / РФ пропаганди',
    link: 'https://the-list.ams3.cdn.digitaloceanspaces.com/index.html',
    tags: ['DDOS', 'Завдання'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '50',
    name: 'Stop Russian Desinformation',
    description: 'Автоматичне навантаження сайтів РФ / РФ пропаганди',
    link: 'https://stop-russian-desinformation.near.page/',
    tags: ['DDOS', 'Завдання'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '51',
    name: 'Cyber Yozh',
    description: 'Автоматичне навантаження сайтів РФ / РФ пропаганди',
    link: 'https://cyber-yozh.com/',
    tags: ['DDOS', 'Завдання'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '52',
    name: 'Russian Warship Go F*ck Yourself',
    description: 'Автоматичне навантаження сайтів РФ / РФ пропаганди',
    link: 'https://russianwarshipgofuckyourself.club/',
    tags: ['DDOS', 'Завдання'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '53',
    name: 'Play For Ukraine',
    description: 'Автоматичне навантаження сайтів РФ / РФ пропаганди',
    link: 'https://playforukraine.live/',
    tags: ['DDOS', 'Завдання', 'Дозвілля'],
    type: ['Гра'],
    location: ['Світ']
  },
  {
    id: '54',
    name: 'Telegram Report Bot UA',
    description: 'Автоматизоване надсилання скарг Телеграм каналів пропагандистів',
    link: 'https://github.com/Antcating/telegram_report_bot_ua',
    tags: ['Завдання', 'Антипропаганда'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '55',
    name: 'Report Russian Telegram',
    description: 'Автоматизоване надсилання скарг Телеграм каналів пропагандистів',
    link: 'https://github.com/Dantistnfs/reportrussiantg',
    tags: ['Завдання', 'Антипропаганда'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '56',
    name: 'EU 4 UA',
    description: 'Платформа для прихистку біженців у Європі',
    link: 'https://ua.eu4ua.org/',
    tags: ['Інформація', 'Біженці'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '57',
    name: 'Refugees.RO',
    description: 'Пошук житла для людей, що евакуюються в Румунії',
    link: 'https://refugees.ro/',
    tags: ['Інформація', 'Біженці'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '58',
    name: 'Betha Ukraine',
    description: 'Проект, що допомагає згуртувати всіх охочих у волонтерській діяльності',
    link: 'https://betha.in.ua/',
    tags: ['Волонтерство'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '59',
    name: 'UAhelp від Монобанк',
    description: 'Швидкі перекази на користь Збройних сил України',
    link: 'https://uahelp.monobank.ua/',
    tags: ['Благодійність'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '60',
    name: 'Defend Ukraine',
    description: 'Сайт для міжнародної допомоги Україні',
    link: 'https://www.defendukraine.org/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '61',
    name: 'Ukraine Support',
    description: 'Ресурси українським біженцям та ресурси для допомоги українцям з-за кордону',
    link: 'https://ukrainesupport.com.ua/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '62',
    name: 'Help Ukraine Win',
    description: 'Колекція засобів для допомоги з-за кордону',
    link: 'https://helpukrainewin.org/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '63',
    name: 'PowUkraine',
    description: 'Сайт з інформацією про полонених та вбитих російських солдатів в Україні',
    link: 'https://powukraine.org/',
    tags: ['Інформація', 'Для РФ'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '64',
    name: 'How to Help Ukraine Now',
    description: 'Колекція засобів для допомоги з-за кордону',
    link: 'https://how-to-help-ukraine-now.super.site/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '65',
    name: 'Dovidka.info',
    description: 'Довідник практичних порад, як діяти у часі війни або надзвичайної інформації',
    link: 'https://dovidka.info/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '66',
    name: 'Support Ukraine',
    description: 'Довідник практичних порад, як допомогти Україні ззовні',
    link: 'https://supportukraine.notion.site/',
    tags: ['Інформація', 'Гайди'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '67',
    name: 'Карта працюючих магазинів',
    description: 'Карта відображає актуальний статус роботи магазинів в умовах воєнного стану в Україні',
    link: 'https://www.google.com/maps/d/u/0/embed?mid=16vxeRoA5rBl8L9IwyuNswni1uU59vyZF&ll=50.51967162617199%2C32.21530446152501&z=6',
    tags: ['Інформація'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '68',
    name: 'Карта аптек які зараз працюють',
    description: 'Карта відображає актуальний статус роботи аптек в умовах воєнного стану в Україні',
    link: 'https://www.google.com/maps/d/embed?mid=11ftUM5axVYLzh23VvRRUNBcDZ4stmh1l&ehbc=2E312F&ll=49.898792018174966%2C30.33388632909823&z=10',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '69',
    name: 'MapaHelp',
    description: 'Карта місць де допомагають українцям: житлом, одягом, медичною допомогою',
    link: 'https://mapahelp.me',
    tags: ['Інформація', 'Допомога'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '70',
    name: 'World For Ukraine',
    description: 'Платформа дій проти російської агресії',
    link: 'https://worldforukraine.net/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '71',
    name: 'Anti Fake',
    description: 'Відео матеріали для росіян | Anti Fake',
    link: 'https://bit.ly/%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D1%84%D0%B0%D0%BA%D1%82%D1%8B',
    tags: ['Інформація', 'Для РФ'],
    type: ['Дані'],
    location: ['Світ']
  },
  {
    id: '72',
    name: 'Поп-ап про російську агресію',
    description: 'Розмістіть поп-ап на вашому сайті щодо російської агресії',
    link: 'https://infowarship.pages.dev/howto-en',
    tags: ['Інформація', 'Для РФ'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '75',
    name: 'Stop Putin',
    description: 'Сайт для координації протестів у вашій країні, вашому місті із часом та місцем протесту.',
    link: 'https://www.stopputin.net/',
    tags: ['Інформація', 'Протести'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '76',
    name: 'Відправ Путіна на Юпітер',
    description: 'Пожертвуй $2,99, щоб допомогти нам побудувати ракету, яка пошле кривавого диктатора подалі від Землі.',
    link: 'https://putler.io/',
    tags: ['Офіційні', 'Благодійність'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '77',
    name: 'UA Anti Spam',
    description: 'Бот для Телеграм, який видаляє повідомлення з назвами міст, укриттів, та слова переміщення військ',
    link: 'https://t.me/UaAntiSpam_bot',
    tags: ['Сервіс'],
    type: ['Бот'],
    location: ['Україна']
  },
  {
    id: '78',
    name: 'Поміч на дорозі',
    description: 'Цей бот допоможе людям, які намагаються їхати зі Сходу на Захід чи навпаки по країні.',
    link: 'https://t.me/help_onroad_ua_bot',
    tags: ['Транспорт'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '79',
    name: 'База креативних постерів',
    description: 'Використовуйте постери на користь боротьби України зі згадкою автора та тримайте наш інформаційний фронт у боротьбі проти росії. Зібрано спільними зусиллями Projector та Telegraf.design.',
    link: 'https://standwithukraine.super.site/a441535fb4fb4a9cab4cda445ee3a869',
    tags: ['Мистецтво'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '80',
    name: 'Russia-Ukraine War',
    description: 'Інформація для громадян інших країн щодо допомоги Україні та посилання на офіційні благодійні організації.',
    link: 'https://ukrainewar.carrd.co/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '81',
    name: 'Як ти можеш підтримати Україну',
    description: 'Інформація про збір коштів та петиції для іноземців (англійською та німецькою мовою)',
    link: 'https://how-you-can-support-ukraine.super.site/',
    tags: ['Інформація', 'Благодійність'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '82',
    name: 'Russia Canceled',
    description: 'Інформація щодо санкцій застосованих до Росії та російського бізнесу',
    link: 'https://t.me/+U6y4VDrDjN01OTIy',
    tags: ['Інформація'],
    type: ['Телеграм-канал'],
    location: ['Україна']
  },
  {
    id: '83',
    name: 'Russian VC supporting WAR',
    description: 'Інформація щодо ставлення до війни венчурних інвесторів, підприємців та публічних осіб',
    link: 'https://stopwar2022.notion.site/Russian-VC-supporting-WAR-dc8ac6663eed4eaba91de9e136e239ee',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '84',
    name: 'Карта допомоги',
    description: 'Карта допомоги Українським біженцям в Європі (мітки польською мовою)',
    link: 'https://www.google.com/maps/d/u/0/viewer?mid=168CYAtRoeK_YIEnD8PJm6dx17d09xrSN&hl=pl&ll=52.217890743009896%2C20.545422563708165&z=6',
    tags: ['Інформація', 'Біженці'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '85',
    name: 'Карта безпечних місць для науковців',
    description: 'Мапа місць, де українські науковці можуть знайти прихисток',
    link: 'https://scienceforukraine.eu/',
    tags: ['Інформація', 'Біженці', 'Вчені'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '86',
    name: 'Виходь за Україну',
    description: 'Мапа демонстрацій на підтримку України',
    link: 'https://standwithukraine.live/',
    tags: ['Інформація', 'Протести'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '87',
    name: 'Безпечні місця Львова',
    description: 'Збір інформації про стан укриттів у Львові',
    link: 'http://lviv.safemap.in.ua/',
    tags: ['Інформація', 'Безпека'],
    type: ['Мапа'],
    location: ['Львів']
  },
  {
    id: '89',
    name: 'Відкритий лист до ІТ',
    description: 'Відкритий лист до ІТ-гігантів з проханням припинити будь-яку взаємодію з Росією.',
    link: 'https://www.help99.co/open-letter',
    tags: ['Офіційні', 'Інформація'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '90',
    name: 'Мапа війни в Україні',
    description: 'Мапа, на якій відображено події, що стосуються ситуації в Україні',
    link: 'https://liveuamap.com/',
    tags: ['Інформація'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '91',
    name: 'Україна Допомога 🇺🇦',
    description: 'Чат-бот, метою якого є об\'єднати людей в одному боті, де будь хто може допомогти або попросити про допомогу.',
    link: 'https://t.me/TheUkrainiansHelp_bot',
    tags: ['Інформація'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '92',
    name: 'Друг. Перша допомога',
    description: 'Команда Інституту когнітивного моделювання у співпраці з кафедрою медичної психології, психосоматичної медицини та психотерапії Національного медичного університету імені Богомольця та фахівцями проекту «Друг» розробила бот першої психологічної допомоги. Він стане в пригоді у перші години після травматичної події.',
    link: 'https://t.me/friend_first_aid_bot',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '93',
    name: 'Розкажи мені',
    description: 'Онлайн-платформа «Розкажи мені» починає цілодобово надавати українцям безкоштовну психологічну допомогу. Якщо ви відчуваєте тривогу, у вас трапляються панічні атаки, ви близькі до депресії чи навіть на межі – залиште заявку та очікуйте. Спеціаліст зв’яжеться з вами якомога швидше.',
    link: 'https://tellme.com.ua/',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '94',
    name: 'Гаряча лінія для волонтерів',
    description: 'Цей бот створений для допомоги військовим та населенню України. Гаряча лінія для волонтерів, де можна запропонувати свою допомогу або отримати її.',
    link: 'https://t.me/VolunteersHotlineBot',
    tags: ['Інформація', 'Волонтерство'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '95',
    name: 'Колективна обізнаність України щодо нерозірваних боєприпасів',
    description: 'Це веб-сайт створений для допомоги особам, які знайшли вибухонебезпечні пристрої в Україні.',
    link: 'https://www.ukraine-cat-uxo.com/t-ua',
    tags: ['Інформація', 'Безпека'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '96',
    name: 'Ну що, як ви?',
    description: 'Бот, який дозволяє краще координуватись у ці складні часи. Задає два питання - “Ви на зв’язку?” та запитує місце, де ви знаходитеся. Потім будує аналітику на отриманих даних.',
    link: 'https://t.me/Nu_sho_yak_vy_bot',
    tags: ['Інформація', 'Безпека'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '97',
    name: 'Окупант',
    description: 'Поіменний список військових Російської Федерації та солдатів, захоплених у полон',
    link: 'https://invaders-rf.com/',
    tags: ['Офіційні','Інформація', 'Для РФ'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
]

module.exports = source
