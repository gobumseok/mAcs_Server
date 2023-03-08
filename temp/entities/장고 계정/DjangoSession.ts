import { Column, Entity, Index } from "typeorm";

@Index("django_session_expire_date_a5c62663", ["expireDate"], {})
@Entity("django_session", { schema: "acs_amr" })
export class DjangoSession {
  @Column("varchar", { primary: true, name: "session_key", length: 40 })
  sessionKey: string;

  @Column("longtext", { name: "session_data" })
  sessionData: string;

  @Column("datetime", { name: "expire_date" })
  expireDate: Date;
}
