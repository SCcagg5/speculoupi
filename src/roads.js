import { Fetcher, Token, TokenAmount } from '@uniswap/v3-sdk';
import { ethers } from 'ethers';

const ethereumRpcUrl = "?";
const chainId = "?";
const tokenAddress = '?';

if (!ethereumRpcUrl || isNaN(chainId)) {
  console.error('Veuillez définir les variables d\'environnement YOUR_ETHEREUM_JSON_RPC_URL et CHAIN_ID.');
  process.exit(1);
}

export const getSwappableTokens = async (tokenAddress) => {
  const provider = new ethers.providers.JsonRpcProvider(ethereumRpcUrl); // Utilisez l'URL du nœud Ethereum depuis la variable d'environnement

  try {
    // Créez un objet Token pour le token dont vous voulez connaître les paires
    const token = new Token(chainId, tokenAddress, 18); // Remplacez par la précision appropriée

    // Utilisez Fetcher pour obtenir toutes les paires de tokens pour le token spécifié
    const pairs = await Fetcher.fetchPairsByToken(token, provider);

    // Récupérez la liste des adresses des autres tokens avec lesquels vous pouvez échanger
    const swappableTokens = pairs.map((pair) => {
      const otherToken = pair.token0.equals(token) ? pair.token1 : pair.token0;
      return {
        address: otherToken.address,
        symbol: otherToken.symbol,
      };
    });

    return swappableTokens;
  } catch (error) {
    console.error(`Erreur lors de la récupération des paires pour ${tokenAddress}: ${error.message}`);
    return [];
  }
}



// TEST
getSwappableTokens(tokenAddress)
  .then((swappableTokens) => {
    console.log(`Tokens échangeables avec ${tokenAddress}:`);
    swappableTokens.forEach((token) => {
      console.log(`- ${token.symbol} (Adresse : ${token.address})`);
    });
  })
  .catch(console.error);
