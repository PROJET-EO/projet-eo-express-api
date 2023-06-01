import { UserDocument } from "./UserDocument";

export interface ProjectDocument {
    id : string;
    name: string;
    description: string;
    url: string;
    tag : string;
    contributors: UserDocument[];
    reactor: string
}