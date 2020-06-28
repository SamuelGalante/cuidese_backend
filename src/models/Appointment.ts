import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  therapist: string;

  date: Date;

  constructor({ therapist, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.therapist = therapist;
    this.date = date;
  }
}

export default Appointment;
