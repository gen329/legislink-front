import axios from "axios";
const serverURL = import.meta.env.VITE_BASE_URL;
const propublicaAPIKey = import.meta.env.VITE_BASE_PROPUBLICA_KEY;
const civicAPIKey ="AIzaSyDB7oHyQh8GsDnbRF3HLO-8CF2AONL4vQM"
/**
 * ToDo : need to check routers.
 */

/**
 * postAuth()
 * =============================================
 * POST the back-end server for authentication using w/ axios.
 * The param "body" is an object that we want to send to the back-end as a parameter (does not require for header.)
 * 
 * @param {Object} body 
 * @returns 
 */
export async function postAuth(body){
    console.log(body)
    return await axios.post(`${serverURL}/users/login`, body);
};

export async function postNewUser(body){
    return await axios.post(`${serverURL}/users`, body, {headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }});
}

export async function putExistingUser(id, body){
    return await axios.put(`${serverURL}/users/${id}`, body, {headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    }})
}

export async function getSingleUser(id){
    return await axios.get(`${serverURL}/users/${id}`);
}

export async function deleteAccount(id){
    return await axios.delete(`${serverURL}/users/${id}`);
}

export async function fetchForHouse(){
    return await axios.get("https://api.propublica.org/congress/v1/117/house/members.json", {headers: {
        "X-API-Key": `${propublicaAPIKey}`,
    }});
}

export async function fetchForBills(query = ""){
    if(query){
        return await axios.get(`https://api.propublica.org/congress/v1/bills/search.json?query="${query}"` , {headers: {
            "X-API-Key": `${propublicaAPIKey}`,
        }});
    } else {
        return await axios.get(`https://api.propublica.org/congress/v1/bills/search.json` , {headers: {
            "X-API-Key": `${propublicaAPIKey}`,
        }});
    }
}

export async function fetchForSenate(){
    return await axios.get("https://api.propublica.org/congress/v1/116/senate/members.json", {headers: {
        "X-API-Key": `${propublicaAPIKey}`,
    }});
}

export async function fetchPolls(address) {
    try {
        const response = await axios.get(`https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyDB7oHyQh8GsDnbRF3HLO-8CF2AONL4vQM&address=1263 Pacific Ave. Kansas City KS&electionId=2000`, {
            headers: {
                'X-API-Key': `${civicAPIKey}`,
            },
            params: {
                address: address,
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching polls:', error);
        throw error; 
    }
}
