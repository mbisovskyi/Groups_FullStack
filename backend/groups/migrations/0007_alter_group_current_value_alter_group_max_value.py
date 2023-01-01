# Generated by Django 4.0.4 on 2022-12-31 22:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0006_remove_group_max_rows_group_current_value_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group',
            name='current_value',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=3),
        ),
        migrations.AlterField(
            model_name='group',
            name='max_value',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=3),
        ),
    ]
