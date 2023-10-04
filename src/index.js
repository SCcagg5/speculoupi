import {getSwappableTokens} from "./roads.js";
import {getPrices} from "./prices.js";

const main = () => {
    console.log('Hello World!');

    const prices = getPrices();

    const roads = getSwappableTokens(prices);
}

main();
