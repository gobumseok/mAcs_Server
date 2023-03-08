import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { DjangoContentType } from "./DjangoContentType";
import { AuthUser } from "./AuthUser";

@Index(
  "django_admin_log_content_type_id_c4bce8eb_fk_django_co",
  ["contentTypeId"],
  {}
)
@Index("django_admin_log_user_id_c564eba6_fk_auth_user_id", ["userId"], {})
@Entity("django_admin_log", { schema: "acs_amr" })
export class DjangoAdminLog {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("datetime", { name: "action_time" })
  actionTime: Date;

  @Column("longtext", { name: "object_id", nullable: true })
  objectId: string | null;

  @Column("varchar", { name: "object_repr", length: 200 })
  objectRepr: string;

  @Column("smallint", { name: "action_flag", unsigned: true })
  actionFlag: number;

  @Column("longtext", { name: "change_message" })
  changeMessage: string;

  @Column("int", { name: "content_type_id", nullable: true })
  contentTypeId: number | null;

  @Column("int", { name: "user_id" })
  userId: number;

  @ManyToOne(
    () => DjangoContentType,
    (djangoContentType) => djangoContentType.djangoAdminLogs,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "content_type_id", referencedColumnName: "id" }])
  contentType: DjangoContentType;

  @ManyToOne(() => AuthUser, (authUser) => authUser.djangoAdminLogs, {
    onDelete: "RESTRICT",
    onUpdate: "RESTRICT",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "id" }])
  user: AuthUser;
}
