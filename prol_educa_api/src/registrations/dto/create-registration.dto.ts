export class CreateRegistrationDto {
    registration_date: Date;
    status: 'Pending' | 'Confirmed' | 'Canceled';
}
