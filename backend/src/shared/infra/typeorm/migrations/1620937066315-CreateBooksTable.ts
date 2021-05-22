import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateBooksTable1620937066315 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'books',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'   
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'classification',
                        type: 'varchar',
                    },
                    {
                        name: 'subclassification',
                        type: 'varchar'
                    },
                    {
                        name: 'year',
                        type: 'int'
                    },
                    {
                        name: 'quantity',
                        type: 'int'
                    },
                    {
                        name: 'library_id',
                        type: 'uuid'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            }),
        );

        await queryRunner.createForeignKey(
            'books',
            new TableForeignKey({
                name: 'BookLibrary',
                columnNames: ['library_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'libraries',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('books', 'BookLibrary');

        await queryRunner.dropTable('books');
    }

}
