export class CreateCourseDto {
    name: string;
    vacancies: number;
    scholarship_percentage: number;
    original_price: number;
    discounted_price: number;
    shift: 'Morning' | 'Afternoon' | 'Evening' | 'Full';
    image_url: string;
    enrollment_discount: number;
    is_active: boolean;
}
