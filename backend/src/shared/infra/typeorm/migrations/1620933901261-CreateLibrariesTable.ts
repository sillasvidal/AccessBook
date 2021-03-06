import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateLibrariesTable1620933901261 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'libraries',
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
                        name: 'phone',
                        type: 'varchar'
                    },
                    {
                        name: 'street',
                        type: 'varchar'
                    },
                    {
                        name: 'neighborhood',
                        type: 'varchar'
                    },
                    {
                        name: 'number',
                        type: 'int'
                    },
                    {
                        name: 'city',
                        type: 'varchar'
                    },
                    {
                        name: 'state',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('libraries');
    }

}
