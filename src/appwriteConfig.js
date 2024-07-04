import { Client, Account,Databases } from 'appwrite';


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('668255bb00188c340929');

export const account = new Account(client);
export const databases = new Databases(client);
export      const  databasesId = "668423db00179e446362";
export      const collectionId = "668423ec001b805decdd"
export default client;    