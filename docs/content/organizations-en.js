const source = [
  {
    'logoAlt': 'Збройні Сили України (IBAN)',
    'name': 'Armed Forces of Ukraine (IBAN)',
    'tags': [
      'Військові'
    ],
    'description': 'The National Bank of Ukraine has decided to open a special fundraising account to support the Armed Forces of Ukraine. This account accepts multiple currencies. It has been established and opened to receive transfers from international partners and donors in multiple currencies.',
    'link': 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
    'donateLink': 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
    'logo': '/img/logos/nbu.png',
    'id': 1
  },
  {
    'name': 'Come Back Alive Foundation',
    'tags': [
      'Військові',
      'Недержавні',
      'Медичні'
    ],
    'description': 'One of the largest charity foundations in Ukraine. We help veterans, in particular we coorganize Invictus Games in Ukraine. The money raised here will fund the operations of our media and veteran divisions.',
    'link': 'https://savelife.in.ua/en/',
    'donateLink': 'https://savelife.in.ua/en/donate/',
    'logo': '/img/logos/savelife.png',
    'id': 2
  },
  {
    'name': 'The Ukraine Humanitarian Fund',
    'tags': [
      'Недержавні',
      'Гуманітарні',
      'Медичні'
    ],
    'description': '"The Ukrainian Humanitarian Fund is one of the UN\'s country-based pooled funds. Contributions are collected into a single, unearmarked fund and managed locally under UN leadership. As crises evolve, funds are made directly and immediately available to a wide range of partner organizations at the front lines of response. This way, funding reaches the people most in need when they need it.',
    'link': 'https://www.unocha.org/ukraine/donor-contributions',
    'donateLink': 'https://crisisrelief.un.org/t/ukraine',
    'logo': '/img/logos/uhf.png',
    'id': 3
  },
  {
    'name': 'Ukrainian Women\'s Guard',
    'tags': [
      'Військові',
      'Недержавні',
      'Медичні'
    ],
    'description': 'Ukrainian voluntary women\'s organization, emerged in 2014 with the beginning of the Russo-Ukrainian war and began its activity with mass premedical training for women, it is combination of psychological and psychiatric training. Since 2014 more than 30,000 women across Ukraine passed our training.',
    'link': 'https://uavarta.org/en/',
    'donateLink': 'https://uavarta.org/vnesok/',
    'logo': '/img/logos/uwg.png',
    'id': 4
  },
  {
    'name': 'Army SOS',
    'tags': [
      'Військові',
      'Недержавні',
      'Нелетальні'
    ],
    'description': 'Army SOS Citizen\'s Initiative coordinates people\'s efforts to help soldiers of Ukraine. Manages purchases of necessary ammunition, shields, intercommunication and reconnaissance facilities, uniforms and food supply. Delivers all goods directly to the unit\'s emplacement and pass them right to the hands of our warriors.',
    'link': 'https://armysos.com.ua/en/',
    'donateLink': 'https://armysos.com.ua/en/help-the-army',
    'logo': '/img/logos/armySOS.png',
    'id': 5
  },
  {
    'name': 'Ukrainian Red Cross Society',
    'tags': [
      'Недержавні',
      'Гуманітарні',
      'Медичні'
    ],
    'description': 'Anyone who got into trouble - loneliness, sickness, poverty, unemployment, loss of family links, emergency or armed conflict - may refer to the Red Cross.',
    'link': 'https://redcross.org.ua/',
    'donateLink': 'https://redcross.org.ua/en/donate/',
    'logo': '/img/logos/urcs.png',
    'id': 6
  },
  {
    'name': 'Voices of Children',
    'tags': [
      'Гуманітарні',
      'Недержавні',
      'Притулки'
    ],
    'description': 'Charitable foundation Voices of Children helps children affected by the war in eastern Ukraine. We provide psychological and psychosocial support to help Ukrainian children overcome the consequences of armed conflict.',
    'link': 'https://voices.org.ua/en/who-we-are/',
    'donateLink': 'https://voices.org.ua/en/donat/',
    'logo': '/img/logos/voicesofchildren.png',
    'id': 7,
  },
  {
    'name': 'United Help Ukraine',
    'tags': [
      'Гуманітарні',
      'Недержавні',
      'Медичні'
    ],
    'description': 'United Help Ukraine is working to provide life-saving individual first aid kits (IFAKs containing blood-stopping bandages and tourniquets) and other emergency medical supplies to the front lines. In addition, UHU is also cooperating with other emergency response organizations to prepare humanitarian aid for civilians that might be directly affected if Russian forces attack.',
    'link': 'http://unitedhelpukraine.org/about-us',
    'donateLink': 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FAXD9R7CFB4SJ',
    'logo': '/img/logos/unitedhelpukraine.png',
    'id': 8,
  },
  {
    'name': 'Razom',
    'tags': [
      'Гуманітарні',
      'Недержавні',
      'Права людини'
    ],
    'description': 'Razom initiates short and long-term projects or collaborates on existing projects with partner organizations, which help Ukraine stay on the path of fostering democracy and prosperity. We\'ve grown a diverse community of volunteers and collaborators across the US and Ukraine which allows us to create spaces where people can meet, partner, and execute these projects.',
    'link': 'https://razomforukraine.org/about-us/',
    'donateLink': 'https://razomforukraine.org/donate/',
    'logo': '/img/logos/razom.png',
    'id': 9
  },
  {
    'name': 'Revived Soldiers Ukraine',
    'tags': [
      'Гуманітарні',
      'Недержавні',
      'Медичні'
    ],
    'description': 'Revived Soldiers Ukraine is a non-profit organization dedicated to providing aid to the people of Ukraine in support of their fundamental human rights and medical rehabilitation of Ukrainian soldiers.',
    'link': 'https://www.rsukraine.org/about-us',
    'donateLink': 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=EECANTTJNHN7Y',
    'logo': '/img/logos/revivedsoldiersukraine.png',
    'id': 10
  },
  {
    'name': 'Vostok SOS',
    'tags': [
      'Гуманітарні',
      'Недержавні'
    ],
    'description': 'Vostok SOS is a non-governmental organization helping to find shelter for internally displaced persons, assisting in the evacuation of people from the conflict zone, collecting and distributing humanitarian aid to IDPs in Kyiv as well as delivering humanitarian aid to front-line settlements, and providing psychological first aid.',
    'link': 'https://vostok-sos.org/en/about/mission/',
    'donateLink': 'https://vostok-sos.org/en/make-a-donation/',
    'logo': '/img/logos/vostoksos.png',
    'id': 11
  },
  {
    'name': 'Molfar',
    'tags': [
      'Гуманітарні',
      'Недержавні',
      'Медичні'
    ],
    'description': 'Molfar (sorcerer-healer) is a project of the Ukrainian nongovernmental organization People\'s Victory. The project\'s aim is effective logistics system for the medical rescue of the wounded.',
    'link': 'http://molfar.org/en/about-us/vision-mission-goals',
    'donateLink': 'http://molfar.org/en/take-part/donate/money',
    'logo': '/img/logos/molfar.png',
    'id': 12
  },
  {
    'name': 'People\'s Project',
    'tags': [
      'Недержавні',
      'Гуманітарні',
      'Військові',
      'Медичні',
      'Нелетальні'
    ],
    'description': 'Ukraine\'s military and civil crowdfunding with multiple initiatives. People\'s Project is a non-commercial and nonprofit organization. It is an association made up of volunteers and caring people who coordinate their efforts for social initiatives aimed to support the People of Ukraine.',
    'link': 'https://www.peoplesproject.com/en/about/',
    'donateLink': 'https://www.peoplesproject.com/en/projects/',
    'logo': '/img/logos/peoplesproject.png',
    'id': 13
  },
  {
    'name': 'Support of Sumy jet artillery brigade A1476',
    'tags': [
      'Недержавні',
      'Волонтерські',
      'Приватні',
      'Регіональні',
      'Військові'
    ],
    'description': 'This community aims to provoke any initiative and targeted assistance to the Sumy Jet Artillery Brigade A1476, which serves our compatriots from Sumy.',
    'link': 'https://www.facebook.com/sumyartpolk/about/',
    'donateLink': 'https://www.patreon.com/pavlonarozhnyi',
    'logo': '/img/logos/psrab.png',
    'id': 14
  },
  {
    'name': 'Serhiy\'s Prytula Charitable Foundation',
    'tags': [
      'Недержавні',
      'Приватні',
      'Волонтерські',
      'Регіональні',
      'Невійськові',
      'Нелетальні'
    ],
    'description': 'The volunteer coordination headquarter to help the defenders of Kyiv.',
    'link': 'https://www.facebook.com/serhiyprytula/posts/505686287582643',
    'donateLink': 'https://www.patreon.com/prytula',
    'logo': '/img/logos/prytula.jpg',
    'id': 15
  },
  {
    'name': 'Everybody Can',
    'tags': [
      'Недержавні',
      'Волонтерські',
      'Невійськові',
      'Нелетальні'
    ],
    'description': 'Charitable foundation, which allows you to make a one-time charitable contribution to the fund, or connect a monthly grant. The monthly grants means that the amount of the charitable contribution you specify will be automatically charged from your card each month.',
    'link': 'https://everybodycan.com.ua/komanda-fondu',
    'donateLink': 'https://everybodycan.com.ua/dopomogti-zaraz',
    'logo': '/img/logos/everybodycan.png',
    'id': 16
  },
  {
    'name': 'Ukrayinska Pravda',
    'tags': [
      'Недержавні',
      'ЗМІ'
    ],
    'description': 'English version of the Ukrainian online newspaper founded by Georgiy Gongadze. The newspaper is tailored for a general readership with emphasis on the hot issues of the politics of Ukraine, including coverage of the recent war conflict with Russia.',
    'link': 'https://www.pravda.com.ua/eng/',
    'donateLink': 'https://club.pravda.com.ua/',
    'logo': '/img/logos/up.png',
    'id': 17
  },
  {
    'name': 'Roman Donic\'s Volunteer Group',
    'tags': [
      'Військові',
      'Недержавні',
      'Приватні'
    ],
    'description': 'The Roman Donik’s volunteer group was organized to help the army in the ATO zone. During these years the group assists the army, supplies hospitals with medicine, supplies military and volunteer units with protective uniforms.',
    'link': 'http://groupdonik.com/',
    'donateLink': 'http://groupdonik.com/kak-pomoch.html',
    'logo': '/img/logos/donic.png',
    'id': 18
  },
  {
    'name': 'Ukraine Crisis Media Center',
    'tags': [
      'ЗМІ',
      'Недержавні'
    ],
    'description': 'The Ukraine Crisis Media Center was launched in the spirit of the Revolution of Dignity in March 2014 as a rapid response to the Russian occupation of Crimea to defend Ukraine’s sovereignty and its national interests in the global information space.',
    'link': 'https://uacrisis.org/en/pro-nas',
    'donateLink': 'https://uacrisis.org/en/donate',
    'logo': '/img/logos/umc.png',
    'id': 19
  },
  {
    'name': 'Ukrainian People With Disabilities in Crisis',
    'tags': [
      'Гуманітарні',
      'Медичні'
    ],
    'description': 'Helps Ukrainians with disabilities – especially those who want but cannot evacuate – protect themselves in case of emergency.',
    'link': 'https://eng.ffr.org.ua/support-in-crisis/eng',
    'donateLink': 'https://www.gofundme.com/f/help-disabled-ukrainians',
    'logo': '/img/logos/fight-for-right.png',
    'id': 20
  },
  {
    'name': 'Hromadske International',
    'tags': [
      'ЗМІ',
      'Недержавні'
    ],
    'description': 'Hromadske International brings together high-quality journalism, new media tools and objective analysis in one place. Hromadske is a vibrant start-up, founded by a unique team of Ukrainian and foreign journalists.',
    'link': 'https://en.hromadske.ua/',
    'donateLink': 'https://en.hromadske.ua/about#donate_gro',
    'logo': '/img/logos/hromadske.png',
    'id': 21
  },
  {
    'name': 'Zaborona',
    'tags': [
      'ЗМІ',
      'Недержавні',
      'Права людини'
    ],
    'description': 'Zaborona is an independent media about social trends and culture in post-socialist countries in Eastern Europe. They don’t chase news and click-baiting headlines. They cover activists who defend human rights and help individuals to understand their role in the current system of coordinates.',
    'link': 'https://zaborona.com/en/about-zaborona/',
    'donateLink': 'https://www.patreon.com/Zaborona',
    'logo': '/img/logos/zaborona.png',
    'id': 22
  },
  {
    'name': 'Texty.org.ua',
    'tags': [
      'ЗМІ',
      'Недержавні'
    ],
    'description': 'We create projects from data journalism and also work in traditional journalistic genres with Ukrainian view of the world.',
    'link': 'https://texty.org.ua/tag/eng/',
    'donateLink': 'https://www.patreon.com/textyorgua',
    'logo': '/img/logos/texty.png',
    'id': 23
  },
  {
    'name': 'The Kyiv Independent',
    'tags': [
      'ЗМІ',
      'Недержавні'
    ],
    'description': 'Independent ukrainian english-language journalism.',
    'link': 'https://kyivindependent.com/',
    'donateLink': 'https://www.patreon.com/kyivindependent',
    'logo': '/img/logos/kyiv-independent.png',
    'id': 24
  },
  {
    'name': 'Blood Agents',
    'tags': [
      'Медичні',
      'Недержавні'
    ],
    'description': 'We promote regular, conscious and gratuitous blood donations. We have encouraged people to donate blood over 5,000 times over the past six years.',
    'link': 'https://bloodagents.com/',
    'donateLink': '"https://bloodagents.com/dopomoga_agentam',
    'logo': '/img/logos/blood-agents.png',
    'id': 25
  },
  {
    'name': 'Tabletochki',
    'tags': [
      'Медичні',
      'Недержавні'
    ],
    'description': 'This foundation has been supporting children with cancer for 10 years. They procure medicines, equipment, and arrange overseas treatment, among other things.',
    'link': 'https://tabletochki.org/',
    'donateLink': '"https://www.globalgiving.org/projects/medications-for-childrens-oncological-units/',
    'logo': '/img/logos/tabletochki.png',
    'id': 25
  },
]

module.exports = source
