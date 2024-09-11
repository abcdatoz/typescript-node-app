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
    DataType
  } from "sequelize-typescript";
import Producto from "./Producto"


@Table({tableName: 'categorias'})
class Categoria extends Model<Categoria>{

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    clave!: string;

    @AllowNull(false)
    @Column(DataType.STRING)
    nombre!:  string;

    @Default(1)
    @Column(DataType.INTEGER)
    status!: number

    @CreatedAt
    @Column(DataType.DATE)
    createdAt!: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    updatedAt!: Date;

    @HasMany(() => Producto)
    productos!: Producto[];
}


export default Categoria