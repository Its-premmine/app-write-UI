import { Client ,Databases ,ID,Query} from 'appwrite';


const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('668ab6dc002ed8d6f90b');

const databases = new Databases(client);

export const StoreData = (values) => {
    const promise = databases.createDocument("668ab77b001ae572b355","668ab7bc000476fde865",ID.unique(),
{
    userName : values.userName,
    email : values.email,
    password : values.password,
}
);
promise.then(function(response){
    console.log(response);
},function(error){
    console.log(error);
})

}

export {databases,Query}
