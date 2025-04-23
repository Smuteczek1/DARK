
const disruptionLevels = {
    null: {
        title: "⚪ Null – Brak zauważalnych zakłóceń",
        description: "\"Cisza to tylko wdech przed krzykiem.\"\n\nObiekt niemal idealnie wtapia się w otoczenie. Nie zmienia rzeczywistości, nie wpływa na bieg wydarzeń. Jest... niemal obojętny. Ale milczenie to też forma ekspresji. Obiekt klasy Null może być snem – lub jego końcem. Często bagatelizowany. Niesłusznie."
    },
    verdant: {
        title: "🟢 Verdant – Minimalne zakłócenia",
        description: "\"To, co organiczne, zawsze pierwsze odczuwa zmianę.\"\n\nZakłócenia występują w obrębie lokalnym, subtelne i często niezauważalne bez precyzyjnych pomiarów. Przypływ niepokoju wśród zwierząt. Milknące owady. Zgnilizna tam, gdzie przed chwilą kwitło życie. Obiekt w tej klasie potrafi zmienić rytm serca przyrody... zanim zauważy to człowiek."
    },
    azure: {
        title: "🔵 Azure – Lokalnie ograniczone zakłócenia",
        description: "\"Miasto śni o czymś, co nigdy się nie wydarzyło – a jednak boli.\"\n\nObiekt generuje zakłócenia zauważalne na poziomie miejskim. Znikające dzielnice, ludzie tracący wspomnienia jednej nocy, zbiorowe halucynacje. Czasem to tylko echo... ale echo czego? Azure oznacza, że obiekt zmienia nie tylko przestrzeń – zmienia percepcję."
    },
    amber: {
        title: "🟡 Amber – Zakłócenia na poziomie miejskim",
        description: "\"Światło migocze. Wspomnienia się kruszą. Ludzie zaczynają mówić innymi językami.\"\n\nZakłócenia stają się zbyt duże, by je zignorować. Wpływ na populacje miejskie, struktury infrastrukturalne i rzeczywistość lokalną. Budynki zmieniają geometrię, czas płynie nieliniowo, a światło zaczyna zachowywać się irracjonalnie. Obiekt klasy Amber nie jest już ukryty. On manifestuje się."
    },
    tangerine: {
        title: "🟠 Tangerine – Zakłócenia na skalę krajową",
        description: "\"Granice państw przestają mieć znaczenie, gdy to, co nienazwane, wybiera sobie terytorium.\"\n\nWpływ obiektu przekracza granice geograficzne. Media zaczynają szukać odpowiedzi, które już dawno zostały spalone. Populacja doświadcza masowych zmian – języka, kultury, biologii. Czasem nawet samego postrzegania śmierci. Tangerine to poziom, przy którym państwa upadają, a cywilizacja zaczyna pękać."
    },
    crimson: {
        title: "🔴 Crimson – Poważne zakłócenia",
        description: "\"Niebo zmienia kolor. Ludzie przestają umierać – albo przestają rodzić się.\"\n\nZakłócenia stają się fundamentalne. Prawa fizyki zawodzą. Czas traci kierunek. Całe społeczeństwa zostają... zastąpione. Obiekt Crimson redefiniuje podstawowe zasady egzystencji i robi to z milczącą precyzją. Od tego poziomu nie ma powrotu do \"normalności\". To słowo przestaje mieć sens."
    },
    obsidian: {
        title: "⚫ Obsidian – Ekstremalne zakłócenia",
        description: "\"Światło nie odbija się już od powierzchni. Nic nie chce być widziane.\"\n\nObiekt deformuje rzeczywistość w sposób trwały i agresywny. Naruszenia struktury przestrzeni, załamania światła, mutacje konceptualne. Jego obecność powoduje, że ludzie zaczynają kwestionować własną egzystencję. Obsidian to koniec narracji, ale nie koniec istnienia. To zakwestionowanie logiki samej świadomości."
    },
    navy: {
        title: "🔵 Navy – Globalne zakłócenia",
        description: "\"Cała planeta śni jeden sen, z którego nie da się obudzić.\"\n\nTo nie jest problem lokalny. To nie jest problem regionalny. To koniec świata, tylko nikt jeszcze nie zauważył. Morza parują, księżyc się rozmywa, a historia zmienia swój bieg każdej nocy. Navy to status, przy którym rzeczywistość przestaje być wspólna dla wszystkich."
    },
    violet: {
        title: "🟣 Violet – Zakłócenia niepojęte",
        description: "\"Nie da się tego opisać. Każde słowo staje się kłamstwem.\"\n\nZakłócenia przekraczają możliwości ludzkiego pojmowania. Czas, przestrzeń, świadomość i znaczenie przestają istnieć w formach zrozumiałych dla homo sapiens. Obiekt Violet nie zakłóca rzeczywistości – on tworzy alternatywę. A potem ją porzuca."
    }
};

