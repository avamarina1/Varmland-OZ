const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.menu-close');
const backdrop = document.querySelector('.menu-backdrop');

function setMenu(open) {
  if (!menu) return;
  menu.classList.toggle('open', open);
  menu.setAttribute('aria-hidden', String(!open));
  toggle?.setAttribute('aria-expanded', String(open));
  if (backdrop) backdrop.hidden = !open;
  document.body.style.overflow = open ? 'hidden' : '';
}
toggle?.addEventListener('click', () => setMenu(true));
closeBtn?.addEventListener('click', () => setMenu(false));
backdrop?.addEventListener('click', () => setMenu(false));
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

const translations = {
  sv: {
    "nav.home":"Hem","nav.services":"Tjänster","nav.prices":"Priser","nav.about":"Om oss","nav.contact":"Kontakt",
    "nav.book":"Boka konsultation","nav.bookArrow":"Boka konsultation →",
    "hero.eyebrow":"SKRÄDDARSYTT I VÄRMLAND","hero.title":"KLÄDER SOM<br>PASSAR DIG",
    "hero.lead":"Vi skapar skräddarsydda kläder med tidlös stil, hantverk och omtanke – i Värmland.",
    "hero.services":"Våra tjänster","hero.values":"STIL <b>·</b> PASSFORM <b>·</b> KVALITET <b>·</b> SOM HÅLLER",
    "service.custom":"SKRÄDDARSYTT","service.customText":"Unika plagg skapade<br>för dig.",
    "service.alter":"ÄNDRINGAR","service.alterText":"För bättre passform<br>och längre liv.",
    "service.repair":"REPARATIONER","service.repairText":"Ge dina favoritplagg<br>nytt liv.",
  "about.eyebrow":"HANTVERK MED ERFARENHET","about.title":"Bakom Värmland OZ",
"about.text":"Bakom Värmland OZ står skräddaren Olga, med över 20 års erfarenhet av sömnad och skrädderi.<br><br>Efter flytten från Lettland till Sverige för fem år sedan provade hon nya vägar och lärde sig nya saker. Men hantverket har alltid funnits kvar – skrädderi är hennes sanna yrke.<br><br>I Molkom återvänder hon nu till det hon kan bäst: att skapa, anpassa och ge nytt liv åt kläder med känsla för passform, kvalitet och detaljer.",
"about.quote":"","about.services":"Läs mer om våra tjänster →", "prices.seeAll":"Se hela prislistan →","homePrices.eyebrow":"ETT URVAL AV VÅRA PRISER",
"homePrices.title":"Omsorg i varje detalj.<br>Tydliga priser.",
"homePrices.intro":"Här ser du några av våra vanligaste arbeten. För skräddarsydda plagg och mer omfattande ändringar lämnas pris efter konsultation eller bedömning.",
"homePrices.customCategory":"SKRÄDDARSYTT",
"homePrices.custom":"Skräddarsydda plagg",
"homePrices.customPrice":"Pris efter konsultation",
"homePrices.dressesCategory":"KLÄNNINGAR & KJOLAR",
"homePrices.dresses":"Korta enkel klänning eller kjol",
"homePrices.dressesPrice":"från 400 kr",
"homePrices.trousersCategory":"BYXOR",
"homePrices.trousers":"Uppläggning jeans",
"homePrices.trousersPrice":"300 kr",
"homePrices.jacketsCategory":"JACKOR & KAPPOR",
"homePrices.jackets":"Korta eller justera ärmar",
"homePrices.jacketsPrice":"från 500 kr",
"homePrices.repairsCategory":"REPARATIONER",
"homePrices.repairs":"Mindre reparation",
"homePrices.repairsPrice":"från 250 kr","booking.eyebrow":"BOKA EN KONSULTATION",
    "booking.title":"Låt oss skapa något<br>unikt tillsammans.",
    "contact.eyebrow":"KONTAKT",
    "contact.title":"Kontakta Värmland OZ",
    "contact.text":"Har du ett plagg du vill ändra, reparera eller behöver hjälp med? Kontakta oss gärna.",
    "contact.book":"Boka tid →",
    "contact.map":"Visa i kartor →",
    "contact.phoneLabel":"Telefon:",
    "contact.emailLabel":"E-post:",
    "contact.call":"Ring skräddaren",
    "contact.email":"Skicka e-post",
    "servicesPage.eyebrow":"SKRÄDDARHANTVERK I VÄRMLAND","servicesPage.title":"Våra tjänster",
    "servicesPage.intro":"Från skräddarsydda plagg till ändringar och reparationer. I vårt skrädderi i Molkom hjälper vi kunder från hela Värmland med bättre passform, lagningar och anpassningar som ger kläder ett längre liv.",
    "servicesPage.customTitle":"Plagg skapade för just dig",
    "servicesPage.customText":"Vi skapar skräddarsydda plagg utifrån dina mått, önskemål och behov. Modell, konstruktion och material väljs tillsammans och varje detalj formas för rätt känsla och passform.",
    "servicesPage.alterTitle":"Passform som känns självklar",
    "servicesPage.alterText":"Vi justerar längd, midja, benvidd, ärmar och andra detaljer för att plagget ska sitta bättre och användas längre. Arbetet anpassas efter material och konstruktion.",
    "servicesPage.repairTitle":"Förläng livet på dina favoritplagg",
    "servicesPage.repairText":"Vi lagar mindre skador, sömmar, hål och slitna detaljer med målet att bevara plaggets uttryck och funktion. Mer omfattande arbeten bedöms individuellt.",
    "servicesPage.consult":"Boka konsultation →","servicesPage.prices":"Se priser →",
    "pricePage.title":"Priser",
    "pricePage.intro":"Tydliga priser på vanliga ändringar och reparationer. För mer omfattande arbeten och skräddarsydda plagg lämnas pris efter bedömning eller konsultation.",
    "pricePage.craftEyebrow":"PERSONLIGT HANTVERK",
    "pricePage.customTitle":"Skräddarsytt",
    "pricePage.customIntro":"Vi skapar plagg efter dina önskemål, mått och behov. Priset beror på modell, konstruktion, material och arbetsomfattning.",
    "pricePage.customGarments":"Skräddarsydda plagg",
    "pricePage.afterConsult":"Pris efter konsultation",
    "pricePage.customNote":"Varje skräddarsytt plagg bedöms individuellt för att ge rätt lösning, passform och kvalitet.",
    "pricePage.dressesTitle":"Klänningar & kjolar",
    "pricePage.dressSimple":"Korta enkel klänning eller kjol",
    "pricePage.dressLining":"Korta med foder",
    "pricePage.fitAdjustment":"Passformsjustering",
    "pricePage.specialGarments":"Fest- och specialplagg",
    "pricePage.trousersTitle":"Byxor",
    "pricePage.jeansHem":"Uppläggning jeans",
    "pricePage.trousersHem":"Uppläggning vanliga byxor",
    "pricePage.waist":"Justera midja",
    "pricePage.legWidth":"Justera benvidd",
    "pricePage.otherAlterations":"Övriga ändringar",
    "pricePage.jacketsTitle":"Jackor & kappor",
    "pricePage.sleeves":"Korta eller justera ärmar",
    "pricePage.shortenLength":"Korta längd",
    "pricePage.majorFit":"Större passformsändring",
    "pricePage.replaceLining":"Byta foder",
    "pricePage.repairsTitle":"Reparationer",
    "pricePage.minorRepair":"Mindre reparation, upp till ca 1 timme",
    "pricePage.extraRepair":"Ytterligare mindre reparation vid samma inlämning",
    "pricePage.extensiveRepair":"Mer omfattande reparation",
    "pricePage.consultTitle":"Konsultation",
    "pricePage.consult10":"Kort konsultation, upp till 10 minuter",
    "pricePage.consult30":"Konsultation, upp till 30 minuter",
    "pricePage.consult60":"Utökad konsultation, upp till 60 minuter",
    "pricePage.consultNote":"Konsultationsavgiften kan avräknas vid större beställning.",
    "pricePage.infoTitle":"Bra att veta",
    "pricePage.info1":"Alla priser är inklusive moms. Normalt småmaterial och tråd ingår. Tyg, dragkedjor och specialdetaljer tillkommer.",
    "pricePage.info2":"Priset kan variera beroende på plagg, material, konstruktion och arbetsomfattning. Slutligt pris bekräftas efter bedömning.",
    "pricePage.replaceZipper":"Byta dragkedja",
    "pricePage.from400Material":"från 400 kr + material",
    "pricePage.assessmentMaterial":"Pris efter bedömning + material",
    "pricePage.afterAssessment":"Pris efter bedömning",
    "pricePage.from400":"från 400 kr",
    "pricePage.from600":"från 600 kr",
    "pricePage.price300":"300 kr",
    "pricePage.price400":"400 kr",
    "pricePage.from500":"från 500 kr",
    "pricePage.from250":"från 250 kr",
    "pricePage.plus100":"+100 kr/st",
    "pricePage.price700":"700 kr",
    "pricePage.free":"Kostnadsfri",
    "servicesPage.processEyebrow":"SÅ GÅR DET TILL","servicesPage.processTitle":"Från idé till färdigt plagg",
    "servicesPage.step1":"Bedömning","servicesPage.step1Text":"Vi går igenom plagget eller din idé och ser vad som är möjligt.",
    "servicesPage.step2":"Passform & detaljer","servicesPage.step2Text":"Vi bestämmer mått, proportioner, material och önskat resultat.",
    "servicesPage.step3":"Skräddararbetet","servicesPage.step3Text":"Arbetet utförs med fokus på konstruktion, hållbarhet och finish."
  },
  en: {
    "nav.home":"Home","nav.services":"Services","nav.prices":"Prices","nav.about":"About","nav.contact":"Contact",
    "nav.book":"Book consultation","nav.bookArrow":"Book consultation →",
    "hero.eyebrow":"BESPOKE TAILORING IN VÄRMLAND","hero.title":"CLOTHES THAT<br>FIT YOU",
    "hero.lead":"We create bespoke clothing with timeless style, craftsmanship and care – in Värmland.",
    "hero.services":"Our services","hero.values":"STYLE <b>·</b> FIT <b>·</b> QUALITY <b>·</b> MADE TO LAST",
    "service.custom":"BESPOKE","service.customText":"Unique garments created<br>for you.",
    "service.alter":"ALTERATIONS","service.alterText":"For a better fit<br>and a longer life.",
    "service.repair":"REPAIRS","service.repairText":"Give your favourite garments<br>a new life.",
    "about.eyebrow":"CRAFT BUILT ON EXPERIENCE","about.title":"Behind Värmland OZ",
"about.text":"Behind Värmland OZ is tailor Olga, with more than 20 years of experience in sewing and tailoring.<br><br>After moving from Latvia to Sweden five years ago, she explored new paths and learned new things. But the craft was always there – tailoring is her profession.<br><br>Now in Molkom, she is returning to what she knows best: creating, altering and giving new life to clothes with an eye for fit, quality and detail.",
"about.quote":"","about.services":"Read more about our services →","prices.seeAll":"See full price list →","booking.eyebrow":"BOOK A CONSULTATION",
    "booking.title":"Let us create something<br>unique together.",
    "contact.eyebrow":"CONTACT",
    "contact.title":"Contact Värmland OZ",
    "contact.text":"Do you have a garment you would like altered, repaired or need help with? Feel free to contact us.",
    "contact.book":"Book an appointment →",
    "contact.map":"View on map →",
    "contact.phoneLabel":"Phone:",
    "contact.emailLabel":"Email:",
    "contact.call":"Call the tailor",
    "contact.email":"Send email",
    "servicesPage.eyebrow":"TAILORING CRAFT IN VÄRMLAND","servicesPage.title":"Our services",
    "servicesPage.intro":"From a completely bespoke garment to the small adjustment that makes all the difference. We work with fit, quality and respect for the garment’s construction.",
    "servicesPage.customTitle":"Garments made especially for you",
    "servicesPage.customText":"We create bespoke garments based on your measurements, wishes and needs. Style, construction and materials are chosen together, and every detail is shaped for the right feel and fit.",
    "servicesPage.alterTitle":"A fit that feels natural",
    "servicesPage.alterText":"We adjust length, waist, leg width, sleeves and other details so the garment fits better and lasts longer. The work is adapted to the material and construction.",
    "servicesPage.repairTitle":"Extend the life of your favourite garments",
    "servicesPage.repairText":"We repair minor damage, seams, holes and worn details with the aim of preserving the garment’s appearance and function. More extensive work is assessed individually.",
    "servicesPage.consult":"Book consultation →","servicesPage.prices":"See prices →", "homePrices.eyebrow":"A SELECTION OF OUR PRICES",
"homePrices.title":"Care in every detail.<br>Clear pricing.",
"homePrices.intro":"Here are some of our most common services. Bespoke garments and more extensive alterations are priced after a consultation or assessment.",
"homePrices.customCategory":"BESPOKE",
"homePrices.custom":"Bespoke garments",
"homePrices.customPrice":"Price after consultation",
"homePrices.dressesCategory":"DRESSES & SKIRTS",
"homePrices.dresses":"Shorten a simple dress or skirt",
"homePrices.dressesPrice":"from SEK 400",
"homePrices.trousersCategory":"TROUSERS",
"homePrices.trousers":"Shorten jeans",
"homePrices.trousersPrice":"SEK 300",
"homePrices.jacketsCategory":"JACKETS & COATS",
"homePrices.jackets":"Shorten or adjust sleeves",
"homePrices.jacketsPrice":"from SEK 500",
"homePrices.repairsCategory":"REPAIRS",
"homePrices.repairs":"Minor repair",
"homePrices.repairsPrice":"from SEK 250",
    "pricePage.title":"Prices",
    "pricePage.intro":"Clear prices for common alterations and repairs. More extensive work and bespoke garments are priced after an assessment or consultation.",
    "pricePage.craftEyebrow":"PERSONAL CRAFTSMANSHIP",
    "pricePage.customTitle":"Bespoke",
    "pricePage.customIntro":"We create garments based on your wishes, measurements and needs. The price depends on the style, construction, materials and scope of work.",
    "pricePage.customGarments":"Bespoke garments",
    "pricePage.afterConsult":"Price after consultation",
    "pricePage.customNote":"Each bespoke garment is assessed individually to achieve the right solution, fit and quality.",
    "pricePage.dressesTitle":"Dresses & skirts",
    "pricePage.dressSimple":"Shorten a simple dress or skirt",
    "pricePage.dressLining":"Shorten with lining",
    "pricePage.fitAdjustment":"Fit adjustment",
    "pricePage.specialGarments":"Occasion & special garments",
    "pricePage.trousersTitle":"Trousers",
    "pricePage.jeansHem":"Shorten jeans",
    "pricePage.trousersHem":"Shorten regular trousers",
    "pricePage.waist":"Adjust waist",
    "pricePage.legWidth":"Adjust leg width",
    "pricePage.otherAlterations":"Other alterations",
    "pricePage.jacketsTitle":"Jackets & coats",
    "pricePage.sleeves":"Shorten or adjust sleeves",
    "pricePage.shortenLength":"Shorten length",
    "pricePage.majorFit":"Major fit alteration",
    "pricePage.replaceLining":"Replace lining",
    "pricePage.repairsTitle":"Repairs",
    "pricePage.minorRepair":"Minor repair, up to approx. 1 hour",
    "pricePage.extraRepair":"Additional minor repair at the same drop-off",
    "pricePage.extensiveRepair":"More extensive repair",
    "pricePage.consultTitle":"Consultation",
    "pricePage.consult10":"Short consultation, up to 10 minutes",
    "pricePage.consult30":"Consultation, up to 30 minutes",
    "pricePage.consult60":"Extended consultation, up to 60 minutes",
    "pricePage.consultNote":"The consultation fee may be deducted from the price of a larger order.",
    "pricePage.infoTitle":"Good to know",
    "pricePage.info1":"All prices include VAT. Standard small materials and thread are normally included. Fabric, zippers and special details are additional.",
    "pricePage.info2":"The price may vary depending on the garment, material, construction and scope of work. The final price is confirmed after assessment.",
    "pricePage.replaceZipper":"Replace zipper",
    "pricePage.from400Material":"from SEK 400 + materials",
    "pricePage.assessmentMaterial":"Price after assessment + materials",
    "pricePage.afterAssessment":"Price after assessment",
    "pricePage.from400":"from SEK 400",
    "pricePage.from600":"from SEK 600",
    "pricePage.price300":"SEK 300",
    "pricePage.price400":"SEK 400",
    "pricePage.from500":"from SEK 500",
    "pricePage.from250":"from SEK 250",
    "pricePage.plus100":"+SEK 100/item",
    "pricePage.price700":"SEK 700",
    "pricePage.free":"Free",
    "servicesPage.processEyebrow":"HOW IT WORKS","servicesPage.processTitle":"From idea to finished garment",
    "servicesPage.step1":"Assessment","servicesPage.step1Text":"We review the garment or your idea and see what is possible.",
    "servicesPage.step2":"Fit & details","servicesPage.step2Text":"We decide measurements, proportions, materials and the desired result.",
    "servicesPage.step3":"Tailoring","servicesPage.step3Text":"The work is carried out with focus on construction, durability and finish."
  },
  ru: {
    "nav.home":"Главная","nav.services":"Услуги","nav.prices":"Цены","nav.about":"О нас","nav.contact":"Контакты",
    "nav.book":"Записаться","nav.bookArrow":"Записаться на консультацию →",
    "hero.eyebrow":"ИНДИВИДУАЛЬНЫЙ ПОШИВ В ВЕРМЛАНДЕ","hero.title":"ОДЕЖДА, КОТОРАЯ<br>СИДИТ ИДЕАЛЬНО",
    "hero.lead":"Мы создаём одежду на заказ — с вневременным стилем, мастерством и вниманием к деталям, здесь, в Вермланде.",
    "hero.services":"Наши услуги","hero.values":"СТИЛЬ <b>·</b> ПОСАДКА <b>·</b> КАЧЕСТВО <b>·</b> НАДОЛГО",
    "service.custom":"ПОШИВ НА ЗАКАЗ","service.customText":"Уникальные изделия,<br>созданные для вас.",
    "service.alter":"ПОДГОНКА","service.alterText":"Лучшая посадка<br>и более долгая жизнь вещи.",
    "service.repair":"РЕМОНТ","service.repairText":"Подарите любимым вещам<br>новую жизнь.",
"about.eyebrow":"МАСТЕРСТВО, ОСНОВАННОЕ НА ОПЫТЕ","about.title":"Кто стоит за Värmland OZ",
"about.text":"За Värmland OZ стоит портной Ольга с более чем 20-летним опытом шитья и портновского дела.<br><br>Переехав пять лет назад из Латвии в Швецию, она пробовала себя в новых направлениях и училась новому. Но портновское мастерство всегда оставалось частью её жизни – это её профессия.<br><br>Теперь в Молкоме Ольга возвращается к тому, что умеет лучше всего: создавать, подгонять и давать новую жизнь одежде, уделяя особое внимание посадке, качеству и деталям.",
"about.quote":"","about.services":"Подробнее о наших услугах →",
    "prices.seeAll":"Смотреть все цены →", "homePrices.eyebrow":"НЕКОТОРЫЕ ИЗ НАШИХ ЦЕН",
"homePrices.title":"Забота в каждой детали.<br>Понятные цены.",
"homePrices.intro":"Здесь представлены некоторые из наших самых распространённых работ. Стоимость индивидуального пошива и более сложных переделок определяется после консультации или оценки.",
"homePrices.customCategory":"ИНДИВИДУАЛЬНЫЙ ПОШИВ",
"homePrices.custom":"Одежда на заказ",
"homePrices.customPrice":"Цена после консультации",
"homePrices.dressesCategory":"ПЛАТЬЯ И ЮБКИ",
"homePrices.dresses":"Укоротить простое платье или юбку",
"homePrices.dressesPrice":"от 400 кр.",
"homePrices.trousersCategory":"БРЮКИ",
"homePrices.trousers":"Укоротить джинсы",
"homePrices.trousersPrice":"300 кр.",
"homePrices.jacketsCategory":"ЖАКЕТЫ И ПАЛЬТО",
"homePrices.jackets":"Укоротить или подогнать рукава",
"homePrices.jacketsPrice":"от 500 кр.",
"homePrices.repairsCategory":"РЕМОНТ",
"homePrices.repairs":"Небольшой ремонт",
"homePrices.repairsPrice":"от 250 кр.", "booking.eyebrow":"ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ",
    "booking.title":"Давайте создадим вместе<br>что-то уникальное.",
    "contact.eyebrow":"КОНТАКТЫ",
    "contact.title":"Связаться с Värmland OZ",
    "contact.text":"Хотите переделать или отремонтировать вещь или вам нужна помощь? Свяжитесь с нами.",
    "contact.book":"Записаться →",
    "contact.map":"Показать на карте →",
    "contact.phoneLabel":"Телефон:",
    "contact.emailLabel":"Эл. почта:",
    "contact.call":"Позвонить портному",
    "contact.email":"Написать письмо",
    "servicesPage.eyebrow":"ПОРТНОВСКОЕ МАСТЕРСТВО В ВЕРМЛАНДЕ","servicesPage.title":"Наши услуги",
    "servicesPage.intro":"От полностью индивидуального пошива до небольшой корректировки, которая меняет всё. Мы работаем с посадкой, качеством и уважением к конструкции изделия.",
    "servicesPage.customTitle":"Одежда, созданная именно для вас",
    "servicesPage.customText":"Мы создаём изделия на заказ по вашим меркам, пожеланиям и потребностям. Модель, конструкцию и материалы выбираем вместе, а каждую деталь формируем ради правильной посадки и ощущения.",
    "servicesPage.alterTitle":"Посадка, которая выглядит естественно",
    "servicesPage.alterText":"Мы корректируем длину, талию, ширину брюк, рукава и другие детали, чтобы вещь сидела лучше и служила дольше. Работа учитывает материал и конструкцию.",
    "servicesPage.repairTitle":"Продлите жизнь любимым вещам",
    "servicesPage.repairText":"Мы ремонтируем небольшие повреждения, швы, отверстия и изношенные детали, стараясь сохранить внешний вид и функцию изделия. Более сложные работы оцениваются индивидуально.",
    "servicesPage.consult":"Записаться на консультацию →","servicesPage.prices":"Смотреть цены →",
    "pricePage.title":"Цены",
    "pricePage.intro":"Понятные цены на распространённые переделки и ремонт. Стоимость более сложных работ и индивидуального пошива определяется после оценки или консультации.",
    "pricePage.craftEyebrow":"ИНДИВИДУАЛЬНОЕ МАСТЕРСТВО",
    "pricePage.customTitle":"Индивидуальный пошив",
    "pricePage.customIntro":"Мы создаём одежду с учётом ваших пожеланий, мерок и потребностей. Цена зависит от модели, конструкции, материалов и объёма работы.",
    "pricePage.customGarments":"Одежда на заказ",
    "pricePage.afterConsult":"Цена после консультации",
    "pricePage.customNote":"Каждое изделие на заказ оценивается индивидуально, чтобы подобрать правильное решение и обеспечить хорошую посадку и качество.",
    "pricePage.dressesTitle":"Платья и юбки",
    "pricePage.dressSimple":"Укоротить простое платье или юбку",
    "pricePage.dressLining":"Укоротить изделие с подкладкой",
    "pricePage.fitAdjustment":"Корректировка посадки",
    "pricePage.specialGarments":"Нарядные и специальные изделия",
    "pricePage.trousersTitle":"Брюки",
    "pricePage.jeansHem":"Укоротить джинсы",
    "pricePage.trousersHem":"Укоротить обычные брюки",
    "pricePage.waist":"Скорректировать талию",
    "pricePage.legWidth":"Скорректировать ширину брючин",
    "pricePage.otherAlterations":"Другие переделки",
    "pricePage.jacketsTitle":"Жакеты и пальто",
    "pricePage.sleeves":"Укоротить или скорректировать рукава",
    "pricePage.shortenLength":"Укоротить длину",
    "pricePage.majorFit":"Сложная корректировка посадки",
    "pricePage.replaceLining":"Заменить подкладку",
    "pricePage.repairsTitle":"Ремонт",
    "pricePage.minorRepair":"Небольшой ремонт, до примерно 1 часа",
    "pricePage.extraRepair":"Дополнительный небольшой ремонт при той же сдаче",
    "pricePage.extensiveRepair":"Более сложный ремонт",
    "pricePage.consultTitle":"Консультация",
    "pricePage.consult10":"Короткая консультация, до 10 минут",
    "pricePage.consult30":"Консультация, до 30 минут",
    "pricePage.consult60":"Расширенная консультация, до 60 минут",
    "pricePage.consultNote":"Стоимость консультации может быть вычтена из цены при более крупном заказе.",
    "pricePage.infoTitle":"Полезно знать",
    "pricePage.info1":"Все цены включают НДС. Обычные мелкие материалы и нитки, как правило, включены. Ткань, молнии и специальные детали оплачиваются дополнительно.",
    "pricePage.info2":"Цена может меняться в зависимости от изделия, материала, конструкции и объёма работы. Окончательная цена подтверждается после оценки.",
    "pricePage.replaceZipper":"Заменить молнию",
    "pricePage.from400Material":"от 400 кр. + материалы",
    "pricePage.assessmentMaterial":"Цена после оценки + материалы",
    "pricePage.afterAssessment":"Цена после оценки",
    "pricePage.from400":"от 400 кр.",
    "pricePage.from600":"от 600 кр.",
    "pricePage.price300":"300 кр.",
    "pricePage.price400":"400 кр.",
    "pricePage.from500":"от 500 кр.",
    "pricePage.from250":"от 250 кр.",
    "pricePage.plus100":"+100 кр./шт.",
    "pricePage.price700":"700 кр.",
    "pricePage.free":"Бесплатно",
    "servicesPage.processEyebrow":"КАК ЭТО ПРОИСХОДИТ","servicesPage.processTitle":"От идеи до готового изделия",
    "servicesPage.step1":"Оценка","servicesPage.step1Text":"Мы рассматриваем изделие или вашу идею и определяем возможные решения.",
    "servicesPage.step2":"Посадка и детали","servicesPage.step2Text":"Определяем мерки, пропорции, материалы и желаемый результат.",
    "servicesPage.step3":"Работа портного","servicesPage.step3Text":"Работа выполняется с вниманием к конструкции, долговечности и отделке."
  }
};

