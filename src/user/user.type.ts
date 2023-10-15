import { Field, ObjectType } from "@nestjs/graphql";


@ObjectType()
export class User{
    @Field({nullable:true})
    id?:number;

    @Field()
    email?:string;

    @Field()
    fullname?:string;

    @Field({nullable:true})
    avatarUrl?:string;

    @Field({nullable:true})
    password?:string;

    @Field({nullable:true})
    createdAt?:number;

    @Field({nullable:true})
    updatedAt?:number;
}