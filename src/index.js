import {getSwappableTokens} from "./roads.js";
import {getPrices} from "./prices.js";

const pricesMocks = [
    {
        exchange: "Uniswap",
        metadata: {
            version: "3"
        },
        tokens: [{
            abbreviation: "USDT",
            contactAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
            decimals: 6,
            pools: [{
                "id": "0x34e51bb3b34772d3605fd67a05fbd44803a23577",
                "feeTier": "100",
                "liquidity": "0",
                "sqrtPrice": "797821021258294741179811057",
                "tick": "-91969",
                "token0": {
                    "id": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
                    "symbol": "USDT",
                    "name": "(PoS) Tether USD",
                    "decimals": "6",
                    "derivedETH": "0.0006275517992853019225406698387585145",
                },
                "token1": {
                    "id": "0xe111178a87a3bff0c8d18decba5798827539ae99",
                    "symbol": "EURS",
                    "name": "STASIS EURS Token (PoS)",
                    "decimals": "2",
                    "derivedETH": "0.0006633523995887098294049146534478256",
                },
                "token0Price": "0.9861618946560269492554434696660849",
                "token1Price": "1.014032285590186770325304400109724",
                "volumeUSD": "0",
                "volumeToken0": "3399.541361",
                "volumeToken1": "3433.38",
                "txCount": "117",
                "totalValueLockedToken0": "0.155483",
                "totalValueLockedToken1": "0.89",
                "totalValueLockedUSD": "1.032980926655854036097087109157717",
            }]
        }]
    }
]

const main = () => {
    console.log('Hello World!');

    const prices = getPrices();

    const roads = getSwappableTokens(prices);
}

main();
