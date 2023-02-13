// import { getPokemonData } from "./pokemon_api"
import { useState, useEffect } from "react";
import './CSS/error.css';
import './CSS/game.css';
import './CSS/keyboard.css';
import './CSS/letter.css';
import './CSS/loading.css';
import './CSS/words.css';

// const DEFAULT_LANGUAGE = '7' // Español

// function pokemonsInLanguage(pokemons, language) {
//   return pokemons?.filter(pokemon => pokemon.local_language_id === language)
// }

function App(props) {

    //   const { func } = props;
    //   const [allPokemonData, setAllPokemonData] = useState(undefined);
    //   const [data, setData] = useState(undefined);
    //   const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
    //   const [inputValue, setInputValue] = useState('');

    //   function callFunctionProps(e, inputValue){
    //     e.preventDefault();
    //     let pokemon = data?.find(pokemon => pokemon.name === inputValue);
    //     pokemon? func(pokemon.pokemon_species_id): null;
    //   }


    //   async function getPokemonList() {
    //     setAllPokemonData(await getPokemonData());
    //   }

    //   function getDatalist() {
    //     setData(pokemonsInLanguage(allPokemonData, language));
    //   }

    //   useEffect(() => {
    //     getPokemonList();
    //   }, []);

    //   useEffect(() => {
    //     getDatalist();
    //   }, [allPokemonData, language]);


    return (
        <div className="game">
            <div className="board">
                <h1>Adivina la palabra</h1>
                <div className="words">
                    <div className="container ">
                        <div className="word">
                            <div className="letter">
                                <div className="slot yellow ">
                                    <p>R</p>
                                </div>
                            </div>
                            <div className="letter">
                                <div className="slot green ">
                                    <p>A</p>
                                </div>
                            </div>
                            <div className="letter">
                                <div className="slot grey ">
                                    <p>B</p>
                                </div>
                            </div>
                            <div className="letter">
                                <div className="slot grey ">
                                    <p>I</p>
                                </div>
                            </div>
                            <div className="letter">
                                <div className="slot yellow ">
                                    <p>A</p>
                                </div>
                            </div>
                        </div>
                        <div className="word">
                            <div className="letter">
                                <div className="slot  ">
                                    <p>J</p>
                                </div>
                            </div>
                            <div className="letter">
                                <div className="slot  ">
                                    <p>U</p>
                                </div>
                            </div>
                            <div className="letter">
                                <div className="slot  ">
                                    <p>L</p>
                                </div>
                            </div>
                            <div className="letter">
                                <div className="slot  ">
                                    <p>A</p>
                                </div>
                            </div>
                            <div className="letter">
                                <div className="slot  ">
                                    <p>Y</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="keyboard">
                    <div className="keyboard-line">
                        <div className="key ">Q</div>
                        <div className="key ">W</div>
                        <div className="key ">E</div>
                        <div className="key yellow">R</div>
                        <div className="key ">T</div>
                        <div className="key ">Y</div>
                        <div className="key ">U</div>
                        <div className="key grey">I</div>
                        <div className="key ">O</div>
                        <div className="key ">P</div>
                    </div>
                    <div className="keyboard-line">
                        <div className="key green">A</div>
                        <div className="key ">S</div>
                        <div className="key ">D</div>
                        <div className="key ">F</div>
                        <div className="key ">G</div>
                        <div className="key ">H</div>
                        <div className="key ">J</div>
                        <div className="key ">K</div>
                        <div className="key ">L</div>
                        <div className="key ">Ñ</div>
                    </div>
                    <div className="keyboard-line">
                        <div className="command">↵</div>
                        <div className="key ">Z</div>
                        <div className="key ">X</div>
                        <div className="key ">C</div>
                        <div className="key ">V</div>
                        <div className="key grey">B</div>
                        <div className="key ">N</div>
                        <div className="key ">M</div>
                        <div className="command">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true" style={{width: "20px", height: "30px"}}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="error">
                    <div className="overlay"></div>
                    <div>
                        <p>La palabra no está en la lista</p>
                    </div>
                </div>
            </div>
        </div>
        // <div>
        //   <h2>PokeForm</h2>
        //   <form>
        //     <label>
        //       Nombre del pokèmon:
        //       <input type="text" name="name" list="pokemons" onChange={e => setInputValue(e.target.value)}/>
        //     </label>
        //     <datalist id="pokemons">
        //       {JSON.stringify(data)}
        //     </datalist>
        //     <label>
        //       Lenguaje
        //       <select  onChange={e=>setLanguage(e.target.value)}>
        //         <option value="7">Español</option>
        //         <option value="5">Francés</option>
        //         <option value="6">Alemán</option>
        //       </select>
        //     </label>
        //     <input type="submit" value="Search" onClick={(e) => callFunctionProps(e, inputValue)}/>
        //   </form>
        // </div>
    )
}

export default App
