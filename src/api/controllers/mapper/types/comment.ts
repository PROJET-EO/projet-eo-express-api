import { RestUser } from "../UserMapper"

export type CommentDomainType = {
    id : string,
    owner : RestUser,
    content : string
}