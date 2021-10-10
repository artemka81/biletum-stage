var tnum = 'en';

$(document).ready(function(){

  $(document).click(function(e) {
       $('.translate_wrapper, .more_lang').removeClass('active');
  });

  $('.translate_wrapper .current_lang').click(function(e){
    e.stopPropagation();
    $(this).parent().toggleClass('active');

    setTimeout(function(){
      $('.more_lang').toggleClass('active');
    }, 3);
  });

	$('.more_lang .lang').click(function(){
    $(this).addClass('selected').siblings().removeClass('selected');
    $('.more_lang').removeClass('active');

    var img = $(this).find('img').attr('src');
    var lang = $(this).attr('data-value');
    var allLang = ['ru', 'en', 'ua'];

    $('.current_lang .lang-txt').text(lang);
    $('.current_lang img').attr('src', img);


    function changeLng(){
      document.querySelector('title').innerHTML = langArr['title'][lang];
      document.querySelector('meta[name="description"]').setAttribute("content", langArr['description'][lang]);

      for(let key in langArr){
        let elem = document.querySelector('.lng-' +key);
        if(elem){
          if(Array.isArray(langArr[key][lang])){
            langArr[key][lang].forEach((value,idx) => {
              elem.children[idx].innerHTML = value;
            });
          } else{
            elem.innerHTML = langArr[key][lang];
          }
        }
      }
    }
    changeLng();

  });


});

