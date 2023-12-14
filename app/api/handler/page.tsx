
export default async function handler(req: any, res: any){
    const appAccessToken = await getAppAccessToken();
    const scopes = await debugToken(appAccessToken, req.query.token);
    console.log("scopes: ", scopes);
    res.json({scopes})
}

const app_id = process.env.FACEBOOK_ID;
const app_secret = process.env.FACEBOOK_SECRET;
const FACEBOOK_GRAPH_URL = "https://graph.facebook.com/v18.0"

const getAppAccessToken = async () =>{
    const response = await 
    fetch(`https://graph.facebook.com/oauth/access_token?client_id={app_id}&client_secret={app_secret}&grant_type=client_credentials`)

    const data : {access_token: string} = await response.json();
    if(response.ok){
        console.log("App access token failed")
    }
    console.log("access token in handler: ", data.access_token);
    return data.access_token;
}

const debugToken =async (appAccessToken: string, token: string) => {
    const response = await fetch(`${FACEBOOK_GRAPH_URL}/debug_token?input_token=${token}&access_token=${appAccessToken}`)

    const data : {data : {scopes: string[]}} = await response.json();

    return data.data.scopes;}