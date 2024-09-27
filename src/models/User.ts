import {
    Table,
    Column,
    CreatedAt,
    UpdatedAt,
    Model,
    PrimaryKey,
    AutoIncrement,
    AllowNull,    
    Default,
    HasMany,
    DataType,
    BeforeCreate,
    BeforeUpdate,
  
  } from "sequelize-typescript";

  import {hash, compare} from 'bcryptjs'

import { Col } from "sequelize/types/utils";

  @Table({tableName:'usuarios'})
  class Usuario extends Model{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @Column
    nombre!: string;

    @Column
    email!: string;

    @Column(DataType.VIRTUAL)
    password!: string;
  
    @Column
    passwordHash!: string;

    @Default(0)
    @Column
    tokenVersion!: number;
  
    @Default("admin")
    @Column
    profile!: string;

    @CreatedAt
    createdAt!: Date;

    @UpdatedAt
    updatedAt!: Date;

    @BeforeUpdate
    @BeforeCreate
    static hashPassword = async (instance: Usuario): Promise<void> => {

      if (instance.password) {
        instance.passwordHash = await hash(instance.password, 8);
      }
    };  

    public checkPassword = async (password: string): Promise<boolean>  => {
      return compare(password, this.getDataValue("passwordHash"))
    }
  }

  export default Usuario
