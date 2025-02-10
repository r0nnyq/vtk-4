// Переводы для каждого языка
const translations = {
    'ru': {
        'menu-about': 'О Колледже',
        'menu-education': 'Образовательная деятельность',
        'menu-center': 'Центр непрерывного образования',
        'menu-services': 'Государственные услуги',
        'menu-news': 'Новости',
        'menu-contacts': 'Контакты',
        'location-vtk': 'г. Кокшетау,  <br> ул. Жумабека Ташенова, 115',
        'one-location': 'Корпус №1: Тараса Шевченко, 127',
        'two-location': 'Корпус №2: Жамбыла Жабаева, 175',
        'three-location': 'Корпус №3: Жамбыла Жабаева, 144',
        'four-location': 'Корпус №4: Жумабекова Ташенова, 115',
        'name-abit': 'Абитуриентам',
        'name-stud': 'Студентам</span>',
        'name-par': 'Родителям</span>',
        'vtk': '⠀⠀⠀⠀⠀Высший <br> Технический Колледж <br> <span>⠀Обучаем лучших специалистов</span>',
        'qqq': 'Поступить',
        'www': 'УЗНАТЬ БОЛЬШЕ',
        'student-bt': ' 2500 <br> студентов</p>',
        'card-one': '<h2>57+</h2><p>квалификаций</p>',
        'card-two': '<h2>100+</h2><p>преподователей</p>',
        'card-three': '<h2>5</h2><p>корпусов</p>',
        'card-four': '<h2>5+</h2><p>спортивные секции</p>',


        'front-one': 'Профессиональное обучение (по отраслям)',
        'sub__front1-one': 'Мастер производственного обучения, техник (всех наименований)',
        'sub__front2-one': 'Мастер производственного обучения, техник-технолог (всех наименований)',

        'front-two': 'Дизайн интерьера',
        'sub__front1-two': 'Дизайнер интерьера',

        'front-three': 'Учет и аудит',
        'black-two': '<p>Бухгалтер</p> <p>Бухгалтер-кассир</p> <p>Менеджер по государственным закупкам</p>',

        'front-four': 'Вычислительная техника и информационные сети (по видам)',
        'black-four': '<p>Оператор компьютерного аппаратного обеспечения</p> <p>Техник сетевого и системного администрирования</p> <p>Прикладной бакалавр вычислительной техники и информационных сетей</p>',

        'front-five': 'Программное обеспечение (по видам)',
        'black-five': '<p>Web-дизайнер</p> <p>Разработчик программного обеспечения</p> <p>Техник по сопровождению и тестированию программного обеспечения</p> <p>Техник информационных систем</p>',

        'front-six': 'Электрооборудование (по видам и отраслям)',
        'black-six': '<p>Техник-электрик</p>',

        'front-seven': 'Теплотехническое оборудование и системы теплоснабжения (по видам)',
        'black-seven': 'Техник-теплотехник',

        'front-eight': 'Техническое обслуживание, ремонт и эксплуатация электромеханического оборудования',
        'black-eight': '<p>Монтажник электрооборудования</p> <p>Техник-электромеханик</p>',

        'front-nine': 'Автоматизация и управление технологическими процессами',
        'black-nine': '<p>Слесарь по обслуживанию и ремонту контрольно-измерительных приборов и автоматики</p> <p>Техник-электромеханик</p>',

        'front-ten': 'Мехатроника (по отраслям)',
        'black-ten': 'Техник-мехатроник',

        'front-eleven': 'Технология машиностроения (по видам)',
        'black-eleven': '<p>Оператор станков с программным управлением</p> <p>Техник-технолог</p> <p>Прикладной бакалавр технологии машиностроения</p>',

        'front-twelve': 'Сварочное дело (по видам)',
        'black-twelve': '<p>Электрогазосварщик</p> <p>Техник-механик</p>',

        'front-thirteen': 'Эксплуатация и техническое обслуживание машин и оборудования (по отраслям промышленности)',
        'black-thirteen': '<p>Наладчик оборудования</p> <p>Техник-механик</p>',

        'front-fourteen': 'Техническое обслуживание, ремонт и эксплуатация автомобильного транспорта',
        'black-fourteen': '<p>Слесарь по ремонту автомобилей</p> <p>Электрик по ремонту автомобильного электрооборудования</p> <p>Мастер по ремонту автомобильного транспорта</p> <p>Техник-механик</p> <p>Прикладной бакалавр технического обслуживания, ремонта и эксплуатации автомобильного транспорта</p>',

        'front-fifteen': 'Механизация сельского хозяйства',
        'black-fifteen': '<p>Слесарь-ремонтник</p> <p>Тракторист-машинист сельскохозяйственного производства</p>',

        'front-sixteen': 'Мебельное производство',
        'black-sixteen': '<p>Техник-технолог</p>',

        'front-seventeen': 'Швейное производство и моделирование одежды',
        'black-seventeen': '<p>Швея</p> <p>Портной</p> <p>Модельер-конструктор</p>',

        'front-eighteen': 'Обогащение полезных ископаемых (рудообогащение)',
        'black-eighteen': '<p>Техник-технолог</p>',

        'front-nineteen': 'Архитектура',
        'black-nineteen': '<p>Исполнитель графических работ</p> <p>Техник-проектировщик</p>',

        'front-twenty': 'Геодезия и картография',
        'black-twenty': '<p>Техник-геодезист</p>',

        'front-twenty-one': 'Строительство и эксплуатация зданий и сооружений',
        'black-twenty-one': '<p>Мастер столярно-плотничных и паркетных работ</p> <p>Мастер-строитель широкого профиля</p> <p>Мастер отделочных строительных работ</p> <p>Техник-строитель</p> <p>Прикладной бакалавр строительства и эксплуатации зданий и сооружений</p>',

        'front-twenty-two': 'Сметное дело в строительстве',
        'black-twenty-two': '<p>Техник-сметчик</p>',




        'front-twenty-three': 'Строительство и эксплуатация автомобильных дорог и аэродромов',
        'black-twenty-three': '<p>Техник-строитель</p> <p>Прикладной бакалавр строительства автомобильных дорог и аэродромов</p>',

        'front-twenty-four': 'Монтаж и эксплуатация инженерных систем объектов жилищно-коммунального хозяйства',
        'black-twenty-four': '<p>Слесарь-сантехник</p> <p>Мастер по обслуживанию инженерных систем объектов жилищно-коммунального хозяйства</p> <p>Техник по монтажу и эксплуатации инженерных систем</p>',

        'front-twenty-five': 'Организация тепличного хозяйства',
        'black-twenty-five': '<p>Мастер тепличных производств</p>',

        'front-twenty-six': 'Парикмахерское искусство',
        'black-twenty-six': '<p>Парикмахер-стилист</p>',

        'front-twenty-seven': 'Организация питания',
        'black-twenty-seven': '<p>Кондитер-оформитель</p> <p>Повар</p>',



    },
    'kk': {
        'menu-about': 'Колледж туралы',
        'menu-education': 'Білім беру қызметі',
        'menu-center': 'Үздіксіз білім беру орталығы',
        'menu-services': 'Мемлекеттік қызметтер',
        'menu-news': 'Жаңалықтар',
        'menu-contacts': 'Байланыстар',
        'location-vtk': 'Көкшетау қ., <br>к. Жұмабека Тәшенова, 115 жаста',
        'one-location': '№1 ғимарат: Тарас Шевченко, 127',
        'two-location': '№2 ғимарат: Жабаева Жамбыл, 175',
        'three-location': '№3 ғимарат: Жабаева Жамбыл, 144',
        'four-location': '№4 ғимарат: Жұмабека Ташенова, 115',
        'name-abit': 'Үміткерлер үшін',
        'name-stud': 'Студенттер',
        'name-par': 'Ата-аналар',
        'vtk': '⠀⠀⠀⠀⠀Жоғары <br> Техникалық колледж <br> <span>⠀Біз үздік мамандарды дайындаймыз</span>',
        'qqq': 'Қолдану',
        'www': 'Толығырақ біліңіз',
        'student-bt': '2500 <br>студенттер</p>',
        'card-one': '<h2>57+</h2><p>квалификаций</p>',
        'card-two': '<h2>100+</h2><p>ұстаздар</p>',
        'card-three': '<h2>5</h2><p>ғимараттар</p>',
        'card-four': '<h2>5+</h2><p>спорт секциялары</p>',

        'front-one': 'Кәсіптік оқыту (салалар бойынша)',
        'sub__front1-one': 'Өндірістік оқыту шебері, техник (Барлық атаулар)',
        'sub__front2-one': 'Өндірістік оқыту шебері, техник-технолог (Барлық атаулар)',

        'front-two': 'интерьер дизайны',
        'sub__front1-two': 'интерьер дизайнері',


        'front-three': 'Есеп және аудит',
        'black-two': '<p>Бухгалтер</p> <p>бухгалтер-кассир</p> <p>Мемлекеттік сатып алу жөніндегі Менеджер</p>',

        'front-four': 'Есептеу техникасы және ақпараттық желілер (түрлері бойынша)',
        'black-four': '<p>компьютерлік аппараттық оператор</p> <p>желілік және жүйелік әкімшілендіру технигі</p> <p>қолданбалы есептеу және ақпараттық желілер бакалавры</p>',

        'front-five': 'Бағдарламалық қамтамасыз ету (түрлері бойынша)',
        'black-five': '<p>Web-дизайнер</p> <p>Бағдарламалық жасақтама жасаушы</p> <p>Бағдарламалық қамтамасыз етуді сүйемелдеу және тестілеу жөніндегі Техник</p> <p>Ақпараттық жүйелер технигі</p>',

        'front-six': 'Электр жабдықтары (түрлері мен салалары бойынша)',
        'black-six': 'Техник-электрик',

        'front-seven': 'Жылу техникасы жабдықтары мен жылыту жүйелері (түрлері бойынша)',
        'black-seven': 'Жылу инженері',

        'front-eight': 'Электромеханикалық жабдықтарды техникалық қызмет көрсету, жөндеу және пайдалану',
        'black-eight': '<p>Электр жабдықтарын орнатушы</p> <p>Электромеханик техник</p>',

        'front-nine': 'Технологиялық процестерді автоматтандыру және басқару',
        'black-nine': '<p>Өлшеу құралдары мен автоматика жабдықтарын қызмет көрсету және жөндеу слесары</p>  <p>Электромеханик техник</p>',

        'front-ten': 'Мехатроника (салалар бойынша)',
        'black-ten': 'Мехатроника техник',

        'front-eleven': 'Машина жасау технологиясы (түрлері бойынша)',
        'black-eleven': '<p>Бағдарламалық басқару жүйесі бар станок операторы</p> <p>Техник-технолог</p> <p>Машина жасау технологиясы бойынша қолданбалы бакалавр</p>',


        'front-twelve': 'Дәнекерлеу (түрлері бойынша)',
        'black-twelve': '<p>Электр және газ дәнекерлеуші</p> <p>Механик техник</p>',


        'front-thirteen': 'Машиналар мен жабдықтарды пайдалану және техникалық қызмет көрсету (өнеркәсіп салалары бойынша)',
        'black-thirteen': '<p>Жабдықты баптаушы</p> <p>Механик техник</p>',


        'front-fourteen': 'Автомобиль көлігін техникалық қызмет көрсету, жөндеу және пайдалану',
        'black-fourteen': '<p>Автомобиль жөндеу слесары</p> <p>Автомобиль электр жабдықтарын жөндеу электрик</p> <p>Автомобиль көлігін жөндеу шебері</p> <p>Механик техник</p> <p>Автомобиль көлігін техникалық қызмет көрсету, жөндеу және пайдалану бойынша қолданбалы бакалавр</p>',


        'front-fifteen': 'Ауыл шаруашылығын механикаландыру',
        'black-fifteen': '<p>Жөндеу слесары</p> <p>Ауыл шаруашылығы өндірісінің тракторист-машинисі</p>',


        'front-sixteen': 'Мебель өндірісі',
        'black-sixteen': '<p>Техник-технолог</p>',


        'front-seventeen': 'Тігін өндірісі және киім модельдеу',
        'black-seventeen': '<p>Тігінші</p> <p>Тігіншілер</p> <p>Модельер-конструктор</p>',


        'front-eighteen': 'Құнды қазбаларды байыту (кен байыту)',
        'black-eighteen': '<p>Техник-технолог</p>',


        'front-nineteen': 'Архитектура',
        'black-nineteen': '<p>Графикалық жұмыстар орындаушы</p> <p>Жобалаушы техник</p>',


        'front-twenty': 'Геодезия және картография',
        'black-twenty': '<p>Геодезист техник</p>',


        'front-twenty-one': 'Ғимараттар мен құрылымдарды салу және пайдалану',
        'black-twenty-one': '<p>Ағаш ұстасы және паркетші шебері</p> <p>Кең профильді құрылысшы</p> <p>Құрылыс аяқтау жұмыстарын орындаушы шебері</p> <p>Құрылыс техник</p> <p>Ғимараттар мен құрылымдарды салу және пайдалану бойынша қолданбалы бакалавр</p>',


        'front-twenty-two': 'Құрылыс саласындағы сметалық есептеу',
        'black-twenty-two': '<p>Сметаушы техник</p>',


        'front-twenty-three': 'Автомобиль жолдары мен аэродромдарды салу және пайдалану',
        'black-twenty-three': '<p>Құрылыс техник</p> <p>Автомобиль жолдары мен аэродромдарды салу бойынша қолданбалы бакалавр</p>',

        'front-twenty-four': 'Тұрғын үй-коммуналдық шаруашылығы нысандарындағы инженерлік жүйелерді орнату және пайдалану',
        'black-twenty-four': '<p>Слесарь-сантехник</p> <p>Тұрғын үй-коммуналдық шаруашылығы нысандарындағы инженерлік жүйелерге қызмет көрсету шебері</p> <p>Инженерлік жүйелерді орнату және пайдалану техникі</p>',

        'front-twenty-five': 'Жылыжай шаруашылығын ұйымдастыру',
        'black-twenty-five': '<p>Жылыжай өндірісінің шебері</p>',

        'front-twenty-six': 'Шаштараз өнері',
        'black-twenty-six': '<p>Шаштараз-стилист</p>',

        'front-twenty-seven': 'Астың ұйымдастырылуы',
        'black-twenty-seven': '<p>Кондитер-дизайнер</p> <p>Ас мәзірін әзірлеуші</p>',





    },
    'en': {
        'menu-about': 'About the College',
        'menu-education': 'Educational Activities',
        'menu-center': 'Center for Continuous Education',
        'menu-services': 'Government Services',
        'menu-news': 'News',
        'menu-contacts': 'Contacts',
        'location-vtk': 'Kokshetau,  <br> st. Zhumabeka Tashenova, 115',
        'one-location': 'Building №1: Taras Shevchenko, 127',
        'two-location': 'Building №2: Zhambyla Zhabaeva, 175',
        'three-location': 'Building №3: Zhambyla Zhabaeva, 144',
        'four-location': 'Building №4: Zhumabek Tashenova, 115',
        'name-abit': 'For applicants',
        'name-stud': 'Students',
        'name-par': 'Parents',
        'vtk': '⠀⠀⠀⠀⠀Higher <br> ⠀⠀Technical College <br> <span>⠀⠀⠀We train the best specialists</span>',
        'qqq': 'Apply',
        'www': 'Find out more',
        'student-bt': '2500 <br>students</p>',
        'card-one': '<h2>57+</h2><p>qualifications</p>',
        'card-two': '<h2>100+</h2><p>teachers</p>',
        'card-three': '<h2>5</h2><p>buildings</p>',
        'card-four': '<h2>5+</h2><p>sports sections</p>',

        'front-one': 'Vocational training (by industry)',
        'sub__front1-one': 'Master of industrial training, technician (all titles)',
        'sub__front2-one': 'Master of Industrial Training, process technician (all titles)',

        'front-two': 'Interior design',
        'sub__front1-two': 'Interior Designer',

        'front-three': 'Accounting and auditing',
        'black-two': '<p>Бухгалтер</p> <p>Бухгалтер-кассир</p> <p>Менеджер по государственным закупкам</p>',

        'front-four': 'Computing and information networks (by type)',
        'black-four': '<p>Computer Hardware operator</p> <p>Technician of network and system administration</p> <p>Applied Bachelor of Computer Engineering and Information Networks</p>',

        'front-five': 'Software (by type)',
        'black-five': '<p>Web Designer</p> <p>Software Developer</p> <p>Software Maintenance and Testing Technician</p> <p>Information Systems Technician</p>',

        'front-six': 'Electrical equipment (by type and industry)',
        'black-six': 'Electrical technician',

        'front-seven': 'Heat Engineering Equipment and Heating Systems (by types)',
        'black-seven': 'Heat Technician',

        'front-eight': 'Technical Maintenance, Repair, and Operation of Electromechanical Equipment',
        'black-eight': '<p>Electrical Equipment Installer</p> <p>Electromechanical Technician</p>',

        'front-nine': 'Automation and Control of Technological Processes',
        'black-nine': '<p>Mechanic for Maintenance and Repair of Measuring Instruments and Automation Equipment</p> <p>Electromechanical Technician</p>',

        'front-ten': 'Automation and Control of Technological Processes',
        'black-ten': '<p>Mechanic for Maintenance and Repair of Measuring Instruments and Automation Equipment</p> <p>Electromechanical Technician</p> ',

        'front-eleven': 'Machine Engineering Technology (by types)',
        'black-eleven': '<p>CNC Machine Operator</p> <p>Technician-Technologist</p> <p>Applied Bachelor in Machine Engineering Technology</p>',


        'front-twelve': 'Welding (by types)',
        'black-twelve': '<p>Electric and Gas Welder</p> <p>Mechanical Technician</p>',


        'front-thirteen': 'Operation and Maintenance of Machines and Equipment (by industries)',
        'black-thirteen': '<p>Equipment Setter</p> <p>Mechanical Technician</p>',


        'front-fourteen': 'Maintenance, Repair, and Operation of Automotive Transport',
        'black-fourteen': '<p>Automobile Repair Mechanic</p> <p>Electrician for Automotive Electrical Equipment Repair</p> <p>Automotive Transport Repair Master</p> <p>Mechanical Technician</p> <p>Applied Bachelor in Maintenance, Repair, and Operation of Automotive Transport</p>',


        'front-fifteen': 'Mechanization of Agriculture',
        'black-fifteen': '<p>Repair Mechanic</p> <p>Tractor Driver-Machine Operator in Agricultural Production</p>',


        'front-sixteen': 'Furniture Production',
        'black-sixteen': '<p>Technician-Technologist</p>',


        'front-seventeen': 'Sewing Production and Clothing Design',
        'black-seventeen': '<p>Sewer</p> <p>Tailor</p> <p>Fashion Designer</p>',


        'front-eighteen': 'Құнды қазбаларды байыту (кен байыту)',
        'black-eighteen': '<p>Техник-технолог</p>',


        'front-nineteen': 'Architecture',
        'black-nineteen': '<p>Graphic Work Performer</p> <p>Design Technician</p>',


        'front-twenty': 'Geodesy and Cartography',
        'black-twenty': '<p>Geodesist Technician</p>',


        'front-twenty-one': 'Construction and Operation of Buildings and Structures',
        'black-twenty-one': '<p>Master of Carpentry and Parquet Work</p> <p>General Builder</p> <p>Master of Finishing Construction Works</p> <p>Construction Technician</p> <p>Applied Bachelor in Construction and Operation of Buildings and Structures</p>',


        'front-twenty-two': 'Cost Estimation in Construction',
        'black-twenty-two': '<p>Cost Estimator Technician</p>',


        'front-twenty-three': 'Construction and Operation of Highways and Airfields',
        'black-twenty-three': '<p>Construction Technician</p> <p>Applied Bachelor in Highway and Airfield Construction</p>',

        'front-twenty-four': 'Installation and Operation of Engineering Systems in Housing and Utility Facilities',
        'black-twenty-four': '<p>Plumber</p> <p>Master of Engineering Systems Maintenance in Housing and Utility Facilities</p> <p>Technician for Installation and Operation of Engineering Systems</p>',

        'front-twenty-five': 'Greenhouse Farming Organization',
        'black-twenty-five': '<p>Greenhouse Production Master</p>',

        'front-twenty-six': 'Hairdressing Art',
        'black-twenty-six': '<p>Hairdresser-Stylist</p>',

        'front-twenty-seven': 'Catering Organization',
        'black-twenty-seven': '<p>Confectioner-Decorator</p> <p>Cook</p>',






    }
};

