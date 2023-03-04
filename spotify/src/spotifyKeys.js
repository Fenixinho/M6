const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000";
const clientID = "9abc017b549943dd81b9f2177a78c14d";
export const loginUri = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&response_type=token`;
