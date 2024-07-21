import { HereWallet } from "@here-wallet/core";

const instantSignin = async () => {
    try {
      const here = await HereWallet.connect({
        botId: "dropjson_bot/Wallet", // Your bot MiniApp
        walletId: "herewalletbot/app", // HOT Wallet
      });
      const account = await here.signIn({ contractId: "social.near" });
      console.log(`Hello ${account}!`);
    } catch (e) {
      console.log(e);
    }

};

export {instantSignin}