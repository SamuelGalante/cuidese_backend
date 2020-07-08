import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export default class AlterTherapistToTherapistId1593965767383
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('appointments', 'therapist');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'therapist_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'appointments',
      new TableForeignKey({
        name: 'AppointmentTherapist',
        columnNames: ['therapist_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('appointments', 'AppointmentTherapist');

    await queryRunner.dropColumn('appointments', 'therapist_id');

    await queryRunner.addColumn(
      'appointments',
      new TableColumn({
        name: 'therapist',
        type: 'varchar',
      }),
    );
  }
}
