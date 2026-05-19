# phrase.book

> **Słowa na każdą okazję** — gotowe zwroty po polsku i angielsku na codzienne sytuacje.

---

## O projekcie

**phrase.book** to aplikacja stworzona z myślą o osobach uczących się angielskiego lub podróżujących za granicę. Zamiast szukać tłumaczeń w słowniku, użytkownik wybiera kategorię odpowiadającą sytuacji (np. restauracja, lotnisko, wizyta u lekarza) i od razu widzi gotowe, naturalne zwroty — po polsku i po angielsku.

Każdy zwrot można skopiować jednym kliknięciem, co czyni aplikację wygodną zarówno na komputerze, jak i na telefonie.

---

## Zrzuty ekranu

### Strona główna

![Strona główna](public/Zrzut%20ekranu%202026-05-19%20o%2017.41.36.png)

### Widok kategorii — lista zwrotów

![Lista zwrotów](public/Zrzut%20ekranu%202026-05-19%20o%2017.41.47.png)

---

## Funkcje

- **21 kategorii** życiowych sytuacji (restauracja, lotnisko, hotel, lekarz, miasto i inne)
- **680+ zwrotów** PL · EN gotowych do użycia
- **Kopiowanie jednym kliknięciem** — zwrot trafia od razu do schowka
- **Wyszukiwarka** — filtrowanie kategorii oraz zwrotów w czasie rzeczywistym
- **Responsywność** — działa płynnie na telefonie i komputerze
- **Animacje przy ładowaniu** — elementy wlatują na stronę przy pierwszym wejściu i przy scrollowaniu

---

## Technologie

| Technologia | Zastosowanie |
|---|---|
| [React 18](https://react.dev/) | Budowa interfejsu, zarządzanie stanem komponentów |
| [Vite 5](https://vitejs.dev/) | Bundler, serwer deweloperski, build produkcyjny |
| CSS Modules | Stylowanie komponentów z lokalnym zakresem klas |
| CSS Custom Properties | Globalny system tokenów designu (kolory, cienie, typografia) |
| IntersectionObserver API | Animacje kafelków wyzwalane przez scroll |
| Clipboard API | Kopiowanie zwrotów do schowka |
| Google Fonts — [Syne](https://fonts.google.com/specimen/Syne) + [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) | Typografia |

---

## Uruchomienie lokalne

```bash
# Instalacja zależności
npm install

# Tryb deweloperski
npm run dev

# Build produkcyjny
npm run build

# Podgląd buildu
npm run preview
```

---

## Struktura projektu

```
src/
├── components/
│   ├── HomeView        # Strona główna z hero, wyszukiwarką i gridem kategorii
│   ├── CategoryTile    # Pojedynczy kafelek kategorii (animacja chaos + scroll reveal)
│   ├── CategoryGrid    # Siatka kafelków
│   ├── PhraseView      # Widok listy zwrotów dla wybranej kategorii
│   ├── PhraseRow       # Pojedynczy wiersz ze zwrotem PL/EN + kopiowanie
│   ├── PhraseList      # Lista wszystkich zwrotów
│   ├── Hero            # Nagłówek strony głównej
│   ├── SearchInput     # Pole wyszukiwania
│   ├── Navbar          # Nawigacja górna
│   └── Toast           # Powiadomienie po skopiowaniu zwrotu
├── data/
│   └── categories.js   # Baza wszystkich kategorii i zwrotów
├── hooks/
│   └── usePhrasebook   # Hook zarządzający stanem aplikacji
└── styles/
    └── global.css      # Tokeny designu, reset, globalne animacje
```
