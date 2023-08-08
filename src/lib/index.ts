// place files you want to import through the `$lib` alias in this folder.

export type InputField<T> = {
    id: string,
    value: T,
    isValid: boolean
};

export type Interest = {
    id: string,
    title: string,
    checked?: boolean
};

export type Coach = {
    id?: string,
    firstname: string,
    lastname: string,
    description: string,
    email: string,
    rate: string,
    interests: string[]
};

export type CoachesStore = {
    coaches: Coach[],
    interests: Interest[]
};

export type RequestMessage = {
    id?: string,
    coachId: string,
    message: string,
    email: string
};

export type RequestsStore = {
    requests: RequestMessage[]
};

export const defaultCoaches: Coach[] = [
    {
        id: "1",
        firstname: "Peter",
        lastname: "Parker",
        description: "I am THE spider for vue.js!",
        email: "pp@spider.com",
        rate: "55",
        interests: ['frontend', 'backend', 'career'],
    },
    {
        id: "2",
        firstname: "Alice",
        lastname: "Aizen",
        description: "I am aizens HARDcore chick!",
        email: "aa@hard.com",
        rate: "99",
        interests: ['career'],
    },
];

export const defaultRequests = [
    {
        id: "1",
        coachId: "1",
        message: "Hi! I am sooo exited to be caught in your web! <3",
        email: "susanne@wondergirl.com",
    },
    {
        id: "2",
        coachId: "1",
        message:
            "Stop your heroic bullshit immediately or I call the green goblin!",
        email: "bob@rage.com",
    },
    {
        id: "3",
        coachId: "2",
        message: "You make me sooo wooozy! Marry me, now, pleazzze!",
        email: "fenn@fanboy.com",
    },
    {
        id: "4",
        coachId: "2",
        message: "You are the BOMB girl! Feminism FTW!!!!",
        email: "kati@actifism.com",
    },
];

export const defaultInputFields = {
    firstname: {
        id: 'firstname',
        value: '',
        isValid: false,
    },
    lastname: {
        id: 'lastname',
        value: '',
        isValid: false,
    },
    rate: {
        id: 'rate',
        value: '',
        isValid: false,
    },
    email: {
        id: 'email',
        value: '',
        isValid: false,
    },
    description: {
        id: 'description',
        value: '',
        isValid: false,
    },
    interests: {
        id: 'interests',
        value: [],
        isValid: false,
    },
};
