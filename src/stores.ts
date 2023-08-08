import hash from 'object-hash';
import type { CoachesStore, Coach, RequestMessage } from "$lib";
import { defaultCoaches, defaultRequests } from "$lib";
import { writable } from "svelte/store";

let coaches: Coach[] = [];
const coachIdMap = new Map();
defaultCoaches.forEach((item) => {
    let itemClone = { ...item };
    delete itemClone['id'];
    const id = hash(itemClone);
    coachIdMap.set(item.id, id);
    coaches.push({ ...itemClone, id: id });
});

function createCoachesStore() {
    const { set, update, subscribe } = writable<CoachesStore>({
        coaches: coaches,
        interests: [
            {
                id: "frontend",
                title: "Frontend",
            },
            {
                id: "backend",
                title: "Backend",
            },
            {
                id: "career",
                title: "Career",
            },
        ],
    });

    let state: CoachesStore
    subscribe((v) => state = v)

    return {
        subscribe,
        getInterestsWCheck: () => {
            return state.interests.map((item) => {
                return { ...item, checked: false };
            });
        },
        registerCoach: (coach: Coach) => {
            state.coaches.push({ ...coach, id: hash(coach) });
        },
        getCoachById: (id: string) => {
            return state.coaches.find((coach) => coach.id === id);
        }
    }
}
export const coachesStore = createCoachesStore();


let requests: RequestMessage[] = [];
defaultRequests.forEach((req) => {
    let reqClone: RequestMessage = { ...req };
    delete reqClone['id'];
    reqClone.coachId = coachIdMap.get(req.coachId);
    const id = hash(reqClone);
    requests.push({ ...reqClone, id: id });
});