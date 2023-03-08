import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthUserGroups } from "./AuthUserGroups";
import { AuthUserUserPermissions } from "./AuthUserUserPermissions";
import { DjangoAdminLog } from "./DjangoAdminLog";

@Index("username", ["username"], { unique: true })
@Entity("auth_user", { schema: "acs_amr" })
export class AuthUser {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "password", length: 128 })
  password: string;

  @Column("datetime", { name: "last_login", nullable: true })
  lastLogin: Date | null;

  @Column("tinyint", { name: "is_superuser", width: 1 })
  isSuperuser: boolean;

  @Column("varchar", { name: "username", unique: true, length: 150 })
  username: string;

  @Column("varchar", { name: "first_name", length: 150 })
  firstName: string;

  @Column("varchar", { name: "last_name", length: 150 })
  lastName: string;

  @Column("varchar", { name: "email", length: 254 })
  email: string;

  @Column("tinyint", { name: "is_staff", width: 1 })
  isStaff: boolean;

  @Column("tinyint", { name: "is_active", width: 1 })
  isActive: boolean;

  @Column("datetime", { name: "date_joined" })
  dateJoined: Date;

  @OneToMany(() => AuthUserGroups, (authUserGroups) => authUserGroups.user)
  authUserGroups: AuthUserGroups[];

  @OneToMany(
    () => AuthUserUserPermissions,
    (authUserUserPermissions) => authUserUserPermissions.user
  )
  authUserUserPermissions: AuthUserUserPermissions[];

  @OneToMany(() => DjangoAdminLog, (djangoAdminLog) => djangoAdminLog.user)
  djangoAdminLogs: DjangoAdminLog[];
}
