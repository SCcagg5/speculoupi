import {getRoads} from "./roads";
import {getPrices} from "./prices";

const main = () => {
    console.log('Hello World!');

    const prices = getPrices();

    const roads = getRoads(prices);
}

main();