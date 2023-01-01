# Generated by Django 4.0.4 on 2023-01-01 04:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('rows', '0005_alter_row_bread_quantity_alter_row_lambs_quantity_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='row',
            name='bread_quantity',
            field=models.DecimalField(decimal_places=1, default=0.0, max_digits=3),
        ),
        migrations.AlterField(
            model_name='row',
            name='pigs_quantity',
            field=models.DecimalField(decimal_places=1, default=0.0, max_digits=3),
        ),
    ]