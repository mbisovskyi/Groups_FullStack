# Generated by Django 4.0.4 on 2022-12-31 22:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groups', '0005_remove_group_bread_quantity_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='group',
            name='max_rows',
        ),
        migrations.AddField(
            model_name='group',
            name='current_value',
            field=models.FloatField(default=0),
        ),
        migrations.AddField(
            model_name='group',
            name='max_value',
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
    ]