const langArr = {
	"title":{
		"ru": "Платформа для организации бизнес-мероприятий - Biletum",
		"en": "Platform for organizing business events - Biletum",
		"ua": "Платформа для організації бізнес-заходів - Biletum"
	},
	"description":{
		"ru": "Единая многофункциональная платформа для проведения мероприятий, автоматизации дистрибуции, продажи билетов и экспо-стендов.",
		"en": "A single multifunctional platform for events, distribution automation, ticket sales and expo stands.",
		"ua": "Єдина багатофункціональна платформа для проведення заходів, автоматизації дистрибуції, продажу квитків і експо-стендів."
	},
	"decs":{
		"ru": "Biletum — инновационная экосистема сервисов и&nbsp;платформ для организации бизнес-мероприятий любого масштаба и формата проведения.",
		"en": "Biletum is an innovative ecosystem of services and&nbsp;platforms for organizing business events of any scale and format.",
		"ua": "Biletum — інноваційна екосистема сервісів і платформ для організації бізнес-заходів будь-якого масштабу та&nbsp;формату проведення."
	},
	"menu__list":{
		"ru": ['Biletum', 'Услуги', 'Партнеры', 'Преимущества', 'Команда','Контакты'],
		"en": ['Biletum', 'Services', 'Partners', 'Advantages', 'Team', 'Contacts'],
		"ua": ['Biletum', 'Послуги', 'Партнери', 'Переваги', 'Команда', 'Контакти']
	},
	"btn-sale":{
		"ru": "Хочу продавать билеты",
		"en": "I want to sell tickets",
		"ua": "Хочу продавати квитки"
	},
	"btn-promo":{
		"ru": "Хочу привлекать посетителей",
		"en": "I want to attract visitors",
		"ua": "Хочу залучати відвідувачів"
	},
  "slider__title":{
    "ru": "Мы готовы помочь",
		"en": "We are ready to assist",
		"ua": "Ми готові допомогти"
  },
  "skills__title":{
    "ru": "Наша экспертность",
		"en": "Our expertise",
		"ua": "Наша експертність"
  },
  "btn-orange":{
    "ru": "Узнать подробнее",
		"en": "Learn more",
		"ua": "Дізнатися більше"
  },
  "btn-orange2":{
    "ru": "Узнать подробнее",
		"en": "Learn more",
		"ua": "Дізнатися більше"
  },
  "btn-orange3":{
    "ru": "Узнать подробнее",
		"en": "Learn more",
		"ua": "Дізнатися більше"
  },
  "slider__text1":{
		"ru": ['Продажа билетов и&nbsp;экспо-стендов:', 'Автоматизация процесса регистрации и продаж;', 'Единое диджитал пространство для работы внутреннего отдела продаж и партнеров;', 'полный спектр маркетинговых инструментов для увеличения конверсии и продаж.'],
		"en": ['Sale tickets and exhibition stands:', 'registration and sales process automation', 'single digital space for the internal sales department and partners work', 'full range of marketing tools to increase conversions and sales'],
		"ua": ['Продаж квитків та&nbsp;експостендів:', 'Автоматизація процесу реєстрації та продажів', 'Єдиний діджитал-простір для роботи внутрішнього відділу продажів і партнерів;', 'Повний спектр маркетингових інструментів для збільшення конверсії і продажів.']
	},
  "slider__text2":{
		"ru": ['Дистрибуция билетов и экспо-стендов:', 'Автоматизация управления продажами агентов и партнеров;', 'Дистрибуция в сети Biletum — 12 978 партнеров в 86 странах мира;', 'Привлечение покупателей из аудитории Biletum — более 10 млн пользователей.'],
		"en": ['Distribute tickets and exhibition stands:', 'Automation of sales management of agents and partners;', 'Distribution in the Biletum network — 12,978 partners in 86 countries of the world;', 'Attracting buyers from the Biletum audience — more than 10 million users.'],
		"ua": ['Дистрибуція квитків та&nbsp;експостендів:', 'Автоматизація управління продажами агентів та партнерів;', 'Дистрибуція в мережі Biletum - 12 978 партнерів у 86 країнах світу;', 'Залучення покупців з аудиторії Biletum – понад 10 млн користувачів.']
	},
  "slider__text3":{
		"ru": ['Платформы для&nbsp;проведения мероприятий:', 'Интеграция с 5 платформами для любого формата проведения мероприятий;', 'Полная автоматизация передачи данных с платформами;', 'Автоматическое создание мобильного приложения мероприятия.'],
		"en": ['Event Execution Platforms:', 'Integration with 5 platforms for events of any format;', 'Full automation of data transfer;', 'Automatic generation of mobile app for the event.'],
		"ua": ['Платформи для проведення заходів:', ' Інтеграція з 5 платформами для будь-якого формату проведення заходів;', 'Повна автоматизація передавання даних з платформами;', 'Автоматичне створення мобільного додатку заходу.']
	},
  "skills__list":{
		"ru": ['Топ-3 платформа по продаже билетов в&nbsp;Восточной Европе;', 'Лучший стартап года по версии The&nbsp;Next&nbsp;Web;', '#6 в Топ-50 стартапов года согласно рейтингу «Коммерсантъ»;', 'Гран-при ежегодной премии «Облака».'],
		"en": ['Top 3 platforms for ticket sales in&nbsp;Eastern Europe;', 'Best Startup of the Year by The&nbsp;Next&nbsp;Web;', '#6 in the Top 50 startups of the year according to the Kommersant rating;', 'Grand Prix of the annual Cloud Awards.'],
		"ua": ['Топ-3 платформа з продажу квитків у&nbsp;Східній Європі;', 'Кращий стартап року за версією The&nbsp;Next&nbsp;Web;', '#6 в Топ-50 стартапів року згідно з&nbsp;рейтингом «Коммерсантъ»;', 'Гран-прі щорічної премії «Хмари».']
	},
  "skills__list2":{
		"ru": ['Топ-10 зарубежных IT-компаний, которые успешно вышли на китайский рынок по&nbsp;версии RISE;', 'Крупнейшая платформа для дистрибуции билетов и стендов на выставки Китая;', 'Эксклюзивный дистрибьютор на крупнейшие мероприятия, включая Шанхайский автосалон;', 'Внеконкурсный участник программы Chinaccelerator (SOSV).'],
		"en": ['Top 10 foreign IT companies to have successfully entered the Chinese market according to RISE;', 'The largest platform for distribution of tickets and exhibition stands in China;', 'Exclusive distributor for major events including the Shanghai Auto Show;', 'Out-of-Competition Participant of Chinaccelerator (SOSV) program.'],
		"ua": ['Топ-10 зарубіжних IT-компаній, які успішно вийшли на китайський ринок за версією RISE;', 'Найбільша платформа для дистрибуції квитків і стендів на виставки Китаю;', "Ексклюзивний дистриб'ютор на найбільші заходи, зокрема Шанхайський автосалон;", 'Позаконкурсний учасник програми Chinaccelerator (SOSV).']
	},
  "advantage__title1":{
    "ru": "В чем",
		"en": "Why is",
		"ua": "У чому"
  },
  "advantage__title2":{
    "ru": "уникальность",
		"en": "this offer",
		"ua": "унікальність"
  },
  "advantage__title3":{
    "ru": "предложения?",
		"en": "unique?",
		"ua": "пропозиції?"
  },
  "card__desc1":{
    "ru": "Обеспечиваем реальный рост продаж билетов и&nbsp;экспо-стендов, от&nbsp;27% и выше",
		"en": "We provide significant growth in ticket sales and exhibition stands, from 27% and more",
		"ua": "Забезпечуємо реальне зростання продажів квитків та експостендів — від 27&nbsp;% і вище"
  },
  "card__desc2":{
    "ru": "Обеспечиваем мультиязычную поддержку покупателей",
		"en": "We provide multilingual customer support",
		"ua": "Забезпечуємо багатомовну підтримку покупців"
  },
  "card__desc3":{
    "ru": "Получаем только фиксированную абонплату за сервис от $ 49 в месяц",
		"en": "We receive a fixed monthly fee for the service from $ 49 per month",
		"ua": "Отримуємо тільки фіксовану абонплату за сервіс — від $ 49 в місяць"
  },
  "card__desc4":{
    "ru": "Обеспечиваем прием оплат за билеты и&nbsp;экспо-стенды сразу на счет организатора",
		"en": "We ensure that all payments for tickets and exhibition stands are transferred to the account of the organizer immediately",
		"ua": "Забезпечуємо прийом оплат за квитки й&nbsp;експостенди відразу на рахунок організатора"
  },
  "card__desc5":{
    "ru": "Охватываем самый большой рынок по&nbsp;гео&nbsp;охвату и емкости",
		"en": "We cover the largest market in terms of geo-coverage and capacity",
		"ua": "Охоплюємо найбільший ринок за&nbsp;геоосяжністю та місткості"
  },
  "card__desc6":{
    "ru": "Предоставляем единый набор инструментов для работы организатора в одном окне ",
		"en": "We provide a single set of tools for the organizer's work in one window",
		"ua": "Надаємо єдиний набір інструментів для&nbsp;роботи організатора в одному вікні"
  },
  "card__span1":{
    "ru": "от",
		"en": "from",
		"ua": "від"
  },
  "card__span3":{
    "ru": "от",
		"en": "from",
		"ua": "від"
  },
  "card__span3-1":{
    "ru": "/мес",
		"en": "/month",
		"ua": "/місяць"
  },
  "clients":{
		"ru": ['Клиенты', 'Нашими услугами уже пользуются крупнейшие организаторы мероприятий Китая, России и Восточной Европы, включая Canton Fair, UBM, VNU, HKTDC, SIEC. Общий оборот текущих клиентов составляет более $2 млрд. в год.',],
		"en": ['Clients', 'Our services are already used by the largest event organizers in China, Russia and Eastern Europe, including Canton Fair, UBM, VNU, HKTDC, SIEC. The total turnover of current clients is more than $ 2 billion per year.'],
		"ua": ['Клієнти', 'Нашими послугами вже користуються найбільші організатори заходів Китаю, Росії та Східної Європи, зокрема Canton Fair, UBM, VNU, HKTDC, SIEC. Загальний обіг поточних клієнтів становить понад $2 млрд. на рік.',]
	},
  "partners":{
		"ru": ['Партнеры', 'Привлечь ещё больше посетителей на мероприятия поможет сеть партнёров Biletum – 12 000 контактов по всему миру.',],
		"en": ['Partners', "Biletum's network of partners will help attract even more visitors to the events – 12 000 contacts around the world."],
		"ua": ['Партнери', 'Залучити ще більше відвідувачів на заходи допоможе мережу партнерів Biletum – 12 000 контактів по всьому світу.']
	},
  "partners-tech":{
		"ru": ['Технические партнеры', 'Наши партнеры обеспечат техническую поддержку онлайн и гибридных мероприятий любого масштаба.',],
		"en": ['Technical partners', 'Our partners will provide technical support for online and hybrid events of any size.'],
		"ua": ['Технічні партнери', 'Наші партнери забезпечать технічну підтримку онлайн і гібридних заходів будь-якого масштабу.',]
	},
  "reviews__title":{
    "ru": "Отзывы",
		"en": "Reviews",
		"ua": "Відгуки"
  },
  "reviews-slider__info1":{
    "ru": ['Игорь Овчаренко', 'IDCEE',],
		"en": ['Gleb Arhangelsky', 'Time Management PLC'],
		"ua": ['Ілля Сілаков', 'Тренінг-центр ЦМТ (Центр міжнародної торгівлі)',]
  },
  "reviews-slider__text1":{
    "ru": "Мы неизменно используем TicketForEvent на протяжении 3-х лет, за это время смогли убедиться в надежности и профессиональности нашего тикетингового партнера, который имеет положительную деловую репутацию. Сервис позволил нам регистрировать посетителей онлайн, обеспечить продажу билетов участникам из 31 страны мира, включая Мексику, США, Южную Африку, Бразилию, Польшу и страны Балтии, а также качественно обеспечить check-in для более 2 000 посетителей. С помощью сервиса TicketForEvent, мы смогли предоставить нашим посетителям возможность быстро и легко стать участником беспрецедентного для Центральной и Восточной Европы события IDCEE.",
		"en": "We have been working with TicketForEvent for quite a long time and have had enough time to assess the team’s efficiency, responsibility and reliability. We are delighted to see that customers’ requests and desires are fulfilled on time and managers are always available and very helpful!",
		"ua": "Наша співпраця з TicketForEvent почалася в 2011 році. Квиткова система перевершила всі наші очікування. Хочеться виділити простоту, зручність, багатофункціональність системи, і, найголовніше, колектив і їхнє бажання вдосконалювати систему, виходячи із запитів організаторів заходів."
  },
  "reviews-slider__info2":{
    "ru": ['Шадрин Евгений', 'Супер Drift Битва',],
		"en": ['Silakov Ilya', 'WTC Training Centre (World Trade Centre)'],
		"ua": ['Ірина Кремінь', 'KGS',]
  },
  "reviews-slider__text2":{
    "ru": "Нам необходимо было сделать процесс приобретения билета максимально комфортным для наших зрителей не только из Красноярска, но и с других регионов. Справиться с этой задачей нам помог сервис TicketForEvent! Кроме простого и интуитивно понятного интерфейса, порадовали дополнительные «фишки»: приложение для соц. сетей, интерактивная карта трибун, кнопка для интеграции на сайт.Если у вас есть вопрос, как продавать электронные билеты, то TicketForEvent решит этот вопрос «под ключ».",
		"en": "Our cooperation with TicketForEvent started in 2011. The e-ticketing service exceeded all our expectations. We would like to highlight the simplicity, convenience and multifunctional nature of the service and, most importantly, the staff themselves and their desire to improve service to fit event organiser needs.",
		"ua": "Я випробувала цілу низку різних сервісів електронних квитків, перш ніж почала працювати з TicketForEvent, і витратила багато часу, щоб вивчити всі переваги кожного з них. TicketForEvent — це єдиний сервіс, який відповідає всім мої очікуванням, а я дуже вимогливий клієнт. Мені подобається гнучкість вибору способів оплати, простий і зрозумілий інтерфейс, а також дружелюбність і доступність технічної підтримки."
  },
  "reviews-slider__info3":{
    "ru": ['Даниил Дмитриев', 'Независимая Федерация Реслинга (НФР)',],
		"en": ['Yulia Basyrova', 'MDDay LLC'],
		"ua": ['Ірина Поліщук', 'TA Venture VC Fund',]
  },
  "reviews-slider__text3":{
    "ru": "Наша организация проводит мероприятия как для массовой аудитории, так и для ограниченного круга лиц. Не всегда возможно организовать полноценную физическую продажу билетов, поэтому мы долго искали способ, как обеспечить наиболее удобный и финансово выгодный вариант распространения билетов как для зрителя, так и для организатора. Опробовав множество различных вариантов, мы остановились на сервисе TicketForEvent. После года использования сервиса, мы довольны условиями, удобным функционалом для продажи и контроля билетов, отсутствием критичных проблем для продаж. Отдельно стоит отметить оперативность работы сотрудников сервиса.",
		"en": "We have been working with TicketForEvent for quite a long time and have had enough time to assess the team’s efficiency, responsibility and reliability. We are delighted to see that customers’ requests and desires are fulfilled on time and managers are always available and very helpful!",
		"ua": "У 2011 році міжнародна конференція «День інвестора Центральної та Східної Європи. Інтернет-технології та інновації» (IDCEE 2011) вперше скористалася послугами сервісу TicketForEvent. Для такої масштабної конференції потрібен професійний підхід у всьому, починаючи із забезпечення продажу квитків, що дозволяє зробити система TicketForEvent. Команда, яка працює над ефективним функціонуванням сервісу, завжди готова розвивати його і вкладає всі сили в сервіс, працюючи як налагоджений механізм. Для відвідувачів заходів сервіс пропонує простий алгоритм замовлення квитка та оперативно реагує на запити клієнтів. Отже, сервіс є зручним як для організаторів, так і для учасників того чи іншого івенту."
  },
  "reviews-slider__info4":{
    "ru": ['Иван Бабенко', 'Sziget Festival Украина',],
		"en": ['Timofey Yevgrashin', 'Ciklum Consulting'],
		"ua": ['Тимофій Евграшін', 'Ciklum Consulting',]
  },
  "reviews-slider__text4":{
    "ru": "TicketForEvent помог нам качественно реализовать продажу электронных билетов в Украине на фестиваль Sziget. Сервис позволил снять часть организационных моментов (обработка платежей, генерация билетов, их регистрация) и интегрировать их в общую центральную базу данных, что очень важно для таких крупных международных событий, как фестиваль Sziget.",
		"en": "As a company representative in charge of interaction with TicketForEvent I enjoyed our cooperation. Our choice was on numerous occasions rewarded with instantaneous response our account managers and support service were receiving. All issues, whether technical or organizational ones, were being addressed in a really swift manner while the service performs exactly to the reason why it was chosen: relieving you of the hassle of receiving payments and registering the event attendees.",
		"ua": "Мені, як представнику компанії Ciklum Consulting, який відповідав за співпрацю з TicketForEvent, сподобалася наша спільна робота. Цей вибір не раз виправдався оперативним спілкуванням з аккаунт-менеджером і службою підтримки. Всі питання, як організаційні, так і технічні, вирішуються дуже швидко, і сервіс повністю робить те, заради чого ми його вибирали — знімає снас турботу про прийом платежів та реєстрації учасників наших заходів."
  },
  "reviews-slider__info5":{
    "ru": ['Марат Мингазов', 'ITGinGer',],
		"en": ['Marat Mingazov', 'ITGinGer'],
		"ua": ['Марат Мінгазов', 'ITGinGer',]
  },
  "reviews-slider__text5":{
    "ru": "Сотрудничество с ExpoPromo Group было первым опытом внедрения специализированного сервиса электронных билетов для конференции Mobile Professional Days 2011. Мы получили качественную помощь по всем вопросам и самое важное - быстрое внедрение системы. В процессе сотрудничества, когда возникали сложности, поддержка со стороны ExpoPromo Group была быстрой и профессиональной. Мы планируем сотрудничать в будущем и рекомендуем другим организаторам конференций использовать сервис TicketForEvent.",
		"en": "Collaborating with the ExpoPromo Group for the Mobile Professional Days 2011 Conference was our first experience of e-ticketing service integration. We received high-quality assistance in all areas and, most importantly, we received prompt service implementation. While some difficulties arose during the process, the ExpoPromo Group support was quick and professional. We plan to collaborate with them in the future and highly recommend that other conference organisers use the TicketForEvent service.",
		"ua": "Співпраця з ExpoPromo Group була першим досвідом впровадження спеціалізованого сервісу електронних квитків для конференції Mobile Professional Days 2011. Ми отримали якісну допомогу з усіх питань і найважливіше — швидке впровадження системи. У процесі співробітництва, коли виникали складнощі, підтримка з боку ExpoPromo Group була швидкою і професійною. Ми плануємо співпрацювати в майбутньому і рекомендуємо іншим організаторам конференцій використовувати сервіс TicketForEvent."
  },
  "team":{
    "ru": ['Команда', 'В нашей команде более 50 экспертов, каждый из которых отвечает за результат вашей работы с Biletum.',],
		"en": ['Team', 'Our team includes over 50 experts, each of whom is responsible for the outcome of your work with Biletum.'],
		"ua": ['Команда', 'У нашій команді понад 50 експертів, кожен з яких є&nbsp;відповідальним за результат вашої роботи з Biletum.',]
  },
  "team-card1":{
    "ru": ['Геннадий Нетяга', 'Chief Executive Officer (Europe, Asia)'],
		"en": ['Hennadiy Netyaha', 'Chief Executive Officer (Europe, Asia)'],
		"ua": ['Геннадій Нетяга', 'Chief Executive Officer (Europe, Asia)']
  },
  "team-card2":{
    "ru": ['Семён Загайнов', 'Chief Operating Officer (Asia)'],
		"en": ['Simon Zagaynov', 'Chief Operating Officer (Asia)'],
		"ua": ['Семен Загайнов', 'Chief Operating Officer (Asia)']
  },
  "team-card3":{
    "ru": ['Алина Совенко', 'Managing Director (Europe)'],
		"en": ['Alina Sovenko', 'Managing Director (Europe)'],
		"ua": ['Аліна Совенко', 'Managing Director (Europe)']
  },
  "team-card4":{
    "ru": ['Юрий Тимощук', 'Chief Technical Officer (Europe, Asia)'],
		"en": ['Yury Timoschuk', 'Chief Technical Officer (Europe, Asia)'],
		"ua": ['Юрій Тимощук', 'Chief Technical Officer (Europe, Asia)']
  },
  "team-card5":{
    "ru": ['Алёна Яковина', 'Chief Financial Officer (Europe, Asia)'],
		"en": ['Alyona Yakovyna', 'Chief Financial Officer (Europe, Asia)'],
		"ua": ['Альона Яковина', 'Chief Financial Officer (Europe, Asia)']
  },
  "team-card6":{
    "ru": ['Святослав Алёхин', 'Business Development Director (Europe)'],
		"en": ['Svyatoslav Alyokhin', 'Business Development Director (Europe)'],
		"ua": ['Святослав Альохін', 'Business Development Director (Europe)']
  },
  "team-card7":{
    "ru": ['Диана Зилецкая', 'Business Development Director (Ukraine)'],
		"en": ['Diana Ziletska', 'Business Development Director (Ukraine)'],
		"ua": ['Діана Зілецька', 'Business Development Director (Ukraine)']
  },
  "team-card8":{
    "ru": ['Эмма Джанг', 'Business Development Director (Asia)'],
		"en": ['Emma Zhang', 'Business Development Director (Asia)'],
		"ua": ['Емма Джанґ', 'Business Development Director (Asia)']
  },
  "footer__item1":{
    "ru": ['Украина', 'Киев,<br>ул. Казимира Малевича, 86-Л, 2-й этаж'],
		"en": ['Ukraine', 'Kyiv,<br>86L Kazymyra Malevicha, St., 2nd floor'],
		"ua": ['Україна', 'Київ,<br>вул. Казимира Малевича, 86Л, ​​2-й поверх']
  },
  "footer__item2":{
    "ru": ['Россия', 'Москва,<br>ул. Летниковская, 10, строение 1, 7-й этаж'],
		"en": ['Russia', 'Moscow,<br>10 Letnikovskaya, St., building 1, 7th floor'],
		"ua": ['Росія', 'Москва,<br>вул. Летніковська, 10, корпус 1, 7-й поверх']
  },
  "footer__item3":{
    "ru": ['Китай', 'Шанхай,<br>р-н. 2115, 21F, East Ocean Centre Phase, № 618 East Yan An Road'],
		"en": ['China', 'Shanghai,<br>21F East Ocean Centre Phase, No.618 East Yan An Road'],
		"ua": ['Китай', 'Шанхай,<br>обл. 2115, 21F, East Ocean Centre Phase, №.618 East Yan An Road']
  },
  "footer__item4":{
    "ru": ['Великобритания,', 'Лондон,<br>ул. Джона Принца, 13, <br>2-й&nbsp;этаж'],
		"en": ['United Kingdom,', 'London,<br>13 John Prince’s St., <br>2nd&nbsp;floor'],
		"ua": ['Великобританія,', 'Лондон,<br>вул. Джона Принца, 13, <br>Лондон W1G 0J, 2-й&nbsp;поверх']
  },
  "cta__wrapper":{
    "ru": ['Увеличьте конверсию в <span>10 раз</span>', 'с минимальными затратами ресурсов'],
		"en": ['Increase your conversion by <span>10 times</span>', 'with minimal resource consumption'],
		"ua": ['Збільште конверсію в <span> 10 разів </ span>', 'з мінімальними витратами ресурсів']
  },
}