## Tecnologie Utilizzate

### Frontend
- **React**: Libreria principale per la creazione dell'interfaccia utente.
- **React Router**: Per la gestione della navigazione tra le pagine.
- **Bootstrap**: Per il design responsivo e l'utilizzo di componenti predefiniti.
- **Axios**: Per effettuare chiamate API e gestire i dati dinamici.
- **Font Awesome**: Per l'integrazione di icone moderne e interattive.
- **CSS Personalizzato**: Per personalizzare il design e aggiungere effetti visivi avanzati.

### Backend
- **JSON Server** (in locale): Simulazione di un backend per la gestione dei dati dei prodotti.

---

## Funzionalità Principali

### 1. Header
- Barra di navigazione con link alle pagine principali.
- Icone per wishlist e carrello con badge dinamici che mostrano il numero di elementi.
- Logo interattivo con effetto hover.

### 2. Visualizzazione Prodotti
- **Modalità Griglia**: Mostra i prodotti in un layout a griglia.
- **Modalità Lista**: Mostra i prodotti in un layout a lista.
- **Card Verticali**: Utilizzate per la visualizzazione in griglia.
- **Card Orizzontali**: Utilizzate per la visualizzazione dettagliata di un singolo prodotto.

### 3. Filtri
- Filtri dinamici per categoria, prezzo, genere, stagione, ecc.

### 4. Wishlist
- Aggiunta di prodotti alla wishlist con un clic sull'icona del cuore.
- Gestione della wishlist tramite stato globale.

### 5. Carrello
- Aggiunta di prodotti al carrello con un clic sull'icona del carrello.
- Gestione del carrello tramite stato globale.

### 6. Prodotti Correlati
- Mostra prodotti simili in base al brand del prodotto visualizzato.

### 7. Categorie
- Sezione dedicata alle categorie principali (Uomo, Donna, Estate, Inverno) con immagini e pulsanti interattivi.

### 8. Design Moderno
- Utilizzo di gradienti, colori fluo e metallici per un look accattivante.
- Effetti hover su bottoni, icone e immagini.

---

## Struttura del Progetto

### Schema delle Cartelle
```plaintext
kick-shop/
├── Frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── assets/
│   │   │   ├── img/
│   │   │   │   ├── logo-kick-shop.png
│   │   │   │   ├── category/
│   │   │   │   │   ├── manCategory.jpg
│   │   │   │   │   ├── womanCategory.jpg
│   │   │   │   │   ├── summerCategory.jpg
│   │   │   │   │   └── winterCategory.jpg
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── VerticalProductCard.jsx
│   │   │   ├── HorizontalProductCard.jsx
│   │   │   ├── CategorySection.jsx
│   │   │   ├── FilterSection.jsx
│   │   │   └── Search.jsx
│   │   ├── context/
│   │   │   └── GlobalContext.jsx
│   │   ├── pages/
│   │   │   ├── BallonPage.jsx
│   │   │   ├── ProductPage.jsx
│   │   │   └── CheckoutPage.jsx
│   │   ├── css/
│   │   │   └── index.css
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
│   └── README.md
```

---

## Installazione

### Prerequisiti
- Node.js (versione 14 o superiore)
- npm o yarn

### Passaggi
1. Clona il repository:
   ```bash
   git clone https://github.com/tuo-username/kick-shop.git
   cd kick-shop/Frontend
   ```

2. Installa le dipendenze:
   ```bash
   npm install
   ```

3. Avvia il server JSON (per simulare il backend):
   ```bash
   npx json-server --watch db.json --port 3000
   ```

4. Avvia l'applicazione React:
   ```bash
   npm start
   ```

5. Apri il browser e visita:
   ```
   http://localhost:3000
   ```

---

### Installazione di Pacchetti Specifici

Se hai bisogno di installare pacchetti specifici, usa i seguenti comandi:

- **React Router**:
   ```bash
   npm install react-router-dom
   ```

- **Bootstrap**:
   ```bash
   npm install bootstrap
   ```

- **Font Awesome**:
   ```bash
   npm install @fortawesome/fontawesome-free
   ```

- **Axios**:
   ```bash
   npm install axios
   ```

- **JSON Server** (per simulare il backend):
   ```bash
   npm install json-server --save-dev
   ```

---

## Logica del Progetto

### 1. Stato Globale
- Gestito tramite `GlobalContext`.
- Contiene:
  - **`viewMode`**: Modalità di visualizzazione (griglia o lista).
  - **`cart`**: Stato del carrello.
  - **`wish`**: Stato della wishlist.

### 2. Chiamate API
- Effettuate tramite Axios.
- **Endpoint principali**:
  - `GET /products`: Recupera tutti i prodotti.
  - `GET /products/:slug`: Recupera un singolo prodotto.

### 3. Componenti Riutilizzabili
- **Card Verticali e Orizzontali**: Utilizzate per visualizzare i prodotti in diverse modalità.
- **Sezioni Categoria e Filtri**: Modulari e facilmente estendibili.

---

## Struttura dei Dati

### Esempio di Prodotto
```json
{
  "id": 1,
  "name": "Pallone da Calcio",
  "description": "Un pallone da calcio di alta qualità.",
  "price": 29.99,
  "gender": "Unisex",
  "season": "Estate",
  "brand": "Nike",
  "sizes": ["S", "M", "L"],
  "images": [
    { "id": 1, "image_url": "https://example.com/image1.jpg" },
    { "id": 2, "image_url": "https://example.com/image2.jpg" }
  ],
  "availability": 10,
  "slug": "pallone-da-calcio"
}
```

---

## Stile e Design
- **CSS Personalizzato**: File `Frontend/src/css/index.css` per personalizzare lo stile.
- **Bootstrap**: Utilizzato per layout e componenti predefiniti.
- **Font Awesome**: Per icone interattive.

---

## Possibili Miglioramenti
- Implementazione di un backend reale con autenticazione.
- Aggiunta di una pagina di checkout completa.
- Miglioramento della gestione degli errori nelle chiamate API.
- Ottimizzazione per dispositivi mobili.

---

## Autore
Progetto sviluppato da **AleFioretti**. Per domande o suggerimenti, contattami su [GitHub](https://github.com/tuo-username).