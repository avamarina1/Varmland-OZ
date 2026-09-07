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
    "about.eyebrow":"HANTVERK I VARJE DETALJ","about.title":"Mer än bara kläder",
    "about.text":"Klassiska plagg. Modern passform.<br>Skapade för att användas – länge.",
    "about.quote":"”Bra kläder förändrar hur du känner dig.”","about.services":"Läs mer om våra tjänster →",
    "prices.seeAll":"Se hela prislistan →","booking.eyebrow":"BOKA EN KONSULTATION",
    "booking.title":"Låt oss skapa något<br>unikt tillsammans.",
    "servicesPage.eyebrow":"SKRÄDDARHANTVERK I VÄRMLAND","servicesPage.title":"Våra tjänster",
    "servicesPage.intro":"Från ett helt skräddarsytt plagg till den lilla justeringen som gör stor skillnad. Vi arbetar med passform, kvalitet och respekt för plaggets konstruktion.",
    "servicesPage.customTitle":"Plagg skapade för just dig",
    "servicesPage.customText":"Vi skapar skräddarsydda plagg utifrån dina mått, önskemål och behov. Modell, konstruktion och material väljs tillsammans och varje detalj formas för rätt känsla och passform.",
    "servicesPage.alterTitle":"Passform som känns självklar",
    "servicesPage.alterText":"Vi justerar längd, midja, benvidd, ärmar och andra detaljer för att plagget ska sitta bättre och användas längre. Arbetet anpassas efter material och konstruktion.",
    "servicesPage.repairTitle":"Förläng livet på dina favoritplagg",
    "servicesPage.repairText":"Vi lagar mindre skador, sömmar, hål och slitna detaljer med målet att bevara plaggets uttryck och funktion. Mer omfattande arbeten bedöms individuellt.",
    "servicesPage.consult":"Boka konsultation →","servicesPage.prices":"Se priser →",
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
    "about.eyebrow":"CRAFT IN EVERY DETAIL","about.title":"More than clothing",
    "about.text":"Classic garments. Modern fit.<br>Created to be worn – for years.",
    "about.quote":"“Good clothes change how you feel.”","about.services":"Read more about our services →",
    "prices.seeAll":"See full price list →","booking.eyebrow":"BOOK A CONSULTATION",
    "booking.title":"Let us create something<br>unique together.",
    "servicesPage.eyebrow":"TAILORING CRAFT IN VÄRMLAND","servicesPage.title":"Our services",
    "servicesPage.intro":"From a completely bespoke garment to the small adjustment that makes all the difference. We work with fit, quality and respect for the garment’s construction.",
    "servicesPage.customTitle":"Garments made especially for you",
    "servicesPage.customText":"We create bespoke garments based on your measurements, wishes and needs. Style, construction and materials are chosen together, and every detail is shaped for the right feel and fit.",
    "servicesPage.alterTitle":"A fit that feels natural",
    "servicesPage.alterText":"We adjust length, waist, leg width, sleeves and other details so the garment fits better and lasts longer. The work is adapted to the material and construction.",
    "servicesPage.repairTitle":"Extend the life of your favourite garments",
    "servicesPage.repairText":"We repair minor damage, seams, holes and worn details with the aim of preserving the garment’s appearance and function. More extensive work is assessed individually.",
    "servicesPage.consult":"Book consultation →","servicesPage.prices":"See prices →",
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
    "about.eyebrow":"МАСТЕРСТВО В КАЖДОЙ ДЕТАЛИ","about.title":"Больше, чем просто одежда",
    "about.text":"Классические вещи. Современная посадка.<br>Созданы, чтобы носить их долго.",
    "about.quote":"«Хорошая одежда меняет то, как вы себя ощущаете.»","about.services":"Подробнее о наших услугах →",
    "prices.seeAll":"Смотреть весь прайс →","booking.eyebrow":"ЗАПИСАТЬСЯ НА КОНСУЛЬТАЦИЮ",
    "booking.title":"Давайте создадим вместе<br>что-то уникальное.",
    "servicesPage.eyebrow":"ПОРТНОВСКОЕ МАСТЕРСТВО В ВЕРМЛАНДЕ","servicesPage.title":"Наши услуги",
    "servicesPage.intro":"От полностью индивидуального пошива до небольшой корректировки, которая меняет всё. Мы работаем с посадкой, качеством и уважением к конструкции изделия.",
    "servicesPage.customTitle":"Одежда, созданная именно для вас",
    "servicesPage.customText":"Мы создаём изделия на заказ по вашим меркам, пожеланиям и потребностям. Модель, конструкцию и материалы выбираем вместе, а каждую деталь формируем ради правильной посадки и ощущения.",
    "servicesPage.alterTitle":"Посадка, которая выглядит естественно",
    "servicesPage.alterText":"Мы корректируем длину, талию, ширину брюк, рукава и другие детали, чтобы вещь сидела лучше и служила дольше. Работа учитывает материал и конструкцию.",
    "servicesPage.repairTitle":"Продлите жизнь любимым вещам",
    "servicesPage.repairText":"Мы ремонтируем небольшие повреждения, швы, отверстия и изношенные детали, стараясь сохранить внешний вид и функцию изделия. Более сложные работы оцениваются индивидуально.",
    "servicesPage.consult":"Записаться на консультацию →","servicesPage.prices":"Смотреть цены →",
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
