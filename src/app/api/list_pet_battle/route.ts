import { providers, utils } from "near-api-js";
import type {
  AccountView,
  CodeResult,
} from "near-api-js/lib/providers/provider";
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const provider = new providers.JsonRpcProvider({ url: "https://rpc.testnet.near.org" });
  const allpets = provider.query<CodeResult>({
      request_type: "call_function",
      account_id: "game1.joychi.testnet",
      method_name: "get_all_pet_metadata",
      args_base64: 'e30=',
      finality: "optimistic",
    });
  const petList = JSON.parse(Buffer.from((await allpets).result).toString()).filter((pet:any) => pet.owner_id != "mpcrecovery.testnet" )
  //console.log(petList)
  const listInfoPet:any = [];
  for(let i=0; i < petList.length; i++){
    const infoPet = provider.query<CodeResult>({
      request_type: "call_function",
      account_id: "game1.joychi.testnet",
      method_name: "get_pet_by_pet_id",
      args_base64: btoa(`{"pet_id": ${petList[i].pet_id}}`),
      finality: "optimistic",
    })
    const result = JSON.parse(Buffer.from((await infoPet).result).toString());
    //console.log(result)
    listInfoPet.push(result);
  }
  return  NextResponse.json(listInfoPet,{ status: 200 })
}

export async function POST(req: Request) {

}
