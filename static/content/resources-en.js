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
    id: '118',
    name: 'People for UA',
    description: 'A platform that brings together volunteers who meet the needs of the Armed Forces and the territorial defense',
    link: 'https://people4ua.com/',
    tags: ['Інформація', 'Волонтерство'],
    type: ['Чат-бот'],
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
    id: '138',
    name: 'Evidence',
    description: 'Portal where all evidence of crimes of the occupiers in Ukraine is collected. All of them will be used in the International Criminal Court in The Hague.',
    link: 'https://dokaz.gov.ua/',
    tags: ['Офіційні', 'Збір доказів'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '152',
    name: 'All-Ukrainian school online',
    description: 'Video lessons, tests and tasks for students of 5-11 grades',
    link: 'https://lms.e-school.net.ua/',
    tags: ['Офіційні' ,'Інформація', 'Освіта'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '153',
    name: 'Meta History. Museum of war',
    description: 'Ukraine\'s first NFT war museum. The virtual space will help spread the truth about Russian war crimes against Ukrainians, preserve the memory of the heroism of the Armed Forces of Ukraine and strengthen resistance to the criminal Putin regime.',
    link: 'https://metahistory.gallery/',
    tags: ['Мистецтво'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '154',
    name: 'Interactive map of the world',
    description: 'This interactive resource is a simplified map to reflect the peculiarities of entering the world to help Ukrainian citizens planning their trip abroad.',
    link: 'https://tripadvisor.mfa.gov.ua/',
    tags: ['Офіційні', 'Інформація', 'Біженці'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '155',
    name: 'Friend',
    description: 'The project of Voluntary Registration of Ukrainian Citizens when Traveling Abroad is an effective tool to provide assistance to citizens of Ukraine in case of emergencies abroad - natural disasters, social unrest, military conflicts.',
    link: 'https://friend.mfa.gov.ua/',
    tags: ['Офіційні', 'Інформація', 'Біженці'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '156',
    name: 'Humanitarian aid portal',
    description: 'Information on international humanitarian aid in Ukraine.',
    link: 'https://help.gov.ua/',
    tags: ['Офіційні', 'Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '157',
    name: 'e-Help',
    description: 'Any help! Food, financial aid, clothing, medicine ...',
    link: 'https://help.gov.ua/',
    tags: ['Офіційні', 'Інформація'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '158',
    name: 'Crimes against culture',
    description: 'The Ministry of Culture and Information Policy of Ukraine has created a resource for proper documentation of war crimes against humanity and cultural heritage sites committed by the Russian army.',
    link: 'https://help.gov.ua/',
    tags: ['Офіційні', 'Збір доказів'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '159',
    name: 'Interactive map of checkpoints',
    description: 'Only current checkpoints are displayed on the interactive map. Checkpoints that are temporarily closed in accordance with the order of the Cabinet of Ministers of 13.03.2020 №288-r are not displayed on the map!',
    link: 'https://dpsu.gov.ua/ua/map/',
    tags: ['Офіційні', 'Біженці'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '139',
    name: 'National Information Bureau',
    description: 'National Information Bureau to collect and summarize data on Ukrainian prisoners of war, dead, missing, illegally detained by the occupiers',
    link: 'https://nib.gov.ua/en/',
    tags: ['Офіційні', 'Інформація', 'Зниклі громадяни'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '140',
    name: 'Taking care',
    description: 'Administrative Service Centers operate as Care Centers in 120 localities, and the list is constantly expanding. In such a center you can get basic necessities and temporary shelter. You can find out exactly where the Care Center works through the chatbot.',
    link: 'https://t.me/@turbotnyk_bot',
    tags: ['Офіційні', 'Житло'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '141',
    name: 'My story of the war in Ukraine',
    description: 'Millions of Ukrainians have directly witnessed unprecedented-for-civilized-world atrocities of a war that Russia is waging against Ukraine in the very heart of Europe. Share your story about war! The whole world will hear you!',
    link: 'https://mywar.mkip.gov.ua/',
    tags: ['Офіційні'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '100',
    name: 'Document the war crimes of the Russian Federation in Ukraine',
    description: 'Together with Ukrainian and international partners the Office of the Prosecutor General has created this resource to properly document war crimes and crimes against humanity committed by the Russian military in Ukraine.',
    link: 'https://warcrimes.gov.ua/',
    tags: ['Офіційні', 'Збір доказів'],
    type: ['Вебсайт'],
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
    id: '138',
    name: 'The National portal for collecting facts about human rights violations',
    description: 'Official portal of the Ministry of Justice of Ukraine, where you can record and send evidence if you have witnessed or been a victim of human rights violations',
    link: 'https://humanrights.gov.ua/',
    tags: ['Завдання', 'Збір доказів'],
    type: ['Вебсайт'],
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
    id: '115',
    name: 'e-Enemy',
    description: 'Take photos and videos of the occupiers and their equipment and send footage to the Telegram chatbot via smartphone. AUTHORIZATION THROUGH DIIA!',
    link: 'https://t.me/evorog_bot',
    tags: ['Офіційні' ,'Інформація', 'Завдання', 'Спротив'],
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
    id: '88',
    name: 'Russia invaded Ukraine',
    description: 'Information on Russia\'s invasion of Ukraine, verified by the Ministry of Foreign Affairs',
    link: 'https://war.ukraine.ua/',
    tags: ['Офіційні', 'Інформація',],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '98',
    name: 'Fight for Ukraine',
    description: 'Join volunteer troops to fight for Ukraine',
    link: 'https://fightforua.org',
    tags: ['Офіційні','Завдання', 'Спротив'],
    type: ['Вебсайт'],
    location: ['Світ']
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
    description: 'Anonymously helps bartenders find the necessary resources for cocktails',
    link: 'https://t.me/fire_smoothie_bot',
    tags: ['Інформація', 'Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '48',
    name: 'Help-ukraine-win',
    description: 'utomatic overloading of websites of Russia / Russian propaganda',
    link: 'https://help-ukraine-win.firebaseapp.com',
    tags: ['DDOS', 'Завдання'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '49',
    name: 'The list',
    description: 'Automatic overloading of websites of Russia / Russian propaganda',
    link: 'https://the-list.ams3.cdn.digitaloceanspaces.com/index.html',
    tags: ['DDOS', 'Завдання'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '50',
    name: 'Stop Russian Desinformation',
    description: 'Automatic overloading of websites of Russia / Russian propaganda',
    link: 'https://stop-russian-desinformation.near.page/',
    tags: ['DDOS', 'Завдання'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '51',
    name: 'Cyber Yozh',
    description: 'Automatic overloading of websites of Russia / Russian propaganda',
    link: 'https://cyber-yozh.com/',
    tags: ['DDOS', 'Завдання'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '52',
    name: 'Russian Warship Go F*ck Yourself',
    description: 'Automatic overloading of websites of Russia / Russian propaganda',
    link: 'https://russianwarshipgofuckyourself.club/',
    tags: ['DDOS', 'Завдання'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '53',
    name: 'Play For Ukraine',
    description: 'Create DDOS on websites of Russia by playing',
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
    description: 'Automatic submission of complaints about Telegram channels of propagandists',
    link: 'https://github.com/Dantistnfs/reportrussiantg',
    tags: ['Завдання', 'Антипропаганда'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '56',
    name: 'EU 4 UA',
    description: 'A platform to find shelter for refugees in Europe',
    link: 'https://ua.eu4ua.org/',
    tags: ['Інформація', 'Біженці'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '57',
    name: 'Refugees.RO',
    description: 'Search of accommodation for people who are evacuating to Romania',
    link: 'https://refugees.ro/',
    tags: ['Інформація', 'Біженці'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '58',
    name: 'Betha Ukraine',
    description: 'A project that helps unite all people willing to volunteer',
    link: 'https://betha.in.ua/',
    tags: ['Волонтерство'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '59',
    name: 'UAhelp від Монобанк',
    description: 'Quick wire transfers for the Armed Forces of Ukraine',
    link: 'https://uahelp.monobank.ua/',
    tags: ['Благодійність'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '60',
    name: 'Defend Ukraine',
    description: 'A website for international help for Ukraine',
    link: 'https://www.defendukraine.org/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '61',
    name: 'Ukraine Support',
    description: 'Resources for Ukrainian refugees and resources on how to help Ukrainians from abroad',
    link: 'https://ukrainesupport.com.ua/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '62',
    name: 'Help Ukraine Win',
    description: 'A collection of ways to help from abroad',
    link: 'https://helpukrainewin.org/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '63',
    name: 'PowUkraine',
    description: 'A website with information on Russian war prisoners and soldiers killed in Ukraine',
    link: 'https://powukraine.org/',
    tags: ['Інформація', 'Для РФ'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '64',
    name: 'How to Help Ukraine Now',
    description: 'A collection of ways to help from abroad',
    link: 'https://how-to-help-ukraine-now.super.site/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '65',
    name: 'Dovidka.info',
    description: 'A guide of practical advice on how to act at the time of war or an extraordinary situation',
    link: 'https://dovidka.info/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '66',
    name: 'Support Ukraine',
    description: 'A guide of practical advice on how to help Ukraine from abroad',
    link: 'https://supportukraine.notion.site/',
    tags: ['Інформація', 'Гайди'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '67',
    name: 'A map of working shops',
    description: 'The map shows the current working status of shops under martial law in Ukraine',
    link: 'https://www.google.com/maps/d/u/0/embed?mid=16vxeRoA5rBl8L9IwyuNswni1uU59vyZF&ll=50.51967162617199%2C32.21530446152501&z=6',
    tags: ['Інформація'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '68',
    name: 'A map of working pharmacies',
    description: 'The map shows the current working status of pharmacies under martial law in Ukraine',
    link: 'https://www.google.com/maps/d/embed?mid=11ftUM5axVYLzh23VvRRUNBcDZ4stmh1l&ehbc=2E312F&ll=49.898792018174966%2C30.33388632909823&z=10',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '69',
    name: 'MapaHelp',
    description: 'A map of places where Ukrainians can get help: accommodation, clothing, healthcare',
    link: 'https://mapahelp.me',
    tags: ['Інформація', 'Допомога'],
    type: ['Мапа'],
    location: ['Україна']
  },
  {
    id: '70',
    name: 'World For Ukraine',
    description: 'A platform of actions against the Russian aggression',
    link: 'https://worldforukraine.net/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '71',
    name: 'Anti Fake',
    description: 'Video materials for Russians: Anti Fake',
    link: 'https://bit.ly/%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D1%84%D0%B0%D0%BA%D1%82%D1%8B',
    tags: ['Інформація', 'Для РФ'],
    type: ['Дані'],
    location: ['Світ']
  },
  {
    id: '72',
    name: 'A pop-up on the Russian aggression',
    description: 'Place a pop-up on the Russian aggression on your website',
    link: 'https://infowarship.pages.dev/howto-en',
    tags: ['Інформація', 'Для РФ'],
    type: ['Скрипт'],
    location: ['Світ']
  },
  {
    id: '75',
    name: 'Stop Putin',
    description: 'A website to coordinate protests in your country, your city with information on the time and place of protests.',
    link: 'https://www.stopputin.net/',
    tags: ['Інформація', 'Протести'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '76',
    name: 'Send Putin to Jupiter',
    description: 'Donate $2.99 to help us build a rocket to send the bloodthirsty dictator as far from the Earth as possible.',
    link: 'https://putler.io/',
    tags: ['Офіційні', 'Благодійність'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '77',
    name: 'UA Anti Spam',
    description: 'A Telegram bot that removes messages with names of cities, shelters, and words about how troops move',
    link: 'https://t.me/UaAntiSpam_bot',
    tags: ['Сервіс'],
    type: ['Бот'],
    location: ['Україна']
  },
  {
    id: '78',
    name: 'Help on the road',
    description: 'This bot will help people who are trying to go from the east to the west of Ukraine or vice versa around the country.',
    link: 'https://t.me/help_onroad_ua_bot',
    tags: ['Транспорт'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '79',
    name: 'A database of creative posters',
    description: 'Use posters for the benefit of the Ukrainian fight with the mention of the author and keep up the information front of our fight against Russia. Collected jointly by Projector and Telegraf.design.',
    link: 'https://standwithukraine.super.site/a441535fb4fb4a9cab4cda445ee3a869',
    tags: ['Мистецтво'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '80',
    name: 'Russia-Ukraine War',
    description: 'Information for citizens of other countries on how to help Ukraine and links to official charity organizations',
    link: 'https://ukrainewar.carrd.co/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '81',
    name: 'How you can support Ukraine',
    description: 'Information on the collection of funds and petitions for foreigners (in English and German)',
    link: 'https://how-you-can-support-ukraine.super.site/',
    tags: ['Інформація', 'Благодійність'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '82',
    name: 'Russia Canceled',
    description: 'Information on the sanctions applied to Russia and Russian businesses',
    link: 'https://t.me/+U6y4VDrDjN01OTIy',
    tags: ['Інформація'],
    type: ['Телеграм-канал'],
    location: ['Україна']
  },
  {
    id: '83',
    name: 'Russian VC supporting WAR',
    description: 'Information on the attitude of venture investors, businessmen and public persons towards the war',
    link: 'https://stopwar2022.notion.site/Russian-VC-supporting-WAR-dc8ac6663eed4eaba91de9e136e239ee',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '84',
    name: 'A map of help',
    description: 'A map of help for Ukrainian refugees in Europe (marks in Polish)',
    link: 'https://www.google.com/maps/d/u/0/viewer?mid=168CYAtRoeK_YIEnD8PJm6dx17d09xrSN&hl=pl&ll=52.217890743009896%2C20.545422563708165&z=6',
    tags: ['Інформація', 'Біженці'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '85',
    name: 'A map of safe places for scientists',
    description: 'A map of places where Ukrainian scientists can find shelter',
    link: 'https://scienceforukraine.eu/',
    tags: ['Інформація', 'Біженці', 'Вчені'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '86',
    name: 'Go out for Ukraine',
    description: 'A map of demonstrations to support Ukraine',
    link: 'https://standwithukraine.live/',
    tags: ['Інформація', 'Протести'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '87',
    name: 'Safe places in Lviv',
    description: 'Collection of information on the state of bomb shelters in Lviv',
    link: 'http://lviv.safemap.in.ua/',
    tags: ['Інформація', 'Безпека'],
    type: ['Мапа'],
    location: ['Львів']
  },
  {
    id: '89',
    name: 'An open letter to IT',
    description: 'An open letter to IT giants with the request to stop any interaction with Russia.',
    link: 'https://www.help99.co/open-letter',
    tags: ['Офіційні', 'Інформація'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '90',
    name: 'A map of war in Ukraine',
    description: 'A map showing events related to the situation in Ukraine',
    link: 'https://liveuamap.com/',
    tags: ['Інформація'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '91',
    name: 'Help for Ukraine 🇺🇦',
    description: 'A chat bot whose aim is to unite people in one bot where everybody can help others or ask for help.',
    link: 'https://t.me/TheUkrainiansHelp_bot',
    tags: ['Інформація'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '92',
    name: 'Friend. First aid',
    description: 'Команда Інституту когнітивного моделювання у співпраці з кафедрою медичної психології, психосоматичної медицини та психотерапії Національного медичного університету імені Богомольця та фахівцями проекту «Друг» розробила бот першої психологічної допомоги. Він стане в пригоді у перші години після травматичної події.',
    link: 'https://t.me/friend_first_aid_bot',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '93',
    name: 'Tell Me',
    description: 'The Tell Me online platform has started giving Ukrainians free psychological help around the clock. If you feel anxiety, have panic attacks, are close to depression or even on the edge – please submit a request and wait. A specialist will contact you as soon as possible.',
    link: 'https://tellme.com.ua/',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '94',
    name: 'A hotline for volunteers',
    description: 'This bot was created to help the military and the population of Ukraine. A hotline for volunteers where one can offer help or get it from others.',
    link: 'https://t.me/VolunteersHotlineBot',
    tags: ['Інформація', 'Волонтерство'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '95',
    name: 'Collective awareness of unexploded ammunition in Ukraine',
    description: 'This website was created to help people who have found explosive devices in Ukraine.',
    link: 'https://www.ukraine-cat-uxo.com/t-ua',
    tags: ['Інформація', 'Безпека'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '96',
    name: 'Well, how are you?',
    description: 'A bot that allows you to better coordinate in these difficult times. It asks two questions - "Are you in touch?" and asks where you are. Then it creates analytics on the obtained data.',
    link: 'https://t.me/Nu_sho_yak_vy_bot',
    tags: ['Інформація', 'Безпека'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '97',
    name: 'Occupant',
    description: 'The list of the military of the Russian Federation and captured soldiers',
    link: 'https://invaders-rf.com/',
    tags: ['Офіційні','Інформація', 'Для РФ'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '98',
    name: 'Fight for Ukraine',
    description: 'Platform to join volunteer troops to fight for Ukraine',
    link: 'https://fightforua.org',
    tags: ['Офіційні','Завдання', 'Спротив'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '99',
    name: 'Spivdiia',
    description: 'A platform that brings together all volunteer and state initiatives for humanitarian aid at times of war.',
    link: 'https://spivdiia.org.ua/en',
    tags: ['Волонтерство'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '101',
    name: 'Search of missing people',
    description: 'Chatbot for searching missing people in Ukraine',
    link: 'https://t.me/poshuk_znyklyh',
    tags: ['Зниклі громадяни'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '102',
    name: 'UA Smart News Bot',
    description: 'The chatbot gathers news from official sources and then filters them by the user defined keywords',
    link: 'https://t.me/UASmartNewsBot',
    tags: ['Інформація'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '103',
    name: 'Help now',
    description: 'Mutual assistance with things and services',
    link: 'https://helpnow.org.ua/',
    tags: ['Інформація', 'Волонтерство'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '104',
    name: 'Help Ukrainians',
    description: 'Ukrainian Decentralized Coordination Initiative, which helps Ukrainians overcome the humanitarian crisis and the consequences of the brutal invasion of the Russian Federation.',
    link: 'https://dopomagai.org/',
    tags: ['Інформація', 'Волонтерство'],
    type: ['Вебсайт'],
    location: ['Україна']
    },
  {
    id: '105',
    name: 'Official WhatsApp channel of State Emergency Service',
    description: 'Official WhatsApp channel of State Emergency Service',
    link: 'https://api.whatsapp.com/send/?phone=380676785917&text&app_absent=0',
    tags: ['Інформація', 'Волонтерство'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '106',
    name: 'Help Center',
    description: 'Notion page with the knowledge base on martial law and legal aid',
    link: 'https://legalaid.notion.site/legalaid/Help-Center-28eaec89f99848a6b0ae8cab48f2b39b',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '107',
    name: 'UABrave',
    description: 'A tool that connects English-speaking Ukrainian witnesses with media outlets worldwide. Ukraine is fighting a monster raised on lies and propaganda and each truthful interview is a silver bullet.',
    link: 'https://uabrave.org/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '108',
    name: 'УкрЄдність',
    description: 'A large-scale platform for providing and receiving psychological support and assistance at this difficult time for Ukraine. For security reasons, moderators carefully check the data of experts who join the initiative to prevent misinformation!',
    link: 'https://uabrave.org/',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '109',
    name: 'Crisis logistics center "Help"',
    description: 'Help Ukraine during the war - transport humanitarian goods or evacuate people',
    link: 'https://pomich.org',
    tags: ['Інформація', 'Транспорт'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '110',
    name: 'Legal advisor for IDPs',
    description: 'Chat on legal aid for internally displaced persons, residents of settlements located near the demarcation line and persons living in the temporarily occupied territories',
    link: 'https://chatbot.r2p.org.ua/',
    tags: ['Чат-бот', 'Біженці'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '111',
    name: 'Jobs for Ukraine',
    description: 'We are collating academic, scientific, arts, professional and freelance opportunities that are currently available for people fleeing war. Start looking for jobs by simply searching within a specific country or by switching between academic and industry opportunities.',
    link: 'https://jobsforukraine.net/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '112',
    name: 'Russian Military Movements',
    description: 'The map of Russian Military Movements during the full-scale Russian invasion',
    link: 'https://maphub.net/Cen4infoRes/russian-ukraine-monitor',
    tags: ['Інформація'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '113',
    name: 'Ukraine is the shield of Europe',
    description: 'The site with chronicles of the war',
    link: 'https://ukraine-new.com/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '114',
    name: 'Russia will pay',
    description: 'The resource collects data on material damage caused to citizens and the state as a result of Russian aggression. The Ukrainian government needs these data to assess the damage suffered by the state and citizens of Ukraine as a result of Russian aggression and to file lawsuits against Russia in international courts for damages.',
    link: 'https://damaged.in.ua/',
    tags: ['Інформація', 'Збір доказів'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '116',
    name: 'We are Ukraine',
    description: 'Repository of truth about Ukraine’s contribution to freedom and lasting peace in the world. Learn about the Ukrainian nation in all its resilience and share the truth about the war in Ukraine. Stand with us in our common fight for freedom.',
    link: 'https://www.weareukraine.info/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '117',
    name: 'Get Help UA',
    description: 'Using geolocation, the bot will help to receive informational and practical support, to form communities and to be in touch with each other, to report on urgent needs or the possibility to fulfill them.',
    link: 'https://t.me/GetHelpUaBot',
    tags: ['Інформація'],
    type: ['Чат-бот'],
    location: ['Світ']
  },
  {
    id: '119',
    name: 'Safety of pregnant women',
    description: 'Information for thousands of pregnant women from all over Ukraine, from Mariupol, Berdyansk, Kiyv, Lviv, and from Warsaw. Contains advice from doctors (as much as possible in such conditions), mutual support and exchange of information.',
    link: 'https://t.me/bezpekavagitnihua',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '120',
    name: 'Help for pregnant women',
    description: 'Information for thousands of pregnant women from all over Ukraine, from Mariupol, Berdyansk, Kiyv, Lviv, and from Warsaw. Contains advice from doctors (as much as possible in such conditions), mutual support and exchange of information.',
    link: 'https://t.me/vagitnistdopomoga',
    tags: ['Інформація', 'Здоров\'я'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '121',
    name: 'UA Talents',
    description: 'UA Talents is an employment platform for Ukrainians who have been forced to leave their homes and move to other cities in Ukraine or abroad.',
    link: 'https://www.uatalents.com/',
    tags: ['Інформація', 'Робота'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '122',
    name: 'Happy Monday',
    description: 'Jobs for Ukrainians during the war.',
    link: 'https://happymonday.ua/',
    tags: ['Інформація', 'Робота'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '123',
    name: 'Jons for Ukrainians abroad',
    description: 'Війна змусила тимчасово покинути свій дім, але пам\'ятай, ти не один, нас підтримує світ. Цей сайт допоможе знайти роботу в країні, яка тебе прихистила.',
    link: 'https://helpukrainians.jooble.org/',
    tags: ['Інформація', 'Робота'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '124',
    name: 'Remote Ukraine',
    description: 'Over 2 million Ukrainians refugees have now fled the war. This includes thousands of highly skilled professionals. You can support by hiring them, wherever they are.',
    link: 'https://remoteukraine.org/',
    tags: ['Інформація', 'Робота'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '125',
    name: 'Hire for Ukraine',
    description: 'The attack on Ukraine has left thousands of talented creative and technical professionals without jobs or income. You can help them by hiring them.',
    link: 'https://hireforukraine.org/',
    tags: ['Інформація', 'Робота'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '126',
    name: 'Jobs 4 Ukraine',
    description: 'We help Ukrainians to find jobs fast ',
    link: 'https://www.jobs4ukraine.eu/',
    tags: ['Інформація', 'Робота'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '127',
    name: 'Imagine Ukraine',
    description: 'We match refugees from the war in Ukraine with volunteers & diversity-first companies',
    link: 'https://imagine-ukraine.org/dl/about-us/s/ddecb1',
    tags: ['Інформація', 'Робота'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '128',
    name: 'Ukraine Take Shelter',
    description: 'UkraineTakeShelter.com is an independent platform connecting Ukrainian refugees with potential hosts and housing.',
    link: 'https://www.ukrainetakeshelter.com/',
    tags: ['Інформація', 'Біженці', 'Житло'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '129',
    name: 'I Can Help',
    description: 'The main goal of our platform is to assist and facilitate people in need to find a host and also for the host to find those who need solidarity housing.',
    link: 'https://icanhelp.host/',
    tags: ['Інформація', 'Біженці', 'Житло'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '130',
    name: 'Ukraine shelter',
    description: 'Assistance to Ukrainians displaced by the Russian invasion. The map shows the countries where locals are ready to take you into their homes.',
    link: 'https://www.ukraineshelter.com/',
    tags: ['Інформація', 'Біженці', 'Житло'],
    type: ['Мапа'],
    location: ['Світ']
  },
  {
    id: '131',
    name: 'Homes for Ukraine',
    description: 'The UK is one of the most generous nations in the world and the British public are now being asked to go one step further and open their homes to those fleeing the war in Ukraine.',
    link: 'https://homesforukraine.campaign.gov.uk/',
    tags: ['Інформація', 'Біженці', 'Житло'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '132',
    name: 'Palianytsia',
    description: 'We want to support our homeland the best way we can. We make stickers and merchandise with pieces of art created by talented Ukrainian artists. All sales profits will be donated to the official foundations, like Come Back Alive. Show your support for freedom and democracy in Ukraine and in the world!',
    link: 'https://palianytsia.com',
    tags: ['Мистецтво', 'Благодійність'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '133',
    name: 'Propagandony',
    description: 'Volunteers from IT #StandForUkraine together with the Propagandony team created a chatbot that helps block propaganda sources that spread panic, misinform and demotivate the people, promote a "special operation" and merge the location of the Armed Forces.',
    link: 'https://t.me/Propagandony_bot',
    tags: ['Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '134',
    name: 'Coming to Lithuania',
    description: 'Information for Ukrainians who are going to find refuge in Lithuania',
    link: 'https://investlithuania.com/guide-for-ukrainians/',
    tags: ['Інформація', 'Біженці', 'Житло'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '135',
    name: 'From-Ukraine.HELP',
    description: 'All information about humanitarian services abroad is collected on the single site! This is a resource to provide verified information to migrants, especially women and children who are forced to leave Ukraine temporarily.',
    link: 'https://www.from-ukraine.help/',
    tags: ['Інформація', 'Біженці', 'Житло'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '136',
    name: 'Ukraine Borders',
    description: 'The purpose of the portal is to provide access to verified practical and up-to-date information on the countries to which Ukrainians are evacuated and the peculiarities of border crossings.',
    link: 'https://borders.in.ua/',
    tags: ['Інформація', 'Біженці'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '137',
    name: 'The UK stands with Ukraine',
    description: 'Information for citizens of the United Kingdom on how to support Ukrainian refugees.',
    link: 'https://ukstandswithukraine.campaign.gov.uk/',
    tags: ['Інформація', 'Біженці'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '143',
    name: 'Losses of the Russian economy since the beginning of war',
    description: 'A site providing the exchange rates of the Russian ruble, the value of shares of Russian companies, the dynamics of credit ratings and organizations that have stopped cooperating with Russia.',
    link: 'https://russian.fail/en/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '144',
    name: 'Don\'t Fund War',
    description: 'A comprehensive list of companies that still operate in Russia, despite their military aggression on Ukraine.',
    link: 'https://www.dontfundwar.com/',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '145',
    name: 'Cyber Army',
    description: 'A bot that can be used to block propaganda channels of pro-Russian bloggers and journalists',
    link: 'https://t.me/CyberArm_bot',
    tags: ['Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '146',
    name: 'Report Army',
    description: 'Block Telegram channels that spread misinformation and call for genocide of the Ukrainian people',
    link: 'https://reports.army',
    tags: ['Завдання'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '147',
    name: 'Check',
    description: 'A bot for checking questionable information and news',
    link: 'https://t.me/perevir_bot',
    tags: ['Інформація'],
    type: ['Вебсайт'],
    location: ['Україна']
  },
  {
    id: '148',
    name: 'Tribunal UA',
    description: 'Bot for to capture Russian war crimes against civilians',
    link: 'https://tribunal.in.ua/',
    tags: ['Інформація', 'Збір доказів'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '149',
    name: 'FindOkkupant',
    description: 'Chat bot in which you can report the location of the occupying forces!',
    link: 'https://findokupant.com/',
    tags: ['Завдання'],
    type: ['Чат-бот'],
    location: ['Україна']
  },
  {
    id: '150',
    name: 'Companies that support the war',
    description: 'Sending messages to those companies that refuse to leave Russia and continue to supply products and services to the aggressor.',
    link: 'https://dont-fund-russian.army/',
    tags: ['Інформація', 'Завдання'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
  {
    id: '151',
    name: 'Safely.Today',
    description: 'A website that hosts resources and information for people temporarily seeking refuge abroad. Information is on all countries and constantly updated!',
    link: 'https://safely.today/',
    tags: ['Інформація', 'Біженці', 'Волонтерство', 'Житло'],
    type: ['Вебсайт'],
    location: ['Світ']
  },
]

module.exports = source