// Функция для смены языка на странице
function changeLanguage(language) {
    document.getElementById('menu-about').innerText = translations[language]['menu-about'];
    document.getElementById('menu-education').innerText = translations[language]['menu-education'];
    document.getElementById('menu-center').innerText = translations[language]['menu-center'];
    document.getElementById('menu-services').innerText = translations[language]['menu-services'];
    document.getElementById('menu-news').innerText = translations[language]['menu-news'];
    document.getElementById('menu-contacts').innerText = translations[language]['menu-contacts'];
    document.getElementById('location-vtk').innerHTML = translations[language]['location-vtk'];
    document.getElementById('one-location').innerHTML = translations[language]['one-location'];
    document.getElementById('two-location').innerHTML = translations[language]['two-location'];
    document.getElementById('three-location').innerHTML = translations[language]['three-location'];
    document.getElementById('four-location').innerHTML = translations[language]['four-location'];
    document.getElementById('name-abit').innerHTML = translations[language]['name-abit'];
    document.getElementById('name-stud').innerHTML = translations[language]['name-stud'];
    document.getElementById('name-par').innerHTML = translations[language]['name-par'];
    document.getElementById('vtk').innerHTML = translations[language]['vtk'];
    document.getElementById('qqq').innerHTML = translations[language]['qqq'];
    document.getElementById('www').innerHTML = translations[language]['www'];
    document.getElementById('student-bt').innerHTML = translations[language]['student-bt'];
    document.getElementById('card-one').innerHTML = translations[language]['card-one'];
    document.getElementById('card-two').innerHTML = translations[language]['card-two'];
    document.getElementById('card-three').innerHTML = translations[language]['card-three'];
    document.getElementById('card-four').innerHTML = translations[language]['card-four'];


    document.getElementById('front-one').innerHTML = translations[language]['front-one'];
    document.getElementById('sub__front1-one').innerHTML = translations[language]['sub__front1-one'];
    document.getElementById('sub__front2-one').innerHTML = translations[language]['sub__front2-one'];


    document.getElementById('front-two').innerHTML = translations[language]['front-two'];
    document.getElementById('sub__front1-two').innerHTML = translations[language]['sub__front1-two'];

    document.getElementById('front-three').innerHTML = translations[language]['front-three'];
    document.getElementById('black-two').innerHTML = translations[language]['black-two'];

    document.getElementById('front-four').innerHTML = translations[language]['front-four'];
    document.getElementById('black-four').innerHTML = translations[language]['black-four'];

    document.getElementById('front-five').innerHTML = translations[language]['front-five'];
    document.getElementById('black-five').innerHTML = translations[language]['black-five'];

    document.getElementById('front-six').innerHTML = translations[language]['front-six'];
    document.getElementById('black-six').innerHTML = translations[language]['black-six'];

    document.getElementById('front-seven').innerHTML = translations[language]['front-seven'];
    document.getElementById('black-seven').innerHTML = translations[language]['black-seven'];

    document.getElementById('front-eight').innerHTML = translations[language]['front-eight'];
    document.getElementById('black-eight').innerHTML = translations[language]['black-eight'];

    document.getElementById('front-nine').innerHTML = translations[language]['front-nine'];
    document.getElementById('black-nine').innerHTML = translations[language]['black-nine'];

    document.getElementById('front-ten').innerHTML = translations[language]['front-ten'];
    document.getElementById('black-ten').innerHTML = translations[language]['black-ten'];

    document.getElementById('front-eleven').innerHTML = translations[language]['front-eleven'];
    document.getElementById('black-eleven').innerHTML = translations[language]['black-eleven'];

    document.getElementById('front-twelve').innerHTML = translations[language]['front-twelve'];
    document.getElementById('black-twelve').innerHTML = translations[language]['black-twelve'];

    document.getElementById('front-thirteen').innerHTML = translations[language]['front-thirteen'];
    document.getElementById('black-thirteen').innerHTML = translations[language]['black-thirteen'];

    document.getElementById('front-fourteen').innerHTML = translations[language]['front-fourteen'];
    document.getElementById('black-fourteen').innerHTML = translations[language]['black-fourteen'];

    document.getElementById('front-fifteen').innerHTML = translations[language]['front-fifteen'];
    document.getElementById('black-fifteen').innerHTML = translations[language]['black-fifteen'];

    document.getElementById('front-sixteen').innerHTML = translations[language]['front-sixteen'];
    document.getElementById('black-sixteen').innerHTML = translations[language]['black-sixteen'];

    document.getElementById('front-seventeen').innerHTML = translations[language]['front-seventeen'];
    document.getElementById('black-seventeen').innerHTML = translations[language]['black-seventeen'];

    document.getElementById('front-eighteen').innerHTML = translations[language]['front-eighteen'];
    document.getElementById('black-eighteen').innerHTML = translations[language]['black-eighteen'];

    document.getElementById('front-nineteen').innerHTML = translations[language]['front-nineteen'];
    document.getElementById('black-nineteen').innerHTML = translations[language]['black-nineteen'];

    document.getElementById('front-twenty').innerHTML = translations[language]['front-twenty'];
    document.getElementById('black-twenty').innerHTML = translations[language]['black-twenty'];

    document.getElementById('front-twenty-one').innerHTML = translations[language]['front-twenty-one'];
    document.getElementById('black-twenty-one').innerHTML = translations[language]['black-twenty-one'];

    document.getElementById('front-twenty-two').innerHTML = translations[language]['front-twenty-two'];
    document.getElementById('black-twenty-two').innerHTML = translations[language]['black-twenty-two'];

    document.getElementById('front-twenty-three').innerHTML = translations[language]['front-twenty-three'];
    document.getElementById('black-twenty-three').innerHTML = translations[language]['black-twenty-three'];

    document.getElementById('front-twenty-four').innerHTML = translations[language]['front-twenty-four'];
    document.getElementById('black-twenty-four').innerHTML = translations[language]['black-twenty-four'];

    document.getElementById('front-twenty-five').innerHTML = translations[language]['front-twenty-five'];
    document.getElementById('black-twenty-five').innerHTML = translations[language]['black-twenty-five'];

    document.getElementById('front-twenty-six').innerHTML = translations[language]['front-twenty-six'];
    document.getElementById('black-twenty-six').innerHTML = translations[language]['black-twenty-six'];

    document.getElementById('front-twenty-seven').innerHTML = translations[language]['front-twenty-seven'];
    document.getElementById('black-twenty-seven').innerHTML = translations[language]['black-twenty-seven'];







































    toggleMenu(); // Закрываем меню
    localStorage.setItem('language', language); // Сохраняем выбранный язык
    changeFlag(language); // Меняем флаг
}

