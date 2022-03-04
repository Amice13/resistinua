const source = [
  {
    id: '1',
    name: 'Notion unified platform',
    description: 'This page includes all official Telegram channels, lists of bomb shelters, action plans in case of any extreme situations, petitions, what to do to join the army, information for volunteers, doctors’ contact details, Telegram bots, information about wire transfers, etc.',
    link: 'https://ukraineisforever.notion.site/ukraineisforever/925902b5c48a4d7589fdeff2deba6233',
    tags: ['Інформація', 'Гайди', 'Завдання', 'Безпека'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '73',
    name: 'Air Alarm (Android)',
    description: 'Install the Air Alarm app to get instant alerts of the system of civil defense in a given region of Ukraine',
    link: 'https://play.google.com/store/apps/details?id=com.ukrainealarm',
    tags: ['Офіційні', 'Інформація', 'Безпека'],
    type: ['Додаток'],
    location: ['Україна']
  },
  {
    id: '74',
    name: 'Air Alarm (iOS)',
    description: 'Install the Air Alarm app to get instant alerts of the system of civil defense in a given region of Ukraine',
    link: 'https://apps.apple.com/ua/app/%D0%BF%D0%BE%D0%B2%D1%96%D1%82%D1%80%D1%8F%D0%BD%D0%B0-%D1%82%D1%80%D0%B8%D0%B2%D0%BE%D0%B3%D0%B0/id1611955391?l=uk',
    tags: ['Офіційні', 'Інформація', 'Безпека'],
    type: ['Додаток'],
    location: ['Україна']
  },
  {
    id: '2',
    name: 'The IT Army of Ukraine official channel',
    description: 'The official channel of the Ministry of Digital Transformation for specialists in the IT sphere. It provide information on relevant tasks to fight on the cyberfront',
    link: 'https://t.me/itarmyofukraine2022',
    tags: ['Офіційні', 'Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '3',
    name: 'Ukraine Avenger Bot',
    description: 'The Telegram bot created by the cyberpolice to detect and neutralize enemy marks, detect troop and machinery movements, detect unexploded ammunition, saboteurs',
    link: 'https://t.me/ukraine_avanger_bot',
    tags: ['Офіційні', 'Спротив', 'Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '4',
    name: 'The Telegram bot of the Security Service of Ukraine',
    description: 'The official chat bot where you can report information on Russian troops and machinery.',
    link: 'https://t.me/stop_russian_war_bot',
    tags: ['Офіційні', 'Спротив', 'Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '26',
    name: 'Working pharmacies in Ukraine',
    description: 'The map by the State Drug and Medication Control Service shows the current operational status of pharmacies in Ukraine under martial law.',
    link: 'https://www.google.com/maps/d/u/0/viewer?mid=11ftUM5axVYLzh23VvRRUNBcDZ4stmh1l',
    tags: ['Офіційні', 'Здоров\'я'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '6',
    name: 'RF200 look for your people',
    description: 'The website created by representatives of the Ministry of Internal Affairs of Ukraine to post information on Russian soldiers who have been captured or killed since the beginning of the occupation.',
    link: 'https://200rf.com/',
    tags: ['Офіційні', 'Для РФ'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '6',
    name: 'Humanitarian and medical help for Ukraine',
    description: 'Here you can learn how to provide humanitarian help for the people of Ukraine. Ukrainian businessmen have opened a warehouse where you can send any goods that can help people.',
    link: 'http://www.helpukraine.center/',
    tags: ['Інформація', 'Волонтерство'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '7',
    name: 'Digital Kyiv',
    description: 'A mobile app for Kyivites that provides information on the current events in the city and the need to go to bomb shelters.',
    link: [
      { url: 'https://play.google.com/store/apps/details?id=com.kyivdigital', title: 'Android App' },
      { url: 'https://apps.apple.com/ua/app/%D0%BA%D0%B8%D1%97%D0%B2-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%B8%D0%B9/id1534007479', title: 'iOS App' }
    ],
    tags: ['Офіційні', 'Інформація', 'Безпека'],
    type: ['Додаток'],
    location: ['Київ']
  },
  {
    id: '34',
    name: 'Opir',
    description: 'Reliable and verified information in the form of an interactive map for people who have stayed in big cities. Shelters, food, fuel, medical stations, animal shops, humanitarian help stations.',
    link: 'https://opir.org/',
    tags: ['Інформація', 'Біженці', 'Здоров\'я', 'Домашні тварини'],
    type: ['Мапа'],
    location: ['України']
  },
  {
    id: '9',
    name: 'The Come Back Alive Telegram bot',
    description: 'The Come Back Alive Fund has created a Telegram bot where they post about the needs of the army.',
    link: 'https://t.me/+JPCDzX2h5fI0NTQy',
    tags: ['Інформація', 'Волонтерство'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '10',
    name: 'Kyiv Civil Defense Shelters',
    description: 'A map with a list of addresses of shelters in different districts of Kyiv.',
    link: 'https://www.google.com/maps/d/u/0/viewer?mid=1nv3QreO1QS5_AmRRNLHXu7u99sKJ6JRR&ll',
    tags: ['Інформація', 'Безпека'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '11',
    name: 'Ukraine Now Refuge',
    description: 'Help for those who are trying to leave the territory of Ukraine',
    link: 'https://www.ukrainenow.org/refuge',
    tags: ['Біженці', 'Волонтерство'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '12',
    name: 'Pryhystok (Shelter)',
    description: 'A web service that helps shelter fellow citizens in need or seek shelter',
    link: 'https://prykhystok.in.ua/',
    tags: ['Біженці', 'Волонтерство', 'Житло'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '13',
    name: 'Чат-бот Volunteer Needs',
    description: 'A chat bot to get help with things or volunteer work.',
    link: 'http://t.me/volunteerneeds_bot',
    tags: ['Волонтерство'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '14',
    name: 'Чат-бот Safe Space',
    description: 'Shows nearest shelters (for the time being – in Kyiv only)',
    link: 'https://t.me/safe_space_ua_bot',
    tags: ['Інформація', 'Безпека'],
    type: ['Чат-бот'],
    location: ['Київ']
  },
  {
    id: '15',
    name: 'Territorial Defense Forces',
    description: 'Information on territorial centers of recruitment and social support',
    link: 'https://sprotyv.in.ua/',
    tags: ['Спротив'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '16',
    name: 'DeepState Map',
    description: 'Current information on the fronts',
    link: 'https://www.google.com/maps/d/u/0/viewer?mid=1ROxxPyw0nPAa5HDAABCBU-IDECabGw3-&ll',
    tags: ['Інформація'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '33',
    name: 'SaveEcoBot',
    description: 'Ukrainian ecological resource that shows real-time information on radiation levels on the whole territory of Ukraine. After the full-scale invasion started, the Chornobyl Nuclear Power Plant was captured and other nuclear plans started being threatened, we are keeping track of the radiation levels in different localities by collecting all accessible data.',
    link: 'https://www.saveecobot.com/',
    tags: ['Екологія'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '8',
    name: 'Stand With Ukraine - Save lives',
    description: 'A library of NFT tokens of posters on war in Ukraine. All proceeds will be sent to the account of the Armed Forces of Ukraine.',
    link: 'https://opensea.io/collection/save-life-in-ukraine',
    tags: ['Мистецтво', 'Благодійність'],
    type: ['Магазин'],
    location: ['Світ']
  },
  {
    id: '17',
    name: '“Prepared for anything” chat bot',
    description: 'A Telegram bot gives advice on how to prepare and act in emergency situations.',
    link: 'https://t.me/Hotovyi_do_vsioho_bot',
    tags: ['Інформація', 'Безпека'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '18',
    name: 'Stand For Ukraine',
    description: 'A list of organizations and projects you can donate to and support the Armed Forces of Ukrainian.',
    link: 'https://standforukraine.com/',
    tags: ['Інформація', 'Благодійність'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '19',
    name: 'Military 101 UA',
    description: 'Useful materials on skills you need in the times of martial law: tactical and firearms training, first aid skills, psychological advice, etc.',
    link: 'https://military101.org.ua/course',
    tags: ['Інформація', 'Спротив'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '20',
    name: 'Dear Russian WTF',
    description: 'A website to be shared among the residents of the Russian Federation.',
    link: 'https://dearrussian.wtf/',
    tags: ['Для РФ'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '21',
    name: 'Stop The War',
    description: 'A website to be shared among the residents of the Russian Federation.',
    link: 'https://stopwar.in.ua/',
    tags: ['Для РФ'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '22',
    name: 'Where is my son?',
    description: 'This project was created by Ukrainian activists to inform Russian civilians about deaths of the relatives in the Russian war with Ukraine, which has been happening since February, 24, 2022.',
    link: 'https://gdemoysyn.com/',
    tags: ['Для РФ'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '23',
    name: 'We are going the same way',
    description: 'A unified Telegram bot to look for travel companions.',
    link: 'https://t.me/nampodorozi_bot',
    tags: ['Біженці', 'Транспорт'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '24',
    name: 'Shelter for Ukrainians',
    description: 'A Telegram bot with information about how you can help refugees with accommodation.',
    link: 'https://t.me/shelter_for_ukrainians_bot',
    tags: ['Біженці', 'Житло'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '25',
    name: 'Helping Ukraine',
    description: 'A website with addresses to different countries about helping Ukraine.',
    link: 'https://helping.in.ua/',
    tags: ['Міжнародна допомога'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '27',
    name: 'Handbook of practical advice',
    description: 'A chatbot about how to act in the times of emergencies or war.',
    link: 'https://t.me/DovidkaInfo_bot',
    tags: ['Інформація'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '28',
    name: 'SaveUA',
    description: 'A chatbot to look for and provide help.',
    link: 'https://t.me/saveua_bot',
    tags: ['Інформація'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '29',
    name: 'FirstAidRobot',
    description: 'A bot with first aid instructions.',
    link: 'https://t.me/FirstAidRobot',
    tags: ['Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '30',
    name: 'Shelter for Ukraine',
    description: 'A map to find temporary accommodation options outside Ukraine.',
    link: 'https://www.shelter4ua.com/',
    tags: ['Житло', 'Біженці'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '31',
    name: 'Russian prisoners of war',
    description: 'Search of Russian military captured by Ukrainians.',
    link: 'https://powukraine.org',
    tags: ['Для РФ'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '32',
    name: 'Attack On Europe',
    description: 'Accounts of military machinery losses by Russians.',
    link: 'https://www.oryxspioenkop.com/2022/02/attack-on-europe-documenting-equipment.html',
    tags: ['Інформація', 'Для РФ'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '38',
    name: 'uainfo',
    description: 'Antipropaganda for citizens of the Russian Federation.',
    link: 'https://uaposition.github.io/uainfo/',
    tags: ['Інформація', 'Для РФ'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '35',
    name: 'Ukrainian Witness',
    description: 'An attempt to document and show what is happening in Ukraine to the whole world. These are the chronicles of the dark times that our children will study in their history classes. The chronicles of Ukraine that earned a victory over Russia.',
    link: 'https://www.facebook.com/story.php?story_fbid=2236651229825635&id=346164665540977',
    tags: ['Інформація', 'Збір доказів'],
    type: ['Проекти в соцемережах'],
    location: ['Світ']
  },
  {
    id: '36',
    name: 'Video as proof',
    description: 'A Video as Evidence field guide helps activists use video recording to expose law infringements and restore justice. This material will enable real changes and the restoration of justice with the help of a large number of cameras in a large number of hands.',
    link: 'https://vae.witness.org/ua/%D0%B2%D1%96%D0%B4%D0%B5%D0%BE-%D1%8F%D0%BA-%D0%B4%D0%BE%D0%BA%D0%B0%D0%B7/',
    tags: ['Інформація', 'Збір доказів'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '37',
    name: 'Pharmacy network',
    description: 'Information on the network of pharmacies in Ukraine collected by Yaroslav Harahuts.',
    link: 'https://docs.google.com/spreadsheets/d/16z9JQn3u6Rr0rJwo1_dG-jJbtC7c2ZNd-Fgs9shZgro/edit?fbclid=IwAR0PYtM-09IqcHEDHxF2x70I8emIkEVvfGdZ3JvExazQMvj5q0vqVuJtbXs#gid=503360376',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Дані'],
    location: ['Україна']
  },
  {
    id: '39',
    name: 'Instructions during a war',
    description: 'Useful links regarding personal activities during a war.',
    link: 'https://prjctr.notion.site/96bec30d8f024c7abf6ab4281585a0d7',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '91',
    name: 'StopDrugsBot',
    description: 'A bot to block disinformation services',
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
    description: 'Care – a medical bot which finds doctors for patients',
    link: 'https://t.me/FirstAidRobot',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '42',
    name: 'Pharmacy Available Bot',
    description: 'A chat bot to get information on the availability of working pharmacies nearby',
    link: 'https://t.me/pharmacy_available_bot',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '43',
    name: 'Tribunal UA',
    description: 'A chat bot to record the war crime of the russian federation against civilians',
    link: 'https://t.me/tribunal_ua_bot',
    tags: ['Інформація', 'Збір доказів'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '44',
    name: 'Bomb Found Bot',
    description: 'Notifications of the found shells and bombs',
    link: 'https://t.me/bomb_found_bot',
    tags: ['Інформація', 'Безпека'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '45',
    name: 'Gov RF Bot',
    description: 'A bot that provides the contact details of the government of Russia',
    link: 'https://t.me/gov_rf_bot',
    tags: ['Інформація', 'Безпека'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '46',
    name: 'Turbotnyk Bot',
    description: 'Necessary things for displaced Ukrainians in Administrative Service Centres that operate as care points',
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
    description: 'Ресурси українським біженцям та ресурси для допомоги Українцям з закордону',
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
]

module.exports = source
