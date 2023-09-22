import React from "react";
import Event from './Events'
const Card = () => {
    return (
        <table>
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td classname = 'bigbox'> 
                        <img class= 'pic1' src = '../src/images/danta.jpg'></img>
                        <Event food ='Eggtart'/>
                        <button> <a href="https://en.wikipedia.org/wiki/Egg_tart" target="_blank">View Background</a></button>
                    </td>
                    <td>
                    <img class= 'pic1' src = '../src/images/bibimbap.jpg'></img>
                        <Event food = 'Bibimbap'/>
                        <button><a href ="https://en.wikipedia.org/wiki/Bibimbap" target ="_blank">View Background</a></button>
                    </td>
                    <td>
                    <img class= 'pic1' src = '../src/images/cheesecake.jpg'></img>
                        <Event food = 'Cheesecake'/>
                        <button><a href ="https://en.wikipedia.org/wiki/Cheesecake" target ="_blank">View Background</a></button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/pekingduck.jpg'></img>
                        <Event food = 'Pekingduck'/>
                        <button><a href ="https://en.wikipedia.org/wiki/Peking_duck" target ="_blank">View Background</a></button>
                    </td>
                </tr>
                <tr>
                    <td>
                    <img class= 'pic1' src = '../src/images/Food.jpg'></img>
                    <Event food ='Brunch'/>
                    <button><a href ="https://en.wikipedia.org/wiki/Food" target ="_blank">View Background</a></button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/cheeseburger.jpg'></img>
                        <Event food ='Cheeseburger'/>
                        <button><a href ="https://en.wikipedia.org/wiki/Cheeseburger" target ="_blank">View Background</a></button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/crossant.jpg'></img>
                        <Event food = 'Croissant'/>
                        <button><a href ="https://en.wikipedia.org/wiki/Croissant" target ="_blank">View Background</a></button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/soupdumpling.jpg'></img>
                        <Event food ='SoupDumpling'/>
                        <button><a href ="https://therecipecritic.com/soup-dumplings/" target ="_blank">View Background</a></button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img class= 'pic1' src = '../src/images/Empanadas.jpg'></img>
                        <Event food ='Empanadas'/>
                        <button><a href ="https://en.wikipedia.org/wiki/Empanadas" target ="_blank">View Background</a></button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/sushi.jpg'></img>
                        <Event food ='Sushi'/>
                        <button><a href ="https://en.wikipedia.org/wiki/Sushi" target ="_blank">View Background</a></button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/pizza.jpg'></img>
                        <Event food = 'Pizza'/>
                        <button><a href ="https://en.wikipedia.org/wiki/Pizza" target ="_blank">View Background</a></button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/wagyu.jpg'></img>
                        <Event food = "Wagyu"/>
                        <button><a href ="https://en.wikipedia.org/wiki/Wagyu" target ="_blank">View Background</a></button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Card