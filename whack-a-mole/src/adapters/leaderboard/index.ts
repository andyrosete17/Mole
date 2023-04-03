import { IUserRecord } from "../../models";
import { IApiUserRecord } from "../../services/leader-board/api.model";

export const mapLeaderboardFromApiToVm = (
    apiUser: IApiUserRecord
): IUserRecord => ({
    name: apiUser.name,
    points: apiUser.points
});
