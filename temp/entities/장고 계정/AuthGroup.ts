import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthGroupPermissions } from "./AuthGroupPermissions";
import { AuthUserGroups } from "./AuthUserGroups";

@Index("name", ["name"], { unique: true })
@Entity("auth_group", { schema: "acs_amr" })
export class AuthGroup {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", unique: true, length: 150 })
  name: string;

  @OneToMany(
    () => AuthGroupPermissions,
    (authGroupPermissions) => authGroupPermissions.group
  )
  authGroupPermissions: AuthGroupPermissions[];

  @OneToMany(() => AuthUserGroups, (authUserGroups) => authUserGroups.group)
  authUserGroups: AuthUserGroups[];
}
