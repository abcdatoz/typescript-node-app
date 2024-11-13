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
    BelongsTo,
    ForeignKey,
    DataType
  } from "sequelize-typescript";

  import Categoria from "./Categoria"

  
  @Table({tableName: 'productos'})
  class Producto extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    clave!: string;

    @AllowNull(false)
    @Column (DataType.STRING)
    nombre!:  string;

    @Column(DataType.DECIMAL) 
    precio!: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    imagen!: string;

    @Default(1)
    @Column(DataType.INTEGER)
    status!: number

    @CreatedAt
    createdAt!: Date;
  
    @UpdatedAt
    updatedAt!: Date;

    @ForeignKey(() => Categoria)
    @Column 
    categoriaId!: number;


    @BelongsTo(() => Categoria)
    categoria!: Categoria

  }

  export default Producto