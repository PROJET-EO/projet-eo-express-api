import { isEmpty } from "lodash";
import { ProjectDocument } from "../../models";
import ErrorResponse from "../../utils/errorResponse";
import { getReadme } from "../../lib/github-read";

export const descriptionSetter=(project : ProjectDocument) => {
    if(project.url && isEmpty(project.description)){
        try {
            const ownerName = project.url.split('/')[3]
            const repoName = project.url.split('/')[4]
            project.description = getReadme(ownerName,repoName) as any
        } catch (error) {
            throw new ErrorResponse("error on parsing readme.md",400)
        }
    }
    return project
}