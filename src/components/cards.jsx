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
                        <Event food ='Danta'/>
                        <button > View Background</button>
                    </td>
                    <td>
                    <img class= 'pic1' src = '../src/images/bibimbap.jpg'></img>
                        <Event food = 'Bibimbap'/>
                        <button> View Background</button>
                    </td>
                    <td>
                    <img class= 'pic1' src = '../src/images/cheesecake.jpg'></img>
                        <Event food = 'Cheesecake'/>
                        <button> View Background</button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/pekingduck.jpg'></img>
                        <Event food = 'Pekingduck'/>
                        <button> View Background</button>
                    </td>
                </tr>
                <tr>
                    <td>
                    <img class= 'pic1' src = '../src/images/Food.jpg'></img>
                    <Event food ='Brunch'/>
                    <button> View Background</button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/cheeseburger.jpg'></img>
                        <Event food ='Cheeseburger'/>
                        <button> View Background</button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/crossant.jpg'></img>
                        <Event food = 'Crossant'/>
                        <button> View Background</button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/soupdumpling.jpg'></img>
                        <Event food ='SoupDumpling'/>
                        <button> View Background</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <img class= 'pic1' src = '../src/images/Empanadas.jpg'></img>
                        <Event food ='Empanadas'/>
                        <button> View Background</button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/sushi.jpg'></img>
                        <Event food ='Sushi'/>
                        <button> View Background</button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/pizza.jpg'></img>
                        <Event food = 'Pizza'/>
                        <button> View Background</button>
                    </td>
                    <td>
                        <img class= 'pic1' src = '../src/images/wagyu.jpg'></img>
                        <Event food = "Wagyu"/>
                        <button> View Background</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Card