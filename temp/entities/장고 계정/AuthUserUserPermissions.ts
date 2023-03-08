import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthPermission } from "./AuthPermission";
import { AuthUser } from "./AuthUser";

@Index(
  "auth_user_user_permissions_user_id_permission_id_14a6b632_uniq",
  ["userId", "permissionId"],
  { unique: true }
)
@Index(
  "auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm",
  ["permissionId"],
  {}
)
@Entity("auth_user_user_permissions", { schema: "acs_amr" })
export class AuthUserUserPermissions {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("int", { name: "permission_id" })
  permissionId: number;

  @ManyToOne(
    () => AuthPermission,
    (authPermission) => authPermission.authUserUserPermissions,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "permission_id", referencedColumnName: "id" }])
  permission: AuthPermission;

  @ManyToOne(() => AuthUser, (authUser) => authUser.authUserUserPermissions, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: AuthUser;
}
