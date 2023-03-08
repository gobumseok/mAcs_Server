import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthGroupPermissions } from "./AuthGroupPermissions";
import { DjangoContentType } from "./DjangoContentType";
import { AuthUserUserPermissions } from "./AuthUserUserPermissions";

@Index(
  "auth_permission_content_type_id_codename_01ab375a_uniq",
  ["contentTypeId", "codename"],
  { unique: true }
)
@Entity("auth_permission", { schema: "acs_amr" })
export class AuthPermission {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("int", { name: "content_type_id" })
  contentTypeId: number;

  @Column("varchar", { name: "codename", length: 100 })
  codename: string;

  @OneToMany(
    () => AuthGroupPermissions,
    (authGroupPermissions) => authGroupPermissions.permission
  )
  authGroupPermissions: AuthGroupPermissions[];

  @ManyToOne(
    () => DjangoContentType,
    (djangoContentType) => djangoContentType.authPermissions,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "content_type_id", referencedColumnName: "id" }])
  contentType: DjangoContentType;

  @OneToMany(
    () => AuthUserUserPermissions,
    (authUserUserPermissions) => authUserUserPermissions.permission
  )
  authUserUserPermissions: AuthUserUserPermissions[];
}
