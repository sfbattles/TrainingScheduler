export interface IEvent {
    id: number;
    name: string;
    location: boolean;
    startingDayandTime: Date;
    endingDayandTime: Date;
    description: string;
    createdUserId: string;
}