const riskLevels = {
    null: {
        title: "⚪ Null – Brak zagrożenia",
        description: "\"Obserwuje. Nic więcej.\"\n\nObiekt całkowicie pasywny. Brak jakiejkolwiek interakcji czy agresji. Można badać go bez większych obaw – o ile się nie myli..."
    },
    caution: {
        title: "🟢 Caution – Niskie zagrożenie",
        description: "\"Dotyka, ale nie gryzie. Jeszcze.\"\n\nObiekt posiada właściwości potencjalnie niebezpieczne, ale tylko w określonych warunkach. Zazwyczaj bezpieczny przy zachowaniu podstawowych protokołów. Problem pojawia się, gdy \"zasady\" się zmieniają."
    },
    alert: {
        title: "🔵 Alert – Umiarkowane zagrożenie",
        description: "\"Ignoruj go – i zginiesz przez nieuwagę.\"\n\nObiekt może być niebezpieczny, jeśli zostanie źle zrozumiany lub sprowokowany. Niektóre jego efekty są nieoczywiste – psychologiczne, memetyczne, czasem semantyczne. Wymaga stałego nadzoru."
    },
    warning: {
        title: "🟡 Warning – Znaczące zagrożenie",
        description: "\"To nie bestia. To coś, co rozumie, że jesteś.\"\n\nAktywny, trudny do przewidzenia. Może celowo oddziaływać na otoczenie. Wchodzi w interakcje, które przekraczają znane modele myślenia. Obiekt tej klasy działa – i nie zawsze potrzebuje powodu."
    },
    danger: {
        title: "🟠 Danger – Wysokie zagrożenie",
        description: "\"Nie patrz w oczy. One nie są jego.\"\n\nZdolny do natychmiastowej eskalacji zagrożenia. Obiekt może zabić, zmanipulować lub przejąć kontrolę. Wymaga zaawansowanych protokołów zabezpieczeń. Każda interakcja musi być przemyślana – i uprzednio zatwierdzona przez Komórkę Theta."
    },
    critical: {
        title: "🔴 Critical – Ekstremalne zagrożenie",
        description: "\"Wymazuje istnienie z kronik i wspomnień. A potem przychodzi po więcej.\"\n\nObiekt o potencjale apokaliptycznym. Może unicestwić znaczne obszary, zainfekować ludzką świadomość lub zmienić trajektorię całych cywilizacji. Nie istnieje bezpieczna odległość. Każdy kontakt to ryzyko totalnej eliminacji."
    },
    obsidian: {
        title: "⚫ Obsidian – Katastrofalne zagrożenie",
        description: "\"To nie coś, z czym walczysz. To coś, co kończy opowieść.\"\n\nKażda próba interakcji kończy się porażką. Obiekt niemożliwy do zabezpieczenia. Samo jego istnienie destabilizuje rzeczywistość. Obsidian to status nadawany wtedy, gdy jedynym rozwiązaniem jest zapomnienie."
    },
    abyss: {
        title: "🟣 Abyss – Nieznane zagrożenie",
        description: "\"Zadajesz pytanie. Dostajesz ciszę. I już nie jesteś sobą.\"\n\nNie wiadomo, czym jest. Nie wiadomo, co robi. Nie wiadomo, czy to w ogóle jest. Każda próba klasyfikacji kończy się paranoją, zniknięciem lub czymś gorszym. Abyss to ryzyko istnienia czegoś, co nie powinno mieć nazwy."
    }
};

const showLevelInfo = (title, description) => {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.style.position = 'fixed';
  modal.style.top = '0';
  modal.style.left = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
  modal.style.display = 'flex';
  modal.style.justifyContent = 'center';
  modal.style.alignItems = 'center';
  modal.style.zIndex = '1000';

  const content = document.createElement('div');
  content.className = 'modal-content';
  content.style.width = '90%';
  content.style.maxWidth = '600px';
  content.style.backgroundColor = 'rgba(0, 0, 0, 0.98)';
  content.style.border = '1px solid #00ff9d';
  content.style.boxShadow = '0 0 20px rgba(0, 255, 157, 0.3)';
  content.style.padding = '20px';
  content.style.color = '#00ff9d';
  content.style.fontFamily = 'Courier New, monospace';
  content.style.position = 'relative';

  const titleElement = document.createElement('h2');
  titleElement.textContent = title;
  titleElement.style.marginBottom = '20px';
  titleElement.style.borderBottom = '1px solid #00ff9d';
  titleElement.style.paddingBottom = '10px';

  const descriptionElement = document.createElement('div');
  descriptionElement.textContent = description;
  descriptionElement.style.whiteSpace = 'pre-wrap';
  descriptionElement.style.lineHeight = '1.6';

  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.style.position = 'absolute';
  closeButton.style.top = '10px';
  closeButton.style.right = '10px';
  closeButton.style.background = 'none';
  closeButton.style.border = '1px solid #00ff9d';
  closeButton.style.color = '#00ff9d';
  closeButton.style.padding = '5px 15px';
  closeButton.style.cursor = 'pointer';

  closeButton.onclick = () => document.body.removeChild(modal);
  modal.onclick = (e) => {
    if (e.target === modal) document.body.removeChild(modal);
  };

  content.appendChild(titleElement);
  content.appendChild(descriptionElement);
  content.appendChild(closeButton);
  modal.appendChild(content);
  document.body.appendChild(modal);
};

// Event listeners for disruption levels
document.querySelectorAll('.level-button[data-level]').forEach(button => {
  button.addEventListener('click', () => {
    const level = button.getAttribute('data-level');
    const info = disruptionLevels[level];
    if (info) {
      showLevelInfo(info.title, info.description);
    }
  });
});

// Event listeners for risk levels
document.querySelectorAll('.level-button[data-risk]').forEach(button => {
  button.addEventListener('click', () => {
    const risk = button.getAttribute('data-risk');
    const info = riskLevels[risk];
    if (info) {
      showLevelInfo(info.title, info.description);
    }
  });
});
