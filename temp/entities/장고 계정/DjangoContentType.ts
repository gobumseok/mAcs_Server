import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AuthPermission } from "./AuthPermission";
import { DjangoAdminLog } from "./DjangoAdminLog";

@Index(
  "django_content_type_app_label_model_76bd3d3b_uniq",
  ["appLabel", "model"],
  { unique: true }
)
@Entity("django_content_type", { schema: "acs_amr" })
export class DjangoContentType {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "app_label", length: 100 })
  appLabel: string;

  @Column("varchar", { name: "model", length: 100 })
  model: string;

  @OneToMany(
    () => AuthPermission,
    (authPermission) => authPermission.contentType
  )
  authPermissions: AuthPermission[];

  @OneToMany(
    () => DjangoAdminLog,
    (djangoAdminLog) => djangoAdminLog.contentType
  )
  djangoAdminLogs: DjangoAdminLog[];
}
