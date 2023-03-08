import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { AcsPositiontag } from "./AcsPositiontag";

@Index("acs_path_from_tag_id_b7a25d1d", ["fromTagId"], {})
@Index("acs_path_to_tag_id_4e3e2fcb", ["toTagId"], {})
@Entity("acs_path", { schema: "acs_amr" })
export class AcsPath {
  @PrimaryGeneratedColumn({ type: "bigint", name: "id" })
  id: string;

  @Column("tinyint", { name: "is_bidirectional", width: 1 })
  isBidirectional: boolean;

  @Column("datetime", { name: "created_at" })
  createdAt: Date;

  @Column("datetime", { name: "updated_at" })
  updatedAt: Date;

  @Column("bigint", { name: "from_tag_id" })
  fromTagId: string;

  @Column("bigint", { name: "to_tag_id" })
  toTagId: string;

  @ManyToOne(
    () => AcsPositiontag,
    (acsPositiontag) => acsPositiontag.acsPaths,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "from_tag_id", referencedColumnName: "id" }])
  fromTag: AcsPositiontag;

  @ManyToOne(
    () => AcsPositiontag,
    (acsPositiontag) => acsPositiontag.acsPaths2,
    { onDelete: "RESTRICT", onUpdate: "RESTRICT" }
  )
  @JoinColumn([{ name: "to_tag_id", referencedColumnName: "id" }])
  toTag: AcsPositiontag;
}
