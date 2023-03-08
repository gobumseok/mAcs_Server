import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthPermission } from "./AuthPermission";
import { AuthGroup } from "./AuthGroup";

@Index(
  "auth_group_permissions_group_id_permission_id_0cd325b0_uniq",
  ["groupId", "permissionId"],
  { unique: true }
)
@Index(
  "auth_group_permissio_permission_id_84c5c92e_fk_auth_perm",
  ["permissionId"],
  {}
)
@Entity("auth_group_permissions", { schema: "acs_amr" })
export class AuthGroupPermissions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("int", { name: "group_id" })
  groupId: number;

  @Column("int", { name: "permission_id" })
  permissionId: number;

  @ManyToOne(
    () => AuthPermission,
    (authPermission) => authPermission.authGroupPermissions,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "permission_id", referencedColumnName: "id" }])
  permission: AuthPermission;

  @ManyToOne(() => AuthGroup, (authGroup) => authGroup.authGroupPermissions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "group_id", referencedColumnName: "id" }])
  group: AuthGroup;
}