const languageMeta = {
  sv:{code:"SV",flag:"assets/icons/flag-se.svg",label:"Svenska"},
  en:{code:"EN",flag:"assets/icons/flag-gb.svg",label:"English"},
  ru:{code:"RU",flag:"assets/icons/flag-ru.svg",label:"Русский"}
};

function applyLanguage(lang){
  if(!translations[lang]) lang="sv";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const value = translations[lang][el.dataset.i18n];
    if(value !== undefined) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el=>{
    const value = translations[lang][el.dataset.i18nHtml];
    if(value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll(".language-switcher").forEach(sw=>{
    const meta=languageMeta[lang];
    const flag=sw.querySelector(".current-flag");
    const code=sw.querySelector(".current-lang");
    if(flag){flag.src=meta.flag;flag.alt=meta.label}
    if(code) code.textContent=meta.code;
    sw.querySelectorAll("[data-lang]").forEach(btn=>btn.classList.toggle("active",btn.dataset.lang===lang));
  });
  localStorage.setItem("oz-language",lang);
}

document.querySelectorAll(".language-switcher").forEach(sw=>{
  const trigger=sw.querySelector(".language");
  const panel=sw.querySelector(".language-menu");
  trigger?.addEventListener("click",e=>{
    e.stopPropagation();
    const opening=panel.hidden;
    document.querySelectorAll(".language-menu").forEach(p=>p.hidden=true);
    document.querySelectorAll(".language").forEach(b=>b.setAttribute("aria-expanded","false"));
    panel.hidden=!opening;
    trigger.setAttribute("aria-expanded",String(opening));
  });
  panel?.querySelectorAll("[data-lang]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      applyLanguage(btn.dataset.lang);
      panel.hidden=true;
      trigger.setAttribute("aria-expanded","false");
    });
  });
});
document.addEventListener("click",()=>{
  document.querySelectorAll(".language-menu").forEach(p=>p.hidden=true);
  document.querySelectorAll(".language").forEach(b=>b.setAttribute("aria-expanded","false"));
});

applyLanguage(localStorage.getItem("oz-language") || "sv");
