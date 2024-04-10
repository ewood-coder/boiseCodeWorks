import { dbContext } from "../db/DbContext.js"
import { MissionSchema } from "../models/Mission.js"
import { request } from "express"



class MissionsService {

	async updateMission(missionId, updateData) {
		const missionToUpdate = await dbContext.Missions.findById(missionId)

		if (!missionToUpdate) throw new Error(`Not mission with id: ${missionId}`)

		missionToUpdate.completed = updateData.completed ?? missionToUpdate.completed

		await missionToUpdate.save()
		return missionToUpdate
	}

	async getMissionsByLocation(locationId) {
		const locationMission = await dbContext.Missions.find({ locationId: locationId }).populate('rat', '-name -picture')
		return locationMission
	}

	async getRatsMission(ratId) {
		const ratMission = await dbContext.Missions.find({ ratId: ratId }).populate('location')
		return ratMission
	}


	async getMissions(searchQuery) {
		const missions = await dbContext.Missions.find().populate('rat', '-name -picture').populate('location')
		return missions
	}


	async createMission(missionData) {
		const mission = await dbContext.Missions.create(missionData)
		await mission.populate('rat', '-name -picture')
		await mission.populate('location')
		return mission
	}
}


export const missionsService = new MissionsService()