// Функция для отображения и скрытия меню с флагами
function toggleMenu() {
    const menu = document.getElementById('flag-menu');
    menu.classList.toggle('show');
}

// Функция для смены флага на выбранный
function changeFlag(language) {
    const currentFlag = document.getElementById('current-flag');
    const flagMap = {
        'ru': 'img/ru.png',
        'kk': 'img/kk.png',
        'en': 'img/us.png'
    };

    if (flagMap[language]) {
        currentFlag.src = flagMap[language];
    }
}

// Функция для добавления текста под флагами
function addFlagText() {
    const flags = [
        { id: 'flag-ru', text: 'RU' },
        { id: 'flag-kk', text: 'KZ' },
        { id: 'flag-en', text: 'US' }
    ];

    flags.forEach(flag => {
        const flagElement = document.getElementById(flag.id);
        if (flagElement) {
            let textElement = flagElement.nextElementSibling;

            // Если текст уже есть, обновляем его
            if (textElement && textElement.classList.contains('flag-text')) {
                textElement.textContent = flag.text;
            } else {
                // Создаем новый элемент с текстом
                textElement = document.createElement('span');
                textElement.classList.add('flag-text');
                textElement.textContent = flag.text;
                
                // Стилизация текста
                textElement.style.display = 'block'; // Блочный элемент (перенос под флаг)
                textElement.style.textAlign = 'center'; // Выравнивание
                textElement.style.fontSize = '14px'; // Размер шрифта
                textElement.style.marginTop = '5px'; // Отступ сверху
                textElement.style.color = '#000'; // Черный цвет текста

                // Вставляем текст под флаг
                flagElement.parentNode.insertBefore(textElement, flagElement.nextSibling);
            }
        }
    });
}

// Привязываем обработчики событий к флагам в меню
document.getElementById('flag-ru').addEventListener('click', () => {
    changeLanguage('ru');
    addFlagText();
});
document.getElementById('flag-kk').addEventListener('click', () => {
    changeLanguage('kk');
    addFlagText();
});
document.getElementById('flag-en').addEventListener('click', () => {
    changeLanguage('en');
    addFlagText();
});

// Функция для установки языка при загрузке страницы
function setLanguageOnLoad() {
    const savedLanguage = localStorage.getItem('language') || 'ru'; // Получаем сохраненный язык или ставим русский
    changeLanguage(savedLanguage);
    addFlagText(); // Добавляем текст под флагами
}

// Вызов функции при загрузке страницы
window.onload = setLanguageOnLoad;