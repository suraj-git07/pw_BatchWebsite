import  config  from "../config/config.js";
import { Client, Databases} from "appwrite";

// here we are using appwrite sdk to interact with appwrite services
// I have created a class DatabaseService to interact with appwrite services and also created methods as per requirements
// finally exported an object of the class on which these methods can be called.

export class DatabaseService{

    client = new Client();
    databases;


    // setup of client and database is done under constructor so that, when the object is created only then the client and database will setup.
    constructor(){
        this.client
        .setEndpoint(config.appwriteUrl)
        .setProject(config.appwriteProjectId);
        this.databases = new Databases(this.client);
    }

    // method to fetch all courses from appwrite database
    async getCourses(){
        try {
            
            console.log("Fetching Courses ...")
            return this.databases.listDocuments(
                config.appwriteDatabaseId,
                config.appwriteCollectionId
            );
        } catch (error) {
            console.error("Appwrite service :: getCourses :: error", error);
            return false;

        }
    }

}



const service = new DatabaseService();
export default service;