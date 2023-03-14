import { IsString } from "class-validator";

export class PassportDto {
    @IsString()
    username!: string;

    @IsString()
    password!: string;
}