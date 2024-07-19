import { providers, utils } from "near-api-js";
import type {
    CodeResult,
} from "near-api-js/lib/providers/provider";
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const provider = new providers.JsonRpcProvider({ url: "https://rpc.testnet.near.org" });
    const allItem = provider.query<CodeResult>({
        request_type: "call_function",
        account_id: "game1.joychi.testnet",
        method_name: "get_all_item_metadata",
        args_base64: 'e30=',
        finality: "optimistic",
    })
    const items = JSON.parse(Buffer.from((await allItem).result).toString());
    return  NextResponse.json(items,{ status: 200 })
}
