import { User } from "./user";

export class Event {
  constructor({
    eventId,
    createdBy,
    name,
    description,
    status,
    startDate,
    startTime,
    location,
    capacity,
    attendeeCount,
    imageUrl,
    typeName,
  }) {
    this.eventId = eventId;
    this.createdBy = new User(createdBy);
    this.name = name;
    this.description = description;
    this.status = status;
    this.startDate = startDate;
    this.startTime = startTime;
    this.location = location;
    this.capacity = capacity;
    this.attendeeCount = attendeeCount;
    this.imageUrl = imageUrl;
    this.typeName = typeName;
  }
}
