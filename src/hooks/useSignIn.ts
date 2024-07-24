import { HereWallet, HereKeyStore, HereAuthStorage, TelegramAppStrategy, HereInitializeOptions } from "@here-wallet/core";

let wallet: HereWallet;
let hereAuthStorage: HereAuthStorage;

const initHere = async (): Promise<HereWallet>  => {
  if (!hereAuthStorage) hereAuthStorage = new HereKeyStore();
  const here = await HereWallet.connect({
    authStorage: hereAuthStorage,
    botId: "dropjson_bot/App", // Your bot MiniApp
    walletId: "herewalletbot/app" //Hot wallet
  });
  wallet = here;
  return here;
};

const signIn = async () : Promise<any> => {
  const accountName = await wallet.signIn({ contractId: "social.near" });
  return accountName;
}

const signOut = async() => {
  await wallet.signOut();
}

export {
  initHere,
  signIn,
  signOut
}