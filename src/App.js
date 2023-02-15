
import './App.css';
// import { gsap } from 'gsap';
import Logos1 from './image/Logos1.jpg';
import Logos2 from './image/Logos2.jpg';
import topime from './image/topime.png';
import test from './image/test.png';
import certificate from './image/certificate.jpg';
import smile from './image/smile.jpg'

function App() {
const arrText =['И','з','д','е','л','и','я', 'р','у','ч','н','о','й', 'р','а','б','о','т','ы', 'и','з', 'к','о','э','и']
const arrT =['Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты.Что рекламных пор заманивший выйти,']

  return (
    <div className="App">
          
        <header className="App-header">
          <img src={topime} alt="topime" className='topime' />
          <div className='hed-top'>
            <div className='logo-name'>
              <div className='photo-logo'>
                <div className='photo-logo1' >
                  <img src={Logos1}  alt='ghj'/>
                </div>
                <div className='photo-logo2'>
                  <img src={Logos2}  alt='ghj'/>
                </div>
              </div>
              <p>TrailBear </p>
            </div>
          
            <ul>
              <li><a href='#'>Галерея</a></li>
              <li><a href='#'>Отзывы</a></li>
              <li><a href='#'>Контакты</a></li>
            </ul>
          </div>        
          <p className='text-heder'>Издеоия ручной работы <br/> из кожи</p>
        </header>
        <main>
          <div className='logo-sertificat'>
            <img src={certificate}/>
            <img src={smile}/>
            <img src={test}/>
          </div>
          <div className="text">
            Далеко-далеко за словесными горами, в стране гласных и согласных живут рыбные тексты.
            Что рекламных пор заманивший
            выйти, ручеек вопроса наш своего рот толку знаках составитель свой меня она дороге продолжил свою
            рыбными мир своих
            свое по всей одна всемогущая рукопись злых курсивных? Которое агентство бросил, переписывается если даль
            продолжил
            свой большого мир своих?
          </div>
        </main>
        
    
    </div>
  );
}

export default App;
