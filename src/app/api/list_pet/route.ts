import { providers, utils } from "near-api-js";
import type {
  AccountView,
  CodeResult,
} from "near-api-js/lib/providers/provider";
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const {accountID} = await req.json();
  //console.log("body",accountID)
  const provider = new providers.JsonRpcProvider({ url: "https://rpc.mainnet.near.org" });
  const allpets = provider.query<CodeResult>({
      request_type: "call_function",
      account_id: process.env.CONTRACT_GAME,
      method_name: process.env.METHOD_GET_ALL_PET,
      args_base64: 'e30=',
      finality: "optimistic",
    });
    console.log(JSON.parse(Buffer.from((await allpets).result).toString()))
  const petList = JSON.parse(Buffer.from((await allpets).result).toString()).filter((pet:any) => pet.owner_id == accountID )
  //console.log(petList)
  const listInfoPet:any = [];
  for(let i=0; i < petList.length; i++){
    const infoPet = provider.query<CodeResult>({
      request_type: "call_function",
      account_id: process.env.CONTRACT_GAME,
      method_name: process.env.METHOD_GET_PET_ID,
      args_base64: btoa(`{"pet_id": ${petList[i].pet_id}}`),
      finality: "optimistic",
    })
    const result = JSON.parse(Buffer.from((await infoPet).result).toString());
    //console.log(result)
    listInfoPet.push(result);
  }
  return  NextResponse.json(listInfoPet,{ status: 200 })
}

export async function GET(req: Request) {

}
