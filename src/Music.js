import { useState, useEffect } from 'react';




function Music(props) {
  const [islaoding, setislaoding] = useState(false)
  const [music, setmusic] = useState([]);

  useEffect(() => {
    fetch('https://robo-music-api.onrender.com/music/my-api')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setislaoding(true)
        setmusic(data);
        // setLoading(false);
      })
      .catch(error => {
        console.log(error);
        // setError(error);
        // setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1 className='app-h1'>Music List</h1>
      <div className='big-card'>
        {!islaoding ? <div className="spinner-grow loading " role="status">
          <span className="visually-hidden">Loading...</span>
        </div> : music.map((track, index) => (
          <div className='card' key={index}>
            <div className='card-img'>
              <img src={track.songImage} alt="" />
            </div>
            <h1>{track.artistName}</h1>
            <p>{track.songTitle}</p>
            <p>{track.albumName}</p>
            <p>{track.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );



}
export default Music