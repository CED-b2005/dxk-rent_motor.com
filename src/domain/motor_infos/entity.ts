export class MotorInfoEntity {
    protected is_needed_license!: boolean;
    constructor(
        protected id: string,
        protected brand: string,
        protected model: string,
        protected type: 'gasoline' | 'electric',
        protected price: number,
        protected power: number,
        protected max_speed: number,
        protected image_url: string,
    ) {
        this.setIsNeededLicense(power);
    }

    protected setIsNeededLicense(power: number) {
        this.is_needed_license = power > 50;
    }

    public update(motorInfoUpdateI: MotorInfoUpdateI) {
        if (motorInfoUpdateI.brand) this.brand = motorInfoUpdateI.brand;
        if (motorInfoUpdateI.model) this.model = motorInfoUpdateI.model;
        if (motorInfoUpdateI.type) this.type = motorInfoUpdateI.type;
        if (motorInfoUpdateI.price) this.price = motorInfoUpdateI.price;
        if (motorInfoUpdateI.power) this.power = motorInfoUpdateI.power;
        if (motorInfoUpdateI.max_speed) this.max_speed = motorInfoUpdateI.max_speed;
        if (motorInfoUpdateI.image_url) this.image_url = motorInfoUpdateI.image_url;
        this.setIsNeededLicense(this.power);

        return new MotorInfoEntity(
            this.id,
            this.brand,
            this.model,
            this.type,
            this.price,
            this.power,
            this.max_speed,
            this.image_url,
        );
    }

    public toJSON() {
        return {
            id: this.id,
            brand: this.brand,
            model: this.model,
            type: this.type,
            price: this.price,
            power: this.power,
            max_speed: this.max_speed,
            is_needed_license: this.is_needed_license,
            image_url: this.image_url,
        }
    }
}

export interface MotorInfoUpdateI {
    brand?: string;
    model?: string;
    type?: 'gasoline' | 'electric';
    price?: number;
    power?: number;
    max_speed?: number;
    image_url?: string;
}