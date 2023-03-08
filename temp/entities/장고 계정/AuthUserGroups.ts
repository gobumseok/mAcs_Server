import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthGroup } from "./AuthGroup";
import { AuthUser } from "./AuthUser";

@Index(
  "auth_user_groups_user_id_group_id_94350c0c_uniq",
  ["userId", "groupId"],
  { unique: true }
)
@Index("auth_user_groups_group_id_97559544_fk_auth_group_id", ["groupId"], {})
@Entity("auth_user_groups", { schema: "acs_amr" })
export class AuthUserGroups {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("int", { name: "user_id" })
  userId: number;

  @Column("int", { name: "group_id" })
  groupId: number;

  @ManyToOne(() => AuthGroup, (authGroup) => authGroup.authUserGroups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "group_id", referencedColumnName: "id" }])
  group: AuthGroup;

  @ManyToOne(() => AuthUser, (authUser) => authUser.authUserGroups, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: AuthUser;
}
