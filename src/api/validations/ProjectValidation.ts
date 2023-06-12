import { ICreateProjectDTO } from "../models";
import ErrorResponse from "../utils/errorResponse";

export function projectValidation(dto: ICreateProjectDTO): void {
  if (!dto.name || typeof dto.name !== "string") {
    throw new ErrorResponse("Invalid name", 400);
  }

  if (!dto.owner || typeof dto.owner !== "string") {
    throw new ErrorResponse("Invalid owernName", 400);
  }

  if (!validateGitHubLink(dto.url) && typeof dto.url !== "string") {
    throw new ErrorResponse("Invalid url", 400);
  }
}
function validateGitHubLink(link: string) {
  const regex =
    /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/[a-zA-Z0-9_-]+\/?$/;
  return regex.test(link);
}
