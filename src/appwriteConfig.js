import { Client, Account } from 'appwrite';


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('668255bb00188c340929');

export const account = new Account(client);
export default client;    