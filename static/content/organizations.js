const source = [
  {
    'logoAlt': 'Збройні Сили України (IBAN)',
    'name': 'Національний Банк України',
    'tags': [
      'Військові'
    ],
    'description': 'Національний Банк України вирішив відкрити спеціальний рахунок аби підтримати Збройні Сили України. Він був створений аби отримувати перекази від іноземних партнерів та донорів у багатьох країнах.',
    'link': 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
    'donateLink': 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
    'logo': '/img/logos/nbu.png',
    'id': 1
  },
  {
    'name': 'Фонд «Повернись живим»',
    'tags': [
      'Військові',
      'Недержавні',
      'Медичні'
    ],
    'description': 'Фонд «Повернись живим» працює, щоб армія була ефективною. Наша зброя – фахівці і досвід. А ще мільйони доброчинців, що довірили нам свої кошти і дозволили допомагати армії від їхнього імені. Тому наша найбільша сила – люди, що вірять в українське військо і готові триматися стільки, скільки буде треба.',
    'link': 'https://savelife.in.ua/',
    'donateLink': 'https://savelife.in.ua/donate/',
    'logo': '/img/logos/savelife.png',
    'id': 2
  },
  {
    'name': 'Український гуманітарний фонд',
    'tags': [
      'Недержавні',
      'Гуманітарні',
      'Медичні'
    ],
    'description': 'Український гуманітарний фонд є одним із національних об\'єднаних фондів ООН. Внески збираються в єдиний нецільовий фонд і керуються на місці під керівництвом ООН. У міру розвитку криз кошти надаються безпосередньо та негайно, доступні широкому колу партнерських організацій на передовій реагування. Таким чином, фінансування досягає саме тих людей, які його потребують.',
    'link': 'https://www.unocha.org/ukraine/donor-contributions',
    'donateLink': 'https://crisisrelief.un.org/t/ukraine',
    'logo': '/img/logos/uhf.png',
    'id': 3
  },
  {
    'name': 'ВГО «Українська Жіноча Варта»',
    'tags': [
      'Військові',
      'Недержавні',
      'Медичні'
    ],
    'description': 'Всеукраїнська добровільна жіноча організація, що виникла у 2014 році з початком російсько-української війни та розпочала свою діяльність з масових навчань для жінок з домедичної, стрілецької, загальновійськової, психологічної підготовки та самооборони. Ми підтримуємо, навчаємо та створюємо соціальні підприємства для жінок, ветеранів, дружин військових та вдів загиблих.',
    'link': 'https://uavarta.org',
    'donateLink': 'https://uavarta.org/vnesok/',
    'logo': '/img/logos/uwg.png',
    'id': 4
  },
  {
    'name': 'Армія SOS',
    'tags': [
      'Військові',
      'Недержавні',
      'Нелетальні'
    ],
    'description': 'Громадська ініціатива АРМІЯ SOS допомагає Армії України саме у тих напрямках, в яких  Держава ще не є сильною та потребує підтримки. Це високотехнологічні напрямки – система управління та вогневого ураження "Кропива", повітряна розвідка та радіотехнічна розвідка.',
    'link': 'https://armysos.com.ua',
    'donateLink': 'https://armysos.com.ua/help-the-army',
    'logo': '/img/logos/armySOS.png',
    'id': 5
  },
  {
    'name': 'Спільнота Червоного Хреста в Україні',
    'tags': [
      'Недержавні',
      'Гуманітарні',
      'Медичні'
    ],
    'description': 'Кожен, хто потрапив у біду – самотність, хвороба, бідність, безробіття, втрата родинних зв’язків, надзвичайний стан чи збройний конфлікт – може звернутися до Червоного Хреста.',
    'link': 'https://redcross.org.ua/',
    'donateLink': 'https://redcross.org.ua/donate/',
    'logo': '/img/logos/urcs.png',
    'id': 6
  },
  {
    'name': 'Голоси дітей',
    'tags': [
      'Гуманітарні',
      'Недержавні',
      'Притулки'
    ],
    'description': 'Наша ціль – кожна постраждала від війни дитина в Україні має отримати психологічну підтримку вчасно. Наші цінності: повага до гідності та прав дитини; розуміння потреби кожної дитини бути почутою; віра в те, що найкращих результатів можна досягти у партнерстві та взаємодопомозі.',
    'link': 'https://voices.org.ua/about-us/',
    'donateLink': 'https://voices.org.ua/donat/',
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
    'description': 'United Help Ukraine працює над забезпеченням життєво важливими індивідуальними аптечками першої допомоги (IFAK, що містять пов\'язки та джгути для зупинки крові) та іншими засобами на передову. Крім того, UHU співпрацює з іншими організаціями для реагування на надзвичайні ситуації, щоб надавати гуманітарну допомогу для мирного населення, яке може постраждати від нападу російських військ.',
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
    'description': '«Разом» ініціює короткострокові та довгострокові проекти або співпрацює над існуючими проектами з партнерськими організаціями, які допомагають Україні залишатися на шляху розвитку демократії та процвітання. Ми розвинули різноманітну спільноту волонтерів та співробітників у США та Україні, що дозволяє нам створювати простір, де люди можуть зустрічатися, співпрацювати та виконувати ці проекти.',
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
    'description': 'Revived Soldiers Ukraine – неприбуткова організація, яка займається наданням допомоги народу України на підтримку його основних прав людини та медичну реабілітацію українських воїнів.',
    'link': 'https://www.rsukraine.org/about-us',
    'donateLink': 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=EECANTTJNHN7Y',
    'logo': '/img/logos/revivedsoldiersukraine.png',
    'id': 10
  },
  {
    'name': 'Восток SOS',
    'tags': [
      'Гуманітарні',
      'Недержавні'
    ],
    'description': '«Восток SOS» — громадська організація, яка допомагає знайти притулок внутрішньо переміщеним особам, сприяє евакуації людей із зони конфлікту, збирає та розповсюджує гуманітарну допомогу вимушеним переселенцям у Києві, а також доставляє гуманітарну допомогу до прифронтових населених пунктів, надає першу психологічну допомогу.',
    'link': 'https://vostok-sos.org/pro-nas/mission/',
    'donateLink': 'https://vostok-sos.org/pidtrymaty/rekvizyty-dlia-hroshovoho-perekazu/',
    'logo': '/img/logos/vostoksos.png',
    'id': 11
  },
  {
    'name': 'Мольфар',
    'tags': [
      'Гуманітарні',
      'Недержавні',
      'Медичні'
    ],
    'description': 'Місія проекту – побудова ефективної системи організації медичної допомоги нашим воїнам в АТО. Проект МОЛЬФАР створює систему, в якій комфортно та ефективно взаємодіятимуть всі учасники лікування: від поранених, військових медиків на передовій - до хірургів - в операційних, волонтерів - в лікувальних закладах, фармацевтів - в аптеках.',
    'link': 'http://molfar.org/pro-nas/bachennia-misiia-tsili',
    'donateLink': 'http://molfar.org/vziaty-uchast/pozhertvuvaty/hroshi',
    'logo': '/img/logos/molfar.png',
    'id': 12
  },
  {
    'name': 'Народний проект',
    'tags': [
      'Недержавні',
      'Гуманітарні',
      'Військові',
      'Медичні',
      'Нелетальні'
    ],
    'description': 'Український військовий та цивільний краудфандинг із численними ініціативами. Народний проект — некомерційна та неприбуткова організація. Це асоціація, що складається з волонтерів та небайдужих людей, які координують свої зусилля для соціальних ініціатив, спрямованих на підтримку народу України.',
    'link': 'https://www.peoplesproject.com/about/',
    'donateLink': 'https://www.peoplesproject.com/projects/',
    'logo': '/img/logos/peoplesproject.png',
    'id': 13
  },
  {
    'name': 'Підтримка Сумської реактивної артилерійської бригади А1476',
    'tags': [
      'Недержавні',
      'Волонтерські',
      'Приватні',
      'Регіональні',
      'Військові'
    ],
    'description': 'Дана спільнота має за мету провокувати будь-яку ініціативу та цільову допомогу Сумській реактивній артилерійській бригаді А1476, в якій служать наші земляки-сумчани, земляки-українці.',
    'link': 'https://www.facebook.com/sumyartpolk/about/',
    'donateLink': 'https://www.patreon.com/pavlonarozhnyi',
    'logo': '/img/logos/psrab.png',
    'id': 14
  },
  {
    'name': 'Благодійний фонд Сергія Притули',
    'tags': [
      'Недержавні',
      'Приватні',
      'Волонтерські',
      'Регіональні',
      'Невійськові',
      'Нелетальні'
    ],
    'description': 'Волонтерський координаційний штаб для допомоги захисникам Києва.',
    'link': 'https://www.facebook.com/serhiyprytula/posts/505686287582643',
    'donateLink': 'https://www.patreon.com/prytula',
    'logo': '/img/logos/prytula.jpg',
    'id': 15
  },
  {
    'name': 'Кожен може',
    'tags': [
      'Недержавні',
      'Волонтерські',
      'Невійськові',
      'Нелетальні'
    ],
    'description': 'Благодійний фонд, який дозволяє зробити разовий благодійний внесок у фонд, або підключити щомісячну допомогу. Щомісячна допомога означає, що кожного місяця з вашої картки автоматично буде списуватись вказана вами сума благодійного внеску.',
    'link': 'https://everybodycan.com.ua/komanda-fondu',
    'donateLink': 'https://everybodycan.com.ua/dopomogti-zaraz',
    'logo': '/img/logos/everybodycan.png',
    'id': 16
  },
  {
    'name': 'Кожен може',
    'tags': [
      'Недержавні',
      'Волонтерські',
      'Невійськові',
      'Нелетальні'
    ],
    'description': 'Благодійний фонд, який дозволяє зробити разовий благодійний внесок у фонд, або підключити щомісячну допомогу. Щомісячна допомога означає, що кожного місяця з вашої картки автоматично буде списуватись вказана вами сума благодійного внеску.',
    'link': 'https://everybodycan.com.ua/komanda-fondu',
    'donateLink': 'https://everybodycan.com.ua/dopomogti-zaraz',
    'logo': '/img/logos/everybodycan.png',
    'id': 16
  },
  {
    "title": "Українська правда",
    "tags": [
      "Non-government",
      "Press"
    ],
    "description": "English version of the Ukrainian online newspaper founded by Georgiy Gongadze. The newspaper is tailored for a general readership with emphasis on the hot issues of the politics of Ukraine, including coverage of the recent war conflict with Russia.",
    "link": "https://www.pravda.com.ua/eng/",
    "donateLink": "https://club.pravda.com.ua/",
    "logo": "/logos/15.png",
    "id": 15,
    "byLang": {
      "en": {
        "title": "Ukrayinska Pravda",
        "tags": [
          "Non-government",
          "Press"
        ],
        "description": "English version of the Ukrainian online newspaper founded by Georgiy Gongadze. The newspaper is tailored for a general readership with emphasis on the hot issues of the politics of Ukraine, including coverage of the recent war conflict with Russia.",
        "link": "https://www.pravda.com.ua/eng/",
        "donateLink": "https://club.pravda.com.ua/"
      },
      "es": {
        "title": "Ukrayinska Pravda",
        "description": "Versión en inglés del periódico en línea ucraniano fundado por Georgiy Gongadze. El periódico está diseñado para un público general con énfasis en los temas candentes de la política de Ucrania, incluida la cobertura del reciente conflicto bélico con Rusia."
      },
      "fr": {
        "title": "Vérité Ukrainienne",
        "description": "Version anglaise du journal ukrainien en ligne fondé par Georgiy Gongadze. Le journal est conçu pour un lectorat général et met l'accent sur les questions brûlantes de la politique ukrainienne, y compris la couverture du récent conflit de guerre avec la Russie."
      },
      "it": {
        "title": "Ukrayinska Pravda",
        "description": "E' la versione inglese del giornale online Ucraino fondato da Georgiy Gongadze. Il giornale è pensato per un ampio pubblico e si focalizza sugli aspetti importanti della politica ucraina, con particolare attenzione al recente conflitto con la Russia."
      },
      "nl": {
        "title": "Ukrayinska Pravda",
        "description": "Engelse versie van de Oekraïense online krant, opgericht door Georgiy Gongadze. De krant is gericht op een algemeen lezerspubliek en legt de nadruk op de hete hangijzers van de Oekraïense politiek, met inbegrip van het recente oorlogsconflict met Rusland."
      },
      "pl": {
        "title": "Ukrayinska Pravda",
        "description": "Angielska wersja ukraińskiej gazety internetowej założonej przez Georgija Gongadze. Gazeta jest przeznaczona dla szerokiego grona czytelników, z naciskiem na gorące tematy polityki Ukrainy, w tym relacje z ostatniego konfliktu wojennego z Rosją."
      }
    }
  },  
]

module.exports = source
