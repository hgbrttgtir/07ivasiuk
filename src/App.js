import React, { useState } from 'react';
import './App.css';

function App() {
  const [likedSongs, setLikedSongs] = useState({
    'Червона рута': false,
    'Водограй': false,
    'Я піду в далекі гори': false,
    'Балада про мальви': false,
    'Два перстені': false,
  });

  const [theme, setTheme] = useState('light');
  const [favoriteSongs, setFavoriteSongs] = useState([]);
  const [newSong, setNewSong] = useState('');
  const [showFact, setShowFact] = useState(false);

  const toggleLike = (song) => {
    setLikedSongs({ ...likedSongs, [song]: !likedSongs[song] });
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleAddSong = () => {
    if (newSong.trim() !== '') {
      setFavoriteSongs([...favoriteSongs, newSong.trim()]);
      setNewSong('');
    }
  };

  const facts = [
    '🎶 Пісня "Червона рута" була написана Івасюком у 1970 році і стала символом української естради.',
    '🎼 Володимир Івасюк був автором понад 100 пісень, серед яких багато стали народними хітами.',
    '🎻 Івасюк поєднував український фольклор з сучасною естрадою, що зробило його творчість унікальною.',
    '🎤 Пісня "Я піду в далекі гори" була написана, коли композитору було лише 19 років.',
    '📚 Івасюк був не лише музикантом, а й лікарем за освітою.'
  ];
  const randomFact = facts[Math.floor(Math.random() * facts.length)];

  return (
    <div className={`app ${theme}`}>
      <h1>Володимир Івасюк – геній української естради</h1>
      <img src="/івасюк.jpg" alt="Володимир Івасюк" className="photo" />

      <section>
        <h2>Відомі пісні</h2>
        {Object.keys(likedSongs).map((song) => (
          <div key={song} className="song-item">
            {song}
            <button onClick={() => toggleLike(song)}>
              {likedSongs[song] ? '❤️' : '🤍'} 
            </button>
          </div>
        ))}
      </section>

      <button onClick={toggleTheme} className="toggle-theme">
        🎵 Перемкнути стиль ({theme === 'light' ? 'День' : 'Ніч'})
      </button>

      <section>
        <h2>Список улюблених пісень</h2>
        <input
          type="text"
          value={newSong}
          onChange={(e) => setNewSong(e.target.value)}
          placeholder="Додайте улюблену пісню"
        />
        <button onClick={handleAddSong}>Додати</button>
        <ul>
          {favoriteSongs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </section>

      <section>
        <button onClick={() => setShowFact(!showFact)}>
          {showFact ? 'Приховати цікавий факт' : 'Показати цікавий факт'}
        </button>
        {showFact && (
          <p className="fact">{randomFact}</p>
        )}
      </section>
    </div>
  );
}

export default App;
